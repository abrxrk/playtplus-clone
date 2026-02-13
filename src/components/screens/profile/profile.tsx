import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.placeholder}>Back Button</Text>
        <Text style={styles.placeholder}>Profile</Text>
        <Text style={styles.placeholder}>Settings Button</Text>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.placeholder}>Profile Picture</Text>
        <Text style={styles.placeholder}>User Name</Text>
        <Text style={styles.placeholder}>Bio</Text>
      </View>

      <View style={styles.likedEvents}>
        <Text style={styles.placeholder}>Liked Events (Horizontal Scroll)</Text>
      </View>

      <View style={styles.yourEvents}>
        <Text style={styles.placeholder}>Your Events (Horizontal Scroll)</Text>
      </View>

      <View style={styles.logoutButton}>
        <Text style={styles.placeholder}>Logout Button</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
  },
  likedEvents: {
    padding: 20,
  },
  yourEvents: {
    padding: 20,
  },
  logoutButton: {
    alignItems: 'center',
    padding: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 4,
  },
});
