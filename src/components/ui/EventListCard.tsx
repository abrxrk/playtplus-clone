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
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

type EventListCardProps = {
  title: string;
  date: string;
  location: string;
  price?: string;
  imageUrl?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function EventListCard({
  title,
  date,
  location,
  price,
  imageUrl,
  imageSource,
  onPress,
  style,
}: EventListCardProps) {
  const resolvedSource = imageSource ?? (imageUrl ? { uri: imageUrl } : undefined);
  const priceColor = price?.toLowerCase() === 'free' ? Colors.success : Colors.info;

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.8}>
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
        <Text numberOfLines={1} style={styles.details}>
          {date} • {location}
        </Text>
      </View>
      {price ? (
        <Text style={[styles.price, { color: priceColor }]}>{price}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacing.base,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imageWrapper: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.gray100,
    marginRight: Spacing.base,
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
    flex: 1,
  },
  title: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
    marginBottom: 4,
  },
  details: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  price: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    marginLeft: Spacing.base,
  },
});
