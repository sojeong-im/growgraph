import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

// Intro pages
import Story from './pages/intro/Story';
import Philosophy from './pages/intro/Philosophy';
import Space from './pages/intro/Space';

// B2B pages
import Corporate from './pages/b2b/Corporate';
import Campus from './pages/b2b/Campus';
import Seminar from './pages/b2b/Seminar';

// Community pages
import Notice from './pages/community/Notice';
import FAQ from './pages/community/FAQ';

function App() {
    return (
        <Router>
            <div className="app">
                <Navigation />
                <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
                    <Routes>
                        {/* Home */}
                        <Route path="/" element={<Home />} />

                        {/* Intro */}
                        <Route path="/intro/story" element={<Story />} />
                        <Route path="/intro/philosophy" element={<Philosophy />} />
                        <Route path="/intro/space" element={<Space />} />

                        {/* B2B */}
                        <Route path="/b2b/corporate" element={<Corporate />} />
                        <Route path="/b2b/campus" element={<Campus />} />
                        <Route path="/b2b/seminar" element={<Seminar />} />

                        {/* Community */}
                        <Route path="/community/notice" element={<Notice />} />
                        <Route path="/community/faq" element={<FAQ />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer style={{
                    backgroundColor: '#0f172a',
                    color: 'white',
                    padding: '3rem 2rem',
                    textAlign: 'center'
                }}>
                    <p style={{ marginBottom: '1rem' }}>© 2024 GrowGraph. All rights reserved.</p>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                        Growth Visualized - 데이터로 증명하는 성장의 궤적
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
