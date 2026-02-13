import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.placeholder}>Good morning,</Text>
        <Text style={styles.placeholder}>Hello, User!</Text>
        <Text style={styles.placeholder}>Profile Picture</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.placeholder}>Search events, venues...</Text>
      </View>

      <View style={styles.topEvents}>
        <Text style={styles.placeholder}>Top Events (Horizontal Scroll)</Text>
      </View>

      <View style={styles.eventsList}>
        <Text style={styles.placeholder}>Events List</Text>
      </View>

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
