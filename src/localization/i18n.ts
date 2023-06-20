import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {resources} from './langs';
import {FALLBACK_LANG, STORE_LANG_KEY} from '../constants/lang';
import {locale} from '../utils/locale';

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
      const userLanguage = language !== locale ? locale : language;
      console.log('userLanguage: ', userLanguage);

      await AsyncStorage.setItem(STORE_LANG_KEY, userLanguage);
    } catch (error) {
      console.log('Error writting language', error);
    }
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: FALLBACK_LANG,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
