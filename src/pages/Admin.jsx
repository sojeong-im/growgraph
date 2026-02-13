import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const Admin = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('applications');

    const tabs = [
        { key: 'applications', label: '프로그램 신청' },
        { key: 'inquiries', label: '제휴 문의' },
        { key: 'diagnostics', label: '자가진단 결과' },
    ];

    return (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: 'calc(100vh - 80px)' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#0f172a', padding: '2rem 2rem 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.5rem' }}>
                        <div>
                            <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800 }}>관리자</h1>
                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>{user?.email}</p>
                        </div>
                        <Link to="/esg" style={{
                            padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)',
                            color: '#e2e8f0', borderRadius: '0.5rem', textDecoration: 'none',
                            fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.15)',
                        }}>ESG 경영 보기</Link>
                    </div>
                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: '2px' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    padding: '0.65rem 1.5rem',
                                    backgroundColor: activeTab === tab.key ? '#f1f5f9' : 'transparent',
                                    color: activeTab === tab.key ? '#0f172a' : '#64748b',
                                    border: 'none',
                                    borderRadius: '0.5rem 0.5rem 0 0',
                                    fontWeight: activeTab === tab.key ? 700 : 500,
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                }}
                            >{tab.label}</button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                {activeTab === 'applications' && <ApplicationsTab />}
                {activeTab === 'inquiries' && <InquiriesTab />}
                {activeTab === 'diagnostics' && <DiagnosticsTab />}
            </div>
        </div>
    );
};

/* ───── 프로그램 신청 결과 탭 ───── */
function ApplicationsTab() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const { data: rows, error } = await supabase
            .from('applications')
            .select('*')
            .order('created_at', { ascending: false });
        setData(error ? [] : (rows || []));
        setLoading(false);
    };

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>프로그램 신청 내역</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>온라인 신청서를 통해 접수된 내역입니다.</p>
                </div>
                <button onClick={fetchData} style={{
                    padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer'
                }}>{loading ? '조회 중...' : '데이터 조회'}</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
                {data === null ? (
                    <EmptyState icon="📋" text="'데이터 조회' 버튼을 눌러 신청 내역을 확인하세요." sub="Supabase applications 테이블에서 데이터를 불러옵니다." />
                ) : data.length === 0 ? (
                    <EmptyState icon="📭" text="아직 접수된 신청이 없습니다." sub="applications 테이블이 생성되지 않았거나 데이터가 없습니다." />
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                    {['이름', '프로그램', '연락처', '장소', '신청일', '상태'].map(h => (
                                        <th key={h} style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#0f172a' }}>{row.name || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.program || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.phone || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.location || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#94a3b8', fontSize: '0.8rem' }}>{row.created_at ? new Date(row.created_at).toLocaleDateString('ko-KR') : '-'}</td>
                                        <td style={{ padding: '0.75rem' }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: '#fffbeb', color: '#d97706' }}>
                                                {row.status || '검토중'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ───── 제휴 문의 결과 탭 ───── */
function InquiriesTab() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const { data: rows, error } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });
        setData(error ? [] : (rows || []));
        setLoading(false);
    };

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>제휴 문의 내역</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>제휴문의 페이지를 통해 접수된 내역입니다.</p>
                </div>
                <button onClick={fetchData} style={{
                    padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer'
                }}>{loading ? '조회 중...' : '데이터 조회'}</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
                {data === null ? (
                    <EmptyState icon="📩" text="'데이터 조회' 버튼을 눌러 문의 내역을 확인하세요." sub="Supabase inquiries 테이블에서 데이터를 불러옵니다." />
                ) : data.length === 0 ? (
                    <EmptyState icon="📭" text="아직 접수된 문의가 없습니다." sub="inquiries 테이블이 생성되지 않았거나 데이터가 없습니다." />
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                    {['기관명', '유형', '담당자', '연락처', '문의일', '상태'].map(h => (
                                        <th key={h} style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#0f172a' }}>{row.company || row.name || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.type || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.contact_name || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.phone || row.email || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#94a3b8', fontSize: '0.8rem' }}>{row.created_at ? new Date(row.created_at).toLocaleDateString('ko-KR') : '-'}</td>
                                        <td style={{ padding: '0.75rem' }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: '#dbeafe', color: '#2563eb' }}>
                                                {row.status || '신규'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ───── 자가진단 결과 탭 ───── */
function DiagnosticsTab() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const { data: rows, error } = await supabase
            .from('diagnostic_results')
            .select('*')
            .order('created_at', { ascending: false });
        setData(error ? [] : (rows || []));
        setLoading(false);
    };

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>자가진단 결과</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>자가진단을 완료한 사용자의 결과입니다.</p>
                </div>
                <button onClick={fetchData} style={{
                    padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff',
                    border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer'
                }}>{loading ? '조회 중...' : '데이터 조회'}</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
                {data === null ? (
                    <EmptyState icon="📊" text="'데이터 조회' 버튼을 눌러 진단 결과를 확인하세요." sub="Supabase diagnostic_results 테이블에서 데이터를 불러옵니다." />
                ) : data.length === 0 ? (
                    <EmptyState icon="📭" text="아직 완료된 진단 결과가 없습니다." sub="diagnostic_results 테이블이 생성되지 않았거나 데이터가 없습니다." />
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                    {['진단 유형', '점수', '등급', '진단일'].map(h => (
                                        <th key={h} style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f8fafc' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#0f172a' }}>{row.type || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.score ?? '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#475569' }}>{row.level || '-'}</td>
                                        <td style={{ padding: '0.75rem', color: '#94a3b8', fontSize: '0.8rem' }}>{row.created_at ? new Date(row.created_at).toLocaleDateString('ko-KR') : '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ───── Empty State ───── */
function EmptyState({ icon, text, sub }) {
    return (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
            <p style={{ fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>{text}</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{sub}</p>
        </div>
    );
}

export default Admin;
