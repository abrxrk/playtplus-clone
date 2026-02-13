import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Sign Up Screen
 * 
 * Features to implement:
 * - PlaytPlus logo
 * - Create account message
 * - Full name input field
 * - Email input field
 * - Password input field
 * - Confirm password input field
 * - Terms & conditions checkbox
 * - "Sign Up" button
 * - Social signup options (Google, Apple, Facebook)
 * - "Already have an account? Login" link
 */
export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add PlaytPlus logo */}
      <View style={styles.header}>
        <Text style={styles.placeholder}>PlaytPlus Logo</Text>
        <Text style={styles.placeholder}>Create Account</Text>
      </View>

      {/* TODO: Add signup form */}
      <View style={styles.form}>
        <Text style={styles.placeholder}>Full Name Input</Text>
        <Text style={styles.placeholder}>Email Input</Text>
        <Text style={styles.placeholder}>Password Input</Text>
        <Text style={styles.placeholder}>Confirm Password Input</Text>
        <Text style={styles.placeholder}>Terms & Conditions Checkbox</Text>
        <Text style={styles.placeholder}>Sign Up Button</Text>
      </View>

      {/* TODO: Add social signup options */}
      <View style={styles.socialSignup}>
        <Text style={styles.placeholder}>Or sign up with</Text>
        <Text style={styles.placeholder}>Social Signup Buttons</Text>
      </View>

      {/* TODO: Add login link */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Already have an account? Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  form: {
    flex: 1,
  },
  socialSignup: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  placeholder: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 8,
  },
});
