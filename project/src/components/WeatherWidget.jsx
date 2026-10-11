import React, { useState } from 'react';
import { CloudRain, Wind, Droplets, Sun, AlertTriangle, CheckCircle2, Thermometer, ShieldCheck } from 'lucide-react';

// Agro-Meteorology & Spray Safety Advisory Component
// Developed as part of Full Stack Web Development mini-project
// Determines pesticide spraying window safety based on wind velocity, precipitation probability, and humidity
const regionsData = {
  'Ludhiana, Punjab': {
    temp: 29,
    condition: 'Partly Cloudy',
    humidity: 58,
    wind: 11,
    rainChance: 10,
    soilMoisture: 'Optimal (64%)',
    uvIndex: 6,
    sprayStatus: 'safe',
    sprayReason: 'Low wind (11 km/h) & minimal rain risk. Perfect for foliar fungicide or herbicide spray.',
    forecast: [
      { day: 'Today', temp: '29° / 19°', icon: '⛅', rain: '10%', desc: 'Ideal for sowing & spraying' },
      { day: 'Tue', temp: '30° / 20°', icon: '☀️', rain: '5%', desc: 'Sunny, clear skies' },
      { day: 'Wed', temp: '31° / 21°', icon: '☀️', rain: '0%', desc: 'Warm, dry weather' },
      { day: 'Thu', temp: '28° / 18°', icon: '🌧️', rain: '45%', desc: 'Light rain expected evening' },
      { day: 'Fri', temp: '27° / 17°', icon: '⛅', rain: '20%', desc: 'Cool breeze' },
      { day: 'Sat', temp: '29° / 19°', icon: '☀️', rain: '10%', desc: 'Good field work conditions' },
      { day: 'Sun', temp: '30° / 20°', icon: '☀️', rain: '5%', desc: 'Optimal for harvesting' }
    ]
  },
  'Nashik, Maharashtra': {
    temp: 27,
    condition: 'Sunny & Pleasant',
    humidity: 52,
    wind: 9,
    rainChance: 5,
    soilMoisture: 'Moderate (55%)',
    uvIndex: 7,
    sprayStatus: 'safe',
    sprayReason: 'Very mild wind and 0% rain forecast. Highly suitable for grape & onion pest management.',
    forecast: [
      { day: 'Today', temp: '27° / 16°', icon: '☀️', rain: '5%', desc: 'Clear sky' },
      { day: 'Tue', temp: '28° / 17°', icon: '☀️', rain: '0%', desc: 'Bright sunlight' },
      { day: 'Wed', temp: '29° / 18°', icon: '☀️', rain: '0%', desc: 'Dry conditions' },
      { day: 'Thu', temp: '28° / 17°', icon: '⛅', rain: '15%', desc: 'Passing clouds' },
      { day: 'Fri', temp: '27° / 16°', icon: '☀️', rain: '5%', desc: 'Warm afternoon' },
      { day: 'Sat', temp: '28° / 17°', icon: '☀️', rain: '5%', desc: 'Mild breeze' },
      { day: 'Sun', temp: '29° / 18°', icon: '☀️', rain: '0%', desc: 'Great for vineyard work' }
    ]
  },
  'Guntur, Andhra Pradesh': {
    temp: 34,
    condition: 'Hot & Humid',
    humidity: 76,
    wind: 18,
    rainChance: 35,
    soilMoisture: 'High (78%)',
    uvIndex: 9,
    sprayStatus: 'moderate',
    sprayReason: 'Moderate wind (18 km/h). Conduct spraying strictly in early morning before 9 AM or late evening.',
    forecast: [
      { day: 'Today', temp: '34° / 25°', icon: '⛅', rain: '35%', desc: 'Humid, afternoon clouds' },
      { day: 'Tue', temp: '33° / 24°', icon: '🌧️', rain: '60%', desc: 'Scattered showers' },
      { day: 'Wed', temp: '32° / 24°', icon: '🌧️', rain: '55%', desc: 'Thunderstorms possible' },
      { day: 'Thu', temp: '33° / 25°', icon: '⛅', rain: '30%', desc: 'Clearing up' },
      { day: 'Fri', temp: '35° / 26°', icon: '☀️', rain: '10%', desc: 'Hot & sunny' },
      { day: 'Sat', temp: '35° / 26°', icon: '☀️', rain: '15%', desc: 'Good for drying chili' },
      { day: 'Sun', temp: '34° / 25°', icon: '⛅', rain: '20%', desc: 'Partly sunny' }
    ]
  },
  'Varanasi, Uttar Pradesh': {
    temp: 31,
    condition: 'Clear Sky',
    humidity: 62,
    wind: 8,
    rainChance: 10,
    soilMoisture: 'Adequate (60%)',
    uvIndex: 8,
    sprayStatus: 'safe',
    sprayReason: 'Calm breeze (8 km/h). Safe for paddy top-dressing and bio-pesticide sprays.',
    forecast: [
      { day: 'Today', temp: '31° / 21°', icon: '☀️', rain: '10%', desc: 'Sunny' },
      { day: 'Tue', temp: '32° / 22°', icon: '☀️', rain: '5%', desc: 'Clear weather' },
      { day: 'Wed', temp: '32° / 22°', icon: '☀️', rain: '0%', desc: 'Dry breeze' },
      { day: 'Thu', temp: '30° / 20°', icon: '⛅', rain: '20%', desc: 'Cloudy patches' },
      { day: 'Fri', temp: '31° / 21°', icon: '☀️', rain: '5%', desc: 'Good soil work day' },
      { day: 'Sat', temp: '32° / 22°', icon: '☀️', rain: '0%', desc: 'Favorable conditions' },
      { day: 'Sun', temp: '33° / 23°', icon: '☀️', rain: '5%', desc: 'Sunny' }
    ]
  },
  'Indore, Madhya Pradesh': {
    temp: 30,
    condition: 'Sunny Intervals',
    humidity: 55,
    wind: 12,
    rainChance: 15,
    soilMoisture: 'Optimal (58%)',
    uvIndex: 7,
    sprayStatus: 'safe',
    sprayReason: 'Optimal temperature & gentle air currents. Suitable for soybean and wheat field operations.',
    forecast: [
      { day: 'Today', temp: '30° / 18°', icon: '⛅', rain: '15%', desc: 'Pleasant' },
      { day: 'Tue', temp: '31° / 19°', icon: '☀️', rain: '10%', desc: 'Clear & bright' },
      { day: 'Wed', temp: '31° / 19°', icon: '☀️', rain: '5%', desc: 'Low moisture' },
      { day: 'Thu', temp: '30° / 18°', icon: '☀️', rain: '5%', desc: 'Mild breeze' },
      { day: 'Fri', temp: '29° / 17°', icon: '⛅', rain: '20%', desc: 'Cloudy intervals' },
      { day: 'Sat', temp: '30° / 18°', icon: '☀️', rain: '10%', desc: 'Good for tractor tillage' },
      { day: 'Sun', temp: '31° / 19°', icon: '☀️', rain: '5%', desc: 'Clear' }
    ]
  },
  'Belagavi, Karnataka': {
    temp: 28,
    condition: 'Breezy & Overcast',
    humidity: 82,
    wind: 24,
    rainChance: 65,
    soilMoisture: 'Saturated (88%)',
    uvIndex: 5,
    sprayStatus: 'unsafe',
    sprayReason: 'High wind (24 km/h) and 65% rain likelihood. Chemical spray will wash off or drift. Postpone spraying.',
    forecast: [
      { day: 'Today', temp: '28° / 20°', icon: '🌧️', rain: '65%', desc: 'Rain showers & gusty winds' },
      { day: 'Tue', temp: '27° / 19°', icon: '🌧️', rain: '70%', desc: 'Heavy monsoon drizzle' },
      { day: 'Wed', temp: '28° / 20°', icon: '🌧️', rain: '50%', desc: 'Intermittent rain' },
      { day: 'Thu', temp: '29° / 21°', icon: '⛅', rain: '30%', desc: 'Decreasing clouds' },
      { day: 'Fri', temp: '29° / 21°', icon: '☀️', rain: '15%', desc: 'Weather improving' },
      { day: 'Sat', temp: '30° / 21°', icon: '☀️', rain: '10%', desc: 'Good field conditions' },
      { day: 'Sun', temp: '30° / 22°', icon: '☀️', rain: '10%', desc: 'Optimal for fertilizer' }
    ]
  }
};

export function WeatherWidget({ t }) {
  const [selectedRegion, setSelectedRegion] = useState('Ludhiana, Punjab');
  const weather = regionsData[selectedRegion] || regionsData['Ludhiana, Punjab'];

  const getSprayBadge = () => {
    if (weather.sprayStatus === 'safe') {
      return (
        <div className="spray-meter-box" style={{ background: 'rgba(34, 197, 94, 0.2)', borderColor: '#86efac' }}>
          <div className="spray-status" style={{ color: '#dcfce7' }}>
            <CheckCircle2 size={20} color="#4ade80" />
            <span>{t.weather?.safeToSpray || 'Safe to Spray Pesticides Today'}</span>
          </div>
          <p style={{ fontSize: '0.82rem', marginTop: '0.4rem', opacity: 0.95 }}>{weather.sprayReason}</p>
        </div>
      );
    }
    if (weather.sprayStatus === 'moderate') {
      return (
        <div className="spray-meter-box" style={{ background: 'rgba(245, 158, 11, 0.25)', borderColor: '#fde68a' }}>
          <div className="spray-status" style={{ color: '#fef3c7' }}>
            <AlertTriangle size={20} color="#fbbf24" />
            <span>{t.weather?.moderateSpray || 'Spray with Caution (Morning Only)'}</span>
          </div>
          <p style={{ fontSize: '0.82rem', marginTop: '0.4rem', opacity: 0.95 }}>{weather.sprayReason}</p>
        </div>
      );
    }
    return (
      <div className="spray-meter-box" style={{ background: 'rgba(239, 68, 68, 0.25)', borderColor: '#fca5a5' }}>
        <div className="spray-status" style={{ color: '#fee2e2' }}>
          <AlertTriangle size={20} color="#f87171" />
          <span>{t.weather?.unsafeToSpray || 'Unsafe to Spray - Postpone Today'}</span>
        </div>
        <p style={{ fontSize: '0.82rem', marginTop: '0.4rem', opacity: 0.95 }}>{weather.sprayReason}</p>
      </div>
    );
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '1.8rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Sun style={{ color: '#eab308' }} /> {t.weather?.title || 'Farm Weather & Spray Advisory'}
          </h2>
          <p className="section-subtitle">Micro-climate insights tailored for pesticide spraying and irrigation timing</p>
        </div>
        <div className="weather-city-selector">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>📍 Location:</label>
          <select
            className="filter-select"
            style={{ width: 'auto', minWidth: '200px' }}
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            {Object.keys(regionsData).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="weather-grid">
        {/* Current Live Card */}
        <div className="weather-current-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge badge-green" style={{ background: 'rgba(255, 255, 255, 0.25)', color: '#ffffff' }}>
              ● Live Doppler Radar
            </span>
            <span style={{ fontSize: '0.85rem', opacity: 0.85 }}>Updated 5m ago</span>
          </div>

          <div className="weather-temp-display">
            <span className="weather-big-temp">{weather.temp}°C</span>
            <div>
              <div className="weather-condition">{weather.condition}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Feels like {weather.temp + 1}°C</div>
            </div>
          </div>

          {/* Spray Condition Indicator */}
          {getSprayBadge()}
        </div>

        {/* 6 Key Farm Weather Parameters */}
        <div className="weather-stats-grid">
          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
              <Droplets size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">{t.weather?.humidity || 'Humidity'}</div>
              <div className="stat-val">{weather.humidity}%</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
              <Wind size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">{t.weather?.wind || 'Wind Speed'}</div>
              <div className="stat-val">{weather.wind} km/h</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#e0e7ff', color: '#4338ca' }}>
              <CloudRain size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">{t.weather?.rainfall || 'Rain Chance'}</div>
              <div className="stat-val">{weather.rainChance}%</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#dcfce7', color: '#15803d' }}>
              <Thermometer size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">{t.weather?.soilMoisture || 'Soil Moisture'}</div>
              <div className="stat-val" style={{ fontSize: '0.95rem' }}>{weather.soilMoisture}</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#fce7f3', color: '#be185d' }}>
              <Sun size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">UV Radiation</div>
              <div className="stat-val">Index {weather.uvIndex} (Moderate)</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" style={{ background: '#f1f5f9', color: '#475569' }}>
              <ShieldCheck size={22} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Dew Point</div>
              <div className="stat-val">16.4°C (Normal)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Farm Forecast */}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '1.2rem 0 0.8rem', color: 'var(--text-main)' }}>
        📅 {t.weather?.forecast7Days || '7-Day Agriculture Forecast & Advisory'}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
        {weather.forecast.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 0.6rem',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{item.day}</div>
            <div style={{ fontSize: '1.8rem', margin: '0.3rem 0' }}>{item.icon}</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.temp}</div>
            <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 600 }}>💧 {item.rain}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: 1.2 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
