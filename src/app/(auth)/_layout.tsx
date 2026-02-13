import { Stack } from 'expo-router';

/**
 * Auth Layout
 * 
 * Handles the navigation for authentication screens:
 * - Login
 * - Sign Up
 * - Forgot Password (to be added)
 */
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
