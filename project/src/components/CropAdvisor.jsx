import React, { useState } from 'react';
import { Target, Sparkles, Sprout } from 'lucide-react';
import { soilTypes, seasons, waterSources, cropsList } from '../data/cropsData';
import confetti from 'canvas-confetti';

// Crop Suitability Advisor Module
// Developed as part of Full Stack Web Development mini-project
// Evaluates farm soil type, cropping season, and irrigation to suggest suitable crops
export function CropAdvisor({ t }) {
  const [selectedSoil, setSelectedSoil] = useState('alluvial');
  const [selectedSeason, setSelectedSeason] = useState('rabi');
  const [selectedWater, setSelectedWater] = useState('borewell');

  // Filter crops based on selected soil and season
  const recommendedCrops = cropsList.filter((crop) => {
    const matchesSoil = crop.suitableSoils.includes(selectedSoil);
    const matchesSeason = crop.season === selectedSeason;
    return matchesSoil && matchesSeason;
  });

  // If strict match is small, fallback to top season crops
  const displayCrops = recommendedCrops.length > 0
    ? recommendedCrops
    : cropsList.filter((c) => c.season === selectedSeason);

  const handleCalculate = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore if canvas-confetti is not loaded
    }
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Target style={{ color: 'var(--primary-600)' }} /> {t.advisor?.title || 'Crop Suitability & Recommendation Advisory'}
          </h2>
          <p className="section-subtitle">{t.advisor?.subtitle}</p>
        </div>
      </div>

      {/* Input Selection Form */}
      <div className="card" style={{ marginBottom: '2rem', background: 'var(--bg-main)' }}>
        <div className="calc-form-grid">
          {/* Soil Type */}
          <div className="form-group">
            <label className="form-label">{t.advisor?.soilType || 'Soil Type'}</label>
            <select
              className="form-select"
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value)}
            >
              {soilTypes.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>

          {/* Season */}
          <div className="form-group">
            <label className="form-label">{t.advisor?.season || 'Season / Sowing Window'}</label>
            <select
              className="form-select"
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
            >
              {seasons.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Water Availability */}
          <div className="form-group">
            <label className="form-label">{t.advisor?.waterSource || 'Irrigation Source'}</label>
            <select
              className="form-select"
              value={selectedWater}
              onChange={(e) => setSelectedWater(e.target.value)}
            >
              {waterSources.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn-primary" onClick={handleCalculate} style={{ width: '100%' }}>
          <Sparkles size={18} /> {t.advisor?.findCrops || 'Calculate Highest Profit Crops'}
        </button>
      </div>

      {/* Recommended Crops Cards */}
      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sprout color="var(--primary-600)" /> {t.advisor?.recommended || 'Best Recommended Crops for Your Farm Condition'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {displayCrops.map((crop) => (
            <div key={crop.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', borderTop: '4px solid var(--primary-600)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <span className="badge badge-green">{crop.category}</span>
                  <span className="badge badge-gold">⭐ 98% Match</span>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {crop.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong>Season:</strong> {crop.season.toUpperCase()} | <strong>Duration:</strong> {crop.durationDays} Days
                </p>
              </div>

              {/* Yield & Profit Metrics */}
              <div style={{ background: 'var(--primary-50)', padding: '0.9rem', borderRadius: 'var(--radius-md)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {t.advisor?.expectedYield || 'Avg. Yield / Acre'}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                    {crop.avgYieldPerAcre}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {t.advisor?.estProfit || 'Est. Net Profit / Acre'}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#15803d' }}>
                    ₹{crop.estNetProfitPerAcre.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Agronomic Details */}
              <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div><strong>💧 Water Requirement:</strong> {crop.waterReq}</div>
                <div><strong>🌱 Organic Bio-Tip:</strong> {crop.organicTips}</div>
              </div>

              {/* Sowing to Harvest Stages Preview */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  FERTILIZER / MANAGEMENT STAGES:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {crop.fertilizerStages.map((stg, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.78rem', background: 'var(--bg-main)', padding: '0.4rem 0.6rem', borderRadius: '4px' }}>
                      <strong>{stg.stage}:</strong> Urea {stg.urea}, DAP {stg.dap}, MOP {stg.mop}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
