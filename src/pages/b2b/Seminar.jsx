import React, { useEffect, useRef } from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const Seminar = () => {
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        revealRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <div>
            <SEO title="워크숍 & 세미나 | GrowGraph" description="실행을 변화로 이끄는 그로우그래프의 특화 워크숍과 세미나" url="https://growgraph.site/b2b/seminar" />

            {/* Hero */}
            <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#0f172a' }}>
                <div className="seminar-spotlight"></div>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
                    <img loading="lazy" src="/assets/seminar_hero.png" alt="Seminar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.7), rgba(15,23,42,0.9))' }}></div>
                <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', textAlign: 'center', padding: '2rem 1rem', color: '#fff' }}>
                    <p style={{ color: '#60a5fa', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>GrowGraph Seminar</p>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '2rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)', color: '#ffffff' }}>데이터가 이정표가 되는 순간,<br />성장은 무대로 확장됩니다</h2>
                    <p style={{ color: '#f8fafc', fontSize: '1.35rem', fontWeight: 500, maxWidth: '44rem', margin: '0 auto 2.5rem', lineHeight: 1.7, wordBreak: 'keep-all', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>그로우그래프의 강연 및 세미나는 단순히 정보를 듣는 시간을 넘어, 자신의 삶을 데이터로 직면하고 새로운 경로를 설계하도록 돕습니다.</p>
                    <div style={{ color: '#64748b', fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE<div style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>↓</div></div>
                </div>
            </section>

            {/* Immersive Storytelling */}
            <section style={{ padding: '5rem 1rem', background: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div ref={addRef} className="reveal-on-scroll" style={{ marginBottom: '4rem' }}>
                        <p style={{ color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>IMMERSIVE STORYTELLING</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', wordBreak: 'keep-all' }}>데이터를 따라 펼쳐지는 그로우그래프의 무대</h3>
                    </div>
                    <div ref={addRef} className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {[
                            { title: '01. Expert Keynote', desc: '리더십, 정서적 회복, 변화의 기술을 데이터 기반의 통찰로 다룹니다.' },
                            { title: '02. Interactive Roadmap', desc: '질문과 대화를 통해 서로의 성장 데이터를 공유하며, 조직과 커뮤니티가 함께 나아갈 최적의 경로를 찾도록 돕습니다.' },
                            { title: '03. Immersive Growth Experience', desc: '이야기와 시각적 데이터를 결합하여, 멈춰있던 성장의 감각을 깨우고 일상에 실질적인 변화를 가져옵니다.' },
                        ].map((item, i) => (
                            <div key={i}>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.8, wordBreak: 'keep-all' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signature Elements */}
            <section style={{ padding: '5rem 1rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <h3 ref={addRef} className="reveal-on-scroll" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', textAlign: 'center', marginBottom: '4rem' }}>SIGNATURE ELEMENTS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { num: '01', title: '데이터 기반 스토리텔링', desc: '객관적인 지표와 실제 사례를 결합하여 논리적이고 감각적인 몰입 경험을 제공합니다.' },
                            { num: '02', title: '참여형 분석 구조', desc: '실시간 설문, 라이브 폴, 분석 세션을 통해 관객이 자신의 성장을 직접 설계하도록 유도합니다.' },
                            { num: '03', title: '맞춤형 전략 큐레이션', desc: '기업, 교육기관, 대중 등 대상의 특성에 맞춰 최적화된 콘텐츠와 연사를 큐레이션합니다.' },
                        ].map((item, i) => (
                            <div key={i} ref={addRef} className="seminar-card reveal-on-scroll" style={{ background: '#fff', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <div className="step-number" style={{ width: '3rem', height: '3rem', background: '#0f172a', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem' }}>{item.num}</div>
                                <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, wordBreak: 'keep-all' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Flow */}
            <section style={{ padding: '5rem 1rem', background: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', textAlign: 'center', marginBottom: '4rem' }}>EXPERIENCE FLOW</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { num: '01', title: '컨셉 디스커버리', desc: '대상의 현재 좌표와 목적을 분석하여 강연 혹은 세미나의 핵심 메시지를 설계합니다.' },
                            { num: '02', title: '로드맵 & 경험 디자인', desc: '스토리 라인과 시각적 데이터, 참여 장치를 구성하여 몰입감 있는 성장의 장을 만듭니다.' },
                            { num: '03', title: '라이브 세션', desc: '연사와 코치가 무대를 이끌며, 관객과의 실시간 상호작용을 통해 성장의 확신을 나눕니다.' },
                            { num: '04', title: '사후 분석 리포트', desc: '강연 후 참여자의 변화 지표를 모니터링하고 지원합니다.' },
                        ].map((item, i) => (
                            <div key={i} style={{ position: 'relative', padding: '2rem', border: '1px solid #f1f5f9', borderRadius: '1.5rem', background: '#fff' }}>
                                <span style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '3rem', fontWeight: 900, color: '#f1f5f9' }}>{item.num}</span>
                                <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Spectrum */}
            <section style={{ padding: '5rem 1rem', background: '#2563eb', color: '#fff' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>PARTNER SPECTRUM</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { num: '01', title: '기업 및 조직', desc: '리더십, 조직문화 강연 및 임직원 세미나' },
                            { num: '02', title: '학교 및 교육기관', desc: '자기 주도적 진로 설계, 정서 지능 특강' },
                            { num: '03', title: '공공 & 커뮤니티', desc: '미래 설계 세미나와 성장 토크 콘서트' },
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1.5rem' }}>
                                <div style={{ width: '3.5rem', height: '3.5rem', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.num}</div>
                                <h4 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ color: '#bfdbfe', fontSize: '0.875rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Invitation */}
            <section style={{ padding: '6rem 1rem', background: '#fff', textAlign: 'center' }}>
                <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', wordBreak: 'keep-all' }}>성장의 경로를 그리는 무대를 함께 만들고 싶으신가요?</h3>
                    <p style={{ color: '#64748b', marginBottom: '2.5rem', wordBreak: 'keep-all' }}>맞춤형 콘텐츠와 연사 큐레이션으로 기억에 남는 성장의 순간을 설계해 드립니다.</p>
                    <Link to="/contact" style={{ display: 'inline-block', background: '#0f172a', color: '#fff', fontWeight: 700, padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.125rem', textDecoration: 'none' }}>강연 문의하기 ↗</Link>
                </div>
            </sec