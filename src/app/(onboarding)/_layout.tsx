import { Stack } from 'expo-router';

/**
 * Onboarding Layout
 * 
 * Handles the navigation for the onboarding flow:
 * - Welcome Screen 1 (Features)
 * - Welcome Screen 2 (Find Games)
 * - Welcome Screen 3 (Share Journey)
 */
export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="welcome-1" />
      <Stack.Screen name="welcome-2" />
      <Stack.Screen name="welcome-3" />
    </Stack>
  );
}
