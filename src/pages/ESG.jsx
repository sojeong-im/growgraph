import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

/* ───── Calendar + Time Multi-Select Component ───── */
function CalendarPicker({ selectedSlots, setSelectedSlots }) {
    const [viewDate, setViewDate] = useState(new Date());
    const [pickingTimeFor, setPickingTimeFor] = useState(null);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthLabel = `${year}년 ${month + 1}월`;

    const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    const dateKey = (d) => `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

    const toggleDate = (day) => {
        const key = dateKey(day);
        const d = new Date(year, month, day);
        if (d < today) return;
        if (selectedSlots[key]) {
            const next = { ...selectedSlots };
            delete next[key];
            setSelectedSlots(next);
            if (pickingTimeFor === key) setPickingTimeFor(null);
        } else {
            setSelectedSlots({ ...selectedSlots, [key]: [] });
            setPickingTimeFor(key);
        }
    };

    const toggleTime = (dateKey, time) => {
        const times = selectedSlots[dateKey] || [];
        const next = times.includes(time) ? times.filter(t => t !== time) : [...times, time].sort();
        setSelectedSlots({ ...selectedSlots, [dateKey]: next });
    };

    const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
    const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    return (
        <div>
            {/* Month nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <button type="button" onClick={prevMonth} style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', padding: '0.25rem 0.5rem' }}>&lt;</button>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{monthLabel}</span>
                <button type="button" onClick={nextMonth} style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', padding: '0.25rem 0.5rem' }}>&gt;</button>
            </div>
            {/* Day headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                {['일', '월', '화', '수', '목', '금', '토'].map(d => <div key={d}>{d}</div>)}
            </div>
            {/* Cells */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                {cells.map((day, i) => {
                    if (!day) return <div key={`e${i}`} />;
                    const key = dateKey(day);
                    const isPast = new Date(year, month, day) < today;
                    const isSelected = !!selectedSlots[key];
                    return (
                        <button
                            key={key}
                            type="button"
                            onClick={() => toggleDate(day)}
                            disabled={isPast}
                            style={{
                                padding: '0.4rem',
                                fontSize: '0.8rem',
                                fontWeight: isSelected ? 700 : 400,
                                borderRadius: '0.5rem',
                                border: isSelected ? '2px solid #2563eb' : '1px solid transparent',
                                backgroundColor: isSelected ? '#dbeafe' : 'transparent',
                                color: isPast ? '#cbd5e1' : isSelected ? '#1d4ed8' : '#334155',
                                cursor: isPast ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
            {/* Time picker for selected date */}
            {pickingTimeFor && selectedSlots[pickingTimeFor] !== undefined && (
                <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: '#f1f5f9', borderRadius: '0.75rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>{pickingTimeFor} 시간 선택</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {timeSlots.map(t => {
                            const active = (selectedSlots[pickingTimeFor] || []).includes(t);
                            return (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => toggleTime(pickingTimeFor, t)}
                                    style={{
                                        padding: '0.3rem 0.6rem',
                                        fontSize: '0.75rem',
                                        borderRadius: '0.375rem',
                                        border: active ? '1px solid #2563eb' : '1px solid #cbd5e1',
                                        backgroundColor: active ? '#2563eb' : 'white',
                                        color: active ? 'white' : '#334155',
                                        cursor: 'pointer',
                                        fontWeight: active ? 600 : 400,
                                    }}
                                >
                                    {t}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
            {/* Summary of all selected */}
            {Object.keys(selectedSlots).length > 0 && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
                    {Object.entries(selectedSlots).map(([d, times]) => (
                        <div key={d} style={{ cursor: 'pointer', padding: '0.15rem 0' }} onClick={() => setPickingTimeFor(d)}>
                            <span style={{ fontWeight: 600 }}>{d}</span>
                            {times.length > 0 ? ` : ${times.join(', ')}` : ' (시간 미선택 - 클릭하여 선택)'}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ───── Application Modal ───── */
function ApplicationModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        name: '', age: '', gender: '', phone: '', location: '', program: '', referralCode: '',
    });
    const [selectedSlots, setSelectedSlots] = useState({});
    const [referralApplied, setReferralApplied] = useState(false);

    const prices = {
        'g-check': 80000,
        'g-boost': 400000,
        'g-restore': 650000,
        'g-mastery': 1000000,
    };

    const basePrice = prices[form.program] || 0;
    const finalPrice = referralApplied ? 0 : basePrice;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (name === 'referralCode') setReferralApplied(false);
    };

    const applyReferral = () => {
        if (form.referralCode.trim().length > 0) {
            setReferralApplied(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const datesSummary = Object.entries(selectedSlots)
            .map(([d, times]) => `${d} ${times.join(', ')}`)
            .join('\n');
        alert(`성공적으로 접수되었습니다.\n\n[접수 내용]\n- 성함: ${form.name}\n- 프로그램: ${form.program}\n- 희망 일정:\n${datesSummary}\n- 결제 금액: ${finalPrice.toLocaleString()}원\n\n담당 코치가 24시간 이내에 연락드리겠습니다.`);
        onClose();
    };

    if (!isOpen) return null;

    const inputStyle = {
        width: '100%',
        padding: '0.7rem 0.85rem',
        borderRadius: '0.6rem',
        border: '1px solid #cbd5e1',
        fontSize: '0.875rem',
        outline: 'none',
        backgroundColor: '#f8fafc',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#334155',
        marginBottom: '0.35rem',
    };

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '1rem',
        }} onClick={onClose}>
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '1.25rem',
                    width: '100%',
                    maxWidth: '520px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '1.25rem 1.25rem 0 0', color: 'white', position: 'relative' }}>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem' }}>온라인 신청서</h2>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>성장의 경로를 설계하는 그로우그래프 로드맵 신청서입니다.</p>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.25rem', cursor: 'pointer' }}
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
                    {/* Name + Age */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div>
                            <label style={labelStyle}>이름</label>
                            <input name="name" value={form.name} onChange={handleChange} required placeholder="성함을 입력해주세요" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>나이 (만)</label>
                            <input name="age" type="number" value={form.age} onChange={handleChange} required placeholder="예: 25" style={inputStyle} />
                        </div>
                    </div>

                    {/* Gender */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>성별</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {['남성', '여성', '기타'].map(g => (
                                <button
                                    key={g}
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, gender: g }))}
                                    style={{
                                        flex: 1,
                                        padding: '0.6rem',
                                        borderRadius: '0.6rem',
                                        border: form.gender === g ? '2px solid #2563eb' : '1px solid #cbd5e1',
                                        backgroundColor: form.gender === g ? '#dbeafe' : 'white',
                                        color: form.gender === g ? '#1d4ed8' : '#64748b',
                                        fontWeight: form.gender === g ? 700 : 400,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Phone */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>연락처</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="010-0000-0000" style={inputStyle} />
                    </div>

                    {/* Location */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>희망 장소</label>
                        <select name="location" value={form.location} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                            <option value="">장소를 선택해주세요</option>
                            <option value="mapo">마포점</option>
                            <option value="yeouido">여의도점</option>
                            <option value="namguro">남구로점</option>
                        </select>
                    </div>

                    {/* Date/Time Calendar */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>희망 일자 (복수 선택 가능)</label>
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '0.75rem' }}>
                            <CalendarPicker selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />
                        </div>
                    </div>

                    {/* Program */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>프로그램 선택</label>
                        <select name="program" value={form.program} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                            <option value="">참여를 희망하는 프로그램을 선택해주세요</option>
                            <option value="g-check">G-Check (1회 정밀 진단) - 80,000원</option>
                            <option value="g-boost">G-Boost (5회 단기 집중) - 400,000원</option>
                            <option value="g-restore">G-Restore (8회 회복 과정) - 650,000원</option>
                            <option value="g-mastery">G-Mastery (3개월 마스터리) - 1,000,000원</option>
                        </select>
                    </div>

                    {/* Referral Code */}
                    <div style={{ marginBottom: '0.75rem' }}>
                        <label style={labelStyle}>추천 코드 (선택)</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input name="referralCode" value={form.referralCode} onChange={handleChange} placeholder="추천인 코드가 있다면 입력해주세요" style={{ ...inputStyle, flex: 1 }} />
                            <button
                                type="button"
                                onClick={applyReferral}
                                style={{
                                    padding: '0.7rem 1rem',
                                    backgroundColor: referralApplied ? '#059669' : '#2563eb',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.6rem',
                                    fontWeight: 600,
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {referralApplied ? '적용됨' : '조회'}
                            </button>
                        </div>
                    </div>

                    {/* Price */}
                    <div style={{
                        marginBottom: '1rem',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: referralApplied ? '#ecfdf5' : '#fffbeb',
                        border: referralApplied ? '1px solid #6ee7b7' : '1px solid #fde68a',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 700, color: referralApplied ? '#065f46' : '#92400e', fontSize: '0.9rem' }}>
                                결제 예정 금액
                            </span>
                            <div style={{ textAlign: 'right' }}>
                                {referralApplied && basePrice > 0 && (
                                    <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.85rem', marginRight: '0.5rem' }}>
                                        {basePrice.toLocaleString()}원
                                    </span>
                                )}
                                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: referralApplied ? '#059669' : '#b45309' }}>
                                    {finalPrice.toLocaleString()}원
                                </span>
                            </div>
                        </div>
                        {referralApplied && (
                            <p style={{ fontSize: '0.75rem', color: '#059669', marginTop: '0.35rem', fontWeight: 500 }}>
                                추천 코드가 적용되었습니다.
                            </p>
                        )}
                    </div>

                    {/* Privacy */}
                    <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '0.6rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', color: '#475569' }}>
                            <input type="checkbox" required style={{ width: '1rem', height: '1rem', accentColor: '#2563eb' }} />
                            (필수) 개인정보 수집 및 이용에 동의합니다.
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.9rem',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderRadius: '0.75rem',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        신청서 제출하기
                    </button>
                </form>
            </div>
        </div>
    );
}

/* ───── ESG Page ───── */
const ESG = () => {
    const { user } = useAuth();
    const [modalOpen, setModalOpen] = useState(false);

    const esgData = {
        environment: [
            {
                title: '탄소 발자국 절감',
                description: '2026년 대비 사무실 에너지 사용량 20% 감축 목표를 수립하고, 전 지점 LED 조명 전환 및 에너지 효율 등급 A 이상 장비를 도입합니다.',
                metric: '20%',
                metricLabel: '에너지 절감 목표',
            },
            {
                title: '디지털 전환 기반 페이퍼리스',
                description: '모든 상담 기록, 로드맵 리포트, 계약서를 디지털화하여 연간 종이 사용량을 90% 이상 절감합니다. 클라우드 기반 문서 관리 시스템을 통해 환경 부하를 최소화합니다.',
                metric: '90%',
                metricLabel: '페이퍼리스 전환율',
            },
            {
                title: '친환경 공간 운영',
                description: '상담 공간에 공기 정화 식물 배치, 친환경 인테리어 소재 사용, 일회용품 제로 정책을 시행합니다. 각 지점의 환경 영향 평가를 분기별로 실시합니다.',
                metric: 'Zero',
                metricLabel: '일회용품 정책',
            },
        ],
        social: [
            {
                title: '취약계층 무료 상담 프로그램',
                description: '저소득 가정 청소년, 경력단절 여성, 은퇴 시니어 대상 무료 로드맵 상담을 연 100건 이상 제공합니다. 지역사회 복지관 및 교육기관과 협력하여 접근성을 높입니다.',
                metric: '100+',
                metricLabel: '연간 무료 상담 건수',
            },
            {
                title: '코치 역량 개발 및 처우 개선',
                description: '전문 코치진의 지속적인 성장을 위해 연간 80시간 이상의 전문 교육을 지원하고, 공정한 보상 체계와 유연 근무제를 시행합니다.',
                metric: '80h+',
                metricLabel: '연간 교육 시간',
            },
            {
                title: '다양성과 포용성',
                description: '성별, 연령, 장애 여부에 관계없이 모든 내담자와 직원이 존중받는 환경을 조성합니다. 상담 프로그램 내 다양성 감수성 교육을 필수 포함합니다.',
                metric: '100%',
                metricLabel: 'DE&I 교육 이수율',
            },
        ],
        governance: [
            {
                title: '개인정보 보호 및 데이터 보안',
                description: '내담자의 상담 데이터를 최고 수준의 암호화로 보호하며, 개인정보보호법을 엄격히 준수합니다. 연 2회 외부 보안 감사를 실시합니다.',
                metric: '2회/년',
                metricLabel: '외부 보안 감사',
            },
            {
                title: '투명한 경영 보고',
                description: '분기별 ESG 경영 현황 보고서를 발행하고, 주요 이해관계자에게 경영 성과와 사회적 영향을 투명하게 공개합니다.',
                metric: '분기별',
                metricLabel: '보고서 발행 주기',
            },
            {
                title: '윤리 경영 및 컴플라이언스',
                description: '임직원 윤리 강령을 수립하고, 내부 고발 채널을 운영합니다. 상담 윤리 기준을 문서화하여 모든 코치가 일관된 윤리적 서비스를 제공합니다.',
                metric: '100%',
                metricLabel: '윤리 강령 서명율',
            },
        ],
    };

    const colorMap = {
        environment: { border: '#6ee7b7', accent: '#059669', light: '#d1fae5' },
        social: { border: '#93c5fd', accent: '#2563eb', light: '#dbeafe' },
        governance: { border: '#c4b5fd', accent: '#7c3aed', light: '#ede9fe' },
    };

    const sectionTitles = {
        environment: { en: 'Environment', ko: '환경', icon: '🌱' },
        social: { en: 'Social', ko: '사회', icon: '🤝' },
        governance: { en: 'Governance', ko: '지배구조', icon: '🏛️' },
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 80px)' }}>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
                padding: '5rem 2rem',
                color: 'white',
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block', backgroundColor: 'rgba(37,99,235,0.3)', color: '#93c5fd',
                        fontWeight: 700, fontSize: '0.875rem', padding: '0.5rem 1.25rem',
                        borderRadius: '9999px', marginBottom: '1.5rem', letterSpacing: '0.1em',
                    }}>ESG MANAGEMENT</span>
                    <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        지속가능한 성장을 위한<br />ESG 경영 보고서
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
                        그로우그래프는 개인의 성장을 넘어 사회와 환경에 기여하는<br />책임 있는 기업 경영을 실천합니다.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {[
                        { value: '2026', label: 'ESG 경영 도입 연도', color: '#2563eb' },
                        { value: '3개 지점', label: '친환경 운영 공간', color: '#059669' },
                        { value: '100+건', label: '연간 사회공헌 상담', color: '#7c3aed' },
                        { value: 'A등급', label: '데이터 보안 수준', color: '#0f172a' },
                    ].map((stat, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white', padding: '2rem', borderRadius: '1rem',
                            textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                            borderTop: `3px solid ${stat.color}`,
                        }}>
                            <p style={{ fontSize: '2rem', fontWeight: 800, color: stat.color, marginBottom: '0.5rem' }}>{stat.value}</p>
                            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* ESG Sections */}
                {Object.entries(esgData).map(([key, items]) => {
                    const colors = colorMap[key];
                    const title = sectionTitles[key];
                    return (
                        <div key={key} style={{ marginBottom: '4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '2rem' }}>{title.icon}</span>
                                <div>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>{title.en}</h2>
                                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{title.ko}</p>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                                {items.map((item, idx) => (
                                    <div key={idx} style={{
                                        backgroundColor: 'white', borderRadius: '1.25rem', padding: '2rem',
                                        border: `1px solid ${colors.border}40`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    }}>
                                        <div style={{
                                            display: 'inline-block', backgroundColor: colors.light, color: colors.accent,
                                            fontWeight: 800, fontSize: '1.5rem', padding: '0.5rem 1rem',
                                            borderRadius: '0.75rem', marginBottom: '1rem',
                                        }}>{item.metric}</div>
                                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem', fontWeight: 600 }}>{item.metricLabel}</p>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{item.title}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* CEO Message */}
            <section style={{ backgroundColor: '#0f172a', padding: '4rem 2rem', color: 'white', textAlign: 'center' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '2rem', color: '#e2e8f0' }}>
                        "진정한 성장은 나 혼자만의 발전이 아니라, 내가 속한 공동체와 환경까지 함께 나아가는 것입니다.
                        그로우그래프는 데이터로 개인의 성장을 증명하듯, ESG 경영으로 우리의 사회적 책임을 증명하겠습니다."
                    </p>
                    <p style={{ color: '#94a3b8', fontWeight: 600 }}>김세희 | GrowGraph 대표</p>
                </div>
            </section>

            {/* Application CTA */}
            <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                        로드맵 프로그램 신청
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                        나만의 성장 경로를 설계하세요.<br />온라인 신청 후 담당 코치가 24시간 이내에 연락드립니다.
                    </p>
                    <button
                        onClick={() => setModalOpen(true)}
                        style={{
                            padding: '1.1rem 3rem',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.75rem',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                        }}
                    >
                        온라인 신청하기
                    </button>
                </div>
            </section>

            {/* Modal */}
            <ApplicationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default ESG;
