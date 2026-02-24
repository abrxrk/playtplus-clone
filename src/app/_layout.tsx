import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

/**
 * Root Layout
 *
 * Navigation structure:
 * - (onboarding) - Welcome screens flow
 * - (auth) - Login/Signup screens
 * - (tabs) - Main app with bottom tabs
 * - create-event - Modal for creating events
 * - event-details - Event details screen
 *
 * Auth state is monitored via onAuthStateChange listener.
 */
export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('[Auth]', event, session?.user?.id ?? 'no user');

        const inAuthGroup = segments[0] === '(auth)';
        const inOnboarding = segments[0] === '(onboarding)';

        if (event === 'SIGNED_IN' && !inOnboarding) {
          router.replace('/(tabs)');
        } else if (event === 'SIGNED_OUT') {
          router.replace('/(auth)/login');
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [router, segments]);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Onboarding flow */}
        <Stack.Screen name="(onboarding)" />
        
        {/* Auth flow */}
        <Stack.Screen name="(auth)"  options={{ gestureEnabled: false }} />
        
        {/* Main app */}
        <Stack.Screen name="(tabs)"  options={{ gestureEnabled: false }} />
        
        {/* Modal screens */}
        <Stack.Screen 
          name="create-event" 
          options={{ 
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }} 
        />
        <Stack.Screen 
          name="event-details" 
          options={{ 
            animation: 'slide_from_right',
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
