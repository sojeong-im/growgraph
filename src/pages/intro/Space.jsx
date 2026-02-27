import React from 'react';
import SEO from '../../components/SEO';

const Space = () => {
    const branches = [
        { name: '마포', tag: '마포 Branch', title: '그로우그래프 마포 지점', img: '/assets/mapo_branch.jpg', hours: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00', directions: '지하철 5호선 마포역 3번 출구 도보 5분\n(경의중앙선 공덕역 환승 가능)' },
        { name: '여의도', tag: '여의도 Branch', title: '그로우그래프 여의도 지점', img: '/assets/yeouido_branch.png', hours: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00', directions: '지하철 5호선 여의도역 3번 출구 도보 4분\n(버스 정류장 국회의사당역 앞 하차)' },
        { name: '남구로', tag: '남구로 Branch', title: '그로우그래프 남구로 지점', img: '/assets/namguro_branch.png', hours: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00', directions: '지하철 2호선 구로디지털단지역 2번 출구 도보 3분\n(7호선 환승 가능)' },
    ];

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '5rem' }}>
            <SEO title="공간 소개 | GrowGraph" description="성장을 시각화하고 온전히 자신에게 집중할 수 있는 그로우그래프의 코칭 스페이스." />

            {/* Header */}
            <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center' }}>
                <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
                    <h1 style={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>GrowGraph Space</h1>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '2rem' }}>그로우그래프의 공간을 방문해보세요</h2>
                    <p style={{ color: '#64748b', fontSize: '1.125rem' }}>성장의 궤적을 함께 그려갈 당신을 기다립니다.</p>
                </div>
            </section>

            {/* Branches */}
            <section style={{ padding: '5rem 1rem' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {branches.map((b, i) => (
                        <div key={i} className="space-card" style={{ border: '1px solid #f1f5f9', borderRadius: '2rem', padding: 0, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', transition: 'all 0.3s', background: '#fff', overflow: 'hidden' }}>
                            <div style={{ height: '15rem', width: '100%', overflow: 'hidden' }}>
                                <img loading="lazy" src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', backgroundColor: '#eff6ff', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '1.5rem', display: 'inline-block' }}>{b.tag}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '2rem' }}>{b.title}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>🕐 운영시간</p>
                                        <p style={{ color: '#334155', fontWeight: 500, lineHeight: 1.6 }}>{b.hours}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>🚇 오시는 길</p>
                                        <p style={{ color: '#334155', fontWeight: 500, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{b.directions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gangnam Coming Soon */}
            <section style={{ padding: '5rem 1rem' }}>
                <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                    <div style={{ backgroundColor: '#0f172a', borderRadius: '3rem', padding: '4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ flex: 1, minWidth: '280px' }}>
                                <span style={{ color: '#60a5fa', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>COMING SOON</span>
                                <h3 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>그로우그래프 강남 지점</h3>
                                <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>2026년 하반기 오픈 예정인 강남 지점에서<br className="desktop-only" />당신만의 새로운 성장 그래프를 만나보세요.</p>
                                <div style={{ fontSize: '0.875rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <p>📍 위치: 서울특별시 강남구 (위치 확정 중)</p>
                                    <p>🗓️ 오픈: 2026년 하반기 오픈 예정</p>
                                    <p>💬 안내: 자세한 위치는 추후 공지 예정입니다</p>
                                </div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', width: '100%', maxWidth: '20rem', margin: '0 auto' }}>
                                <p style={{ fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>🎉 강남 지점 오픈 소식 받기</p>
                                <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginBottom: '1.5rem', lineHeight: 1.6 }}>사전 알림 신청 시 오픈 일정을<br />가장 먼저 알려드립니다.</p>
                                <button style={{ width: '100%', padding: '1rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '0.75rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}>강남 지점 Coming Soon</button>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: '-5rem', right: '-5rem', width: '16rem', height: '16rem', backgroundColor: '#2563eb', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Space;
