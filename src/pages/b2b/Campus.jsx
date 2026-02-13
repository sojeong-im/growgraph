import React from 'react';
import { Link } from 'react-router-dom';

const Campus = () => {
    const studios = [
        { num: '01', label: 'Discovery Studio', title: '청년의 가능성을 데이터로 깨우는 진로 여정', desc: '학생들이 스스로의 가능성을 객관적인 지표로 발견할 수 있도록 돕습니다. 내면의 동기를 세밀하게 분석하고, 사회적 기준이 아닌 \'나\'를 기준으로 한 진짜 삶을 설계하도록 로드맵을 함께 그립니다.' },
        { num: '02', label: 'Interaction Lab', title: '소통의 구조를 통해 이어지는 정서적 성장', desc: '또래, 교사와의 관계 속에서 정서적 안전감을 확보할 수 있도록 관계의 역동을 분석합니다. 서로를 이해하는 객관적인 언어와 감정 표현 훈련으로 학교 공동체에 건강한 소통 구조를 설계합니다.' },
        { num: '03', label: 'Growth System Lab', title: '자생적 학습 생태계 및 로드맵 구축', desc: '프로그램 종료 후에도 학생들이 스스로 성장을 이어갈 수 있도록 맞춤형 커리큘럼과 멘토링 시스템을 설계합니다. 학교 현장에 최적화된 실천 전략으로, 성장의 그래프가 멈추지 않는 학습 공동체를 만듭니다.' },
    ];

    const principles = [
        { emoji: '📊', title: '내면 데이터 분석', desc: '성찰형 질문과 진단을 통해 자신을 구조적으로 이해하고, 학습 동기를 스스로 발견하도록 돕습니다.' },
        { emoji: '💪', title: '자존감 지표 회복', desc: '비교와 불안을 넘어, 학생이 자신의 강점과 가능성을 데이터로 확인하고 신뢰할 수 있도록 정서적 회복을 지원합니다.' },
        { emoji: '🎯', title: '자기 주도 로드맵', desc: '학생 스스로 자신의 길을 구체적인 경로로 그려볼 수 있도록 정교한 맞춤형 진로 설계를 지원합니다.' },
    ];

    const programFlow = [
        { num: 1, title: '사전 진단 & 니즈 분석', desc: '데이터 분석과 인터뷰를 통해 학생들의 현재 좌표를 살피고, 학교 현장의 요구사항을 구체적으로 파악합니다.', tags: ['ASSESSMENT', 'INSIGHT'] },
        { num: 2, title: '성찰형 워크숍', desc: '정서와 경험을 구조화하는 워크숍으로 자기 이해의 토대를 다집니다. 본격적인 성장 설계의 시작입니다.', tags: ['WORKSHOP', 'REFLECTION'] },
        { num: 3, title: '멘토링 & 코칭', desc: '소그룹 혹은 1:1 코칭으로 학생이 자신의 로드맵을 구체화하고 실행 전략을 세우도록 돕습니다.', tags: ['COACHING', 'MENTORING'] },
        { num: 4, title: '후속 리포트 & 커뮤니티', desc: '성장이 지속될 수 있도록 개인별 성장 추적 리포트와 온라인 커뮤니티, 교사 연계 세션을 제공합니다.', tags: ['FOLLOW-UP', 'COMMUNITY'] },
    ];

    return (
        <div>
            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #1e40af, #0f172a)' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                    <img src="/assets/campus_education.png" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.5rem 1.5rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#93c5fd', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>🎓 GrowGraph for Campus</span>
                    </div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '2rem', color: '#fff' }}>데이터와 로드맵으로 설계하는<br />교육 생태계 혁신</h2>
                    <p style={{ color: '#e2e8f0', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.8, wordBreak: 'keep-all' }}>그로우그래프의 교육기관 파트너십은 진로 탐색, 자존감 회복, 정서적 성장까지 이어지는 전 과정을 <strong style={{ color: '#fff' }}>구조화된 데이터</strong>로 설계합니다.</p>
                    <div style={{ marginTop: '3rem', color: '#94a3b8', fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE<div style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>↓</div></div>
                </div>
            </section>

            {/* Structural Education Journey */}
            <section style={{ padding: '5rem 1rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>STRUCTURAL EDUCATION JOURNEY</h3>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>데이터를 따라 흐르는 교육 경험 설계</p>
                    </div>
                    {studios.map((s, i) => (
                        <div key={i} style={{ marginBottom: i < studios.length - 1 ? '4rem' : 0 }}>
                            <p style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{s.num}. {s.label}</p>
                            <h4 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', wordBreak: 'keep-all' }}>{s.title}</h4>
                            <p style={{ color: '#475569', lineHeight: 1.8, wordBreak: 'keep-all' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Principles */}
            <section style={{ padding: '5rem 1rem', background: '#fff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>CORE PRINCIPLES</h3>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>그로우그래프 교육 파트너십의 세 가지 축</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {principles.map((p, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '1.5rem', background: '#f8fafc' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.emoji}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{p.title}</h4>
                                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.7, wordBreak: 'keep-all' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Flow */}
            <section style={{ padding: '5rem 1rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>PROGRAM FLOW</h3>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>4단계 교육 프로그램 여정</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {programFlow.map((item, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
                                <div style={{ width: '4rem', height: '4rem', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem' }}>{item.num}</div>
                                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', wordBreak: 'keep-all' }}>{item.desc}</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {item.tags.map((tag, j) => (
                                        <span key={j} style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section style={{ padding: '5rem 1rem', background: '#0f172a' }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', wordBreak: 'keep-all' }}>데이터 기반의 교육 생태계를 함께 설계하고 싶으신가요?</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.8, wordBreak: 'keep-all' }}>교육기관 맞춤형 프로그램과 컨설팅이 필요하다면, 그로우그래프와 함께 학생들의 성장을 지표로 증명하는 여정을 시작해보세요.</p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#2563eb', color: '#fff', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(37,99,235,0.3)' }}>
                        파트너십 문의하기 <span style={{ fontSize: '1.25rem' }}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Campus;
