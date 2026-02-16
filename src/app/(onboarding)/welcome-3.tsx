import Welcome3 from '@/components/screens/welcomeScreen/welcome-3';
import { router } from 'expo-router';

export default function Welcome3Screen() {
  return <Welcome3 onNext={() => router.push('/(auth)/login')} />;
}
