import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('current')}: {i18n.language}</p>
        </div>
    );
}

export default Home;
