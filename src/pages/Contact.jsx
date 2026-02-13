import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        const { error } = await supabase.from('inquiries').insert({
            contact_name: formData.get('name'),
            company: formData.get('organization'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            type: formData.get('inquiryType'),
            message: formData.get('message'),
        });

        setSubmitting(false);

        if (error) {
            alert('문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.');
            return;
        }

        alert('문의가 성공적으로 접수되었습니다.\n담당자가 확인 후 24시간 이내에 연락드리겠습니다.');
        e.target.reset();
    };

    const handleFocus = (e) => { e.target.style.borderColor = '#2563eb'; };
    const handleBlur = (e) => { e.target.style.borderColor = '#cbd5e1'; };

    const inputStyle = {
        width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1',
        borderRadius: '0.5rem', outline: 'none', transition: 'border-color 0.2s', fontSize: '1rem'
    };
    const labelStyle = { display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' };

    return (
        <div style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#f8fafc' }}>
            <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>Partnership & Inquiry</p>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>함께 그리는 성장의 궤적</h2>
                    <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                        강연, 워크숍, 기업 제휴 등 그로우그래프와의 협업을 제안해 주세요.<br />
                        담당자가 확인 후 24시간 이내에 연락드립니다.
                    </p>
                </div>

                <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>담당자 성함 <span style={{ color: '#ef4444' }}>*</span></label>
                            <input type="text" name="name" required placeholder="성함을 입력해주세요" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>소속 (기업/기관명) <span style={{ color: '#ef4444' }}>*</span></label>
                            <input type="text" name="organization" required placeholder="예: 한국대학교, (주)그로우컴퍼니" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>연락처 <span style={{ color: '#ef4444' }}>*</span></label>
                                <input type="tel" name="phone" required placeholder="010-0000-0000" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>
                            <div>
                                <label style={labelStyle}>이메일 <span style={{ color: '#ef4444' }}>*</span></label>
                                <input type="email" name="email" required placeholder="example@email.com" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>문의 유형 <span style={{ color: '#ef4444' }}>*</span></label>
                            <select name="inquiryType" required style={{ ...inputStyle, background: 'white', cursor: 'pointer' }} onFocus={handleFocus} onBlur={handleBlur}>
                                <option value="">문의 유형을 선택해주세요</option>
                                <option value="lecture">강연 및 워크숍 요청</option>
                                <option value="corporate">기업 제휴 및 코칭 문의</option>
                                <option value="campus">교육기관/캠퍼스 프로그램 문의</option>
                                <option value="other">기타 문의</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={labelStyle}>문의 내용 <span style={{ color: '#ef4444' }}>*</span></label>
                            <textarea name="message" required rows={5} placeholder="문의하실 내용을 구체적으로 적어주시면 더 정확한 상담이 가능합니다." style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" required style={{ marginTop: '0.25rem' }} />
                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    (필수) 개인정보 수집 및 이용에 동의합니다. 제출된 정보는 문의 상담 이외의 목적으로 사용되지 않습니다.
                                </span>
                            </label>
                        </div>

                        <button type="submit" disabled={submitting} style={{
                            width: '100%', padding: '1rem', backgroundColor: '#0f172a', color: 'white',
                            fontWeight: 700, fontSize: '1.125rem', borderRadius: '0.75rem', border: 'none',
                            cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.7 : 1,
                            transition: 'background-color 0.2s'
                        }}
                            onMouseOver={(e) => { if (!submitting) e.target.style.backgroundColor = '#1e293b'; }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = '#0f172a'; }}
                        >{submitting ? '접수 중...' : '문의하기'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
