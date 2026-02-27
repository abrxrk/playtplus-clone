import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect, useRef } from 'react';
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
  const segmentsRef = useRef(segments);

  // Keep ref updated with latest segments
  segmentsRef.current = segments;

  useEffect(() => {
    // Check existing session on app launch
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace('/(tabs)/');
      }
      // If no session, index.tsx naturally redirects to onboarding
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      const inOnboarding = segmentsRef.current[0] === '(onboarding)';
      if (event === 'SIGNED_IN' && !inOnboarding) {
        router.replace('/(tabs)/');
      } else if (event === 'SIGNED_OUT') {
        router.replace('/(auth)/login');
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

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
        <Stack.Screen name="(auth)" options={{ gestureEnabled: false }} />

        {/* Main app */}
        <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />

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
