import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationBN from './locales/bn/translation.json';
import translationTA from './locales/ta/translation.json';
import translationTE from './locales/te/translation.json';
import translationMR from './locales/mr/translation.json';
import translationGU from './locales/gu/translation.json';
import translationKN from './locales/kn/translation.json';
import translationML from './locales/ml/translation.json';
import translationPA from './locales/pa/translation.json';
import translationOR from './locales/or/translation.json';

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  bn: { translation: translationBN },
  ta: { translation: translationTA },
  te: { translation: translationTE },
  mr: { translation: translationMR },
  gu: { translation: translationGU },
  kn: { translation: translationKN },
  ml: { translation: translationML },
  pa: { translation: translationPA },
  or: { translation: translationOR }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n; 