import Welcome2 from '@/components/screens/welcomeScreen/welcome-2';
import { router } from 'expo-router';

export default function Welcome2Screen() {
  return <Welcome2 onNext={() => router.push('/(onboarding)/welcome-3')} />;
}
