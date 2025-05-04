import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <select onChange={e => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="bn">বাংলা</option>
        <option value="ta">தமிழ்</option>
        <option value="te">తెలుగు</option>
        <option value="mr">मराठी</option>
        <option value="gu">ગુજરાતી</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ml">മലയാളം</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
        <option value="or">ଓଡ଼ିଆ</option>
      </select>
      <h1>{t('welcome')}</h1>
      <button>{t('upload')}</button>
      <button>{t('detect')}</button>
    </div>
  );
}

export default App; 