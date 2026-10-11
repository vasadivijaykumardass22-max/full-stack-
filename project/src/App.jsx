import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { WeatherWidget } from './components/WeatherWidget';
import { CropDoctor } from './components/CropDoctor';
import { MandiPrices } from './components/MandiPrices';
import { CropAdvisor } from './components/CropAdvisor';
import { FertilizerCalc } from './components/FertilizerCalc';
import { GovtSchemes } from './components/GovtSchemes';
import { KisanBazaar } from './components/KisanBazaar';
import { FarmBookkeeper } from './components/FarmBookkeeper';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { Footer } from './components/Footer';

import { translations } from './data/translations';
import {
  Sprout,
  Sun,
  Camera,
  Store,
  Compass,
  FlaskConical,
  Landmark,
  ShoppingBag,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light'); // Supports light, dark, and sunlight (high-contrast outdoor) modes
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  // Active translation dictionary
  const t = translations[lang] || translations.en;

  // Set data-theme on root html element for theme switching
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Tab navigation handler with smooth scroll to top
  const handleNavigate = (tabKey) => {
    setActiveTab(tabKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Main navigation tabs configuration
  const tabsConfig = [
    { key: 'dashboard', label: t.tabs?.dashboard || 'Dashboard', icon: <Sprout size={18} /> },
    { key: 'cropDoctor', label: t.tabs?.cropDoctor || 'Crop Disease Guide', icon: <Camera size={18} /> },
    { key: 'mandi', label: t.tabs?.mandi || 'Mandi Live Bhav', icon: <Store size={18} /> },
    { key: 'weather', label: t.tabs?.weather || 'Weather & Spraying', icon: <Sun size={18} /> },
    { key: 'advisor', label: t.tabs?.advisor || 'Crop Advisory', icon: <Compass size={18} /> },
    { key: 'calculator', label: t.tabs?.calculator || 'Fertilizer & Water', icon: <FlaskConical size={18} /> },
    { key: 'schemes', label: t.tabs?.schemes || 'Govt Schemes', icon: <Landmark size={18} /> },
    { key: 'bazaar', label: t.tabs?.bazaar || 'Kisan Bazaar', icon: <ShoppingBag size={18} /> },
    { key: 'bookkeeper', label: t.tabs?.bookkeeper || 'Farm Bookkeeper', icon: <BookOpen size={18} /> }
  ];

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        theme={theme}
        setTheme={setTheme}
        onOpenVoice={() => setIsVoiceOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Tab Navigation Strip */}
      <nav className="nav-tabs-wrapper">
        <div className="nav-tabs-inner">
          {tabsConfig.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => handleNavigate(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Body Content */}
      <main className="main-content">
        {/* DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="animate-fade">
            {/* Hero Banner with Generated Smart Farm Landscape */}
            <div className="hero-card">
              <img
                src="/hero-farm.jpg"
                alt="Smart Agriculture Farm"
                className="hero-background-img"
              />
              <div className="hero-overlay">
                <span className="badge badge-green" style={{ marginBottom: '0.8rem', background: 'rgba(255,255,255,0.2)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                  <Sparkles size={14} /> {t.hero?.badge || '🌾 Student Mini Project | Decision Support System'}
                </span>
                <h1 className="hero-title">{t.hero?.title || 'KisanSetu: Farmer Advisory & Support System'}</h1>
                <p className="hero-subtitle">
                  {t.hero?.subtitle ||
                    'A web portal providing live APMC mandi rates, plant disease diagnostic guides, weather spray safety advisories, and fertilizer calculations.'}
                </p>

                <div className="hero-buttons">
                  <button
                    className="btn-primary"
                    style={{ background: '#ffffff', color: '#14532d', fontWeight: 800 }}
                    onClick={() => handleNavigate('cropDoctor')}
                  >
                    <Camera size={18} /> {t.hero?.ctaDoctor || 'Crop Disease Guide'}
                  </button>
                  <button
                    className="btn-gold"
                    onClick={() => handleNavigate('mandi')}
                  >
                    <Store size={18} /> {t.hero?.ctaMandi || 'Check Today Mandi Bhav'}
                  </button>
                  <button
                    className="btn-secondary"
                    style={{ background: 'rgba(0,0,0,0.4)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}
                    onClick={() => setIsVoiceOpen(true)}
                  >
                    🎙️ {t.hero?.voicePrompt || 'Voice Helpdesk'}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Feature Grid */}
            <div className="quick-grid">
              <div className="action-card" onClick={() => handleNavigate('cropDoctor')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#dcfce7', color: '#15803d' }}>
                    <Camera size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.cropDoctor || 'Crop Disease Guide'}</h3>
                    <p>Plant disease identification, symptoms & organic/chemical remedies.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>View Remedies</span> <ArrowRight size={16} />
                </div>
              </div>

              <div className="action-card" onClick={() => handleNavigate('mandi')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
                    <Store size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.mandi || 'Live Mandi Bhav'}</h3>
                    <p>Real-time commodity prices from APMC mandis across India.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#b45309', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>View Rates</span> <ArrowRight size={16} />
                </div>
              </div>

              <div className="action-card" onClick={() => handleNavigate('weather')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#e0f2fe', color: '#0369a1' }}>
                    <Sun size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.weather || 'Weather & Spray Safety'}</h3>
                    <p>Safe pesticide spraying radar, soil moisture & 7-day forecast.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#0369a1', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Check Forecast</span> <ArrowRight size={16} />
                </div>
              </div>

              <div className="action-card" onClick={() => handleNavigate('calculator')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
                    <FlaskConical size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.calculator || 'Fertilizer & Water Calc'}</h3>
                    <p>Accurate Urea, DAP, MOP bag calculation for your farm acreage.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#7e22ce', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Calculate Dose</span> <ArrowRight size={16} />
                </div>
              </div>

              <div className="action-card" onClick={() => handleNavigate('schemes')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#ffedd5', color: '#c2410c' }}>
                    <Landmark size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.schemes || 'Govt Schemes & Subsidies'}</h3>
                    <p>PM-KISAN ₹6k, Solar pump subsidy 60%, and PMFBY insurance.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#c2410c', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Check Schemes</span> <ArrowRight size={16} />
                </div>
              </div>

              <div className="action-card" onClick={() => handleNavigate('bazaar')}>
                <div className="action-card-header">
                  <div className="action-icon" style={{ background: '#ecfdf5', color: '#047857' }}>
                    <ShoppingBag size={26} />
                  </div>
                  <div>
                    <h3>{t.tabs?.bazaar || 'Kisan Bazaar & Chaupal'}</h3>
                    <p>Rent tractors/drones, buy desi seeds, and ask agri-scientists.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#047857', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Explore Bazaar</span> <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Weather Snapshot Widget on Home */}
            <WeatherWidget t={t} />

            {/* Crop Doctor Preview on Home */}
            <CropDoctor t={t} lang={lang} />
          </div>
        )}

        {/* CROP DOCTOR TAB */}
        {activeTab === 'cropDoctor' && <CropDoctor t={t} lang={lang} />}

        {/* MANDI LIVE BHAV TAB */}
        {activeTab === 'mandi' && <MandiPrices t={t} searchQuery={searchQuery} />}

        {/* WEATHER & SPRAYING TAB */}
        {activeTab === 'weather' && <WeatherWidget t={t} />}

        {/* CROP RECOMMENDATION ADVISOR TAB */}
        {activeTab === 'advisor' && <CropAdvisor t={t} />}

        {/* FERTILIZER & WATER CALCULATOR TAB */}
        {activeTab === 'calculator' && <FertilizerCalc t={t} />}

        {/* GOVT SCHEMES & SUBSIDIES TAB */}
        {activeTab === 'schemes' && <GovtSchemes t={t} searchQuery={searchQuery} />}

        {/* KISAN BAZAAR & COMMUNITY TAB */}
        {activeTab === 'bazaar' && <KisanBazaar t={t} />}

        {/* FARM EXPENSE BOOKKEEPER TAB */}
        {activeTab === 'bookkeeper' && <FarmBookkeeper t={t} />}
      </main>

      {/* Voice Assistant Interactive Modal */}
      <VoiceAssistantModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
        lang={lang}
        t={t}
      />

      {/* Footer */}
      <Footer t={t} onOpenVoice={() => setIsVoiceOpen(true)} />
    </div>
  );
}

export default App;
