import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CreateEventScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.placeholder}>Back Button</Text>
        <Text style={styles.placeholder}>Create Event</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.placeholder}>Event Title Input</Text>
        <Text style={styles.placeholder}>Date Picker</Text>
        <Text style={styles.placeholder}>Time Picker</Text>
        <Text style={styles.placeholder}>Location Input</Text>
        <Text style={styles.placeholder}>Price Input</Text>
        <Text style={styles.placeholder}>Cover Image Upload</Text>
      </View>

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
