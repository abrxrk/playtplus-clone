import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/spacing';
import { Typography } from '@/constants/typography';

type SearchInputProps = TextInputProps & {
  containerStyle?: ViewStyle;
};

export default function SearchInput({ containerStyle, style, ...props }: SearchInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons name="search" size={18} color={Colors.textTertiary} />
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={Colors.textTertiary}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 12,
    paddingHorizontal: Spacing.base,
    paddingVertical: 12,
    gap: Spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    color: Colors.text,
  },
});
