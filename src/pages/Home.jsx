import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const reviews = [
    { name: '김서연', type: '직장인', avatar: '👩‍💼', text: '막연했던 커리어 고민이 데이터로 정리되니까 방향이 보이기 시작했어요. 코칭도 정말 실질적이었습니다.' },
    { name: '이준혁', type: '대학생', avatar: '👨‍🎓', text: '자가진단 결과를 기반으로 로드맵을 받았는데, 제가 몰랐던 강점을 발견했어요. 진로 고민이 줄었습니다.' },
    { name: '박지은', type: '팀 리더', avatar: '👩‍💻', text: '팀원들과 함께 프로그램을 경험했는데, 조직 내 소통 방식이 확실히 달라졌어요.' },
    { name: '최민수', type: '프리랜서', avatar: '🧑‍🎨', text: '번아웃 진단을 통해 제 상태를 객관적으로 인식할 수 있었고, 회복 로드맵이 큰 도움이 됐습니다.' },
    { name: '정하나', type: '직장인', avatar: '👩‍🏫', text: '1:1 코칭에서 받은 피드백이 정말 구체적이었어요. 추상적인 격려가 아닌 실행 가능한 방향을 알려줍니다.' },
    { name: '오태준', type: '창업 준비생', avatar: '🧑‍💼', text: '사업을 시작하기 전 제 성장 좌표를 확인할 수 있어서 좋았어요. 자기이해가 창업의 출발점이더라고요.' },
    { name: '한수빈', type: '대학원생', avatar: '👩‍🔬', text: '스트레스 진단 결과가 너무 정확해서 놀랐어요. 체계적인 관리 방법까지 알려주셔서 감사합니다.' },
    { name: '강도윤', type: '신입사원', avatar: '👨‍💻', text: '입사 초기 불안감이 컸는데, 프로그램을 통해 성장의 방향을 잡을 수 있었습니다. 강력 추천합니다.' },
];

function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

const Home = () => {
    const stat1 = useCountUp(1200);
    const stat2 = useCountUp(50);
    const stat3 = useCountUp(49);
    const stat4 = useCountUp(3000);

    return (
        <div className="home-page">
            <SEO schema={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "GrowGraph",
                "alternateName": "그로우그래프",
                "url": "https://growgraph.site",
                "logo": "https://growgraph.site/assets/logo.png",
                "description": "데이터 기반의 성장 로드맵 설계 전문 기관",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "여의대로 108 파크원타워1",
                    "addressLocality": "영등포구",
                    "addressRegion": "서울특별시",
                    "addressCountry": "KR"
                }
            }} />
            {/* ===== Hero Section ===== */}
            <section className="hero">
                <div className="container hero-content">
                    <p className="hero-subtitle">GROWTH VISUALIZED</p>
                    <h1 className="hero-title">
                        막연한 목표를<br />
                        <span className="text-highlight">명확한 경로</span>로.
                    </h1>
                    <p className="hero-description">
                        데이터 기반 성장 로드맵으로 당신만의 궤적을 설계하세요.<br />
                        자가진단부터 1:1 코칭까지, 체계적인 성장을 경험합니다.
                    </p>
                    <Link to="/program/info" className="hero-btn">프로그램 알아보기 →</Link>
                </div>
                <div className="hero-graphic-container">
                    <div className="glass-card">
                        <div className="glass-header">
                            <div className="glass-dot red"></div>
                            <div className="glass-dot yellow"></div>
                            <div className="glass-dot green"></div>
                        </div>
                        <svg className="growth-graph-svg" viewBox="0 0 500 300" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0f766e" />
                                    <stop offset="100%" stopColor="#2563eb" />
                                </linearGradient>
                                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {[60, 120, 180, 240].map(y => (
                                <line key={y} x1="40" y1={y} x2="480" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                            ))}
                            <path
                                className="animate-growth-area"
                                d="M40,250 L120,220 L200,200 L280,160 L360,120 L440,60 L440,280 L40,280 Z"
                                fill="url(#areaGrad)"
                            />
                            <polyline
                                className="animate-draw-line"
                                points="40,250 120,220 200,200 280,160 360,120 440,60"
                                fill="none"
                                stroke="url(#lineGrad)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {[[40, 250, 0.8], [120, 220, 1.2], [200, 200, 1.6], [280, 160, 2.0], [360, 120, 2.4]].map(([cx, cy, delay], i) => (
                                <circle
                                    key={i}
                                    className="graph-point"
                                    cx={cx}
                                    cy={cy}
                                    r="6"
                                    fill="white"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    style={{ animationDelay: `${delay}s` }}
                                />
                            ))}
                            <circle
                                className="pulse-point"
                                cx="440"
                                cy="60"
                                r="8"
                                fill="#0f172a"
                                stroke="white"
                                strokeWidth="3"
                                style={{ animationDelay: '2.6s' }}
                            />
                            <text x="440" y="45" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="14">NOW</text>
                        </svg>
                    </div>
                    <div className="floating-badge">
                        <span className="badge-icon">📈</span>
                        Growth Tracking
                        <span className="badge-check">✓</span>
                    </div>
                </div>
            </section>

            {/* ===== About Section ===== */}
            <section className="about section">
                <div className="about-grid">
                    <div className="about-text">
                        <p className="section-label">ABOUT US</p>
                        <h2 className="section-title">
                            당신의 성장 좌표를<br />함께 그려갑니다
                        </h2>
                        <p>
                            GrowGraph는 "막연한 속도 경쟁을 넘어, 나만의 성장 궤적을 발견하자"라는
                            신념에서 시작되었습니다. 대표 정지은은 교육과 코칭 현장에서
                            수많은 사람들이 자신의 잠재력을 발견하지 못한 채 방황하는 모습을 목격했습니다.
                        </p>
                        <p>
                            진정한 성장은 남과의 경쟁에서 이기는 것이 아니라,
                            내면의 목소리에 귀 기울이고 자신의 좌표를 정확히 인식하는 데서
                            시작됩니다. 배움은 단순히 결과를 위한 수단이 아닌,
                            삶을 이해하는 과정이어야 합니다.
                        </p>
                        <p>
                            데이터 기반의 체계적인 진단과 맞춤형 로드맵으로,
                            당신만의 성장 그래프를 완성해 나갈 수 있도록 함께하겠습니다.
                        </p>
                    </div>
                    <div className="about-image-wrapper">
                        <div className="quote-card">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">
                                성장은 추상적인 격려가 아닌,<br />
                                구체적인 실행의 기록이어야 합니다.<br />
                                당신의 좌표를 인식하는 순간,<br />
                                성장은 시작됩니다.
                            </p>
                            <p className="quote-author">— 정지은, GrowGraph 대표</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Reviews Section ===== */}
            <section className="reviews section">
                <div className="container" style={{ marginBottom: '3rem' }}>
                    <p className="section-label" style={{ textAlign: 'center' }}>REVIEWS</p>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        참여자들의 이야기
                    </h2>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {[...reviews, ...reviews].map((review, i) => (
                            <div key={i} className="review-card-modern">
                                <div className="review-header">
                                    <div className="review-avatar">{review.avatar}</div>
                                    <div className="review-info">
                                        <span className="review-name">{review.name}</span>
                                        <span className="review-type">{review.type}</span>
                                    </div>
                                </div>
                                <div className="review-stars">★★★★★</div>
                                <p className="review-body">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Stats Section ===== */}
            <section className="stats-section">
                <div className="stats-grid">
                    <div className="stat-item" ref={stat1.ref}>
                        <div className="stat-number-wrapper">
                            <span className="stat-number">{stat1.count.toLocaleString()}</span>
                            <span className="stat-suffix">+명</span>
                        </div>
                        <p className="stat-label">프로그램 참여자</p>
                    </div>
                    <div className="stat-item" ref={stat2.ref}>
                        <div className="stat-number-wrapper">
                            <span className="stat-number">{stat2.count}</span>
                            <span className="stat-suffix">+개</span>
                        </div>
                        <p className="stat-label">기업 파트너</p>
                    </div>
                    <div className="stat-item" ref={stat3.ref}>
                        <div className="stat-number-wrapper">
                            <span className="stat-number">{(stat3.count / 10).toFixed(1)}</span>
                            <span className="stat-suffix">/5.0</span>
                        </div>
                        <p className="stat-label">만족도</p>
                    </div>
                    <div className="stat-item" ref={stat4.ref}>
                        <div className="stat-number-wrapper">
                            <span className="stat-number">{stat4.count.toLocaleString()}</span>
                            <span className="stat-suffix">+회</span>
                        </div>
                        <p className="stat-label">코칭 세션</p>
                    </div>
                </div>
            </section>

            {/* ===== Diagnostic Cards Section ===== */}
            <section className="diagnostic-section section">
                <div className="container">
                    <p className="section-label" style={{ textAlign: 'center' }}>CHECK POINT</p>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        현재의 좌표를 확인해보세요
                    </h2>
                    <div className="diag-grid">
                        {/* Depression */}
                        <Link to="/community/diagnostic" className="diag-card-pro" style={{ '--accent': '#3b82f6' }}>
                            <div className="icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <p className="card-title">Depression</p>
                            <h3 className="card-subtitle">우울증 자가진단</h3>
                            <p className="card-desc">PHQ-9 기반의 우울 수준 자가 점검으로 현재 감정 상태를 객관적으로 확인합니다.</p>
                            <div className="card-action">
                                <span>진단 시작하기</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </div>
                        </Link>

                        {/* Burnout */}
                        <Link to="/community/diagnostic" className="diag-card-pro" style={{ '--accent': '#ef4444' }}>
                            <div className="icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 0 1-5 5 5 5 0 0 1-5-5c0-1.5.5-2 1-3 .5 1.5 1.5 2 2 2 0-2.5 1-4.5 2-6z" />
                                </svg>
                            </div>
                            <p className="card-title">Burnout</p>
                            <h3 className="card-subtitle">번아웃 진단</h3>
                            <p className="card-desc">MBI 기반 번아웃 척도를 통해 정서적 소진 수준과 직무 효능감을 평가합니다.</p>
                            <div className="card-action">
                                <span>진단 시작하기</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </div>
                        </Link>

                        {/* Stress */}
                        <Link to="/community/diagnostic" className="diag-card-pro" style={{ '--accent': '#10b981' }}>
                            <div className="icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <p className="card-title">Stress</p>
                            <h3 className="card-subtitle">스트레스 진단</h3>
                            <p className="card-desc">PSS 기반 스트레스 인지 척도로 일상에서 느끼는 스트레스 수준을 측정합니다.</p>
                            <div className="card-action">
                                <span>진단 시작하기</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </div>
                        </Link>

                        {/* Anxiety */}
                        <Link to="/community/diagnostic" className="diag-card-pro" style={{ '--accent': '#7c3aed' }}>
                            <div className="icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4" />
                                    <path d="M12 16h.01" />
                                </svg>
                            </div>
                            <p className="card-title">Anxiety</p>
                            <h3 className="card-subtitle">불안 자가진단</h3>
                            <p className="card-desc">GAD-7 기반의 불안 장애 선별 도구로 범불안 수준을 체계적으로 점검합니다.</p>
                            <div className="card-action">
                                <span>진단 시작하기</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA Section ===== */}
            <section className="cta-section">
                <div className="container">
                    <h2>당신의 성장을 시작하세요</h2>
                    <p>맞춤형 로드맵이 필요하시다면 언제든 문의해 주세요</p>
                    <Link to="/contact" className="cta-btn">제휴 문의하기 →</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
