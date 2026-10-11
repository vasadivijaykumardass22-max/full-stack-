import React, { useState } from 'react';
import { Landmark, ExternalLink, PhoneCall, Sparkles, UserCheck } from 'lucide-react';
import { govtSchemesData } from '../data/schemesData';
import confetti from 'canvas-confetti';

// Government Schemes & Subsidy Advisory Module
// Developed as part of Full Stack Web Development mini-project
// Evaluates farmer criteria (landholding size, irrigation needs) to filter eligible subsidies
export function GovtSchemes({ t, searchQuery }) {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);

  // Questionnaire state for farmer subsidy eligibility evaluation
  const [ownsLand, setOwnsLand] = useState('yes');
  const [landSize, setLandSize] = useState('small'); // 'small' (<5 acres), 'large' (>5 acres)
  const [wantsSolarPump, setWantsSolarPump] = useState('yes');
  const [eligibilityResult, setEligibilityResult] = useState(null);

  const filteredSchemes = govtSchemesData.filter((sch) => {
    if (!searchQuery) return true;
    return (
      sch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sch.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sch.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const checkMyEligibility = () => {
    const eligible = [];
    if (ownsLand === 'yes') {
      eligible.push('PM-KISAN Samman Nidhi Yojana (₹6,000 / Year)');
      eligible.push('PM Fasal Bima Yojana (Crop Insurance)');
      eligible.push('Per Drop More Crop - PMKSY Drip Irrigation (80% Subsidy)');
      eligible.push('Kisan Credit Card (KCC @ 4% Interest)');
    }
    if (wantsSolarPump === 'yes' && ownsLand === 'yes') {
      eligible.push('PM-KUSUM Solar Agri-Pump (Up to 60% Subsidy)');
    }
    if (landSize === 'small') {
      eligible.push('Sub-Mission on Agricultural Mechanization (SMAM 50% Machinery Subsidy)');
    }

    setEligibilityResult(eligible);
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
    } catch {
      // Ignore if confetti is unavailable
    }
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Landmark style={{ color: 'var(--primary-600)' }} /> {t.schemes?.title || 'Government Agricultural Schemes & Subsidies'}
          </h2>
          <p className="section-subtitle">{t.schemes?.subtitle}</p>
        </div>
        <button
          className="btn-primary"
          onClick={() => {
            setIsEligibilityModalOpen(true);
            setEligibilityResult(null);
          }}
        >
          <UserCheck size={18} /> {t.schemes?.checkEligibility || 'Check Eligibility Quiz'}
        </button>
      </div>

      {/* Kisan Call Center Helpline Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #065f46, #047857)',
          color: '#ffffff',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PhoneCall size={26} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Toll-Free National Kisan Call Centre (22 Indian Languages)</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>1800-180-1551 (6:00 AM - 10:00 PM)</div>
          </div>
        </div>
        <a
          href="tel:18001801551"
          className="btn-gold"
          style={{ textDecoration: 'none', borderRadius: 'var(--radius-full)' }}
        >
          <PhoneCall size={16} /> Call Krishi Advisor Now
        </a>
      </div>

      {/* Schemes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {filteredSchemes.map((sch) => (
          <div
            key={sch.id}
            className="card"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span className="badge badge-green">{sch.category}</span>
                <span className="badge badge-gold">{sch.deadline}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                {sch.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                {sch.description}
              </p>
            </div>

            {/* Subsidy Benefit Pill */}
            <div style={{ background: 'var(--primary-50)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-600)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                {t.schemes?.subsidyAmt || 'Subsidy & Benefit'}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-800)', marginTop: '0.1rem' }}>
                {sch.subsidyAmount}
              </div>
            </div>

            {/* Eligibility & Documents Accordion */}
            <div style={{ fontSize: '0.82rem', color: 'var(--text-main)' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-muted)' }}>
                📋 Key Documents Required:
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                {sch.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem' }}>
              <a
                href={sch.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1, textDecoration: 'none', fontSize: '0.85rem', padding: '0.6rem' }}
              >
                <ExternalLink size={16} /> {t.schemes?.applyNow || 'Official Portal'}
              </a>
              <button
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}
                onClick={() => setSelectedScheme(sch)}
              >
                Guidelines
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility Quiz Modal */}
      {isEligibilityModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEligibilityModalOpen(false)}>
          <div className="voice-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles color="var(--primary-600)" /> Scheme Eligibility Checker
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
              Answer 3 quick questions to discover all direct cash subsidies and farm welfare schemes you qualify for.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="form-label">1. Do you or your family own agricultural land in your name?</label>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem' }}>
                  <button
                    className={`btn-secondary ${ownsLand === 'yes' ? 'btn-primary' : ''}`}
                    onClick={() => setOwnsLand('yes')}
                    style={{ flex: 1 }}
                  >
                    Yes, Registered Owner
                  </button>
                  <button
                    className={`btn-secondary ${ownsLand === 'no' ? 'btn-primary' : ''}`}
                    onClick={() => setOwnsLand('no')}
                    style={{ flex: 1 }}
                  >
                    Tenant / Sharecropper
                  </button>
                </div>
              </div>

              <div>
                <label className="form-label">2. What is your total cultivable land holding?</label>
                <select
                  className="form-select"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                >
                  <option value="small">Small & Marginal Farmer (Less than 5 Acres / 2 Hectares)</option>
                  <option value="large">Medium & Large Farmer (Above 5 Acres)</option>
                </select>
              </div>

              <div>
                <label className="form-label">3. Are you seeking Solar Water Pump or Micro Drip Irrigation?</label>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem' }}>
                  <button
                    className={`btn-secondary ${wantsSolarPump === 'yes' ? 'btn-primary' : ''}`}
                    onClick={() => setWantsSolarPump('yes')}
                    style={{ flex: 1 }}
                  >
                    Yes, Need Solar Pump / Drip
                  </button>
                  <button
                    className={`btn-secondary ${wantsSolarPump === 'no' ? 'btn-primary' : ''}`}
                    onClick={() => setWantsSolarPump('no')}
                    style={{ flex: 1 }}
                  >
                    Not at this moment
                  </button>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={checkMyEligibility} style={{ width: '100%', marginBottom: '1rem' }}>
              Check Eligible Schemes
            </button>

            {eligibilityResult && (
              <div style={{ background: 'var(--primary-50)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-300)' }}>
                <div style={{ fontWeight: 800, color: 'var(--primary-800)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  🎉 You are eligible for {eligibilityResult.length} schemes:
                </div>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--primary-900)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {eligibilityResult.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <button className="btn-secondary" onClick={() => setIsEligibilityModalOpen(false)}>
                {t.common?.close || 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="modal-overlay" onClick={() => setSelectedScheme(null)}>
          <div className="voice-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              {selectedScheme.name}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {selectedScheme.description}
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>📌 Eligibility Criteria:</strong>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                {selectedScheme.eligibility.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>🚀 Step-by-Step Application:</strong>
              <ol style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                {selectedScheme.steps.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
              <button className="btn-secondary" onClick={() => setSelectedScheme(null)}>
                {t.common?.close || 'Close'}
              </button>
              <a
                href={selectedScheme.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={16} /> Open Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
