import React, { useState } from 'react';
import { ShoppingBag, MessageSquare, ThumbsUp, PlusCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { marketplaceListings, forumDiscussions } from '../data/communityData';

// Kisan Bazaar & Community Chaupal (Q&A) Module
// Developed as part of Full Stack Web Development mini-project
// Facilitates peer-to-peer equipment sharing, local farm produce trade, and agricultural expert advisory forum
export function KisanBazaar({ t }) {
  const [bazaarTab, setBazaarTab] = useState('marketplace'); // 'marketplace' or 'forum'
  const [listings, setListings] = useState(marketplaceListings);
  const [discussions, setDiscussions] = useState(forumDiscussions);
  const [filterCategory, setFilterCategory] = useState('all');

  // Modal State
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newCategory, setNewCategory] = useState('rentals');
  const [newPhone, setNewPhone] = useState('+91 ');

  const filteredListings = listings.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const handleLikeDiscussion = (id) => {
    setDiscussions(
      discussions.map((d) => (d.id === id ? { ...d, likes: d.likes + 1 } : d))
    );
  };

  const handleCreateListing = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newAd = {
      id: `custom_${Date.now()}`,
      title: newTitle,
      category: newCategory,
      price: newPrice || 'Negotiable',
      location: newLocation || 'Local Farm',
      seller: 'Verified Farmer User',
      phone: newPhone,
      verified: true,
      image: newCategory === 'rentals'
        ? 'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=600&q=80'
        : 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
      description: 'Newly listed farm equipment/produce on KisanSetu.',
      postedTime: 'Just now'
    };

    setListings([newAd, ...listings]);
    setIsPostModalOpen(false);
    setNewTitle('');
    setNewPrice('');
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <ShoppingBag style={{ color: 'var(--primary-600)' }} /> {t.bazaar?.title || 'Kisan Bazaar & Farmer Community Forum'}
          </h2>
          <p className="section-subtitle">{t.bazaar?.subtitle}</p>
        </div>
        <button className="btn-primary" onClick={() => setIsPostModalOpen(true)}>
          <PlusCircle size={18} /> {t.bazaar?.postListing || '+ Post Ad or Question'}
        </button>
      </div>

      {/* Hero Community Banner */}
      <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.5rem', maxHeight: '180px', position: 'relative' }}>
        <img
          src="/kisan-bazaar.jpg"
          alt="Farmer Community Marketplace"
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
            color: '#ffffff',
            padding: '1rem 1.5rem'
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>🚜 Direct Farmer-to-Farmer Trade & Expert Advisory</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Zero middlemen commission. Connect directly via WhatsApp or phone.</div>
        </div>
      </div>

      {/* Sub Tab Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          className={`tab-btn ${bazaarTab === 'marketplace' ? 'active' : ''}`}
          onClick={() => setBazaarTab('marketplace')}
        >
          <ShoppingBag size={18} /> Marketplace & Rentals
        </button>
        <button
          className={`tab-btn ${bazaarTab === 'forum' ? 'active' : ''}`}
          onClick={() => setBazaarTab('forum')}
        >
          <MessageSquare size={18} /> Farmer Chaupal & Q&A
        </button>
      </div>

      {/* Marketplace Tab Content */}
      {bazaarTab === 'marketplace' && (
        <div>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            <button
              className={`badge ${filterCategory === 'all' ? 'badge-green' : 'btn-secondary'}`}
              style={{ cursor: 'pointer', padding: '0.4rem 0.9rem' }}
              onClick={() => setFilterCategory('all')}
            >
              All Items ({listings.length})
            </button>
            <button
              className={`badge ${filterCategory === 'rentals' ? 'badge-green' : 'btn-secondary'}`}
              style={{ cursor: 'pointer', padding: '0.4rem 0.9rem' }}
              onClick={() => setFilterCategory('rentals')}
            >
              🚜 Machinery & Drone Rentals
            </button>
            <button
              className={`badge ${filterCategory === 'seeds' ? 'badge-green' : 'btn-secondary'}`}
              style={{ cursor: 'pointer', padding: '0.4rem 0.9rem' }}
              onClick={() => setFilterCategory('seeds')}
            >
              🌾 Seeds & Bio-Fertilizers
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '160px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    className="badge badge-gold"
                    style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.75rem' }}
                  >
                    {item.price}
                  </span>
                </div>

                <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.8rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <div>📍 <strong>Location:</strong> {item.location}</div>
                    <div>👤 <strong>Farmer:</strong> {item.seller}</div>
                  </div>

                  <a
                    href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(item.seller)},%20I%20saw%20your%20listing%20for%20${encodeURIComponent(item.title)}%20on%20KisanSetu.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', width: '100%', fontSize: '0.85rem', padding: '0.6rem' }}
                  >
                    <MessageCircle size={16} /> Contact via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Forum Q&A Tab Content */}
      {bazaarTab === 'forum' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {discussions.map((disc) => (
            <div key={disc.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    "{disc.question}"
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Asked by <strong>{disc.author}</strong> ({disc.location}) • Crop: <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>{disc.crop}</span> • {disc.time}
                  </div>
                </div>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={() => handleLikeDiscussion(disc.id)}
                >
                  <ThumbsUp size={14} /> {disc.likes}
                </button>
              </div>

              {/* Expert Answer */}
              {disc.expertAnswer && (
                <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-200)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{disc.expertAnswer.avatar}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                        {disc.expertAnswer.expert}
                      </div>
                      <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>
                        <ShieldCheck size={12} /> {disc.expertAnswer.badge}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--primary-950)', lineHeight: 1.45 }}>
                    {disc.expertAnswer.reply}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Post New Listing Modal */}
      {isPostModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPostModalOpen(false)}>
          <div className="voice-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
              Create Farmer Listing / Question
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
              Share your machinery for rent, sell seeds, or ask community advice.
            </p>

            <form onSubmit={handleCreateListing} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                >
                  <option value="rentals">Machinery & Equipment Rental</option>
                  <option value="seeds">Seeds & Organic Fertilizers</option>
                  <option value="forum">Community Question</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Title / Description</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Swaraj 744 Tractor with Plough for rent"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Expected Price / Rate</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. ₹600 / Hour or ₹50 / kg"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Village / District, State</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Khanna, Ludhiana, Punjab"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Contact Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="+91 98765 00000"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsPostModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Publish Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
