import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

type Welcome1Props = {
  onGetStarted: () => void;
};

const features = [
  {
    icon: 'people-outline' as const,
    title: 'Join Communities',
    description:
      'Connect with fellow players and find your local squad effortlessly.',
  },
  {
    icon: 'calendar-outline' as const,
    title: 'Organize Events',
    description: 'Create tournaments, matches, and schedule games in seconds.',
  },
  {
    icon: 'share-social-outline' as const,
    title: 'Social Media',
    description: 'Share your highlights, stats, and victory moments with the world.',
  },
];

export default function Welcome1({ onGetStarted }: Welcome1Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.logo}>PlaytPlus</Text>
        <Text style={styles.tagline}>CONNECT & PLAY</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to PlaytPlus</Text>

        <View style={styles.features}>
          {features.map((feature) => (
            <View key={feature.title} style={styles.featureItem}>
              <View style={styles.iconContainer}>
                <Ionicons name={feature.icon} size={28} color={Colors.primary} />
              </View>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={onGetStarted} style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.base,
    paddingBottom: Spacing['3xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing['1xl'],
    marginTop: Spacing['3xl'],
  },
  logo: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  tagline: {
    marginTop: Spacing.xs,
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.info,
    letterSpacing: 1.2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.xl,
  },
  features: {
    gap: Spacing.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.lg,
  },
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 16,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  featureDescription: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    paddingTop: Spacing.lg,
  },
  getStartedButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  getStartedText: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.info,
  },
});
