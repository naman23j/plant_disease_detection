import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Please upload an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:5000/detect', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to connect to the server');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // FAQ toggle
  const toggleFaq = (idx) => {
    setFaqOpen(faqOpen.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <div className="container">
      <h1 className="main-title">Plant Disease Detection System</h1>
      <p className="subtitle">Upload a plant image to detect potential diseases</p>

      <div className="upload-section card">
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
          {image && (
            <div className="image-preview">
              <img src={image} alt="Preview" />
            </div>
          )}
        </div>

        <button 
          onClick={handleSubmit} 
          disabled={loading || !image}
          className="detect-button"
        >
          {loading ? 'Detecting...' : 'Detect Disease'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="result-container card">
          <h2>Detection Results</h2>
          <div className="result-details">
            <p><strong>Disease:</strong> {result.disease}</p>
            <p><strong>Confidence:</strong> {result.confidence}%</p>
            <h3>Recommendations:</h3>
            <ul>
              {Array.isArray(result.recommendations) && result.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Educational Section */}
      <div className="education-section">
        <div className="education-card">
          <span className="education-icon" role="img" aria-label="leaf">🌿</span>
          <div>
            <h3>Rotate Crops</h3>
            <p>Crop rotation helps prevent the buildup of disease-causing organisms in the soil.</p>
          </div>
        </div>
        <div className="education-card">
          <span className="education-icon" role="img" aria-label="microscope">🔬</span>
          <div>
            <h3>Inspect Regularly</h3>
            <p>Check your plants often for early signs of disease and remove affected leaves promptly.</p>
          </div>
        </div>
        <div className="education-card">
          <span className="education-icon" role="img" aria-label="sun">☀️</span>
          <div>
            <h3>Ensure Good Sunlight</h3>
            <p>Most plants need plenty of sunlight to stay healthy and resist diseases.</p>
          </div>
        </div>
        <div className="education-card">
          <span className="education-icon" role="img" aria-label="water drop">💧</span>
          <div>
            <h3>Water at the Base</h3>
            <p>Water plants at the base to avoid wetting leaves, which can promote fungal growth.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(0)}>
            What types of plants are supported? {faqOpen[0] ? '▲' : '▼'}
          </div>
          {faqOpen[0] && (
            <div className="faq-answer">
              The system currently supports common crops like tomato, potato, and more. We are expanding to include more plant types soon!
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(1)}>
            How accurate is the detection? {faqOpen[1] ? '▲' : '▼'}
          </div>
          {faqOpen[1] && (
            <div className="faq-answer">
              The AI model is trained on thousands of images and achieves high accuracy, but results may vary depending on image quality and disease stage.
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(2)}>
            Is this service free for farmers? {faqOpen[2] ? '▲' : '▼'}
          </div>
          {faqOpen[2] && (
            <div className="faq-answer">
              Yes! Our mission is to empower farmers with free, accessible plant health tools.
            </div>
          )}
        </div>
      </div>

      {/* Plant Care Blog Section */}
      <div className="blog-section">
        <div className="blog-title">Plant Care Blog</div>
        <div className="blog-cards">
          <div className="blog-card">
            <span className="blog-icon" role="img" aria-label="watering">💦</span>
            <h4>How to Water Plants Effectively</h4>
            <p>Learn the best times and methods for watering to keep your plants healthy and disease-free.</p>
          </div>
          <div className="blog-card">
            <span className="blog-icon" role="img" aria-label="fertilizer">🌱</span>
            <h4>Choosing the Right Fertilizer</h4>
            <p>Discover how to select and apply fertilizers for optimal plant growth and resilience.</p>
          </div>
          <div className="blog-card">
            <span className="blog-icon" role="img" aria-label="pruning">✂️</span>
            <h4>Pruning for Plant Health</h4>
            <p>Find out how regular pruning can prevent disease and encourage strong, healthy plants.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h1>About This Website</h1>
      <p>
        <strong>Plant Disease Detection System</strong> is an AI-powered web application designed to help farmers and gardeners quickly identify plant diseases from images. By leveraging advanced machine learning, the app provides instant feedback and actionable recommendations, helping users protect their crops and improve yields.
      </p>
      <div className="about-animation plant-leaf"></div>
      <h2>How It Helps Farmers</h2>
      <ul>
        <li>Early detection of plant diseases to prevent crop loss</li>
        <li>Easy-to-use interface for quick diagnosis</li>
        <li>Personalized recommendations for treatment</li>
        <li>Supports sustainable and healthy farming practices</li>
      </ul>
      <div className="about-animation plant-sprout"></div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Reach out to our team!
      </p>
      <ul>
        <li>Email: <a href="mailto:support@plantdiseaseai.com">support@plantdiseaseai.com</a></li>
        <li>Phone: +1-800-PLANT-AI</li>
        <li>Address: 123 Green Lane, AgriCity, Country</li>
      </ul>
      <div className="contact-animation plant-vine"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="logo_new.jpeg" alt="Logo" style={{ height: 40, marginRight: 12 , borderRadius: '50%'}} />
            Plant Disease Detection
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 