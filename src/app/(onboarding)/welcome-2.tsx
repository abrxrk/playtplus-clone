import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Welcome Screen 2 - Find Games
 * 
 * Design from Figma: "Welcome screen2"
 * 
 * Features to implement:
 * - Illustration/Image placeholder (top section)
 * - Heading: "Find the Perfect Game Near You"
 * - Description: "Browse local tournaments, pickup games, and community events happening in your area"
 * - "Next" button
 * - Page indicator dots at bottom
 */
export default function WelcomeScreen2() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add illustration/image */}
      <View style={styles.imageContainer}>
        <Text style={styles.placeholder}>Illustration Placeholder</Text>
      </View>

      {/* TODO: Add heading and description */}
      <View style={styles.content}>
        <Text style={styles.placeholder}>Find the Perfect Game Near You</Text>
        <Text style={styles.placeholder}>
          Browse local tournaments, pickup games, and community events
        </Text>
      </View>

      {/* TODO: Add "Next" button */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Next Button</Text>
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
