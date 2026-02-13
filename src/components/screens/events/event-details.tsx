import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function EventDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.coverImage}>
        <Text style={styles.placeholder}>Cover Image</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>Event Title</Text>
        <Text style={styles.placeholder}>Date & Time</Text>
        <Text style={styles.placeholder}>Location</Text>
        <Text style={styles.placeholder}>Registration Count</Text>
        <Text style={styles.placeholder}>Like Button</Text>

        <View style={styles.aboutSection}>
          <Text style={styles.placeholder}>About this event</Text>
          <Text style={styles.placeholder}>Event Description</Text>
        </View>
      </View>

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
