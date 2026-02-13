import React from 'react';

const CorporateRoadmap = () => {
    const coreValues = [
        {
            title: '데이터 기반 리더십',
            desc: '구성원이 스스로 동기를 발견하고, 리더가 사람의 특성을 구조적으로 파악하여 대응하는 리더십을 체화하도록 돕습니다.',
            icon: '📊'
        },
        {
            title: '관계의 가시화',
            desc: '팀 내 소통 구조와 정서적 안전감을 다루며, 서로를 이해할 수 있는 객관적인 언어와 연결 로드맵을 설계합니다.',
            icon: '🔗'
        },
        {
            title: '성장 시스템 구축',
            desc: '단기 성과에 매몰되지 않고, 조직이 성장의 에너지를 스스로 순환시키고 모니터링할 수 있는 시스템을 구축합니다.',
            icon: '⚙️'
        }
    ];

    const programSteps = [
        {
            step: 'STEP 1',
            title: '워크숍 (Workshop)',
            desc: '팀 혹은 전사 단위로 진행되는 상호작용형 세션입니다. 조직 내면의 이슈를 발견하고 데이터 기반의 해결 방향을 모색합니다.',
            keys: ['DIAGNOSTIC', 'CO-CREATION']
        },
        {
            step: 'STEP 2',
            title: '리더십 코칭 (Leadership Coaching)',
            desc: '리더 대상 1:1 혹은 소그룹 코칭을 진행합니다. 사람을 이해하는 리더십 실천을 위해 구체적인 행동 설계와 실행 피드백을 제공합니다.',
            keys: ['COACHING', 'EMBODIMENT']
        },
        {
            step: 'STEP 3',
            title: '정기 피드백 시스템 (Feedback System)',
            desc: '프로그램 이후에도 성장이 지속되도록 리플렉션 구조를 구축합니다. 성장의 흐름을 점검하고 다시 도약하는 시스템을 설계합니다.',
            keys: ['FEEDBACK', 'SUSTAINABILITY']
        }
    ];

    const growthArchitecture = [
        {
            num: '01',
            title: 'Immersive Diagnosis (몰입형 진단)',
            subtitle: '구성원의 목소리를 데이터로 읽는 시작',
            desc: '그로우그래프의 기업 코칭은 조직의 성과 이전에 사람의 회복과 연결 상태를 정밀하게 진단합니다. 구성원이 스스로 동기와 가치를 발견하도록 돕고, 리더가 사람의 역량을 구조적으로 이해하는 리더십을 개발하도록 설계합니다.'
        },
        {
            num: '02',
            title: 'Interaction Lab (상호작용 랩)',
            subtitle: '관계의 역동을 구조화하여 소통의 길을 열다',
            desc: '팀 간의 관계, 소통의 흐름, 정서적 안전감 같은 \'조직의 내면\'을 가시적인 지표로 다룹니다. 구성원 모두가 자신의 위치를 확인하고 안심할 수 있는 토대 위에서, 조직은 서로의 다름을 데이터로 이해하고 성장의 연결고리를 찾습니다.'
        },
        {
            num: '03',
            title: 'Growth System Studio (성장 시스템 스튜디오)',
            subtitle: '지속 가능한 성장 로드맵의 구축',
            desc: '그로우그래프는 단기적인 퍼포먼스 향상보다 \'지속 가능한 성장 문화\'를 구축하는 것을 목표로 합니다. 워크숍, 리더십 코칭, 정기 피드백 시스템을 통해 기업이 스스로 성장의 그래프를 그려 나가는 조직으로 변화할 수 있도록 지원합니다.'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <img src="/corporate_hero.png" alt="Corporate Growth" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                    <p className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-6">
                        기업용: Corporate Roadmap
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                        데이터와 구조로 설계하는<br />지속 가능한 조직 변화
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        사람 중심의 리더십, 관계의 가시화, 지속 가능한 조직 성장을 만드는 그로우그래프의 기업 코칭 솔루션.
                        우리는 단순한 성과 수치를 넘어, 조직의 '성장 궤적' 자체를 설계합니다.
                    </p>
                    <div className="animate-bounce text-slate-500 text-sm tracking-widest">
                        SCROLL TO EXPLORE
                        <div className="mt-2 text-2xl">↓</div>
                    </div>
                </div>
            </section>

            {/* Growth Architecture Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">GROWTH ARCHITECTURE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            조직의 잠재력을 데이터로 읽고<br />성장의 경로를 설계하다
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            조직의 보이지 않는 에너지가 명확한 성장 지표로 전환되는 정교한 프로세스를 확인해 보세요.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {growthArchitecture.map((item, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                                <div className="flex-1">
                                    <div className="inline-block bg-teal-50 text-teal-600 font-bold px-4 py-2 rounded-full text-sm mb-4">
                                        {item.num}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-teal-600 font-medium mb-4">{item.subtitle}</p>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                        <div className="text-8xl opacity-30">{item.num}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="py-24 px-4 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4">CORE PRINCIPLES</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            그로우그래프 기업 코칭의 3대 핵심축
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            조직이 데이터와 신뢰를 바탕으로 움직이도록 설계하여, 성과보다 성장에 집중하는 문화를 정착시킵니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((val, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                                <div className="text-4xl mb-6">{val.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Flow Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">PROGRAM FLOW</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            3단계 성장 프로세스
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            워크숍에서 시작해 리더십 코칭, 피드백 시스템까지 이어지는 그로우그래프만의 여정을 통해 조직의 성장 궤적을 정교하게 다듬습니다.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {programSteps.map((step, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                                    <div className="bg-teal-600 text-white font-bold px-4 py-2 rounded-full text-sm inline-block mb-6">
                                        {step.step}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                                    <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.keys.map((key, keyIdx) => (
                                            <span key={keyIdx} className="bg-teal-50 text-teal-600 text-xs font-medium px-3 py-1 rounded-full">
                                                {key}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership CTA Section */}
            <section className="py-24 px-4 bg-gradient-to-br from-teal-600 to-teal-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <p className="font-bold tracking-widest uppercase text-sm mb-4 opacity-80">PARTNERSHIP</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        함께 성장하는 파트너십으로의 초대
                    </h2>
                    <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        그로우그래프와 함께 기업 문화의 새로운 경로를 설계하고 싶다면 제휴 신청을 통해 시작해 주세요.
                        필요한 내용을 남겨주시면 담당 전문가가 빠르게 연락드리겠습니다.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors shadow-lg">
                        제휴 신청하기
                        <span className="text-xl">↗</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CorporateRoadmap;
