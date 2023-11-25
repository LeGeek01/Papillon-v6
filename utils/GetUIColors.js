import { Platform, useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';

function GetUIColors() {
  const theme = useTheme();
  const scheme = useColorScheme();

  const isDark = scheme === 'dark';

  // background
  let background = '';

  if (Platform.OS === 'ios') {
    background = isDark ? '#000000' : '#f2f2f7';
  } else {
    background = theme.colors.background;
  }

  // element
  let element = '';
  let elementHigh = '';

  if (Platform.OS === 'ios') {
    element = isDark ? '#151515' : '#ffffff';
    elementHigh = isDark ? '#151515' : '#ffffff';
  } else {
    element = theme.colors.elevation.level1;
    elementHigh = theme.colors.elevation.level2;
  }

  // text
  const text = isDark ? '#ffffff' : '#000000';

  // main
  let primaryBackground = '';
  let primary = '';

  if (Platform.OS === 'ios') {
    // primary = '#29947A';
    primary = '#29947A';
  } else {
    // primary = theme.colors.primary;
    primary = isDark
      ? theme.colors.primary
      : theme.colors.primary;
  }

  primaryBackground = primary;

  if (Platform.OS === 'android' && isDark) {
    primaryBackground = theme.colors.primaryContainer;
  }

  // border
  let borderColor = '';

  if (Platform.OS === 'ios') {
    borderColor = isDark ? '#444444' : '#d5d5d5';
  } else {
    borderColor = theme.colors.border;
  }

  return {
    theme: isDark ? 'dark' : 'light',
    background,
    element,
    elementHigh,
    text,
    primary,
    primaryBackground,
    border: borderColor,
  };
}

export default GetUIColors;
