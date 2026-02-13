import React from 'react';

const GrowGraphSpace = () => {
    const branches = [
        {
            city: '마포',
            name: '그로우그래프 마포 지점',
            time: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00',
            path: '지하철 5호선 마포역 3번 출구 도보 5분 (경의중앙선 공덕역 환승 가능)',
        },
        {
            city: '여의도',
            name: '그로우그래프 여의도 지점',
            time: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00',
            path: '지하철 5호선 여의도역 3번 출구 도보 4분 (버스 정류장 국회의사당역 앞 하차)',
        },
        {
            city: '남구로',
            name: '그로우그래프 남구로 지점',
            time: '평일: 10:00 - 20:00 / 주말: 10:00 - 18:00',
            path: '지하철 2호선 구로디지털단지역 2번 출구 도보 3분 (7호선 환승 가능)',
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <section className="py-24 px-4 bg-slate-50 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">GrowGraph Space</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                        그로우그래프의 공간을 방문해보세요
                    </h2>
                    <p className="text-slate-500 text-lg">성장의 궤적을 함께 그려갈 당신을 기다립니다.</p>
                </div>
            </section>

            {/* Branches List */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div key={index} className="border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6 inline-block">
                                {branch.city} Branch
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">{branch.name}</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">🕐 운영시간</p>
                                    <p className="text-slate-700 font-medium leading-relaxed">{branch.time}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">🚇 오시는 길</p>
                                    <p className="text-slate-700 font-medium leading-relaxed">{branch.path}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coming Soon - Gangnam */}
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="text-center md:text-left">
                            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">COMING SOON</span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">그로우그래프 강남 지점</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                2026년 하반기 오픈 예정인 강남 지점에서 <br className="hidden md:block" />
                                당신만의 새로운 성장 그래프를 만나보세요.
                            </p>
                            <div className="space-y-2 text-sm text-slate-300">
                                <p>📍 위치: 서울특별시 강남구 (위치 확정 중)</p>
                                <p>🗓️ 오픈: 2026년 하반기 오픈 예정</p>
                                <p>💬 안내: 자세한 위치는 추후 공지 예정입니다</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[2rem] border border-white/20 w-full md:w-80">
                            <p className="text-center font-bold mb-4">🎉 강남 지점 오픈 소식이 궁금하신가요?</p>
                            <p className="text-xs text-center text-slate-400 mb-6 leading-relaxed">사전 알림 신청 시 오픈 일정을 <br />가장 먼저 알려드립니다.</p>
                            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all">
                                강남 지점 Coming Soon
                            </button>
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-30"></div>
                </div>
            </section>
        </div>
    );
};

export default GrowGraphSpace;
