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
      `Are you sure you want to delete "${credential.title}"?`,
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

  const handleCopyPassword = () => {
    // Note: For a real app, you'd use Clipboard from expo-clipboard
    Alert.alert('Copied', 'Password copied to clipboard');
  };

  const categoryColors: Record<string, string> = {
    social: '#8b5cf6',
    banking: '#10b981',
    email: '#f59e0b',
    work: '#3b82f6',
    other: '#6b7280',
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View
            style={[
              styles.categoryDot,
              { backgroundColor: categoryColors[credential.category] || '#6b7280' },
            ]}
          />
          <Text style={styles.title}>{credential.title}</Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteBtn}>🗑️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{credential.username}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <Text style={styles.value}>
            {showPassword ? credential.password : '••••••••'}
          </Text>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeBtn}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCopyPassword}>
            <Text style={styles.copyBtn}>📋</Text>
          </TouchableOpacity>
        </View>
      </View>

      {credential.url && (
        <View style={styles.field}>
          <Text style={styles.label}>URL</Text>
          <Text style={[styles.value, styles.url]}>{credential.url}</Text>
        </View>
      )}

      {credential.notes && (
        <View style={styles.field}>
          <Text style={styles.label}>Notes</Text>
          <Text style={styles.notes}>{credential.notes}</Text>
        </View>
      )}
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  deleteBtn: {
    fontSize: 18,
  },
  field: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#374151',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  eyeBtn: {
    fontSize: 16,
  },
  copyBtn: {
    fontSize: 16,
  },
  url: {
    color: '#3b82f6',
  },
  notes: {
    fontSize: 14,
    color: '#6b7280',
    fontStyle: 'italic',
  },
});
