import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { router, useLocalSearchParams } from 'expo-router';
import RegistrationDoneModal from '@/components/RegistrationDoneModal';
import { getAllEvents, Event } from '@/services/event.service';
import { registerForEvent } from '@/services/registration.service';

const HARDCODED_IMAGE_URL = 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80';

// const highlights = [
//   'Keynotes from technology visionaries and founders',
//   'Hands-on workshops covering AI, product, and leadership',
//   'Networking lounges with curated partners and investors',
// ];

type InfoRowProps = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title: string;
  subtitle?: string;
};

function InfoRow({ icon, title, subtitle }: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={20} color={Colors.primaryLight} />
      </View>
      <View style={styles.infoText}>
        <Text style={styles.infoTitle}>{title}</Text>
        {subtitle ? <Text style={styles.infoSubtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

function formatEventDate(dateString: string): { dateLabel: string; timeLabel: string } {
  const date = new Date(dateString);
  const dateLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeLabel = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  return { dateLabel, timeLabel: `${timeLabel} • ${dayName} morning` };
}

export default function EventDetailsScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const { eventId } = useLocalSearchParams<{ eventId: string }>();

  useEffect(() => {
    async function fetchEvent() {
      try {
        setIsLoading(true);
        const response = await getAllEvents();
        if (response.success && Array.isArray(response.data)) {
          const foundEvent = response.data.find((e) => e.id === eventId);
          if (foundEvent) {
            setEvent(foundEvent);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  const { dateLabel, timeLabel } = event ? formatEventDate(event.event_date) : { dateLabel: '', timeLabel: '' };

  const infoRows = event
    ? [
        {
          icon: 'calendar-outline' as const,
          title: dateLabel,
          subtitle: timeLabel,
        },
        {
          icon: 'location-outline' as const,
          title: event.location,
        },
      ]
    : [];

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator style={styles.loader} color={Colors.primary} />
      </SafeAreaView>
    );
  }

  if (!event) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Event not found</Text>
      </SafeAreaView>
    );
  }

  async function handleRegister() {
    setIsRegistering(true);
    const response = await registerForEvent(event.id);
    setIsRegistering(false);

    if (response.success) {
      setIsModalVisible(true);
    }
    else {
      Alert.alert('Error', response.error || 'Failed to register for event', [
        { text: 'OK', style: 'cancel' },
      ]);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.coverWrapper}>
          <ImageBackground
            source={{ uri: HARDCODED_IMAGE_URL }}
            style={styles.coverImage}
            imageStyle={styles.coverImageRounded}
          >
            <View style={styles.coverHeader}>
              <TouchableOpacity style={styles.iconButton} onPress={() => {
                router.back();
              }}>
                <Ionicons name="chevron-back" size={20} color={Colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
                <Ionicons name="share-social-outline" size={20} color={Colors.white} />
              </TouchableOpacity>
            </View>

            <View style={styles.coverMeta}>
              <Text style={styles.coverTag}>Event</Text>
              <Text numberOfLines={2} style={styles.coverTitle}>
                {event.title}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.subtitleRow}>
            <Text style={styles.subtitle}>{dateLabel}</Text>
            <Text style={[styles.subtitle, styles.subtitleDot]}>•</Text>
            <Text style={styles.subtitle}>{timeLabel}</Text>
          </View>

          <View style={styles.infoList}>
            {infoRows.map((row) => (
              <InfoRow
                key={row.title}
                icon={row.icon}
                title={row.title}
                subtitle={row.subtitle}
              />
            ))}
          </View>

          <View style={styles.statRow}>
            <View>
              <Text style={styles.statLabel}>1,250 registered</Text>
              <Text style={styles.statCaption}>People already registered</Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => {}}>
              <Ionicons name="heart-outline" size={22} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <Card variant="elevated" style={styles.aboutCard}>
            <Text style={styles.sectionHeading}>About this event</Text>
            <Text style={styles.sectionText}>{event.description}</Text>
          </Card>
        </View>
      </ScrollView>

      <View style={styles.ctaContainer}>  
        <Button
          title={isRegistering ? 'Registering...' : 'Register Now'}
          onPress={handleRegister}
          size="large"
          style={styles.ctaButton}
          disabled={isRegistering}
        />
      </View>
      <RegistrationDoneModal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          router.push('/(tabs)');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing['4xl'],
  },
  coverWrapper: {
    marginBottom: Spacing['2xl'],
    borderRadius: 24,
    overflow: 'hidden',
  },
  coverImage: {
    height: 320,
    justifyContent: 'space-between',
    padding: Spacing.base,
  },
  coverImageRounded: {
    borderRadius: 24,
  },
  coverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverMeta: {
    marginBottom: Spacing.base,
  },
  coverTag: {
    fontSize: Typography.fontSize.sm,
    color: Colors.accentLight,
    marginBottom: Spacing.xs,
  },
  coverTitle: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.white,
    lineHeight: Typography.fontSize['3xl'] * Typography.lineHeight.tight,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
  },
  subtitleDot: {
    marginHorizontal: Spacing.xs,
  },
  infoList: {
    marginTop: Spacing['2xl'],
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  infoIcon: {
    width: 36,
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
  },
  infoSubtitle: {
    marginTop: 2,
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  statRow: {
    marginTop: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statLabel: {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  statCaption: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  favoriteButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  aboutCard: {
    marginTop: Spacing['2xl'],
  },
  sectionHeading: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
  },
  sectionText: {
    marginTop: Spacing.sm,
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.relaxed,
  },
  highlightsList: {
    marginTop: Spacing.lg,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: Spacing.sm,
  },
  highlightText: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    color: Colors.textSecondary,
  },
  ctaContainer: {
    borderTopWidth: 1,
    borderColor: Colors.borderLight,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.white,
  },
  ctaButton: {
    width: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.error,
    fontSize: Typography.fontSize.base,
  },
});
