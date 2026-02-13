import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

// Intro pages
import Story from './pages/intro/Story';
import Philosophy from './pages/intro/Philosophy';
import Space from './pages/intro/Space';

// Program pages
import ProgramInfo from './pages/program/Info';
import ProgramApply from './pages/program/Apply';

// B2B pages
import Corporate from './pages/b2b/Corporate';
import Campus from './pages/b2b/Campus';
import Seminar from './pages/b2b/Seminar';

// Community pages
import Notice from './pages/community/Notice';
import FAQ from './pages/community/FAQ';
import Diagnostic from './pages/community/Diagnostic';

// Contact
import Contact from './pages/Contact';

// Auth & Protected pages
import Login from './pages/auth/Login';
import ESG from './pages/ESG';
import Admin from './pages/Admin';

function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <div className="app">
                    <Navigation />
                    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />

                            {/* Intro */}
                            <Route path="/intro/story" element={<Story />} />
                            <Route path="/intro/philosophy" element={<Philosophy />} />
                            <Route path="/intro/space" element={<Space />} />

                            {/* Program */}
                            <Route path="/program/info" element={<ProgramInfo />} />
                            <Route path="/program/apply" element={
                                <ProtectedRoute>
                                    <ProgramApply />
                                </ProtectedRoute>
                            } />

                            {/* B2B */}
                            <Route path="/b2b/corporate" element={<Corporate />} />
                            <Route path="/b2b/campus" element={<Campus />} />
                            <Route path="/b2b/seminar" element={<Seminar />} />

                            {/* Community */}
                            <Route path="/community/notice" element={<Notice />} />
                            <Route path="/community/faq" element={<FAQ />} />
                            <Route path="/community/diagnostic" element={<Diagnostic />} />

                            {/* Contact */}
                            <Route path="/contact" element={<Contact />} />

                            {/* Auth */}
                            <Route path="/login" element={<Login />} />

                            {/* Protected */}
                            <Route path="/admin" element={
                                <ProtectedRoute>
                                    <Admin />
                                </ProtectedRoute>
                            } />
                            <Route path="/esg" element={
                                <ProtectedRoute>
                                    <ESG />
                                </ProtectedRoute>
                            } />
                        </Routes>
                    </main>

                    {/* Footer */}
                    <footer style={{
                        backgroundColor: '#fff',
                        borderTop: '1px solid #e2e8f0',
                        padding: '4rem 1rem'
                    }}>
                        <div style={{
                            maxWidth: '64rem',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '2rem'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                                        GrowGraph
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Growth Visualized.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b', fontWeight: 500, fontSize: '0.9rem' }}>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
                                    <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a>
                                </div>
                            </div>
                            <div style={{
                                borderTop: '1px solid #f1f5f9',
                                paddingTop: '2rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                gap: '1rem',
                                color: '#94a3b8',
                                fontSize: '0.875rem'
                            }}>
                                <p>대표: 정지은 | 주소: 서울특별시 영등포구 여의대로 108 파크원타워1 | 문의: contact@growgraph.com</p>
                                <p>&copy; 2026 GrowGraph. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
