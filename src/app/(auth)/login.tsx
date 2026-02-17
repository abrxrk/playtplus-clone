import LoginScreen from '@/components/screens/auth/login';
import { router } from 'expo-router';

export default function LoginRoute() {
  return <LoginScreen onLogin={() => {router.push('/(tabs)')}} onSignUp={() => {router.push('/(auth)/signup')}} onForgotPassword={() => {}} />;
}