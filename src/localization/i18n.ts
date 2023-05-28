import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { resources } from './langs';
import { FALLBACK_LANG, STORE_LANG_KEY } from '../constants/lang';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback) {
    try {
      callback((await AsyncStorage.getItem(STORE_LANG_KEY)) ?? FALLBACK_LANG);
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANG_KEY, language);
    } catch (error) {
      console.log('Error writting language', error);
    }
  }
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: FALLBACK_LANG,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });