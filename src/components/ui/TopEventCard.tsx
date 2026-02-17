import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

type TopEventCardProps = {
  title: string;
  date: string;
  location: string;
  imageUrl?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function TopEventCard({
  title,
  date,
  location,
  imageUrl,
  imageSource,
  onPress,
  style,
}: TopEventCardProps) {
  const resolvedSource = imageSource ?? (imageUrl ? { uri: imageUrl } : undefined);

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.imageWrapper}>
        {resolvedSource ? (
          <Image source={resolvedSource} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.meta}>
          <Ionicons name="location-outline" size={14} color={Colors.textTertiary} />
          <Text numberOfLines={1} style={styles.metaText}>
            {location} • {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageWrapper: {
    height: 140,
    backgroundColor: Colors.gray100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: Colors.gray200,
  },
  content: {
    padding: Spacing.base,
  },
  title: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metaText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
    flex: 1,
  },
});
