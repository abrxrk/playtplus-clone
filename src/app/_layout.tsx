import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

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
 * TODO: Add authentication logic to determine initial route
 * - If first time user -> (onboarding)/welcome-1
 * - If not authenticated -> (auth)/login
 * - If authenticated -> (tabs)
 */
export default function RootLayout() {
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
        <Stack.Screen name="(auth)" />
        
        {/* Main app */}
        <Stack.Screen name="(tabs)" />
        
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
