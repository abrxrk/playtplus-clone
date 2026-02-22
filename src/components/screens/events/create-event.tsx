import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ScreenHeader from '@/components/ui/ScreenHeader';
import DateTimeField from '@/components/ui/DateTimeField';
import CoverImageUpload from '@/components/ui/CoverImageUpload';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { router } from 'expo-router';

export default function CreateEventScreen() {
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
          <Input label="Event Title" placeholder="e.g. Summer Music Festival" />

          <View style={styles.pairRow}>
            <DateTimeField label="Date" placeholder="Select date" onPress={() => {}} />
            <DateTimeField
              label="Time"
              value="10:00 AM"
              style={styles.timeField}
              onPress={() => {}}
            />
          </View>

          <Input label="Location" placeholder="Venue or Address" />
          <Input
            label="Price"
            placeholder="$0.00"
            keyboardType="decimal-pad"
            returnKeyType="done"
          />

          <CoverImageUpload style={styles.coverUpload} onPress={() => {}} />
        </View>

        <View style={styles.footer}>
          <Button
            title="Create Event"
            onPress={() => {}}
            variant="primary"
            size="large"
            style={styles.createButton}
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
});
