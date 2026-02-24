import { useState } from 'react';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import SignupScreen from '@/components/screens/auth/signup';
import { signUp, resendVerificationEmail } from '@/services/auth.service';

export default function SignupRoute() {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);

  const handleSignUp = async (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    acceptedTerms: boolean
  ) => {
    // Validation
    if (!email || !password || !fullName) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Error', 'Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signUp({ email, password, fullName });

      if (result.success) {
        if (result.needsEmailVerification) {
          setVerificationEmail(email);
          Alert.alert(
            'Verify Your Email',
            'A verification link has been sent to your email. Please check your inbox and verify your account before logging in.',
            [
              {
                text: 'OK',
                onPress: () => router.replace('/(auth)/login'),
              },
            ]
          );
        } else {
          router.replace('/(tabs)');
        }
      } else {
        Alert.alert('Sign Up Failed', result.error || 'An error occurred');
      }
    } catch {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!verificationEmail) return;

    const result = await resendVerificationEmail(verificationEmail);
    if (result.success) {
      Alert.alert('Success', 'Verification email resent. Please check your inbox.');
    } else {
      Alert.alert('Error', result.error || 'Failed to resend email');
    }
  };

  return (
    <SignupScreen
      onSignUp={handleSignUp}
      onLogin={() => router.push('/(auth)/login')}
      isLoading={isLoading}
    />
  );
}
