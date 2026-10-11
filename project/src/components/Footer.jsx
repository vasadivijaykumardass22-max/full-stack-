import React from 'react';
import { Sprout, Heart } from 'lucide-react';

export function Footer({ t: _t, onOpenVoice }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Project Col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <div className="brand-icon-box" style={{ width: '36px', height: '36px', fontSize: '1.2rem' }}>
              <Sprout size={20} />
            </div>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-700)' }}>
              KisanSetu (किसान सेतु)
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
            A student web application designed to support Indian farmers with real-time APMC Mandi rates, plant disease diagnostic guides, weather spray safety advisories, and fertilizer dosage calculations.
          </p>

          <div className="helpline-box">
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Kisan Call Centre Toll-Free
            </div>
            <div className="helpline-phone">📞 1800-180-1551</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Free national helpline for crop & agricultural guidance</div>
          </div>
        </div>

        {/* Quick Tools */}
        <div>
          <h4>Farmer Decision Tools</h4>
          <ul>
            <li><a href="#crop-doctor">Crop Disease Diagnostic Guide</a></li>
            <li><a href="#mandi-bhav">APMC Mandi Rates & Freight Calculator</a></li>
            <li><a href="#weather-spray">Weather & Spraying Safety Index</a></li>
            <li><a href="#fertilizer-calc">NPK & Irrigation Calculator</a></li>
            <li><a href="#crop-advisor">Crop Suitability Advisory</a></li>
          </ul>
        </div>

        {/* Official Gov Portals */}
        <div>
          <h4>Government Portals</h4>
          <ul>
            <li>
              <a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer">
                PM-KISAN Portal ↗
              </a>
            </li>
            <li>
              <a href="https://enam.gov.in" target="_blank" rel="noreferrer">
                e-NAM National Mandi ↗
              </a>
            </li>
            <li>
              <a href="https://pmfby.gov.in" target="_blank" rel="noreferrer">
                PM Fasal Bima (PMFBY) ↗
              </a>
            </li>
            <li>
              <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noreferrer">
                Soil Health Card Portal ↗
              </a>
            </li>
            <li>
              <a href="https://icar.org.in" target="_blank" rel="noreferrer">
                ICAR Research Guidelines ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Support & Academic Info */}
        <div>
          <h4>Project Information</h4>
          <ul>
            <li>
              <button
                onClick={onOpenVoice}
                style={{ background: 'none', color: 'var(--primary-600)', fontWeight: 600, fontSize: '0.9rem', textAlign: 'left', padding: 0 }}
              >
                🎙️ Voice Helpdesk (Speech API)
              </button>
            </li>
            <li><a href="#bazaar">Farmer Forum & Chaupal</a></li>
            <li><a href="#bookkeeper">Farm Khata (Expense Ledger)</a></li>
            <li><a href="#schemes">Subsidy Eligibility Quiz</a></li>
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: '1320px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <div>
          KisanSetu • Full Stack Web Development Mini Project (Academic Year 2025-26)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          Developed by <strong>Vasadi Vijay Kumar</strong> <Heart size={14} color="#16a34a" fill="#16a34a" />
        </div>
      </div>
    </footer>
  );
}
