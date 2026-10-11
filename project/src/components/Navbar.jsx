import React from 'react';
import { Sprout, Sun, Moon, Volume2, Globe, Search, Sparkles } from 'lucide-react';
import { languages } from '../data/translations';

// Student Web Project - Navigation Header Component
// Manages global search, language switcher (8 regional languages), and theme toggle
export function Navbar({
  lang,
  setLang,
  t,
  theme,
  setTheme,
  onOpenVoice,
  searchQuery,
  setSearchQuery,
  activeTab: _activeTab,
  setActiveTab
}) {
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('sunlight');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'dark') return <Sun size={18} />;
    if (theme === 'sunlight') return <Sparkles size={18} />;
    return <Moon size={18} />;
  };

  const getThemeTitle = () => {
    if (theme === 'dark') return 'Switch to Sunlight Mode (Outdoor)';
    if (theme === 'sunlight') return 'Switch to Light Mode';
    return 'Switch to Dark Mode';
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => setActiveTab('dashboard')}>
          <div className="brand-icon-box">
            <Sprout size={28} />
          </div>
          <div className="brand-text">
            <h1>
              {t.appTitle} <span className="badge badge-blue" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>MINI PROJECT</span>
            </h1>
            <p>{t.appSubtitle}</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ flex: '1', maxWidth: '380px', margin: '0 1rem', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="filter-input"
            style={{ paddingLeft: '38px', borderRadius: 'var(--radius-full)', background: 'var(--bg-card)' }}
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Voice Assistant Button (Web Speech API) */}
          <button
            className="btn-primary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', borderRadius: 'var(--radius-full)' }}
            onClick={onOpenVoice}
            title="Open Voice Helpdesk (Speech Recognition)"
          >
            <Volume2 size={16} />
            <span style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } }}>
              {lang === 'hi' ? 'बोलकर पूछें' : lang === 'te' ? 'వాయిస్ అసిస్టెంట్' : 'Voice Helpdesk'}
            </span>
          </button>

          {/* Language Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Globe size={18} style={{ color: 'var(--primary-600)' }} />
            <select
              className="select-lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Select Language"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.native}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle (Light / Dark / Sunlight Outdoor Mode) */}
          <button
            className={`icon-btn ${theme === 'sunlight' ? 'active' : ''}`}
            onClick={toggleTheme}
            title={getThemeTitle()}
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>
    </header>
  );
}
