import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Create Event Screen
 * 
 * Design from Figma: "Create Event"
 * 
 * Features to implement:
 * - Header with back button and title
 * - Event Title input
 * - Date picker
 * - Time picker
 * - Location input with icon
 * - Price input
 * - Cover Image upload
 * - "Create Event" button
 */
export default function CreateEventScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add header */}
      <View style={styles.header}>
        <Text style={styles.placeholder}>Back Button</Text>
        <Text style={styles.placeholder}>Create Event</Text>
      </View>

      {/* TODO: Add form fields */}
      <View style={styles.form}>
        <Text style={styles.placeholder}>Event Title Input</Text>
        <Text style={styles.placeholder}>Date Picker</Text>
        <Text style={styles.placeholder}>Time Picker</Text>
        <Text style={styles.placeholder}>Location Input</Text>
        <Text style={styles.placeholder}>Price Input</Text>
        <Text style={styles.placeholder}>Cover Image Upload</Text>
      </View>

      {/* TODO: Add create button */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Create Event Button</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  form: {
    padding: 24,
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
