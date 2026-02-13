import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const { user, signOut } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const navRef = useRef(null);

    // Pages that have dark hero sections — only these get transparent navbar at top
    const darkHeroPages = ['/', '/b2b/corporate', '/b2b/campus', '/b2b/seminar'];
    const hasDarkHero = darkHeroPages.includes(location.pathname);

    // Force scrolled (white bg, dark text) when:
    // - user scrolled past 30px
    // - dropdown is open (so all items are readable)
    // - page doesn't have a dark hero background
    const forceScrolled = scrolled || !!openDropdown || !hasDarkHero;

    // Scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const handleLogout = async () => {
        await signOut();
        navigate('/');
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const isActive = (prefix) => location.pathname.startsWith(prefix);
    const isExact = (path) => location.pathname === path;

    const menus = [
        {
            key: 'intro',
            label: '소개',
            items: [
                { to: '/intro/story', label: '그로우그래프 스토리' },
                { to: '/intro/philosophy', label: '기업이념' },
                { to: '/intro/space', label: '그로우그래프 공간' },
            ],
        },
        {
            key: 'program',
            label: '프로그램',
            items: [
                { to: '/program/info', label: '프로그램 안내' },
            ],
        },
        {
            key: 'b2b',
            label: '기업용',
            items: [
                { to: '/b2b/corporate', label: '기업 코칭' },
                { to: '/b2b/campus', label: '교육기관' },
                { to: '/b2b/seminar', label: '강연 및 세미나' },
            ],
        },
        {
            key: 'community',
            label: '커뮤니티',
            items: [
                { to: '/community/notice', label: '공지사항' },
                { to: '/community/faq', label: '자주하는 질문' },
                { to: '/community/diagnostic', label: '자가진단' },
            ],
        },
    ];

    return (
        <nav ref={navRef} className={`navbar${forceScrolled ? ' scrolled' : ''}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="navLogoGrad" x1="5" y1="35" x2="35" y2="5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2563eb" />
                                <stop offset="1" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                        <path d="M20 4L34 11.5V28.5L20 36L6 28.5V11.5L20 4Z" stroke="url(#navLogoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#fff" opacity="0.95" />
                        <path d="M11 25L17 21L23 24L30 14" stroke="url(#navLogoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11" cy="25" r="2" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
                        <circle cx="17" cy="21" r="2" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
                        <circle cx="23" cy="24" r="2" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
                        <circle cx="30" cy="14" r="2" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
                    </svg>
                    <span>Grow<span style={{ color: '#2563eb' }}>Graph</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className={`navbar-menu-wrapper${mobileOpen ? ' active' : ''}`}>
                    <ul className="navbar-menu">
                        {menus.map((menu) => {
                            const itemActive = isActive(`/${menu.key}`);
                            const dropdownOpen = openDropdown === menu.key;
                            return (
                                <li key={menu.key} className={`nav-item${itemActive ? ' active' : ''}`}>
                                    <button
                                        className={`nav-link${itemActive ? ' active' : ''}${dropdownOpen ? ' open' : ''}`}
                                        onClick={() => toggleDropdown(menu.key)}
                                    >
                                        {menu.label}
                                        <svg className={`chevron-icon${dropdownOpen ? ' rotate-180' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <ul className={`dropdown-menu${dropdownOpen ? ' active' : ''}`}>
                                        {menu.items.map((item) => (
                                            <li key={item.to} className={isExact(item.to) ? 'active' : ''}>
                                                <Link to={item.to}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}

                        {/* 제휴문의 */}
                        <li className={`nav-item${isExact('/contact') ? ' active' : ''}`}>
                            <Link to="/contact" className={`nav-link${isExact('/contact') ? ' active' : ''}`}>제휴문의</Link>
                        </li>

                        {/* Mobile only: admin links + login */}
                        <li className="mobile-only">
                            {user && (
                                <>
                                    <Link to="/esg" className="login-btn" style={{ marginBottom: '0.5rem', display: 'block' }}>ESG 경영</Link>
                                    <Link to="/admin" className="login-btn" style={{ marginBottom: '0.75rem', display: 'block' }}>관리자</Link>
                                </>
                            )}
                            {user ? (
                                <button onClick={handleLogout} className="login-btn" style={{ width: '100%' }}>로그아웃</button>
                            ) : (
                                <Link to="/login" className="login-btn">로그인</Link>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Desktop Right */}
                <div className="navbar-right-desktop">
                    {user && (
                        <>
                            <Link to="/esg" className="admin-btn">ESG 경영</Link>
                            <Link to="/admin" className="admin-btn admin-btn-outline">관리자</Link>
                        </>
                    )}
                    {user ? (
                        <button onClick={handleLogout} className="login-btn">로그아웃</button>
                    ) : (
                        <Link to="/login" className="login-btn">로그인</Link>
                    )}
                </div>

                {/* Hamburger */}
                <button className={`hamburger${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
