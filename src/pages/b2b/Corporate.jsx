import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const Corporate = () => {
    const architecture = [
        { num: '01', title: 'Immersive Diagnosis (몰입형 진단)', sub: '구성원의 목소리를 데이터로 읽는 시작', desc: '그로우그래프의 기업 코칭은 조직의 성과 이전에 사람의 회복과 연결 상태를 정밀하게 진단합니다. 구성원이 스스로 동기와 가치를 발견하도록 돕고, 리더가 사람의 역량을 구조적으로 이해하는 리더십을 개발하도록 설계합니다.' },
        { num: '02', title: 'Interaction Lab (상호작용 랩)', sub: '관계의 역동을 구조화하여 소통의 길을 열다', desc: '팀 간의 관계, 소통의 흐름, 정서적 안전감 같은 \'조직의 내면\'을 가시적인 지표로 다룹니다. 구성원 모두가 자신의 위치를 확인하고 안심할 수 있는 토대 위에서, 조직은 서로의 다름을 데이터로 이해하고 성장의 연결고리를 찾습니다.' },
        { num: '03', title: 'Growth System Studio (성장 시스템 스튜디오)', sub: '지속 가능한 성장 로드맵의 구축', desc: '그로우그래프는 단기적인 퍼포먼스 향상보다 \'지속 가능한 성장 문화\'를 구축하는 것을 목표로 합니다. 워크숍, 리더십 코칭, 정기 피드백 시스템을 통해 기업이 스스로 성장의 그래프를 그려 나가는 조직으로 변화할 수 있도록 지원합니다.' },
    ];

    const principles = [
        { emoji: '📊', title: '데이터 기반 리더십', desc: '구성원이 스스로 동기를 발견하고, 리더가 사람의 특성을 구조적으로 파악하여 대응하는 리더십을 체화하도록 돕습니다.' },
        { emoji: '🔗', title: '관계의 가시화', desc: '팀 내 소통 구조와 정서적 안전감을 다루며, 서로를 이해할 수 있는 객관적인 언어와 연결 로드맵을 설계합니다.' },
        { emoji: '⚙️', title: '성장 시스템 구축', desc: '단기 성과에 매몰되지 않고, 조직이 성장의 에너지를 스스로 순환시키고 모니터링할 수 있는 시스템을 구축합니다.' },
    ];

    const programFlow = [
        { step: 'STEP 1', title: '워크숍 (Workshop)', desc: '팀 혹은 전사 단위로 진행되는 상호작용형 세션입니다. 조직 내면의 이슈를 발견하고 데이터 기반의 해결 방향을 모색합니다.', tags: ['DIAGNOSTIC', 'CO-CREATION'] },
        { step: 'STEP 2', title: '리더십 코칭 (Leadership Coaching)', desc: '리더 대상 1:1 혹은 소그룹 코칭을 진행합니다. 사람을 이해하는 리더십 실천을 위해 구체적인 행동 설계와 실행 피드백을 제공합니다.', tags: ['COACHING', 'EMBODIMENT'] },
        { step: 'STEP 3', title: '정기 피드백 시스템 (Feedback System)', desc: '프로그램 이후에도 성장이 지속되도록 리플렉션 구조를 구축합니다. 성장의 흐름을 점검하고 다시 도약하는 시스템을 설계합니다.', tags: ['FEEDBACK', 'SUSTAINABILITY'] },
    ];

    return (
        <div>
            <SEO title="기업 코칭 | GrowGraph" description="조직의 성장을 위한 데이터 기반 맞춤형 코칭 모델을 제공합니다." url="https://growgraph.site/b2b/corporate" />

            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#0f172a' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img loading="lazy" src="/assets/corporate_hero.png" alt="Corporate Growth" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(15,23,42,0.6), #0f172a)' }}></div>
                </div>
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '64rem', margin: '0 auto', textAlign: 'center', padding: '0 1rem' }}>
                    <p style={{ color: '#2dd4bf', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1.5rem' }}>기업용: Corporate Roadmap</p>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '2rem' }}>데이터와 구조로 설계하는<br />지속 가능한 조직 변화</h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1.125rem', maxWidth: '48rem', margin: '0 auto 3rem', lineHeight: 1.8, wordBreak: 'keep-all' }}>사람 중심의 리더십, 관계의 가시화, 지속 가능한 조직 성장을 만드는 그로우그래프의 기업 코칭 솔루션. 우리는 단순한 성과 수치를 넘어, 조직의 '성장 궤적' 자체를 설계합니다.</p>
                    <div style={{ color: '#64748b', fontSize: '0.75rem', letterSpacing: '0.1em', animation: 'bounce 2s infinite' }}>SCROLL TO EXPLORE<div style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>↓</div></div>
                </div>
            </section>

            {/* Growth Architecture */}
            <section style={{ padding: '6rem 1rem', background: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <p style={{ color: '#0d9488', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>GROWTH ARCHITECTURE</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', wordBreak: 'keep-all' }}>조직의 잠재력을 데이터로 읽고<br />성장의 경로를 설계하다</h2>
                        <p style={{ color: '#64748b', maxWidth: '42rem', margin: '0 auto', wordBreak: 'keep-all' }}>조직의 보이지 않는 에너지가 명확한 성장 지표로 전환되는 정교한 프로세스를 확인해 보세요.</p>
                    </div>
                    {architecture.map((item, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: i < architecture.length - 1 ? '4rem' : 0 }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'inline-block', background: '#f0fdfa', color: '#0d9488', fontWeight: 700, padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', marginBottom: '1rem' }}>{item.num}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{item.title}</h3>
                                <p style={{ color: '#0d9488', fontWeight: 500, marginBottom: '1rem' }}>{item.sub}</p>
                                <p style={{ color: '#475569', lineHeight: 1.8, wordBreak: 'keep-all' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Principles */}
            <section style={{ padding: '6rem 1rem', background: '#0f172a', color: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ color: '#2dd4bf', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>CORE PRINCIPLES</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', wordBreak: 'keep-all' }}>그로우그래프 기업 코칭의 3대 핵심축</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '42rem', margin: '0 auto', wordBreak: 'keep-all' }}>조직이 데이터와 신뢰를 바탕으로 움직이도록 설계하여, 성과보다 성장에 집중하는 문화를 정착시킵니다.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {principles.map((p, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', padding: '2rem' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{p.emoji}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{p.title}</h4>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7, wordBreak: 'keep-all' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Flow */}
            <section style={{ padding: '6rem 1rem', background: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ color: '#0d9488', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>PROGRAM FLOW</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>3단계 성장 프로세스</h2>
                        <p style={{ color: '#64748b', maxWidth: '42rem', margin: '0 auto', wordBreak: 'keep-all' }}>워크숍에서 시작해 리더십 코칭, 피드백 시스템까지 이어지는 그로우그래프만의 여정을 통해 조직의 성장 궤적을 정교하게 다듬습니다.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {programFlow.map((item, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                <div style={{ background: '#0d9488', color: '#fff', fontWeight: 700, padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', display: 'inline-block', marginBottom: '1.5rem' }}>{item.step}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem', wordBreak: 'keep-all' }}>{item.desc}</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {item.tags.map((tag, j) => (
                                        <span key={j} style={{ background: '#f0fdfa', color: '#0d9488', fontSize: '0.75rem', fontWeight: 500, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section style={{ padding: '6rem 1rem', background: 'linear-gradient(135deg, #0d9488, #0f766e)' }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
                    <p style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.8 }}>PARTNERSHIP</p>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', wordBreak: 'keep-all' }}>함께 성장하는 파트너십으로의 초대</h2>
                    <p style={{ color: '#ccfbf1', fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto 2.5rem', lineHeight: 1.8, wordBreak: 'keep-all' }}>그로우그래프와 함께 기업 문화의 새로운 경로를 설계하고 싶다면 제휴 신청을 통해 시작해 주세요. 필요한 내용을 남겨주시면 담당 전문가가 빠르게 연락드리겠습니다.</p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#0d9488', fontWeight: 700, padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        제휴 신청하기 <span style={{ fontSize: '1.25rem' }}>↗</span>
                    </Link>
                </div>
            </sec