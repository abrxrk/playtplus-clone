import { router } from 'expo-router';
import SignupScreen from '@/components/screens/auth/signup';

export default function SignupRoute() {
  return <SignupScreen  onLogin={() => {router.push('/(auth)/login')}} />;
}