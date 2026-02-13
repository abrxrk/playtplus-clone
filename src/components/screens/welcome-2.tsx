import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Welcome2() {
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
