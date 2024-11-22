import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation('pages/AccountManagement/ProxyManagement'); // ProxyManagement'i burada kullanıyoruz

    return (
        <div>
            <h1>{t('gridColumns.columnHeaderNames.email')}</h1>
            <p>{t('dialog.text')}</p>
            <button>{t('button.newProxy')}</button>
            <p>Current language: {i18n.language}</p>  {/* Mevcut dil */}
        </div>
    );
}

export default Home;
