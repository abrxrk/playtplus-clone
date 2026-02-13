import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Event Details Screen
 * 
 * Design from Figma: "Event page (USER)"
 * 
 * Features to implement:
 * - Cover image
 * - Event title
 * - Date and time with icon
 * - Location with icon
 * - Registration count
 * - Like button
 * - About this event section
 * - "Register Now" button
 */
export default function EventDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add cover image */}
      <View style={styles.coverImage}>
        <Text style={styles.placeholder}>Cover Image</Text>
      </View>

      {/* TODO: Add event info */}
      <View style={styles.content}>
        <Text style={styles.placeholder}>Event Title</Text>
        <Text style={styles.placeholder}>Date & Time</Text>
        <Text style={styles.placeholder}>Location</Text>
        <Text style={styles.placeholder}>Registration Count</Text>
        <Text style={styles.placeholder}>Like Button</Text>
        
        {/* TODO: Add about section */}
        <View style={styles.aboutSection}>
          <Text style={styles.placeholder}>About this event</Text>
          <Text style={styles.placeholder}>Event Description</Text>
        </View>
      </View>

      {/* TODO: Add register button */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Register Now Button</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  coverImage: {
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 24,
  },
  aboutSection: {
    marginTop: 20,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 8,
  },
});
