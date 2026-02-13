import React from 'react';

const NoticeList = () => {
    // 그로우그래프 브랜드 컨셉에 맞춘 임시 공지사항 데이터
    const notices = [
        { id: 20, type: '공지', title: '그로우그래프 홈페이지 리뉴얼 및 로드맵 예약 시스템 개편 안내', status: '중요', author: '그로우그래프', date: '2025.11.11', views: 112 },
        { id: 19, type: '공지', title: "'데이터로 증명하는 리더의 성장 궤적' 공개 세미나 신청 오픈", status: '예정', author: '그로우그래프', date: '2025.11.09', views: 756 },
        { id: 18, type: '공지', title: "'구조적 로드맵이 만드는 조직의 변화' 하반기 컨설팅 사전 안내", status: '사전 안내', author: '그로우그래프', date: '2025.08.05', views: 892 },
        { id: 17, type: '공지', title: "'그로우그래프' 참여 후기 이벤트: 나의 성장 그래프 공유하고 굿즈 받기", status: '이벤트', author: '그로우그래프', date: '2025.06.07', views: 980 },
        { id: 16, type: '공지', title: '청년 성장 서포터즈 2기 최종 합격자 발표 및 오리엔테이션 안내', status: '발표', author: '그로우그래프', date: '2025.05.18', views: 980 },
        { id: 15, type: '일반', title: '프로그램 예약 취소 및 변경 규정 개정 안내 (2026.02.01 시행)', status: '', author: '그로우그래프', date: '2025.12.15', views: 1892 },
        { id: 14, type: '일반', title: '주요 IT 기업과 ‘데이터 기반 인재 육성’ 파트너십 체결 소식', status: '', author: '그로우그래프', date: '2025.10.30', views: 1987 },
        { id: 13, type: '일반', title: '취약계층 청년 대상 무상 로드맵 설계 지원 (그로우그래프 나눔주간)', status: '', author: '그로우그래프', date: '2025.09.20', views: 1543 },
        { id: 12, type: '일반', title: "'몰입하는 조직, 지표로 확인하는 성과' 기업 담당자 세미나 현장 스케치", status: '', author: '그로우그래프', date: '2025.04.05', views: 1340 },
        { id: 11, type: '일반', title: '스타트업 연합과 취업 준비생을 위한 ‘실전 커리어 로드맵’ 공동 운영', status: '', author: '그로우그래프', date: '2025.02.25', views: 1420 },
    ];

    return (
        <div className="bg-white min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">공지사항</h1>
                    <p className="text-slate-500 font-medium tracking-tight">그로우그래프(GrowGraph)의 새로운 소식을 확인하세요</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto flex gap-2 mb-10">
                    <input
                        type="text"
                        placeholder="제목 또는 내용으로 검색..."
                        className="flex-1 px-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-all"
                    />
                    <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">검색</button>
                </div>

                {/* Table List */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-y border-slate-100 bg-slate-50 text-slate-400 text-sm font-semibold">
                                <th className="px-6 py-4 w-20 text-center">번호</th>
                                <th className="px-6 py-4">제목</th>
                                <th className="px-6 py-4 w-32 text-center">작성자</th>
                                <th className="px-6 py-4 w-32 text-center">작성일</th>
                                <th className="px-6 py-4 w-20 text-center">조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((n) => (
                                <tr key={n.id} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-all cursor-pointer ${n.type === '공지' ? 'bg-orange-50/30' : ''}`}>
                                    <td className="px-6 py-5 text-center text-sm font-medium text-slate-400">
                                        {n.type === '공지' ? <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs">공지</span> : n.id}
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-800 font-bold hover:text-blue-600">{n.title}</span>
                                            {n.status && (
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${n.status === '중요' ? 'bg-red-100 text-red-600' :
                                                    n.status === '이벤트' ? 'bg-pink-100 text-pink-600' : 'bg-slate-100 text-slate-500'
                                                    }`}>
                                                    {n.status}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center text-sm text-slate-500">{n.author}</td>
                                    <td className="px-6 py-5 text-center text-sm text-slate-400">{n.date}</td>
                                    <td className="px-6 py-5 text-center text-sm text-slate-300">{n.views}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (임시) */}
                <div className="flex justify-center gap-2 mt-12">
                    <button className="px-4 py-2 border border-slate-200 rounded text-slate-400 hover:bg-slate-50">이전</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded font-bold">1</button>
                    <button className="px-4 py-2 border border-slate-200 rounded text-slate-400 hover:bg-slate-50">2</button>
                    <button className="px-4 py-2 border border-slate-200 rounded text-slate-400 hover:bg-slate-50">다음</button>
                </div>
            </div>
        </div>
    );
};

export default NoticeList;
