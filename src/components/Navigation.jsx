import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderBottom: '1px solid #e2e8f0',
            zIndex: 1000,
            padding: '1rem 2rem'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none' }}>
                    <img src="/logo.png" alt="GrowGraph" style={{ height: '40px' }} />
                </Link>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{
                    display: 'flex',
                    gap: '2rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    alignItems: 'center'
                }}>
                    {/* 소개 */}
                    <li style={{ position: 'relative' }}>
                        <button onClick={() => toggleDropdown('intro')} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            color: '#334155'
                        }}>
                            소개 ▼
                        </button>
                        {openDropdown === 'intro' && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0',
                                minWidth: '200px',
                                listStyle: 'none',
                                margin: '0.5rem 0 0 0',
                                zIndex: 100
                            }}>
                                <li><Link to="/intro/story" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>그로우그래프 스토리</Link></li>
                                <li><Link to="/intro/philosophy" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>기업이념</Link></li>
                                <li><Link to="/intro/space" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>그로우그래프 공간</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* 프로그램 */}
                    <li style={{ position: 'relative' }}>
                        <button onClick={() => toggleDropdown('program')} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            color: '#334155'
                        }}>
                            프로그램 ▼
                        </button>
                        {openDropdown === 'program' && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0',
                                minWidth: '200px',
                                listStyle: 'none',
                                margin: '0.5rem 0 0 0',
                                zIndex: 100
                            }}>
                                <li><Link to="/program/info" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>프로그램 안내</Link></li>
                                <li><Link to="/program/apply" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>온라인 신청</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* 기업용 */}
                    <li style={{ position: 'relative' }}>
                        <button onClick={() => toggleDropdown('b2b')} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            color: '#334155'
                        }}>
                            기업용 ▼
                        </button>
                        {openDropdown === 'b2b' && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0',
                                minWidth: '200px',
                                listStyle: 'none',
                                margin: '0.5rem 0 0 0',
                                zIndex: 100
                            }}>
                                <li><Link to="/b2b/corporate" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>기업 코칭</Link></li>
                                <li><Link to="/b2b/campus" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>교육기관</Link></li>
                                <li><Link to="/b2b/seminar" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>강연 및 세미나</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* 커뮤니티 */}
                    <li style={{ position: 'relative' }}>
                        <button onClick={() => toggleDropdown('community')} style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            color: '#334155'
                        }}>
                            커뮤니티 ▼
                        </button>
                        {openDropdown === 'community' && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                borderRadius: '0.5rem',
                                padding: '0.5rem 0',
                                minWidth: '200px',
                                listStyle: 'none',
                                margin: '0.5rem 0 0 0',
                                zIndex: 100
                            }}>
                                <li><Link to="/community/notice" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>공지사항</Link></li>
                                <li><Link to="/community/faq" onClick={closeMenu} style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#334155', textDecoration: 'none' }}>자주하는 질문</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/auth/login" onClick={closeMenu} style={{ padding: '0.5rem 1.5rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>로그인</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    padding: '1rem'
                }}>
                    {/* Mobile menu items here */}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navigation;
