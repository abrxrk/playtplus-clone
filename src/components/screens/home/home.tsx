import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from '@/components/ui/SearchInput';
import TopEventCard from '@/components/ui/TopEventCard';
import EventListCard from '@/components/ui/EventListCard';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

const topEvents = [
  {
    id: 'top-1',
    title: 'Summer Sound Festival',
    date: 'Aug 12',
    location: 'Downtown Park',
    imageUrl: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'top-2',
    title: 'Tech Beats Live',
    date: 'Sep 05',
    location: 'City Arena',
    imageUrl: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'top-3',
    title: 'Creative Minds Summit',
    date: 'Sep 22',
    location: 'Warehouse District',
    imageUrl: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80',
  },
];

const events = [
  {
    id: 'event-1',
    title: 'Jazz Night Under Stars',
    date: 'Oct 12',
    location: 'Blue Note Club',
    price: '$25',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'event-2',
    title: 'Modern Art Showcase',
    date: 'Oct 15',
    location: 'Grand Gallery',
    price: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'event-3',
    title: 'Product Design Forum',
    date: 'Oct 20',
    location: 'Creative Hub',
    price: '$45',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'event-4',
    title: 'Night Market Experience',
    date: 'Oct 24',
    location: 'Old Town',
    price: '$18',
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80',
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Hello, Alex!</Text>
          </View>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=32',
            }}
            style={styles.avatar}
          />
        </View>

        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search events, venues..."
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Events</Text>
          <Text style={styles.sectionAction}>See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topEventsList}
        >
          {topEvents.map((event, index) => (
            <View
              key={event.id}
              style={[
                styles.topEventWrapper,
                index === topEvents.length - 1 && styles.topEventLast,
              ]}
            >
              <TopEventCard {...event} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Events</Text>
          <Text style={styles.sectionAction}>Explore calendar</Text>
        </View>

        <View style={styles.eventsList}>
          {events.map(event => (
            <EventListCard
              key={event.id}
              {...event}
              style={styles.eventCard}
            />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Ionicons name="add" size={20} color={Colors.white} />
        <Text style={styles.fabLabel}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing['4xl'],
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  greeting: {
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
  },
  name: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.gray100,
  },
  sectionHeader: {
    marginTop: Spacing['2xl'],
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
  },
  sectionAction: {
    fontSize: Typography.fontSize.sm,
    color: Colors.info,
  },
  topEventsList: {
    paddingVertical: Spacing.sm,
  },
  topEventWrapper: {
    marginRight: Spacing.base,
  },
  topEventLast: {
    marginRight: Spacing['2xl'],
  },
  eventsList: {
    marginTop: Spacing.sm,
  },
  eventCard: {
    marginBottom: Spacing.base,
  },
  fab: {
    position: 'absolute',
    right: Spacing.base,
    bottom: Spacing['2xl'],
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing['2xl'],
    paddingVertical: Spacing.base,
    borderRadius: 30,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  fabLabel: {
    marginLeft: Spacing.sm,
    color: Colors.white,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
  },
});
