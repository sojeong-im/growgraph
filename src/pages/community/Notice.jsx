import React, { useState } from 'react';
import { noticesData } from '../../data/notices';

const Notice = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNotice, setSelectedNotice] = useState(null);
    const itemsPerPage = 10;

    const filtered = searchTerm
        ? noticesData.filter(n => n.title.includes(searchTerm) || (n.content && n.content.includes(searchTerm)))
        : noticesData;

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const getStatusStyle = (status) => {
        if (status === '중요') return { background: '#fee2e2', color: '#dc2626' };
        if (status === '이벤트') return { background: '#fce7f3', color: '#db2777' };
        if (status === '예정') return { background: '#f1f5f9', color: '#64748b' };
        return { background: '#f1f5f9', color: '#64748b' };
    };

    return (
        <div style={{ background: '#fff', minHeight: '100vh', padding: '6rem 1rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>공지사항</h1>
                    <p style={{ color: '#64748b', fontWeight: 500, fontSize: '1rem' }}>그로우그래프(GrowGraph)의 새로운 소식을 확인하세요</p>
                </div>

                <div style={{ maxWidth: '48rem', margin: '0 auto 2.5rem', display: 'flex', gap: '0.5rem' }}>
                    <input type="text" placeholder="제목 또는 내용으로 검색..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        style={{ flex: 1, padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', outline: 'none' }} />
                    <button style={{ padding: '0.75rem 2rem', background: '#2563eb', color: '#fff', fontWeight: 700, borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>검색</button>
                </div>

                <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', background: '#f8fafc', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600 }}>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', width: '5rem' }}>번호</th>
                                <th style={{ padding: '1rem 1.5rem' }}>제목</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', width: '8rem' }}>작성자</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', width: '8rem' }}>작성일</th>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', width: '6rem' }}>조회</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '0.925rem', color: '#334155' }}>
                            {currentItems.map(n => (
                                <tr key={n.id} onClick={() => setSelectedNotice(n)} style={{ borderBottom: '1px solid #f8fafc', cursor: 'pointer', backgroundColor: n.type === '공지' ? '#fff7ed' : '#fff' }}>
                                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                                        {n.type === '공지' ? (
                                            <span style={{ background: '#f97316', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.125rem 0.375rem', borderRadius: '0.25rem' }}>공지</span>
                                        ) : (
                                            <span style={{ fontWeight: 500, color: '#94a3b8' }}>{n.id}</span>
                                        )}
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ fontWeight: n.type === '공지' ? 700 : 500, color: '#1e293b' }}>{n.title}</span>
                                            {n.status && (
                                                <span style={{ ...getStatusStyle(n.status), fontSize: '0.625rem', fontWeight: 700, padding: '0.125rem 0.375rem', borderRadius: '0.25rem', marginLeft: '0.5rem' }}>{n.status}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center', color: '#64748b' }}>{n.author}</td>
                                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center', color: '#94a3b8' }}>{n.date}</td>
                                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center', color: '#cbd5e1' }}>{n.views}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: '#fff', color: '#94a3b8', borderRadius: '0.25rem', cursor: 'pointer' }}>이전</button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <button key={p} onClick={() => setCurrentPage(p)} style={{ padding: '0.5rem 1rem', background: currentPage === p ? '#2563eb' : '#fff', color: currentPage === p ? '#fff' : '#94a3b8', border: currentPage === p ? 'none' : '1px solid #e2e8f0', borderRadius: '0.25rem', fontWeight: currentPage === p ? 700 : 400, cursor: 'pointer' }}>{p}</button>
                    ))}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', background: '#fff', color: '#94a3b8', borderRadius: '0.25rem', cursor: 'pointer' }}>다음</button>
                </div>
            </div>

            {/* Notice Modal */}
            {selectedNotice && (
                <div onClick={(e) => { if (e.target === e.currentTarget) setSelectedNotice(null); }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15,23,42,0.8)', zIndex: 9999, backdropFilter: 'blur(4px)', overflowY: 'auto' }}>
                    <div style={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
                        <div style={{ background: '#fff', width: '100%', maxWidth: '56rem', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden', position: 'relative' }}>
                            <button onClick={() => setSelectedNotice(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#64748b', fontSize: '1.5rem', cursor: 'pointer', padding: '0.5rem', lineHeight: 1 }}>✕</button>
                            <div style={{ padding: '3rem' }}>
                                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e2e8f0' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <span style={{ background: '#f97316', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{selectedNotice.type}</span>
                                        {selectedNotice.status && (
                                            <span style={{ ...getStatusStyle(selectedNotice.status), fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{selectedNotice.status}</span>
                                        )}
                                    </div>
                                    <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1.5rem', wordBreak: 'keep-all' }}>{selectedNotice.title}</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                                        <div>
                                            <span style={{ fontWeight: 600, color: '#0f172a', marginRight: '0.5rem' }}>작성자</span> <span>{selectedNotice.author}</span>
                                            <span style={{ margin: '0 1rem', color: '#cbd5e1' }}>|</span>
                                            <span style={{ fontWeight: 600, color: '#0f172a', marginRight: '0.5rem' }}>작성일</span> <span>{selectedNotice.date}</span>
                                        </div>
                                        <div><span style={{ marginRight: '0.5rem' }}>조회수</span> <span>{selectedNotice.views}</span></div>
                                    </div>
                                </div>
                                <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '1rem', minHeight: '200px', whiteSpace: 'pre-wrap' }}>{selectedNotice.content || '내용이 없습니다.'}</div>
                                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                                    <button onClick={() => setSelectedNotice(null)} style={{ background: '#0f172a', color: '#fff', fontWeight: 700, padding: '1rem 3rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>목록으로 돌아가기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notice;
