import React from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../constants/colors';
import { Spacing } from '@/constants/spacing';
import Typography from '@/constants/typography';
const heroAsset = require('../../../../assets/images/welcome2.png');

type Welcome2Props = {
  onNext: () => void;
};

export default function Welcome2({ onNext }: Welcome2Props) {
  return (
    <SafeAreaView  style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.gray100} />
      <View style={styles.heroWrapper}>
        <Image source={heroAsset} style={styles.heroImage} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <Text style={styles.headline}>Find the Perfect Game{'\n'}Near You</Text>
        <Text style={styles.description}>
          Browse local tournaments, pickup games, and community events tailored to your favorite
          sports.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Next</Text>
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

