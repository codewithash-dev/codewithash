import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Credential } from '../types';
import { supabase } from '../lib/supabase';

interface Props {
  credential: Credential;
  onDelete: () => void;
}

export function CredentialCard({ credential, onDelete }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleDelete = () => {
    Alert.alert(
      'Delete Credential',
      'Are you sure you want to delete this credential?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const { error } = await supabase
              .from('credentials')
              .delete()
              .eq('id', credential.id);

            if (error) {
              Alert.alert('Error', error.message);
            } else {
              onDelete();
            }
          },
        },
      ]
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      social: '#3b82f6',
      banking: '#10b981',
      email: '#f59e0b',
      work: '#8b5cf6',
      other: '#6b7280',
    };
    return colors[category] || colors.other;
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{credential.title}</Text>
        <View style={[styles.badge, { backgroundColor: getCategoryColor(credential.category) }]}>
          <Text style={styles.badgeText}>{credential.category}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{credential.username}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value}>
          {showPassword ? credential.password : '••••••••'}
        </Text>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggleBtn}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {credential.url && (
        <View style={styles.row}>
          <Text style={styles.label}>URL:</Text>
          <Text style={styles.value}>{credential.url}</Text>
        </View>
      )}

      {credential.notes && (
        <View style={styles.notesContainer}>
          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.notes}>{credential.notes}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.deleteBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    width: 80,
  },
  value: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  toggleBtn: {
    fontSize: 20,
    marginLeft: 8,
  },
  notesContainer: {
    marginTop: 8,
  },
  notes: {
    fontSize: 14,
    color: '#374151',
    marginTop: 4,
    fontStyle: 'italic',
  },
  deleteBtn: {
    marginTop: 12,
    backgroundColor: '#ef4444',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});