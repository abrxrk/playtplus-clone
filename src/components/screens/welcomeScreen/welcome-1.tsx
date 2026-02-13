import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Welcome1() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* TODO: Add PlaytPlus logo and tagline */}
      <View style={styles.header}>
        <Text style={styles.placeholder}>PlaytPlus Logo</Text>
        <Text style={styles.placeholder}>CONNECT & PLAY</Text>
      </View>

      {/* TODO: Add welcome heading */}
      <View style={styles.content}>
        <Text style={styles.placeholder}>Welcome to PlaytPlus</Text>

        {/* TODO: Add three feature items with icons */}
        <View style={styles.features}>
          <Text style={styles.placeholder}>Feature 1: Join Communities</Text>
          <Text style={styles.placeholder}>Feature 2: Organize Events</Text>
          <Text style={styles.placeholder}>Feature 3: Social Media</Text>
        </View>
      </View>

      {/* TODO: Add "Get Started" button */}
      <View style={styles.footer}>
        <Text style={styles.placeholder}>Get Started Button</Text>
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
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  features: {
    marginTop: 40,
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
