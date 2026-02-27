import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const Philosophy = () => {
    return (
        <div className="philosophy-page">
            <SEO title="교육 철학 | GrowGraph" description="맹목적인 경쟁이 아닌, 나의 좌표를 확인하는 것에서 성장은 시작됩니다." />

            {/* Hero */}
            <section className="philo-hero">
                <div className="container-limit text-center">
                    <h1 className="philo-hero-label">GrowGraph Philosophy</h1>
                    <h2 className="philo-hero-title">데이터로 증명하고,<br />로드맵으로 지속하는 성장의 선순환</h2>
                    <p className="philo-hero-desc">그로우그래프는 단순히 한 번의 깨달음에 그치지 않고,<br className="desktop-only" />스스로의 궤적을 그리며 지속적으로 확장해 나가는 성장 생태계를 구축합니다.</p>
                </div>
            </section>

            {/* 01. Core Ideology */}
            <section className="philo-section">
                <div className="container-limit">
                    <div className="philo-grid">
                        <div>
                            <h3 className="philo-num-title">01. 핵심이념 (Core Ideology)</h3>
                            <h4 className="philo-main-title">모든 성장은 명확한<br />'좌표 인식'에서 시작됩니다.</h4>
                            <p className="philo-text">그로우그래프는 막연한 기대를 실질적인 가능성으로 <span style={{ color: '#0f172a', fontWeight: 600 }}>'가시화(Visualize)'</span>하는 순간을 함께합니다. 자신의 현재를 데이터로 직면할 때, 우리는 비로소 다음 단계를 향한 정교한 설계를 시작할 수 있습니다. 당신의 잠재력이 그래프 위에서 현실이 되도록 가장 과학적인 로드맵을 제시합니다.</p>
                        </div>
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '1.5rem', padding: '2rem', textAlign: 'center', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img loading="lazy" src="/assets/philosophy_diagram.png" alt="Core Value Visualization: 깊이, 연결, 지속, 공헌" style={{ maxWidth: '100%', height: 'auto', borderRadius: '1rem' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 02. Vision */}
            <section className="philo-section section-blue">
                <div className="container-limit text-center">
                    <h3 className="philo-num-title">02. 비전 (Vision)</h3>
                    <h4 className="philo-main-title">개인의 성장을 넘어,<br />데이터가 흐르는 건강한 조직문화를 꿈꿉니다.</h4>
                    <p className="philo-text" style={{ maxWidth: '42rem', margin: '0 auto' }}>그로우그래프는 한 사람의 변화가 그가 속한 팀과 조직, 나아가 사회 전체의 건강한 순환으로 이어지길 바랍니다. 객관적인 자기 인식을 갖춘 개인이 모여 <strong style={{ color: '#0f172a' }}>'성장 가능성'</strong>이 중심이 되는 깨어 있는 사회를 만드는 것, 그것이 그로우그래프가 지향하는 미래 교육의 본질입니다.</p>
                </div>
            </section>

            {/* 03. Core Values - Enhanced Design */}
            <section className="philo-section" style={{ padding: '6rem 1rem', background: 'linear-gradient(to bottom, #ffffff, #f1f5f9)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3 }}></div>
                <div className="container-limit" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <p style={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Core Values</p>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>성장을 지탱하는 4가지 기둥</h3>
                        <p style={{ color: '#64748b', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto' }}>표면적 변화가 아닌, 본질적이고 지속 가능한 성장을 위해 그로우그래프는 4가지 핵심 가치를 따릅니다.</p>
                    </div>
                    <div className="core-values-grid">
                        {/* Card 1: Depth */}
                        <div className="value-card-pro">
                            <div style={{ width: '3.5rem', height: '3.5rem', background: '#eff6ff', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#2563eb', fontWeight: 800, fontSize: '1.25rem' }}>01</div>
                            <h5 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>깊이 <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500, marginLeft: '0.5rem' }}>Depth</span></h5>
                            <div style={{ height: '2px', width: '2rem', background: '#2563eb', marginBottom: '1.5rem' }}></div>
                            <p style={{ color: '#64748b', lineHeight: 1.7, wordBreak: 'keep-all' }}>표면적인 문제 해결을 넘어, <strong>데이터 속에 숨겨진 개인의 본질</strong>과 심리적 기제를 깊이 있게 분석합니다.</p>
                        </div>

                        {/* Card 2: Connection */}
                        <div className="value-card-pro" style={{ marginTop: '2rem' }}>
                            <div style={{ width: '3.5rem', height: '3.5rem', background: '#f0fdf4', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#16a34a', fontWeight: 800, fontSize: '1.25rem' }}>02</div>
                            <h5 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>연결 <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500, marginLeft: '0.5rem' }}>Connection</span></h5>
                            <div style={{ height: '2px', width: '2rem', background: '#16a34a', marginBottom: '1.5rem' }}></div>
                            <p style={{ color: '#64748b', lineHeight: 1.7, wordBreak: 'keep-all' }}>개인의 내면 데이터와 외부의 삶(커리어, 관계)을 <strong>로드맵으로 연결</strong>하여 통합적인 성장을 설계합니다.</p>
                        </div>

                        {/* Card 3: Sustainability */}
                        <div className="value-card-pro">
                            <div style={{ width: '3.5rem', height: '3.5rem', background: '#fff1f2', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#e11d48', fontWeight: 800, fontSize: '1.25rem' }}>03</div>
                            <h5 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>지속 <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500, marginLeft: '0.5rem' }}>Sustainability</span></h5>
                            <div style={{ height: '2px', width: '2rem', background: '#e11d48', marginBottom: '1.5rem' }}></div>
                            <p style={{ color: '#64748b', lineHeight: 1.7, wordBreak: 'keep-all' }}>단발성 코칭이 아닌, 장기 로드맵을 통해 행동 변화가 <strong>습관으로 정착되는 성장의 지속성</strong>을 지향합니다.</p>
                        </div>

                        {/* Card 4: Contribution */}
                        <div className="value-card-pro" style={{ marginTop: '2rem' }}>
                            <div style={{ width: '3.5rem', height: '3.5rem', background: '#f5f3ff', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#7c3aed', fontWeight: 800, fontSize: '1.25rem' }}>04</div>
                            <h5 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>공헌 <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500, marginLeft: '0.5rem' }}>Contribution</span></h5>
                            <div style={{ height: '2px', width: '2rem', background: '#7c3aed', marginBottom: '1.5rem' }}></div>
                            <p style={{ color: '#64748b', lineHeight: 1.7, wordBreak: 'keep-all' }}>성장의 혜택이 머물지 않도록, <strong>사회적 선순환</strong>을 만드는 공익 프로그램을 운영합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04. Social Contribution */}
            <section className="philo-section" style={{ borderTop: '1px solid #f1f5f9' }}>
                <div className="container-limit">
                    <div className="contrib-box">
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <h3 style={{ color: '#60a5fa', fontWeight: 700, marginBottom: '1rem' }}>04. 사회적 공헌 (Contribution)</h3>
                            <h4 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>변화의 궤적이 또 다른 누군가의<br />이정표가 되도록</h4>
                            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2.5rem' }}>그로우그래프는 성장의 기회가 특정 집단에 매몰되지 않도록 노력합니다. 신진 리더들을 위한 <span style={{ color: '#fff', fontWeight: 600 }}>'공익 성장 로드맵'</span>을 운영하며, 한 사람의 내면 변화가 타인의 삶을 밝히는 등불이 되는 '선순환적 성장 생태계'를 지향합니다.</p>
                            <div className="impact-grid">
                                <div className="impact-item">
                                    <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.5rem' }}>Social Impact</p>
                                    <p style={{ fontWeight: 700 }}>선순환적 성장 생태계 구축</p>
                                </div>
                                <div className="impact-item">
                                    <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.5rem' }}>Target</p>
                                    <p style={{ fontWeight: 700 }}>신진 리더 및 취약계층 청년 지원</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', backgroundColor: '#2563eb', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2, transform: 'translate(50%, -50%)' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;
