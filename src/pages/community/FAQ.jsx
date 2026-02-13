import React, { useState } from 'react';
import { faqData } from '../../data/faq';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '6rem 1rem' }}>
            <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>자주 묻는 질문</h1>
                    <p style={{ color: '#64748b' }}>그로우그래프 성장에 대해 궁금하신 내용을 찾아보세요.</p>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9' }}>
                    {faqData.map((item, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <button onClick={() => toggle(index)} style={{ width: '100%', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}>
                                <span style={{ fontSize: '1.125rem', fontWeight: 600, color: openIndex === index ? '#2563eb' : '#1e293b', transition: 'color 0.2s' }}>{item.q}</span>
                                <svg style={{ width: '1.5rem', height: '1.5rem', color: openIndex === index ? '#2563eb' : '#94a3b8', transition: 'transform 0.3s, color 0.3s', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div style={{ maxHeight: openIndex === index ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}>
                                <p style={{ paddingBottom: '1.5rem', color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', padding: '2rem', background: '#f8fafc', borderRadius: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: '#475569', marginBottom: '1rem' }}>찾으시는 답변이 없으신가요?</p>
                    <a href="mailto:contact@growgraph.co.kr" style={{ color: '#2563eb', fontWeight: 700, textDecoration: 'none' }}>1:1 문의하기 →</a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
