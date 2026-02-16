import React from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

type Welcome3Props = {
  onNext: () => void;
};

const heroAsset = require('../../../../assets/images/welcome3.png');

export default function Welcome3({ onNext }: Welcome3Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.gray100} />
      <View style={styles.heroWrapper}>
        <Image source={heroAsset} style={styles.heroImage} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <Text style={styles.headline}>Share Your Journey with Friends</Text>
        <Text style={styles.description}>
          Post your highlights, track your progress, and climb the leaderboards within your
          community.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Let&apos;s go</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.gray100,
    paddingHorizontal: Spacing.lg,
  },
  heroWrapper: {
    marginTop: 48,
    height: 355,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    marginTop: 32,
  },
  headline: {
    color: Colors.primaryDark,
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.semibold,
    lineHeight: 40,
  },
  description: {
    marginTop: Spacing.lg,
    maxWidth: 280,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.regular,
    lineHeight: 24,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 24,
  },
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  buttonText: {
    color: Colors.info,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.semibold,
  },
});
