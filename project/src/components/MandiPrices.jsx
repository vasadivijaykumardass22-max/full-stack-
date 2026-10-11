import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Store, MapPin, Calculator } from 'lucide-react';
import { mandiStates, mandiCommodities, mandiPricesData } from '../data/mandiData';

// Mandi Price Comparison & Net Profit Calculator Module
// Developed as part of Full Stack Web Development mini-project
// Compares modal commodity prices across APMC mandis and deducts transport costs
export function MandiPrices({ t, searchQuery }) {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCommodity, setSelectedCommodity] = useState('All Commodities');
  
  // Freight / Transport distance profit calculator state
  const [cropQty, setCropQty] = useState(25); // Quantity in Quintals
  const [transportRatePerKm, setTransportRatePerKm] = useState(12); // Diesel/freight ₹ per km

  // Filter mandi prices based on selected state, commodity, and search bar text
  const filteredMandis = mandiPricesData.filter((item) => {
    const matchState = selectedState === 'All States' || item.state === selectedState;
    const matchCommodity = selectedCommodity === 'All Commodities' || item.commodity.includes(selectedCommodity.split(' (')[0]);
    const matchSearch =
      !searchQuery ||
      item.mandi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchState && matchCommodity && matchSearch;
  });

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Store style={{ color: 'var(--primary-600)' }} /> {t.mandi?.title || 'Live APMC Mandi Rates (कृषि मंडी भाव)'}
          </h2>
          <p className="section-subtitle">{t.mandi?.subtitle}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-green">● APMC Benchmark Rates</span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filter-group">
          <label>{t.mandi?.state || 'Select State'}</label>
          <select
            className="filter-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {mandiStates.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>{t.mandi?.commodity || 'Crop / Commodity'}</label>
          <select
            className="filter-select"
            value={selectedCommodity}
            onChange={(e) => setSelectedCommodity(e.target.value)}
          >
            {mandiCommodities.map((comm) => (
              <option key={comm} value={comm}>
                {comm}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mandi Cards Grid */}
      <div className="mandi-grid">
        {filteredMandis.map((item) => {
          // Calculate Net Realization for calculator
          const grossValue = cropQty * item.modalPrice;
          const transportCost = item.distanceKm * transportRatePerKm * 2; // round trip
          const netRealization = grossValue - transportCost;

          return (
            <div key={item.id} className="mandi-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                    {item.commodity}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: item.trendUp ? 'var(--primary-600)' : '#ef4444'
                    }}
                  >
                    {item.trendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {item.changePercent}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {item.mandi}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} /> {item.district}, {item.state} ({item.distanceKm} km away)
                </p>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  <strong>Variety:</strong> {item.variety} | <strong>Arrivals:</strong> {item.arrivalQty}
                </div>
              </div>

              {/* Price Highlights */}
              <div className="mandi-price-row">
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {t.mandi?.modalPrice || 'Current Modal Price'}
                  </div>
                  <div className="mandi-modal-val">
                    ₹{item.modalPrice.toLocaleString('en-IN')}
                    <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)' }}> / qtl</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.78rem' }}>
                  <div>Min: ₹{item.minPrice}</div>
                  <div>Max: ₹{item.maxPrice}</div>
                </div>
              </div>

              {/* Mini 7-Day Trend Sparkline Chart */}
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '2px', fontWeight: 600 }}>
                  7-Day Price Trend (₹{Math.min(...item.history)} - ₹{Math.max(...item.history)})
                </div>
                <div className="sparkline">
                  {item.history.map((val, idx) => {
                    const min = Math.min(...item.history);
                    const max = Math.max(...item.history);
                    const heightPercent = max === min ? 50 : Math.round(((val - min) / (max - min)) * 70 + 30);
                    return (
                      <div
                        key={idx}
                        className="spark-bar"
                        style={{
                          height: `${heightPercent}%`,
                          background: item.trendUp ? 'var(--primary-500)' : '#f87171'
                        }}
                        title={`Day ${idx + 1}: ₹${val}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Net Profit Calculator Estimation */}
              <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.6rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)' }}>Net Value ({cropQty} Qtl):</span>
                <strong style={{ color: 'var(--primary-700)', fontSize: '0.95rem' }}>
                  ₹{netRealization.toLocaleString('en-IN')}
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandi Distance & Net Profit Maximizer Widget */}
      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, var(--bg-card), var(--primary-50))' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary-800)' }}>
          <Calculator size={20} /> {t.mandi?.distanceCalc || 'Mandi Profit & Transport Distance Maximizer'}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
          {t.mandi?.calcPrompt || 'Calculate your real earnings after subtracting vehicle freight and diesel expenses to pick the highest paying market yard.'}
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div className="form-group" style={{ flex: '1', minWidth: '180px' }}>
            <label className="form-label">Harvested Quantity (Quintals)</label>
            <input
              type="number"
              className="form-input"
              value={cropQty}
              onChange={(e) => setCropQty(Math.max(1, Number(e.target.value)))}
              min="1"
            />
          </div>

          <div className="form-group" style={{ flex: '1', minWidth: '180px' }}>
            <label className="form-label">Transport Freight Rate (₹ / km)</label>
            <input
              type="number"
              className="form-input"
              value={transportRatePerKm}
              onChange={(e) => setTransportRatePerKm(Math.max(0, Number(e.target.value)))}
              min="0"
            />
          </div>

          <div style={{ padding: '0.75rem 1.2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', minWidth: '220px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Selected Batch Size:</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {cropQty} Quintals ({(cropQty * 100).toLocaleString('en-IN')} kg)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
