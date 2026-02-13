import React from 'react';

const SeminarRoadmap = () => {
    const signatureElements = [
        {
            title: '데이터 기반 스토리텔링',
            desc: '객관적인 지표와 실제 사례를 결합하여 논리적이고 감각적인 몰입 경험을 제공합니다.',
        },
        {
            title: '참여형 분석 구조',
            desc: '실시간 설문, 라이브 폴, 분석 세션을 통해 관객이 자신의 성장을 직접 설계하도록 유도합니다.',
        },
        {
            title: '맞춤형 전략 큐레이션',
            desc: '기업, 교육기관, 대중 등 대상의 특성에 맞춰 최적화된 콘텐츠와 연사를 큐레이션합니다.',
        }
    ];

    const experienceFlow = [
        {
            step: '01',
            title: '컨셉 디스커버리',
            desc: '대상의 현재 좌표와 목적을 분석하여 강연 혹은 세미나의 핵심 메시지를 설계합니다.',
            tags: ['DISCOVERY', 'CURATION']
        },
        {
            step: '02',
            title: '로드맵 & 경험 디자인',
            desc: '스토리 라인과 시각적 데이터, 참여 장치를 구성하여 몰입감 있는 성장의 장을 만듭니다.',
            tags: ['DESIGN', 'EXPERIENCE']
        },
        {
            step: '03',
            title: '라이브 세션',
            desc: '연사와 코치가 무대를 이끌며, 관객과의 실시간 상호작용을 통해 성장의 확신을 나누는 시간으로 완성합니다.',
            tags: ['PERFORMANCE', 'INTERACTION']
        },
        {
            step: '04',
            title: '사후 분석 리포트',
            desc: '강연 후 참여자의 변화 지표를 모니터링하고 지원하여, 무대 밖에서도 지속적인 성장이 이루어지도록 돕습니다.',
            tags: ['POST-CARE', 'SUPPORT']
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 py-24 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">GrowGraph Seminar</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                        데이터가 이정표가 되는 순간,<br />성장은 무대로 확장됩니다
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        그로우그래프의 강연 및 세미나는 단순히 정보를 듣는 시간을 넘어, <br className="hidden md:block" />
                        자신의 삶을 데이터로 직면하고 새로운 경로를 설계하도록 돕습니다.
                    </p>
                    <button className="px-8 py-4 border border-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
                        SCROLL TO EXPLORE
                    </button>
                </div>
            </section>

            {/* IMMERSIVE STORYTELLING Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-blue-600 font-bold uppercase tracking-wider mb-2 text-sm">IMMERSIVE STORYTELLING</h3>
                        <h4 className="text-3xl font-bold text-slate-900">데이터를 따라 펼쳐지는 그로우그래프의 무대</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h5 className="text-xl font-bold text-slate-900">01. Expert Keynote</h5>
                            <p className="text-slate-600 text-sm leading-loose">
                                리더십, 정서적 회복, 변화의 기술을 데이터 기반의 통찰로 다룹니다. 참가자가 자신의 내면 지표를 스스로 점검하게 합니다.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-xl font-bold text-slate-900">02. Interactive Roadmap</h5>
                            <p className="text-slate-600 text-sm leading-loose">
                                질문과 대화를 통해 서로의 성장 데이터를 공유하며, 조직과 커뮤니티가 함께 나아갈 최적의 경로를 찾도록 돕습니다.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-xl font-bold text-slate-900">03. Immersive Growth Experience</h5>
                            <p className="text-slate-600 text-sm leading-loose">
                                이야기와 시각적 데이터를 결합하여, 멈춰있던 성장의 감각을 깨우고 일상에 실질적인 변화를 가져옵니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIGNATURE ELEMENTS Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-3xl font-bold mb-16 text-slate-900">SIGNATURE ELEMENTS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {signatureElements.map((el, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-6">
                                    {i + 1}
                                </div>
                                <h5 className="font-bold text-slate-900 mb-4">{el.title}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed">{el.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE FLOW Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-3xl font-bold mb-16 text-slate-900">EXPERIENCE FLOW</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {experienceFlow.map((flow, i) => (
                            <div key={i} className="relative p-8 border border-slate-100 rounded-3xl bg-white">
                                <span className="text-5xl font-black text-slate-50 absolute top-4 right-8">{flow.step}</span>
                                <h5 className="font-bold text-slate-900 mb-4 relative z-10">{flow.title}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">{flow.desc}</p>
                                <div className="flex gap-2 relative z-10">
                                    {flow.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNER SPECTRUM Section */}
            <section className="py-20 px-4 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center">PARTNER SPECTRUM</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-blue-500 rounded-3xl">
                            <span className="text-4xl mb-4 block">🏢</span>
                            <h5 className="font-bold mb-2 text-xl">기업 및 조직</h5>
                            <p className="text-blue-100 text-sm">리더십, 조직문화 강연 및 임직원 세미나</p>
                        </div>
                        <div className="text-center p-8 bg-blue-500 rounded-3xl">
                            <span className="text-4xl mb-4 block">🎓</span>
                            <h5 className="font-bold mb-2 text-xl">학교 및 교육기관</h5>
                            <p className="text-blue-100 text-sm">자기 주도적 진로 설계, 정서 지능 특강</p>
                        </div>
                        <div className="text-center p-8 bg-blue-500 rounded-3xl">
                            <span className="text-4xl mb-4 block">🌐</span>
                            <h5 className="font-bold mb-2 text-xl">공공 & 커뮤니티</h5>
                            <p className="text-blue-100 text-sm">미래 설계 세미나와 성장 토크 콘서트</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invitation Section */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">성장의 경로를 그리는 무대를 함께 만들고 싶으신가요?</h3>
                    <p className="text-slate-500 mb-10">맞춤형 콘텐츠와 연사 큐레이션으로 기억에 남는 성장의 순간을 설계해 드립니다.</p>
                    <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all">
                        강연 문의하기 ↗
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SeminarRoadmap;
