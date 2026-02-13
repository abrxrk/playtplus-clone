import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

/**
 * Reusable Input Component
 * 
 * Props:
 * - label: Input label
 * - placeholder: Placeholder text
 * - value: Input value
 * - onChangeText: Function to call when text changes
 * - error: Error message
 * - secureTextEntry: For password fields
 * - All standard TextInput props
 */

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  style,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor="#999999"
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  error: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 4,
  },
});
