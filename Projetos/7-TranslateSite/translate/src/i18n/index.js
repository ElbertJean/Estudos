import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt/pt-br.json'
import en from './locales/en/en-us.json'

i18n.use(initReactI18next).init({
    lng: 'en',
    resources: {
        pt: pt,
        en: en
    },
    react: {
        useSuspense: false
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;