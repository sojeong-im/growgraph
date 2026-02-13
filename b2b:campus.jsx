import React from 'react';

const CampusRoadmap = () => {
    const corePrinciples = [
        {
            title: '내면 데이터 분석',
            desc: '성찰형 질문과 진단을 통해 자신을 구조적으로 이해하고, 학습 동기를 스스로 발견하도록 돕습니다.',
        },
        {
            title: '자존감 지표 회복',
            desc: '비교와 불안을 넘어, 학생이 자신의 강점과 가능성을 데이터로 확인하고 신뢰할 수 있도록 정서적 회복을 지원합니다.',
        },
        {
            title: '자기 주도 로드맵',
            desc: '학생 스스로 자신의 길을 구체적인 경로로 그려볼 수 있도록 정교한 맞춤형 진로 설계를 지원합니다.',
        },
    ];

    const programFlow = [
        {
            step: 'STEP 1',
            title: '사전 진단 & 니즈 분석',
            desc: '데이터 분석과 인터뷰를 통해 학생들의 현재 좌표를 살피고, 학교 현장의 요구사항을 구체적으로 파악합니다.',
            keys: ['ASSESSMENT', 'INSIGHT'],
        },
        {
            step: 'STEP 2',
            title: '성찰형 워크숍',
            desc: '정서와 경험을 구조화하는 워크숍으로 자기 이해의 토대를 다집니다. 본격적인 성장 설계의 시작입니다.',
            keys: ['WORKSHOP', 'REFLECTION'],
        },
        {
            step: 'STEP 3',
            title: '멘토링 & 코칭',
            desc: '소그룹 혹은 1:1 코칭으로 학생이 자신의 로드맵을 구체화하고 실행 전략을 세우도록 돕습니다.',
            keys: ['COACHING', 'MENTORING'],
        },
        {
            step: 'STEP 4',
            title: '후속 리포트 & 커뮤니티',
            desc: '성장이 지속될 수 있도록 개인별 성장 추적 리포트와 온라인 커뮤니티, 교사 연계 세션을 제공합니다.',
            keys: ['FOLLOW-UP', 'COMMUNITY'],
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-700 to-slate-900 py-24 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-4">
                        GrowGraph for Campus
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                        데이터와 로드맵으로 설계하는<br />교육 생태계 혁신
                    </h2>
                    <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
                        그로우그래프의 교육기관 파트너십은 진로 탐색, 자존감 회복, 정서적 성장까지 이어지는 전 과정을
                        <strong className="text-white">구조화된 데이터</strong>로 설계합니다. 학생 한 명 한 명이 자신만의 성장 궤적을 발견하고
                        주도적으로 삶을 디자인할 수 있도록 교육 현장을 함께 혁신합니다.
                    </p>
                    <a href="#explore" className="mt-12 inline-flex items-center justify-center px-8 py-4 border border-white rounded-full text-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">
                        SCROLL TO EXPLORE
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </a>
                </div>
            </section>

            {/* GROWTH ARCHITECTURE */}
            <section id="explore" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-slate-900 text-center mb-16">
                        STRUCTURAL EDUCATION JOURNEY<br />
                        <span className="text-slate-500 text-lg font-normal">데이터를 따라 흐르는 교육 경험 설계</span>
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wider">01. Discovery Studio</h4>
                            <h5 className="text-3xl font-bold text-slate-900 mb-4">청년의 가능성을 데이터로 깨우는 진로 여정</h5>
                            <p className="text-slate-700 leading-loose">
                                학생들이 스스로의 가능성을 객관적인 지표로 발견할 수 있도록 돕습니다.
                                내면의 동기를 세밀하게 분석하고, 사회적 기준이 아닌 '나'를 기준으로 한 진짜 삶을 설계하도록 로드맵을 함께 그립니다.
                            </p>
                        </div>
                        <div className="bg-slate-200 h-80 rounded-3xl flex items-center justify-center text-slate-500">
                            <img src="/campus_hero.png" alt="Discovery Studio" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="bg-slate-200 h-80 rounded-3xl flex items-center justify-center text-slate-500 order-2 lg:order-1">
                            <img src="/campus_hero.png" alt="Interaction Lab" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wider">02. Interaction Lab</h4>
                            <h5 className="text-3xl font-bold text-slate-900 mb-4">소통의 구조를 통해 이어지는 정서적 성장</h5>
                            <p className="text-slate-700 leading-loose">
                                또래, 교사와의 관계 속에서 정서적 안전감을 확보할 수 있도록 관계의 역동을 분석합니다.
                                서로를 이해하는 객관적인 언어와 감정 표현 훈련으로 학교 공동체에 건강한 소통 구조를 설계합니다.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h4 className="text-blue-600 font-bold text-sm uppercase tracking-wider">03. Growth System Lab</h4>
                            <h5 className="text-3xl font-bold text-slate-900 mb-4">자생적 학습 생태계 및 로드맵 구축</h5>
                            <p className="text-slate-700 leading-loose">
                                프로그램 종료 후에도 학생들이 스스로 성장을 이어갈 수 있도록 맞춤형 커리큘럼과 멘토링 시스템을 설계합니다.
                                학교 현장에 최적화된 실천 전략으로, 성장의 그래프가 멈추지 않는 학습 공동체를 만듭니다.
                            </p>
                        </div>
                        <div className="bg-slate-200 h-80 rounded-3xl flex items-center justify-center text-slate-500">
                            <img src="/campus_hero.png" alt="Growth System Lab" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE PRINCIPLES */}
            <section className="py-20 px-4 bg-white border-t border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-slate-900 text-center mb-16">
                        CORE PRINCIPLES<br />
                        <span className="text-slate-500 text-lg font-normal">그로우그래프 교육 파트너십의 세 가지 축</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {corePrinciples.map((item, index) => (
                            <div key={index} className="p-8 border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-shadow bg-slate-50">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 font-bold text-xl mb-6">
                                    {index + 1}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROGRAM FLOW */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-slate-900 text-center mb-16">
                        PROGRAM FLOW<br />
                        <span className="text-slate-500 text-lg font-normal">4단계 교육 프로그램 여정</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programFlow.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-md border border-slate-100">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                                    {index + 1}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                    {item.keys.map((key, kIndex) => (
                                        <span key={kIndex} className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{key}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP */}
            <section className="bg-slate-900 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h3 className="text-3xl font-bold mb-6">데이터 기반의 교육 생태계를 함께 설계하고 싶으신가요?</h3>
                    <p className="text-slate-300 text-lg mb-10">
                        교육기관 맞춤형 프로그램과 컨설팅이 필요하다면, 그로우그래프와 함께 학생들의 성장을 지표로 증명하는 여정을 시작해보세요.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                    >
                        파트너십 문의하기
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CampusRoadmap;
