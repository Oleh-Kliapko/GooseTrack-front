import i18n from 'i18next';
import en from './locale/en/en.json';
import ua from './locale/ua/ua.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';

i18n
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
      cache: ['localStorage'],
    },
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
