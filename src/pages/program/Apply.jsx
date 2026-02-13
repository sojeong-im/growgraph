import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const prices = {
    'g-check': 80000,
    'g-boost': 400000,
    'g-restore': 650000,
    'g-mastery': 1000000
};

const programOptions = [
    { value: 'g-check', label: 'G-Check (1회 정밀 진단) - 80,000원' },
    { value: 'g-boost', label: 'G-Boost (5회 단기 집중) - 400,000원' },
    { value: 'g-restore', label: 'G-Restore (8회 회복 과정) - 650,000원' },
    { value: 'g-mastery', label: 'G-Mastery (3개월 마스터리) - 1,000,000원' }
];

const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    border: '1px solid #cbd5e1',
    borderRadius: '0.75rem',
    backgroundColor: '#f8fafc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s'
};

const labelStyle = {
    display: 'block',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '0.75rem',
    fontSize: '0.95rem'
};

const ProgramApply = () => {
    const navigate = useNavigate();
    const [selectedProgram, setSelectedProgram] = useState('');
    const [couponCode, setCouponCode] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponMessage, setCouponMessage] = useState({ text: '', color: '' });
    const [agreed, setAgreed] = useState(false);

    const originalPrice = prices[selectedProgram] || 0;
    const displayPrice = couponApplied ? 0 : originalPrice;

    const handleFocus = (e) => {
        e.target.style.borderColor = '#2563eb';
        e.target.style.backgroundColor = 'white';
        e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.backgroundColor = '#f8fafc';
        e.target.style.boxShadow = 'none';
    };

    const applyCoupon = () => {
        if (couponCode.trim() === 'g-614412') {
            setCouponApplied(true);
            setCouponMessage({ text: '프로모션 코드가 적용되었습니다. (100% 할인)', color: '#16a34a' });
        } else {
            setCouponApplied(false);
            setCouponMessage({ text: '유효하지 않은 코드입니다.', color: '#ef4444' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const programLabel = programOptions.find(p => p.value === selectedProgram)?.label || '';
        const finalAmount = couponApplied ? '0원 (프로모션 적용)' : (originalPrice.toLocaleString() + '원');
        alert(`성공적으로 접수되었습니다.\n\n[접수 내용]\n- 신청 프로그램: ${programLabel}\n- 결제 예정 금액: ${finalAmount}\n\n담당 코치가 기재해주신 연락처로 24시간 이내에 개별 연락드리겠습니다.`);
        navigate('/');
    };

    return (
        <div style={{ paddingTop: '6rem', paddingBottom: '8rem', backgroundColor: '#f8fafc' }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        display: 'inline-block',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        marginBottom: '1.5rem'
                    }}>Online Application</span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>프로그램 신청하기</h2>
                    <p style={{ color: '#64748b', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto' }}>
                        원하시는 프로그램을 선택하여 신청서를 작성해 주세요.<br />
                        담당 코치가 확인 후 24시간 이내에 개별 연락드립니다.
                    </p>
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: '2rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ background: '#2563eb', padding: '1.5rem', textAlign: 'center', color: 'white' }}>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>모든 상담 내용은 철저히 비밀이 보장됩니다.</p>
                    </div>

                    <div style={{ padding: '3rem 4rem' }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <label style={labelStyle}>성함</label>
                                    <input type="text" required placeholder="성함을 입력해주세요" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                                <div>
                                    <label style={labelStyle}>연락처</label>
                                    <input type="tel" required placeholder="010-0000-0000" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={labelStyle}>이메일</label>
                                <input type="email" required placeholder="example@email.com" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={labelStyle}>희망 프로그램</label>
                                <div style={{ position: 'relative' }}>
                                    <select required value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={handleFocus} onBlur={handleBlur}>
                                        <option value="">프로그램을 선택해주세요</option>
                                        {programOptions.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                    <div style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }}>&#9660;</div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={labelStyle}>상담 희망 내용 / 현재 고민</label>
                                <textarea required rows={5} placeholder="현재 가장 고민되는 부분이나 상담을 통해 얻고 싶은 변화를 작성해 주세요." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>

                            <div style={{ marginBottom: '2rem', background: '#fffbeb', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #fcd34d' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 700, color: '#92400e' }}>예상 결제 금액</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: couponApplied ? '#16a34a' : '#b45309' }}>
                                        {displayPrice.toLocaleString()}원
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#b45309', margin: 0 }}>* 선택하신 프로그램에 따라 금액이 변동됩니다.</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={labelStyle}>프로모션 코드</label>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="코드를 입력하세요"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        style={{
                                            ...inputStyle,
                                            flex: 1,
                                            ...(couponApplied ? { borderColor: '#16a34a', backgroundColor: '#f0fdf4' } :
                                                couponMessage.color === '#ef4444' ? { borderColor: '#ef4444', backgroundColor: '#fef2f2' } : {})
                                        }}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <button type="button" onClick={applyCoupon} style={{
                                        padding: '0 1.5rem', backgroundColor: '#334155', color: 'white', fontWeight: 600,
                                        borderRadius: '0.75rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s'
                                    }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#1e293b'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = '#334155'}
                                    >조회</button>
                                </div>
                                {couponMessage.text && (
                                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: couponMessage.color }}>
                                        {couponMessage.color === '#16a34a' ? '\u2705' : '\u274C'} {couponMessage.text}
                                    </p>
                                )}
                            </div>

                            <div style={{ marginBottom: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #f1f5f9' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: '1.25rem', height: '1.25rem', accentColor: '#2563eb' }} />
                                    <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 500 }}>
                                        (필수) <span style={{ color: '#2563eb', textDecoration: 'underline' }}>개인정보 수집 및 이용</span>에 동의합니다.
                                    </span>
                                </label>
                            </div>

                            <button type="submit" style={{
                                width: '100%', padding: '1.25rem', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                color: 'white', fontWeight: 800, fontSize: '1.25rem', borderRadius: '1rem', border: 'none',
                                cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2)'; }}
                            >
                                <span>신청서 제출하기</span>
                                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramApply;
