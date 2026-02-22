import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

interface DateTimeFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function DateTimeField({
  label,
  value,
  placeholder,
  onPress,
  disabled = false,
  style,
  textStyle,
}: DateTimeFieldProps) {
  const displayText = value ?? placeholder ?? '';
  const isPlaceholder = !value;

  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      disabled={disabled || !onPress}
    >
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isPlaceholder && styles.placeholder, textStyle]}>
        {displayText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 16,
    padding: Spacing.base,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  label: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  value: {
    marginTop: Spacing.sm,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text,
  },
  placeholder: {
    color: Colors.textTertiary,
  },
  disabled: {
    opacity: 0.7,
  },
});
