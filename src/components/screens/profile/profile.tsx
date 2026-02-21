import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TopEventCard from '@/components/ui/TopEventCard';
import Button from '@/components/ui/Button';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { router } from 'expo-router';
const likedEvents = [
  {
    id: 'liked-1',
    title: 'Summer Sound Festival',
    date: 'Aug 12',
    location: 'Downtown Park',
    imageUrl:
      'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'liked-2',
    title: 'Tech Beats Live',
    date: 'Sep 05',
    location: 'City Arena',
    imageUrl:
      'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'liked-3',
    title: 'Creative Minds Summit',
    date: 'Sep 22',
    location: 'Warehouse District',
    imageUrl:
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'liked-4',
    title: 'Night Market Vibes',
    date: 'Oct 02',
    location: 'Old Town',
    imageUrl:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'liked-5',
    title: 'Indie Film Night',
    date: 'Oct 18',
    location: 'City Cinema',
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
];

const yourEvents = [
  {
    id: 'your-1',
    title: 'Creative Minds Summit',
    date: 'Sep 22',
    location: 'Warehouse District',
    imageUrl:
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'your-2',
    title: 'Design Sprint Workshop',
    date: 'Oct 05',
    location: 'Studio 9',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'your-3',
    title: 'Morning Yoga Flow',
    date: 'Oct 12',
    location: 'Riverside Park',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'your-4',
    title: 'Picnic Workshop',
    date: 'Oct 20',
    location: 'Downtown Park',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'your-5',
    title: 'City Lights Run',
    date: 'Oct 28',
    location: 'Harbor Loop',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
];
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=32' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.bio}>
            Event enthusiast and community builder. Always looking for the next big music festival.
          </Text>
          <Button
            title="Logout"
            variant="primary"
            size="large"
            onPress={() => {router.push('/(onboarding)/welcome-1')}}
            style={styles.logoutButton}
            textStyle={styles.logoutText}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Liked Events</Text>
            <Text style={styles.sectionMeta}>{likedEvents.length} saved</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
          >
            {likedEvents.map((event, index) => (
              <View
                key={event.id}
                style={[
                  styles.cardWrapper,
                  index === likedEvents.length - 1 && styles.lastCard,
                ]}
              >
                <TopEventCard {...event} onPress={() => {
                  router.push(`/event-details`);
                }} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Events</Text>
            <Text style={styles.sectionMeta}>{yourEvents.length} upcoming</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
          >
            {yourEvents.map((event, index) => (
              <View
                key={event.id}
                style={[
                  styles.cardWrapper,
                  index === yourEvents.length - 1 && styles.lastCard,
                ]}
              >
                <TopEventCard {...event} onPress={() => {
                  router.push(`/event-details`);
                }} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing['4xl'],
  },
  header: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: Spacing['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  screenTitle: {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  profileCard: {
    alignItems: 'center',
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginBottom: Spacing.base,
    backgroundColor: Colors.gray100,
  },
  name: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  bio: {
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.base,
    lineHeight: Typography.fontSize.base * 1.5,
  },
  logoutButton: {
    marginTop: Spacing.base,
    width: '100%',
  },
  logoutText: {
    fontWeight: Typography.fontWeight.semibold,
  },
  section: {
    marginTop: Spacing['3xl'],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  sectionTitle: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
  },
  sectionMeta: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textTertiary,
  },
  cardList: {
    paddingVertical: Spacing.sm,
  },
  cardWrapper: {
    marginRight: Spacing.base,
  },
  lastCard: {
    marginRight: Spacing['2xl'],
  },
});
