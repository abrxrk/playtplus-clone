import { useState } from 'react';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import LoginScreen from '@/components/screens/auth/login';
import { signIn } from '@/services/auth.service';

export default function LoginRoute() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn(email, password);

      if (result.success) {
        router.replace('/(tabs)');
      } else {
        Alert.alert('Login Failed', result.error || 'An error occurred');
      }
    } catch {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginScreen
      onLogin={handleLogin}
      onSignUp={() => router.push('/(auth)/signup')}
      onForgotPassword={() => {}}
      isLoading={isLoading}
    />
  );
}
