import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, Printer, ArrowDownRight, ArrowUpRight } from 'lucide-react';

// Farm Digital Khata & Expense Bookkeeper Module
// Developed as part of Full Stack Web Development mini-project
// Allows farmers to log cultivation expenditures, harvest sales, and computes Net Profit & Return on Investment (ROI %)
const initialExpenses = [
  { id: 1, date: '2026-09-10', category: 'Seeds & Sowing', item: 'Certified Wheat HD-3086 Seed (80 kg)', amount: 3200 },
  { id: 2, date: '2026-09-12', category: 'Tillage / Tractor', item: 'Deep Ploughing & Rotavator (4 hrs)', amount: 2800 },
  { id: 3, date: '2026-09-20', category: 'Fertilizer', item: '3 Bags DAP + 2 Bags Urea', amount: 4850 },
  { id: 4, date: '2026-10-01', category: 'Labor & Weeding', item: 'Field Labor (4 workers x 2 days)', amount: 3600 }
];

const initialRevenues = [
  { id: 1, date: '2026-09-28', crop: 'Vegetable Intercrop (Radish/Spinach)', qty: '12 Crates', amount: 8400 },
  { id: 2, date: '2026-10-04', crop: 'Early Paddy Harvest (Karnal Mandi)', qty: '20 Quintals', amount: 46400 }
];

export function FarmBookkeeper({ t: _t }) {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [revenues, setRevenues] = useState(initialRevenues);

  // Form State
  const [expenseItem, setExpenseItem] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('Fertilizer');
  const [expenseAmount, setExpenseAmount] = useState('');

  const [revenueCrop, setRevenueCrop] = useState('');
  const [revenueQty, setRevenueQty] = useState('');
  const [revenueAmount, setRevenueAmount] = useState('');

  const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const totalRevenue = revenues.reduce((sum, r) => sum + Number(r.amount), 0);
  const netProfit = totalRevenue - totalExpense;
  const roi = totalExpense > 0 ? ((netProfit / totalExpense) * 100).toFixed(1) : 0;

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseItem || !expenseAmount) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      category: expenseCategory,
      item: expenseItem,
      amount: Number(expenseAmount)
    };
    setExpenses([...expenses, newEntry]);
    setExpenseItem('');
    setExpenseAmount('');
  };

  const handleAddRevenue = (e) => {
    e.preventDefault();
    if (!revenueCrop || !revenueAmount) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      crop: revenueCrop,
      qty: revenueQty || '1 Lot',
      amount: Number(revenueAmount)
    };
    setRevenues([...revenues, newEntry]);
    setRevenueCrop('');
    setRevenueQty('');
    setRevenueAmount('');
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleDeleteRevenue = (id) => {
    setRevenues(revenues.filter((r) => r.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <BookOpen style={{ color: 'var(--primary-600)' }} /> {t.bookkeeper?.title || 'Farm Expense & Revenue Bookkeeper'}
          </h2>
          <p className="section-subtitle">{t.bookkeeper?.subtitle}</p>
        </div>
        <button className="btn-secondary" onClick={handlePrint}>
          <Printer size={16} /> {t.bookkeeper?.exportReport || 'Print Statement'}
        </button>
      </div>

      {/* Summary Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
        {/* Expenses */}
        <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.bookkeeper?.totalSpent || 'Total Farm Expenses'}
          </div>
          <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#dc2626', margin: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ArrowDownRight size={24} /> ₹{totalExpense.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{expenses.length} Recorded entries</div>
        </div>

        {/* Revenue */}
        <div className="card" style={{ borderLeft: '4px solid var(--primary-600)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.bookkeeper?.totalRevenue || 'Total Crop Sale Revenue'}
          </div>
          <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--primary-700)', margin: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ArrowUpRight size={24} /> ₹{totalRevenue.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{revenues.length} Harvest sales</div>
        </div>

        {/* Net Profit */}
        <div className="card" style={{ borderLeft: '4px solid #f59e0b', background: 'var(--primary-50)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.bookkeeper?.netProfit || 'Net Farm Income'}
          </div>
          <div style={{ fontSize: '1.7rem', fontWeight: 800, color: netProfit >= 0 ? '#15803d' : '#b91c1c', margin: '0.3rem 0' }}>
            ₹{netProfit.toLocaleString('en-IN')}
          </div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-800)' }}>
            ROI: {roi}% Return on Cost
          </div>
        </div>
      </div>

      {/* Two-Column Grid: Expenses Form & Revenue Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Expenses Table & Form */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            📉 Farm Expenses (लागत)
          </h3>

          <form onSubmit={handleAddExpense} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Item / Activity (e.g. Urea bags, Diesel)"
                value={expenseItem}
                onChange={(e) => setExpenseItem(e.target.value)}
                style={{ flex: 2 }}
                required
              />
              <select
                className="form-select"
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value)}
                style={{ flex: 1 }}
              >
                <option value="Fertilizer">Fertilizer</option>
                <option value="Seeds">Seeds</option>
                <option value="Tractor">Tractor</option>
                <option value="Labor">Labor</option>
                <option value="Pesticide">Pesticide</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="number"
                className="form-input"
                placeholder="Amount (₹)"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                style={{ flex: 1 }}
                required
              />
              <button type="submit" className="btn-primary" style={{ background: '#dc2626' }}>
                <Plus size={16} /> Add Cost
              </button>
            </div>
          </form>

          {/* Table of Expenses */}
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                  <th style={{ textAlign: 'left', padding: '0.4rem' }}>Item</th>
                  <th style={{ textAlign: 'right', padding: '0.4rem' }}>Amount</th>
                  <th style={{ width: '30px' }}></th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((e) => (
                  <tr key={e.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.4rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{e.item}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{e.date} • {e.category}</div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#dc2626', padding: '0.4rem' }}>
                      ₹{Number(e.amount).toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button onClick={() => handleDeleteExpense(e.id)} style={{ background: 'transparent', color: '#94a3b8' }}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Table & Form */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-700)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            📈 Crop Sales & Revenue (कमाई)
          </h3>

          <form onSubmit={handleAddRevenue} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Crop / Commodity sold (e.g. Wheat, Tomato)"
                value={revenueCrop}
                onChange={(e) => setRevenueCrop(e.target.value)}
                style={{ flex: 2 }}
                required
              />
              <input
                type="text"
                className="form-input"
                placeholder="Quantity (e.g. 20 Qtl)"
                value={revenueQty}
                onChange={(e) => setRevenueQty(e.target.value)}
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="number"
                className="form-input"
                placeholder="Sale Revenue (₹)"
                value={revenueAmount}
                onChange={(e) => setRevenueAmount(e.target.value)}
                style={{ flex: 1 }}
                required
              />
              <button type="submit" className="btn-primary">
                <Plus size={16} /> Add Sale
              </button>
            </div>
          </form>

          {/* Table of Revenues */}
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                  <th style={{ textAlign: 'left', padding: '0.4rem' }}>Crop / Sale</th>
                  <th style={{ textAlign: 'right', padding: '0.4rem' }}>Amount</th>
                  <th style={{ width: '30px' }}></th>
                </tr>
              </thead>
              <tbody>
                {revenues.map((r) => (
                  <tr key={r.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.4rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{r.crop}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.date} • {r.qty}</div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--primary-700)', padding: '0.4rem' }}>
                      ₹{Number(r.amount).toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button onClick={() => handleDeleteRevenue(r.id)} style={{ background: 'transparent', color: '#94a3b8' }}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
