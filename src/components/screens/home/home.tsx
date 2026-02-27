import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import SearchInput from '@/components/ui/SearchInput';
import TopEventCard from '@/components/ui/TopEventCard';
import EventListCard from '@/components/ui/EventListCard';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { router } from 'expo-router';
import { getAllEvents, Event } from '@/services/event.service';
import { getProfile } from '@/services/profile.service';

const HARDCODED_IMAGE_URL = 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80';

function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [eventsRes, profileRes] = await Promise.all([
          getAllEvents(),
          getProfile(),
        ]);

        if (eventsRes.success && Array.isArray(eventsRes.data)) {
          setEvents(eventsRes.data);
        } else {
          setError(eventsRes.error || 'Failed to load events');
        }

        if (profileRes.success && profileRes.data) {
          setUserName(profileRes.data.full_name);
        }
      } catch {
        setError('Failed to load events');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const topEvents = events.slice(0, 3);
  const otherEvents = events.slice(3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Hello, {userName || 'User'}!</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push('/(tabs)/profile');
            }}
          >
            <Image
              source={{
                uri: 'https://i.pravatar.cc/150?img=54',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
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

        {isLoading ? (
          <ActivityIndicator style={styles.loader} color={Colors.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Failed to load events</Text>
        ) : (
          <>
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
                  <TopEventCard
                    title={event.title}
                    date={formatEventDate(event.event_date)}
                    location={event.location}
                    imageUrl={HARDCODED_IMAGE_URL}
                    onPress={() => {
                      router.push({ pathname: '/event-details', params: { eventId: event.id } });
                    }}
                  />
                </View>
              ))}
            </ScrollView>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Events</Text>
              <Text style={styles.sectionAction}>Explore calendar</Text>
            </View>

            <View style={styles.eventsList}>
              {otherEvents.map((event) => (
                <EventListCard
                  key={event.id}
                  title={event.title}
                  date={formatEventDate(event.event_date)}
                  location={event.location}
                  imageUrl={HARDCODED_IMAGE_URL}
                  style={styles.eventCard}
                  onPress={() => {
                    router.push({ pathname: '/event-details', params: { eventId: event.id } });
                  }}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>

      <Pressable style={styles.fab} onPress={() => {
        router.push(`/create-event`);
      }}>
        <Ionicons name="add" size={20} color={Colors.white} />
        <Text style={styles.fabLabel}>Create</Text>
      </Pressable>
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
  loader: {
    marginTop: Spacing['2xl'],
  },
  errorText: {
    marginTop: Spacing['2xl'],
    textAlign: 'center',
    color: Colors.error,
    fontSize: Typography.fontSize.base,
  },
});
