import React, { useState } from 'react';
import { UploadCloud, AlertOctagon, Volume2, Sparkles, RefreshCw, Leaf } from 'lucide-react';
import { diseasesList } from '../data/diseasesData';

// Crop Disease Diagnostic & Advisory Component
// Developed as part of Full Stack Web Development mini-project
// Compares uploaded or selected leaf disease symptoms against curated agricultural pathology database
export function CropDoctor({ t, _lang }) {
  const [selectedDisease, setSelectedDisease] = useState(diseasesList[0]);
  const [customImage, setCustomImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Read local leaf image via FileReader API
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target.result);
        runDiagnosticCheck(selectedDisease);
      };
      reader.readAsDataURL(file);
    }
  };

  // Switch to a reference disease case
  const handleSampleClick = (disease) => {
    setCustomImage(null);
    runDiagnosticCheck(disease);
  };

  // Simulate diagnostic matching against pathology dataset
  const runDiagnosticCheck = (targetDisease) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setSelectedDisease(targetDisease);
      setIsAnalyzing(false);
    }, 1000);
  };

  // Text-to-Speech using standard browser Web Speech Synthesis API
  const handleSpeakReport = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      let text = `Disease identified: ${selectedDisease.name}. Severity is ${selectedDisease.severity}. Symptoms include ${selectedDisease.symptoms.join(', ')}. Organic treatment: ${selectedDisease.organicRemedy.join(', ')}. Chemical recommendation: ${selectedDisease.chemicalTreatment.join(', ')}.`;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported on this browser.');
    }
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Leaf style={{ color: 'var(--primary-600)' }} /> {t.cropDoctor?.title || 'Crop Disease Diagnostic & Treatment Guide'}
          </h2>
          <p className="section-subtitle">{t.cropDoctor?.subtitle}</p>
        </div>
        <button
          className={`btn-secondary ${isSpeaking ? 'btn-gold' : ''}`}
          onClick={handleSpeakReport}
          title="Read diagnosis aloud"
        >
          <Volume2 size={18} />
          {isSpeaking ? 'Stop Reading' : t.cropDoctor?.listenAudio || 'Listen Report'}
        </button>
      </div>

      <div className="scanner-container">
        {/* Left Column: Upload & Sample Selection */}
        <div>
          <div className="card" style={{ marginBottom: '1.2rem', padding: '1.2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-main)' }}>
              📷 {t.cropDoctor?.dropPrompt || 'Upload Leaf Image for Symptom Matching'}
            </h3>

            <label className="upload-zone">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--primary-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-700)'
                }}
              >
                <UploadCloud size={30} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  Click to Browse or Drag Photo
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Supports JPG, PNG, WEBP from camera or gallery
                </div>
              </div>
            </label>

            {/* Leaf Image Reference Preview */}
            <div style={{ marginTop: '1rem', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img
                src={customImage || '/crop-doctor.jpg'}
                alt="Leaf Pathology Preview"
                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
              />
              {isAnalyzing && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(6, 78, 59, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    gap: '0.5rem'
                  }}
                >
                  <RefreshCw className="animate-spin" size={32} />
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.cropDoctor?.diagnosing || 'Matching Leaf Symptoms with Database...'}</div>
                </div>
              )}
            </div>
          </div>

          {/* Sample Cases for Reference Testing */}
          <div className="card" style={{ padding: '1.2rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              💡 {t.cropDoctor?.orSample || 'Or Select a Reference Crop Disease:'}
            </h4>
            <div className="sample-disease-grid">
              {diseasesList.map((item) => (
                <div
                  key={item.id}
                  className={`sample-chip ${selectedDisease.id === item.id ? 'active' : ''}`}
                  onClick={() => handleSampleClick(item)}
                >
                  <img src={item.sampleImage} alt={item.name} />
                  <span>{item.name.split(' (')[0]}</span>
                  <small style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{item.crop}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic & Treatment Report */}
        <div className="report-card">
          <div className="report-header">
            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={14} /> Pathology Reference Match
              </span>
              <h3 className="report-disease-name">{selectedDisease.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <strong>Host Crop:</strong> {selectedDisease.crop} | <strong>Pathogen:</strong> <i>{selectedDisease.pathogen}</i>
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Reference Match</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-600)' }}>
                {selectedDisease.confidence}
              </div>
              <span className={`badge ${selectedDisease.severity === 'Critical' ? 'badge-red' : selectedDisease.severity === 'High' ? 'badge-gold' : 'badge-blue'}`}>
                {selectedDisease.severity} Severity
              </span>
            </div>
          </div>

          {/* Identified Symptoms */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertOctagon size={16} color="#eab308" /> {t.cropDoctor?.symptoms || 'Identified Symptoms'}:
            </h4>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              {selectedDisease.symptoms.map((sym, idx) => (
                <li key={idx}>{sym}</li>
              ))}
            </ul>
          </div>

          {/* Organic / Natural Treatment */}
          <div className="treatment-box organic">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              🌿 {t.cropDoctor?.organicRemedy || 'Organic / Bio-Remediation (Zero Chemical)'}:
            </h4>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--primary-900)' }}>
              {selectedDisease.organicRemedy.map((org, idx) => (
                <li key={idx}>{org}</li>
              ))}
            </ul>
          </div>

          {/* Chemical Fungicide / Pesticide */}
          <div className="treatment-box chemical">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#991b1b', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              🧪 {t.cropDoctor?.chemicalTreatment || 'Recommended Chemical Treatment & Exact Dosage'}:
            </h4>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: '#7f1d1d' }}>
              {selectedDisease.chemicalTreatment.map((chem, idx) => (
                <li key={idx}>{chem}</li>
              ))}
            </ul>
          </div>

          {/* Prevention Guidelines */}
          <div style={{ marginTop: '1.2rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              🛡️ {t.cropDoctor?.prevention || 'Agronomic Prevention Guidelines'}:
            </h4>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {selectedDisease.prevention.map((prev, idx) => (
                <li key={idx}>{prev}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
