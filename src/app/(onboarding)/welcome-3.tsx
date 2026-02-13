import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Welcome Screen 3 - Share Journey
 * 
 * Design from Figma: "Welcome screen3"
 * 
 * Features to implement:
 * - Illustration/Image placeholder (top section)
 * - Heading: "Share Your Journey with Friends"
 * - Description: "Connect with your squad, share game highlights, and celebrate victories together"
 * - "Let's GO" button
 * - Page indicator dots at bottom
 */
export default function WelcomeScreen3() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add illustration/image */}
      <View style={styles.imageContainer}>
        <Text style={styles.placeholder}>Illustration Placeholder</Text>
      </View>

      {/* TODO: Add heading and description */}
      <View style={styles.content}>
        <Text style={styles.placeholder}>Share Your Journey with Friends</Text>
        <Text style={styles.placeholder}>
          Connect with your squad, share game highlights, and celebrate victories
        </Text>
      </View>

      {/* TODO: Add "Let's GO" button */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Let's GO Button</Text>
        <Text style={styles.placeholder}>Page Indicators</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  content: {
    paddingVertical: 40,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  placeholder: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 8,
  },
});
