import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { supabase } from '../lib/supabase';

interface Props {
  onSuccess: () => void;
}

export function CredentialForm({ onSuccess }: Props) {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState<'social' | 'banking' | 'email' | 'work' | 'other'>('other');
  const [loading, setLoading] = useState(false);

  const categories = ['social', 'banking', 'email', 'work', 'other'] as const;

  const handleSubmit = async () => {
    if (!title || !username || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      Alert.alert('Error', 'You must be logged in');
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('credentials').insert({
      user_id: user.id,
      title,
      username,
      password,
      url: url || undefined,
      notes: notes || undefined,
      category,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setTitle('');
      setUsername('');
      setPassword('');
      setUrl('');
      setNotes('');
      setCategory('other');
      Alert.alert('Success', 'Credential saved!');
      onSuccess();
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.label}>Title *</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="e.g., Netflix Account"
        placeholderTextColor="#9ca3af"
      />

      <Text style={styles.label}>Username *</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="email or username"
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password *</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        placeholderTextColor="#9ca3af"
        secureTextEntry
      />

      <Text style={styles.label}>URL</Text>
      <TextInput
        style={styles.input}
        value={url}
        onChangeText={setUrl}
        placeholder="https://example.com"
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
        keyboardType="url"
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={notes}
        onChangeText={setNotes}
        placeholder="Additional notes..."
        placeholderTextColor="#9ca3af"
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryBtn,
              category === cat && styles.categoryBtnActive,
            ]}
            onPress={() => setCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                category === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.submitBtn, loading && styles.submitBtnDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.submitBtnText}>
          {loading ? 'Saving...' : 'Save Credential'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  categoryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
  },
  categoryBtnActive: {
    backgroundColor: '#3b82f6',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  categoryTextActive: {
    color: '#fff',
  },
  submitBtn: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  submitBtnDisabled: {
    backgroundColor: '#9ca3af',
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});