import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { CredentialCard } from '../../components/CredentialCard';
import { supabase } from '../../lib/supabase';
import { Credential } from '../../types';

export default function HomeScreen() {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCredentials = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('credentials')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setCredentials(data);
    }

    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCredentials();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCredentials();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (credentials.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No credentials yet</Text>
        <Text style={styles.emptySubtext}>Tap + to add your first one</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={credentials}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CredentialCard credential={item} onDelete={fetchCredentials} />
      )}
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6b7280',
  },
  emptySubtext: {
    fontSize: 16,
    color: '#9ca3af',
    marginTop: 8,
  },
});