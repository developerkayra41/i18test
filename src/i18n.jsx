import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

if (!localStorage.getItem('language')) localStorage.setItem('language', 'tr')

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        lng: localStorage.getItem('language') || 'tr',  // Dil bilgisi localStorage'den alınıyor
        fallbackLng: 'tr',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
