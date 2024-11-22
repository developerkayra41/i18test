import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

if (!localStorage.getItem('language')) localStorage.setItem('language', 'tr');

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        lng: localStorage.getItem('language') || 'tr',  // LocalStorage'den dili alıyoruz
        fallbackLng: 'tr',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',  // Klasör yapınızı buraya göre ayarlıyoruz
        },
        ns: ['pages', 'components'], // Namespace olarak sayfalar ve komponentleri belirtiyoruz
        defaultNS: 'pages',  // Varsayılan namespace'i belirtiyoruz
        interpolation: {
            escapeValue: false,  // React zaten XSS koruması sağlıyor
        },
        debug: true,  // Hata ayıklama modunu açıyoruz
    });

export default i18n;
