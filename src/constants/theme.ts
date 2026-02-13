/**
 * Theme Configuration
 * 
 * Combines all design tokens into a unified theme object
 * Based on Figma design system
 */

import { Platform } from 'react-native';
import { Colors } from './colors';
import { Typography } from './typography';
import { Spacing } from './spacing';

const tintColorLight = '#01295F';
const tintColorDark = '#4A90E2';

export const ThemeColors = {
  light: {
    text: Colors.text,
    background: Colors.background,
    tint: tintColorLight,
    icon: Colors.gray500,
    tabIconDefault: Colors.gray500,
    tabIconSelected: tintColorLight,
    primary: Colors.primary,
    secondary: Colors.primaryLight,
    border: Colors.border,
  },
  dark: {
    text: Colors.textInverse,
    background: Colors.gray600,
    tint: tintColorDark,
    icon: Colors.gray300,
    tabIconDefault: Colors.gray300,
    tabIconSelected: tintColorDark,
    primary: Colors.primaryLight,
    secondary: Colors.primary,
    border: Colors.gray500,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

const theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  fonts: Fonts,
  themeColors: ThemeColors,
};

export default theme;
