import { NativeModules, Platform } from "react-native";

export const locale =
  (Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier)
    ?.slice(0, 2) || 'fr';