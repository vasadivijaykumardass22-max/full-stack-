import React, { useState } from 'react';
import { FlaskConical, Droplets, Copy } from 'lucide-react';
import { cropsList } from '../data/cropsData';

// Fertilizer & Irrigation Dosage Calculator Module
// Developed as part of Full Stack Web Development mini-project
// Implements stoichiometric NPK to commercial fertilizer bag conversion (Urea, DAP, MOP)
export function FertilizerCalc({ t }) {
  const [selectedCropId, setSelectedCropId] = useState('wheat');
  const [landSize, setLandSize] = useState(2.5);
  const [unit, setUnit] = useState('acres'); // 'acres', 'hectares', 'bigha', 'guntha'
  const [copied, setCopied] = useState(false);

  // Unit conversion factor relative to standard Indian Acre
  const unitToAcreFactor = {
    acres: 1.0,
    hectares: 2.471,
    bigha: 0.625, // Standard Northern/Central average
    guntha: 0.025
  };

  const selectedCrop = cropsList.find((c) => c.id === selectedCropId) || cropsList[0];
  const acresEquivalent = Math.max(0.1, landSize * (unitToAcreFactor[unit] || 1.0));

  // Compute elemental N, P, K nutrient requirements (kg/acre)
  const totalN = Math.round(selectedCrop.npkPerAcre.n * acresEquivalent);
  const totalP = Math.round(selectedCrop.npkPerAcre.p * acresEquivalent);
  const totalK = Math.round(selectedCrop.npkPerAcre.k * acresEquivalent);

  // Commercial bag conversions
  const dapKg = Math.round((totalP / 0.46));
  const nSuppliedByDap = dapKg * 0.18;
  const remainingN = Math.max(0, totalN - nSuppliedByDap);
  const ureaKg = Math.round(remainingN / 0.46);
  const mopKg = Math.round(totalK / 0.60);

  const ureaBags = (ureaKg / 45).toFixed(1); // Standard 45kg neem coated bag
  const dapBags = (dapKg / 50).toFixed(1); // Standard 50kg DAP bag
  const mopBags = (mopKg / 50).toFixed(1);

  // Organic alternatives
  const vermicompostKg = Math.round(acresEquivalent * 1000); // 1 Ton per acre
  const jeevamruthaLitres = Math.round(acresEquivalent * 200); // 200L per acre

  // Irrigation estimate (approx 20,000 Litres per acre-inch for standard light irrigation)
  const irrigationLiters = Math.round(acresEquivalent * 45000);
  const dripRunHours = (acresEquivalent * 3.5).toFixed(1);

  const handleCopyRecipe = () => {
    const text = `KisanSetu Dosage Report for ${selectedCrop.name} (${landSize} ${unit}):
- Urea (46% N): ${ureaKg} kg (${ureaBags} bags)
- DAP (18:46:0): ${dapKg} kg (${dapBags} bags)
- MOP (Potash): ${mopKg} kg (${mopBags} bags)
- Organic Alternative: ${vermicompostKg} kg Vermicompost + ${jeevamruthaLitres}L Jeevamrutha
- Estimated Irrigation: ${irrigationLiters.toLocaleString()} Litres (~${dripRunHours} hrs drip)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <FlaskConical style={{ color: 'var(--primary-600)' }} /> {t.calculator?.title || 'Fertilizer & Irrigation Dosage Calculator'}
          </h2>
          <p className="section-subtitle">{t.calculator?.subtitle}</p>
        </div>
        <button className="btn-secondary" onClick={handleCopyRecipe}>
          <Copy size={16} /> {copied ? 'Copied Recipe!' : 'Copy Dosage Summary'}
        </button>
      </div>

      {/* Input Parameters */}
      <div className="card" style={{ marginBottom: '1.5rem', background: 'var(--bg-main)' }}>
        <div className="calc-form-grid">
          <div className="form-group">
            <label className="form-label">{t.calculator?.selectCrop || 'Select Crop'}</label>
            <select
              className="form-select"
              value={selectedCropId}
              onChange={(e) => setSelectedCropId(e.target.value)}
            >
              {cropsList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">{t.calculator?.landSize || 'Farm Land Size'}</label>
            <input
              type="number"
              className="form-input"
              value={landSize}
              onChange={(e) => setLandSize(Math.max(0.1, Number(e.target.value)))}
              step="0.5"
              min="0.1"
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.calculator?.unit || 'Land Area Unit'}</label>
            <select
              className="form-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="acres">{t.common?.acres || 'Acres'}</option>
              <option value="hectares">{t.common?.hectares || 'Hectares'}</option>
              <option value="bigha">{t.common?.bigha || 'Bigha'}</option>
              <option value="guntha">{t.common?.guntha || 'Guntha'}</option>
            </select>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          📐 Effective Calculated Area: <strong>{acresEquivalent.toFixed(2)} Acres</strong> (
          {(acresEquivalent * 0.4047).toFixed(2)} Hectares)
        </div>
      </div>

      {/* Calculated Commercial Chemical Dosage Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
        {/* Urea */}
        <div className="card" style={{ borderLeft: '4px solid var(--primary-600)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            NITROGEN SOURCE
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.3rem 0' }}>
            {t.calculator?.ureaReq || 'Neem Coated Urea (46% N)'}
          </h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-700)' }}>
            {ureaKg} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kg</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            ≈ <strong>{ureaBags}</strong> Bags (45 kg each)
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--primary-700)', marginTop: '0.5rem' }}>
            Apply in 2-3 split top-dressing doses
          </div>
        </div>

        {/* DAP */}
        <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            PHOSPHORUS SOURCE
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.3rem 0' }}>
            {t.calculator?.dapReq || 'DAP (18:46:0) / SSP'}
          </h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d97706' }}>
            {dapKg} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kg</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            ≈ <strong>{dapBags}</strong> Bags (50 kg each)
          </div>
          <div style={{ fontSize: '0.75rem', color: '#b45309', marginTop: '0.5rem' }}>
            Apply 100% basal at sowing time
          </div>
        </div>

        {/* MOP Potash */}
        <div className="card" style={{ borderLeft: '4px solid #0284c7' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            POTASSIUM SOURCE
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.3rem 0' }}>
            {t.calculator?.mopReq || 'MOP Potash (60% K2O)'}
          </h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7' }}>
            {mopKg} <span style={{ fontSize: '1rem', fontWeight: 500 }}>kg</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            ≈ <strong>{mopBags}</strong> Bags (50 kg each)
          </div>
          <div style={{ fontSize: '0.75rem', color: '#0369a1', marginTop: '0.5rem' }}>
            Improves grain weight & disease resistance
          </div>
        </div>
      </div>

      {/* Organic Alternative & Water Schedule */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Organic Recipe */}
        <div className="treatment-box organic">
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-800)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            🌿 {t.calculator?.organicOption || 'Zero-Budget Organic Nutrient Recipe'}:
          </h4>
          <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--primary-900)' }}>
            <li>
              <strong>Vermicompost / Well-Rotted FYM:</strong> {vermicompostKg.toLocaleString()} kg (spread during final ploughing)
            </li>
            <li>
              <strong>Liquid Jeevamrutha:</strong> {jeevamruthaLitres.toLocaleString()} Litres applied via irrigation water at 21-day intervals
            </li>
            <li>
              <strong>Neem Seed Cake:</strong> {Math.round(acresEquivalent * 100)} kg to suppress root nematodes and white grubs
            </li>
          </ul>
        </div>

        {/* Irrigation Water Schedule */}
        <div className="card" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0369a1', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Droplets size={20} color="#0284c7" /> {t.calculator?.waterSchedule || 'Water & Irrigation Scheduling'}:
          </h4>
          <div style={{ fontSize: '0.9rem', color: '#0c4a6e', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div>
              Estimated Water Requirement: <strong>{irrigationLiters.toLocaleString()} Litres</strong>
            </div>
            <div>
              Drip Irrigation Runtime: <strong>~{dripRunHours} Hours</strong> per cycle
            </div>
            <div style={{ fontSize: '0.78rem', color: '#0284c7', marginTop: '0.2rem' }}>
              💡 Irrigate during evening or early morning to reduce evapotranspiration loss by up to 35%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
