import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Platform,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ScreenHeader from '@/components/ui/ScreenHeader';
import DateTimeField from '@/components/ui/DateTimeField';
import CoverImageUpload from '@/components/ui/CoverImageUpload';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { router } from 'expo-router';
import { CreateEventData } from '@/services/event.service';

interface CreateEventScreenProps {
  onCreateEvent: (data: CreateEventData) => void;
  isLoading?: boolean;
  error?: string | null;
}

export default function CreateEventScreen({
  onCreateEvent,
  isLoading = false,
  error,
}: CreateEventScreenProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [iosPickerMode, setIosPickerMode] = useState<'date' | 'time' | null>(null);
  const [iosPickerValue, setIosPickerValue] = useState(new Date());
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const dateValue = selectedDateTime.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const timeValue = selectedDateTime.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  });

  const handleDateChange = (event: DateTimePickerEvent, selected?: Date) => {
    setIsDatePickerVisible(false);

    if (event.type !== 'set' || !selected) {
      return;
    }

    setSelectedDateTime((current) => {
      const next = new Date(current);
      next.setFullYear(selected.getFullYear(), selected.getMonth(), selected.getDate());
      return next;
    });
  };

  const handleTimeChange = (event: DateTimePickerEvent, selected?: Date) => {
    setIsTimePickerVisible(false);

    if (event.type !== 'set' || !selected) {
      return;
    }

    setSelectedDateTime((current) => {
      const next = new Date(current);
      next.setHours(selected.getHours(), selected.getMinutes(), 0, 0);
      return next;
    });
  };

  const openDatePicker = () => {
    if (Platform.OS === 'ios') {
      setIosPickerValue(selectedDateTime);
      setIosPickerMode('date');
      return;
    }

    setIsDatePickerVisible(true);
  };

  const openTimePicker = () => {
    if (Platform.OS === 'ios') {
      setIosPickerValue(selectedDateTime);
      setIosPickerMode('time');
      return;
    }

    setIsTimePickerVisible(true);
  };

  const handleIosPickerChange = (_event: DateTimePickerEvent, selected?: Date) => {
    if (!selected || !iosPickerMode) {
      return;
    }

    setIosPickerValue((current) => {
      const next = new Date(current);
      if (iosPickerMode === 'date') {
        next.setFullYear(selected.getFullYear(), selected.getMonth(), selected.getDate());
      } else {
        next.setHours(selected.getHours(), selected.getMinutes(), 0, 0);
      }
      return next;
    });
  };

  const closeIosPicker = () => {
    setIosPickerMode(null);
  };

  const applyIosPicker = () => {
    setSelectedDateTime(iosPickerValue);
    setIosPickerMode(null);
  };

  const pickCoverImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setCoverImage(result.assets[0].uri);
    }
  };

  const handleCreateEvent = () => {
    onCreateEvent({
      title,
      description,
      location,
      event_date: selectedDateTime.toISOString(),
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader title="Create Event" onBackPress={() => {
          router.back();
        }} />

        <View style={styles.form}>
          <Input
            label="Event Title"
            placeholder="e.g. Summer Music Festival"
            value={title}
            onChangeText={setTitle}
          />

          <View style={styles.pairRow}>
            <DateTimeField label="Date" value={dateValue} onPress={openDatePicker} />
            <DateTimeField
              label="Time"
              value={timeValue}
              style={styles.timeField}
              onPress={openTimePicker}
            />
          </View>

          {isDatePickerVisible && (
            <DateTimePicker
              value={selectedDateTime}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          {isTimePickerVisible && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleTimeChange}
            />
          )}

          {Platform.OS === 'ios' && iosPickerMode && (
            <Modal transparent animationType="fade" visible>
              <View style={styles.modalBackdrop}>
                <View style={styles.modalCard}>
                  <View style={styles.modalActions}>
                    <TouchableOpacity onPress={closeIosPicker}>
                      <Text style={styles.modalActionText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={applyIosPicker}>
                      <Text style={styles.modalActionText}>Done</Text>
                    </TouchableOpacity>
                  </View>
                  <DateTimePicker
                    value={iosPickerValue}
                    mode={iosPickerMode}
                    display="spinner"
                    textColor="black"
                    onChange={handleIosPickerChange}
                  />
                </View>
              </View>
            </Modal>
          )}

          <Input
            label="Location"
            placeholder="Venue or Address"
            value={location}
            onChangeText={setLocation}
          />
          <Input
            label="Description"
            placeholder="Event description..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          {coverImage ? (
            <TouchableOpacity
              style={[styles.coverImageContainer, styles.coverUpload]}
              onPress={pickCoverImage}
              activeOpacity={0.8}
            >
              <Image source={{ uri: coverImage }} style={styles.coverImage} />
            </TouchableOpacity>
          ) : (
            <CoverImageUpload style={styles.coverUpload} onPress={pickCoverImage} />
          )}
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.footer}>
          <Button
            title={isLoading ? 'Creating...' : 'Create Event'}
            onPress={handleCreateEvent}
            variant="primary"
            size="large"
            style={styles.createButton}
            disabled={isLoading || !title.trim() || !location.trim()}
          />
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
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingBottom: Spacing['3xl'],
  },
  form: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.base,
  },
  pairRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.base,
  },
  timeField: {
    marginLeft: Spacing.sm,
  },
  coverUpload: {
    marginTop: Spacing.lg,
  },
  footer: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing['2xl'],
  },
  createButton: {
    width: '100%',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: Colors.backgroundSecondary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.lg,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  modalActionText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  coverImageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  errorText: {
    color: Colors.error,
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.base,
  },
});
