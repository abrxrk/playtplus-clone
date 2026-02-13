import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.placeholder}>PlaytPlus Logo</Text>
        <Text style={styles.placeholder}>Welcome Back!</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.placeholder}>Email Input</Text>
        <Text style={styles.placeholder}>Password Input</Text>
        <Text style={styles.placeholder}>Forgot Password? Link</Text>
        <Text style={styles.placeholder}>Login Button</Text>
      </View>

      <View style={styles.socialLogin}>
        <Text style={styles.placeholder}>Or continue with</Text>
        <Text style={styles.placeholder}>Social Login Buttons</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.placeholder}>Don&apos;t have an account? Sign up</Text>
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
  socialLogin: {
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
