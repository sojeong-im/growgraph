import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Growth Visualized
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.95 }}>
                        막연한 목표를 명확한 경로로.<br />
                        데이터 기반 성장 로드맵을 경험하세요.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/program/info"
                            style={{
                                padding: '1rem 2.5rem',
                                backgroundColor: 'white',
                                color: '#667eea',
                                borderRadius: '0.75rem',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.125rem',
                                transition: 'transform 0.2s'
                            }}
                        >
                            프로그램 알아보기
                        </Link>
                        <Link
                            to="/community/diagnostic"
                            style={{
                                padding: '1rem 2.5rem',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                borderRadius: '0.75rem',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.125rem',
                                transition: 'transform 0.2s'
                            }}
                        >
                            자가진단 시작하기
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '4rem', color: '#0f172a' }}>
                        왜 그로우그래프인가?
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: '데이터 기반 분석', description: '객관적인 지표로 현재 상태를 정확히 파악합니다' },
                            { title: '맞춤형 로드맵', description: '개인의 특성에 맞는 성장 경로를 설계합니다' },
                            { title: '지속적인 관리', description: '장기적인 변화를 위한 체계적인 지원을 제공합니다' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{
                                backgroundColor: 'white',
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '6rem 2rem',
                backgroundColor: '#0f172a',
                color: 'white',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        당신의 성장을 시작하세요
                    </h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                        지금 바로 온라인 신청을 통해 나만의 로드맵을 받아보세요
                    </p>
                    <Link
                        to="/program/apply"
                        style={{
                            display: 'inline-block',
                            padding: '1.25rem 3rem',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            borderRadius: '0.75rem',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.125rem'
                        }}
                    >
                        온라인 신청하기 →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
