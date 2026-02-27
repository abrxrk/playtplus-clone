import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TopEventCard from '@/components/ui/TopEventCard';
import Button from '@/components/ui/Button';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { router } from 'expo-router';
import { signOut } from '@/services/auth.service';
import { getProfile, getMyRegistrations, type Profile, type EventWithRegistration } from '@/services/profile.service';

function formatEventDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function ProfileScreen() {
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<EventWithRegistration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const [profileRes, registrationsRes] = await Promise.all([
        getProfile(),
        getMyRegistrations(),
      ]);

      if (profileRes.success) {
        setProfileData(profileRes.data || null);
      }
      if (registrationsRes.success) {
        setRegisteredEvents(registrationsRes.data || []);
      }
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

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
          // add a male avatar
            source={{ uri: 'https://i.pravatar.cc/150?img=54' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{profileData?.full_name || 'User'}</Text>
          <Button
            title="Logout"
            variant="primary"
            size="large"
            onPress={() => signOut()}
            style={styles.logoutButton}
            textStyle={styles.logoutText}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Events</Text>
            <Text style={styles.sectionMeta}>{registeredEvents.length} upcoming</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
          >
            {registeredEvents.map((event, index) => (
              <View
                key={event.registration_id}
                style={[
                  styles.cardWrapper,
                  index === registeredEvents.length - 1 && styles.lastCard,
                ]}
              >
                <TopEventCard
                  title={event.title}
                  date={formatEventDate(event.event_date)}
                  location={event.location}
                  imageUrl="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80"
                  onPress={() => {
                    router.push({ pathname: '/event-details', params: { eventId: event.event_id } });
                  }}
                />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: Spacing.base,
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
