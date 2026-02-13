import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Home/Feed Screen
 * 
 * Design from Figma: "events/feed"
 * 
 * Features to implement:
 * - Header with greeting and profile picture
 * - Search bar for events and venues
 * - Top Events horizontal scroll section
 * - Events list (vertical scroll)
 * - Create FAB (Floating Action Button)
 * - Bottom navigation
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* TODO: Add header with greeting and profile */}
      <View style={styles.header}>
        <Text style={styles.placeholder}>Good morning,</Text>
        <Text style={styles.placeholder}>Hello, User!</Text>
        <Text style={styles.placeholder}>Profile Picture</Text>
      </View>

      {/* TODO: Add search bar */}
      <View style={styles.searchBar}>
        <Text style={styles.placeholder}>Search events, venues...</Text>
      </View>

      {/* TODO: Add top events section */}
      <View style={styles.topEvents}>
        <Text style={styles.placeholder}>Top Events (Horizontal Scroll)</Text>
      </View>

      {/* TODO: Add events list */}
      <View style={styles.eventsList}>
        <Text style={styles.placeholder}>Events List</Text>
      </View>

      {/* TODO: Add create FAB */}
      <View style={styles.fab}>
        <Text style={styles.placeholder}>Create FAB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  searchBar: {
    padding: 20,
  },
  topEvents: {
    padding: 20,
  },
  eventsList: {
    flex: 1,
    padding: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 4,
  },
});
