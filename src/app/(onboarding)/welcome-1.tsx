import { useRouter } from 'expo-router';
import Welcome1 from '@/components/screens/welcomeScreen/welcome-1';

export default function Welcome1Screen() {
  const router = useRouter();

  return <Welcome1 onGetStarted={() => router.push('/(onboarding)/welcome-2')} />;
}
