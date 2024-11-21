import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function Login() {

    const { t } = useTranslation();  // Çeviri fonksiyonunu kullanıyoruz
    const [language, setLanguage] = useState(i18n.language);  // Varsayılan olarak mevcut dili alıyoruz
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    };

    const clickHandle = async (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        await i18n.changeLanguage(lang);
    };

    return (
        <div>
            <h2>{t('current')}</h2>
            <select value={language} onChange={(e) => clickHandle(e.target.value)}>
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
            </select>
            <br />
            <button onClick={handleLogin}>{t('login')}</button>  {/* Dinamik çeviri */}
        </div>
    );
}

export default Login;
