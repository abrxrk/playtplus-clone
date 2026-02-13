import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Event Card Component
 * 
 * Used to display event information in lists
 * 
 * Props:
 * - title: Event title
 * - date: Event date
 * - location: Event location
 * - price: Event price
 * - imageUrl: Event cover image
 * - onPress: Function to call when card is pressed
 */

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  price?: string;
  imageUrl?: string;
  onPress?: () => void;
}

export default function EventCard({
  title,
  date,
  location,
  price,
  imageUrl,
  onPress,
}: EventCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {/* TODO: Add event image */}
      <View style={styles.imageContainer}>
        <Text style={styles.placeholder}>Event Image</Text>
      </View>
      
      {/* TODO: Add event info */}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{date} • {location}</Text>
        {price && <Text style={styles.price}>{price}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    height: 160,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01295F',
    marginTop: 8,
  },
  placeholder: {
    fontSize: 14,
    color: '#999999',
  },
});
