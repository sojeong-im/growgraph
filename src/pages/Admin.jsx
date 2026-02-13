import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');

    const tabs = [
        { key: 'dashboard', label: '대시보드' },
        { key: 'programs', label: '프로그램 관리' },
        { key: 'inquiries', label: '문의 관리' },
        { key: 'settings', label: '설정' },
    ];

    const stats = [
        { label: '총 프로그램 참여자', value: '1,247', change: '+12%', color: '#2563eb' },
        { label: '이번 달 신규 신청', value: '38', change: '+8%', color: '#059669' },
        { label: '제휴 문의', value: '15', change: '+23%', color: '#7c3aed' },
        { label: '평균 만족도', value: '4.9', change: '+0.1', color: '#f59e0b' },
    ];

    const recentApplications = [
        { name: '김OO', program: 'G-Mastery', date: '2026-02-13', status: '검토중' },
        { name: '이OO', program: 'G-Boost', date: '2026-02-12', status: '승인' },
        { name: '박OO', program: 'G-Restore', date: '2026-02-12', status: '승인' },
        { name: '최OO', program: 'G-Check', date: '2026-02-11', status: '완료' },
        { name: '정OO', program: 'G-Mastery', date: '2026-02-11', status: '검토중' },
    ];

    const recentInquiries = [
        { company: '삼성전자', type: '기업 코칭', date: '2026-02-13', status: '신규' },
        { company: '서울대학교', type: '교육기관', date: '2026-02-12', status: '진행중' },
        { company: 'LG CNS', type: '강연 세미나', date: '2026-02-11', status: '완료' },
    ];

    return (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: 'calc(100vh - 80px)' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#0f172a', padding: '2.5rem 2rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h1 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>관리자 대시보드</h1>
                            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{user?.email} 님 환영합니다</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Link to="/esg" style={{
                                padding: '0.6rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.1)',
                                color: '#e2e8f0', borderRadius: '0.5rem', textDecoration: 'none',
                                fontSize: '0.875rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.15)',
                                transition: 'all .2s'
                            }}>ESG 경영</Link>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: '0.25rem', marginTop: '2rem' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    padding: '0.65rem 1.25rem',
                                    backgroundColor: activeTab === tab.key ? '#fff' : 'transparent',
                                    color: activeTab === tab.key ? '#0f172a' : '#94a3b8',
                                    border: 'none',
                                    borderRadius: '0.5rem 0.5rem 0 0',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'all .2s',
                                }}
                            >{tab.label}</button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                {activeTab === 'dashboard' && (
                    <>
                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                            {stats.map((stat, i) => (
                                <div key={i} style={{
                                    backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: `4px solid ${stat.color}`,
                                }}>
                                    <p style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.75rem' }}>{stat.label}</p>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                                        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>{stat.value}</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669', backgroundColor: '#ecfdf5', padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>{stat.change}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Two Column Layout */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            {/* Recent Applications */}
                            <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>최근 프로그램 신청</h3>
                                    <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 600 }}>전체보기</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {recentApplications.map((app, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
                                            <div>
                                                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#0f172a' }}>{app.name}</p>
                                                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{app.program} · {app.date}</p>
                                            </div>
                                            <span style={{
                                                fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.6rem', borderRadius: '9999px',
                                                backgroundColor: app.status === '승인' ? '#ecfdf5' : app.status === '완료' ? '#f1f5f9' : '#fffbeb',
                                                color: app.status === '승인' ? '#059669' : app.status === '완료' ? '#64748b' : '#d97706',
                                            }}>{app.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Inquiries */}
                            <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>최근 제휴 문의</h3>
                                    <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 600 }}>전체보기</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {recentInquiries.map((inq, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
                                            <div>
                                                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#0f172a' }}>{inq.company}</p>
                                                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{inq.type} · {inq.date}</p>
                                            </div>
                                            <span style={{
                                                fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.6rem', borderRadius: '9999px',
                                                backgroundColor: inq.status === '신규' ? '#dbeafe' : inq.status === '진행중' ? '#ede9fe' : '#f1f5f9',
                                                color: inq.status === '신규' ? '#2563eb' : inq.status === '진행중' ? '#7c3aed' : '#64748b',
                                            }}>{inq.status}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Quick Links */}
                                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.75rem' }}>빠른 이동</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {[
                                            { to: '/esg', label: 'ESG 경영' },
                                            { to: '/program/info', label: '프로그램' },
                                            { to: '/contact', label: '제휴문의' },
                                            { to: '/community/notice', label: '공지사항' },
                                        ].map(link => (
                                            <Link key={link.to} to={link.to} style={{
                                                fontSize: '0.75rem', fontWeight: 600, padding: '0.35rem 0.75rem',
                                                backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '0.375rem',
                                                textDecoration: 'none', transition: 'all .2s'
                                            }}>{link.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'programs' && (
                    <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '3rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>프로그램 관리</h3>
                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>프로그램 목록 및 신청 현황을 관리합니다.</p>
                    </div>
                )}

                {activeTab === 'inquiries' && (
                    <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '3rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📩</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>문의 관리</h3>
                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>기업 제휴 및 교육기관 문의를 관리합니다.</p>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '3rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>설정</h3>
                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>사이트 및 계정 설정을 관리합니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
