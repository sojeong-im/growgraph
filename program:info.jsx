import React from 'react';

const ProgramInfo = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="inline-block bg-blue-50 text-blue-600 font-bold text-sm px-5 py-2.5 rounded-full mb-6 tracking-wide">
                        GROWGRAPH ROADMAP
                    </span>
                    <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        데이터로 설계하는<br className="md:hidden" /> 5가지 성장 로드맵
                    </h2>
                    <p className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto">
                        개인의 내면부터 조직의 성과까지.<br />
                        그로우그래프는 각 단계와 목적에 최적화된 전문 로드맵 프로그램을 제공합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* 1. Life Roadmap */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-12 relative group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                        <div className="mb-8 relative">
                            <span className="text-7xl font-black text-slate-100 absolute top-0 right-0 opacity-50 select-none">01</span>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">라이프 로드맵</h3>
                            <span className="text-base text-blue-600 font-bold tracking-wide">Life Roadmap</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            자신의 삶을 깊이 있게 돌아보고,<br />진정한 미래 비전과 목표를 수립하는 과정입니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 text-sm">✔</div>
                                개인의 가치관과 강점을 탐색
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 text-sm">✔</div>
                                장기적인 인생 목표를 설계하는 단계
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 text-sm">✔</div>
                                자신의 삶을 돌아보고 미래 비전과 목표 수립
                            </li>
                        </ul>
                    </div>

                    {/* 2. Reconnect Roadmap */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-12 relative group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                        <div className="mb-8 relative">
                            <span className="text-7xl font-black text-slate-100 absolute top-0 right-0 opacity-50 select-none">02</span>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">리커넥트 로드맵</h3>
                            <span className="text-base text-emerald-500 font-bold tracking-wide">Reconnect Roadmap</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            건강한 관계 형성을 위해 자신과 타인을 이해하고,<br />새로운 소통 방식을 훈련합니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-500 text-sm">✔</div>
                                자기 이해를 바탕으로 경계 설정과 대화 훈련
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-500 text-sm">✔</div>
                                관계 유형별 반복되는 대화 방식과 언어습관 분석
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-500 text-sm">✔</div>
                                사고·감정·행동 점검하여 새로운 관계 방식 훈련
                            </li>
                        </ul>
                    </div>

                    {/* 3. Workshop Roadmap */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-12 relative group md:row-span-2">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 to-amber-400"></div>
                        <div className="mb-8 relative">
                            <span className="text-7xl font-black text-slate-100 absolute top-0 right-0 opacity-50 select-none">03</span>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">워크숍 로드맵</h3>
                            <span className="text-base text-amber-600 font-bold tracking-wide">Workshop Roadmap</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            동료와 함께하는 그룹 활동을 통해<br />팀 시너지를 극대화하는 집중 과정입니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                2박 3일 합숙 워크숍 형태로 진행
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                동료와 함께하는 그룹 워크숍을 통해 팀 역량 향상
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                리더쉽, 협업, 의사소통 역량 강화
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                아이디어와 피드백을 교환하는 협업 학습
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                실제 문제 해결 중심의 팀 프로젝트 수행
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                서로의 강점을 발견하고 시너지 창출
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600 text-sm">✔</div>
                                네트워킹을 통한 지속적 성장 커뮤니티 형성
                            </li>
                        </ul>
                    </div>

                    {/* 4. Leadership Roadmap */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-12 relative group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-600 to-violet-400"></div>
                        <div className="mb-8 relative">
                            <span className="text-7xl font-black text-slate-100 absolute top-0 right-0 opacity-50 select-none">04</span>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">리더쉽 로드맵</h3>
                            <span className="text-base text-violet-600 font-bold tracking-wide">Leadership Roadmap</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            조직 관리와 비전 수립 역량을 강화하여<br />진정한 리더로 도약합니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0 text-violet-600 text-sm">✔</div>
                                실무자에서 관리자로 도약하기 위한 필수 리더쉽 역량 및 마인드셋 함양
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0 text-violet-600 text-sm">✔</div>
                                팀 성과 극대화 위한 효율적인 조직 관리 운영법 수립
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0 text-violet-600 text-sm">✔</div>
                                개인별 리더십 스타일 진단, 주도적인 조직 비전 수립
                            </li>
                        </ul>
                    </div>

                    {/* 5. Meta Mining Roadmap */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-12 relative group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 to-pink-400"></div>
                        <div className="mb-8 relative">
                            <span className="text-7xl font-black text-slate-100 absolute top-0 right-0 opacity-50 select-none">05</span>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 relative z-10">메타 마이닝 로드맵</h3>
                            <span className="text-base text-pink-600 font-bold tracking-wide">Meta Mining Roadmap</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            행동 이면의 무의식적 기제를 분석하여<br />삶의 방향을 정교하게 다듬습니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0 text-pink-600 text-sm">✔</div>
                                개인의 인식 구조와 사고 패턴을 분석
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0 text-pink-600 text-sm">✔</div>
                                행동의 원인이 되는 내면 메커니즘을 이해
                            </li>
                            <li className="flex items-start gap-4 text-slate-600 text-base">
                                <div className="w-6 h-6 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0 text-pink-600 text-sm">✔</div>
                                자기 인식을 통해 삶의 방향을 정교화
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgramInfo;
