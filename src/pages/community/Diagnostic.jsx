import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { diagnosticData } from '../../data/diagnostics';

const Diagnostic = () => {
    const [currentType, setCurrentType] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const cards = [
        { type: 'depression', title: '우울증 자가진단', desc: '최근 기분이 가라앉거나 매사에 흥미가 없으신가요? 마음의 감기, 우울증 척도를 확인해 보세요.', color: '#2563eb', bg: '#eff6ff', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /> },
        { type: 'burnout', title: '번아웃 진단', desc: '업무 열정이 식고 감정적으로 소진된 느낌이 드나요? 번아웃 증후군일 수 있습니다.', color: '#e11d48', bg: '#fff1f2', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
        { type: 'stress', title: '스트레스 진단', desc: '일상의 압박감으로 인해 지쳐있지 않나요? 현재 스트레스 수준을 점검해 보세요.', color: '#16a34a', bg: '#f0fdf4', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { type: 'anxiety', title: '불안 자가진단', desc: '막연한 걱정과 두려움으로 일상이 힘든가요? 불안 수준을 확인해 드립니다.', color: '#ea580c', bg: '#fff7ed', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    ];

    const startDiag = (type) => {
        setCurrentType(type);
        setCurrentQuestion(0);
        setScores(new Array(diagnosticData[type].questions.length).fill(null));
        setShowResult(false);
    };

    const answerQuestion = (val) => {
        const newScores = [...scores];
        newScores[currentQuestion] = val;
        setScores(newScores);
        setTimeout(() => {
            if (currentQuestion + 1 >= diagnosticData[currentType].questions.length) {
                setShowResult(true);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
        }, 300);
    };

    const closeModal = () => {
        setCurrentType(null);
        setShowResult(false);
    };

    const totalScore = scores.reduce((a, b) => (a || 0) + (b || 0), 0);
    const result = currentType ? (diagnosticData[currentType].ranges.find(r => totalScore <= r.max) || diagnosticData[currentType].ranges[diagnosticData[currentType].ranges.length - 1]) : null;

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '6rem 1rem' }}>
            <SEO title="자가 진단 | GrowGraph" description="우울·불안·스트레스·번아웃. 4가지 심리 척도를 통해 현재의 내면 상태를 점검합니다." url="https://growgraph.site/community/diagnostic" />

            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>마음 건강 자가진단</h1>
                    <p style={{ color: '#64748b', fontSize: '1.125rem', wordBreak: 'keep-all' }}>
                        내 마음의 상태를 확인하고 더 건강한 성장을 위한 솔루션을 만나보세요.<br className="desktop-only" />
                        모든 진단 결과는 <strong>익명</strong>으로 처리되며 저장되지 않습니다.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {cards.map((card, i) => (
                        <div key={i} className="diag-card" onClick={() => startDiag(card.type)} style={{ background: 'white', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', cursor: 'pointer', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: '3.5rem', height: '3.5rem', background: card.bg, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: card.color }}>
                                <svg style={{ width: '1.75rem', height: '1.75rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icon}</svg>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{card.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>{card.desc}</p>
                            <div style={{ color: card.color, fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>진단 시작하기 <span style={{ marginLeft: '0.5rem' }}>→</span></div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#f1f5f9', borderRadius: '1rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                    ※ 본 자가진단은 간이 검사이며 의학적 진단을 대신할 수 없습니다. 정확한 진단과 치료는 전문가와 상담하시기 바랍니다.
                </div>
            </div>

            {/* Diagnostic Modal */}
            {currentType && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.9)', zIndex: 10000, overflowY: 'auto' }}>
                    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                        <div style={{ background: 'white', width: '100%', maxWidth: '42rem', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                            <button onClick={closeModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: 1, cursor: 'pointer', color: '#94a3b8', zIndex: 10 }}>✕</button>
                            <div style={{ padding: '3rem' }}>
                                {!showResult ? (
                                    <>
                                        <div style={{ marginBottom: '2rem' }}>
                                            <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600, marginBottom: '0.5rem' }}>{diagnosticData[currentType].title}</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.4, wordBreak: 'keep-all' }}>Q{currentQuestion + 1}. {diagnosticData[currentType].questions[currentQuestion]}</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                                            {['전혀 아니다', '가끔 그렇다', '자주 그렇다', '항상 그렇다'].map((label, val) => (
                                                <button key={val} onClick={() => answerQuestion(val)} className="diag-option" style={{ display: 'block', padding: '1rem 1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.75rem', cursor: 'pointer', color: '#475569', fontWeight: 500, background: 'white', textAlign: 'left', fontSize: '1rem' }}>{label}</button>
                                            ))}
                                        </div>
                                        <div style={{ height: '0.5rem', background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                                            <div style={{ width: `${((currentQuestion + 1) / diagnosticData[currentType].questions.length) * 100}%`, height: '100%', background: '#2563eb', transition: 'width 0.3s' }}></div>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ textAlign: 'center' }}>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '2rem' }}>진단 결과</h2>
                                        <div style={{ display: 'inline-block', padding: '2rem', borderRadius: '50%', background: `${result.color}10`, marginBottom: '2rem' }}>
                                            <div style={{ fontSize: '3rem', fontWeight: 800, color: result.color, lineHeight: 1 }}>{totalScore}점</div>
                                        </div>
                                        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: result.color, marginBottom: '1rem' }}>{result.label}</h3>
                                        <p style={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.6, maxWidth: '24rem', margin: '0 auto 3rem', wordBreak: 'keep-all' }}>{result.desc}</p>
                                        <button onClick={closeModal} style={{ padding: '1rem 3rem', background: '#1e293b', color: 'white', fontWeight: 700, borderRadius: '0.75rem', border: 'none', cursor: 'pointer' }}>확인 완료</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
   