import React from 'react';

const GrowGraphPhilosophy = () => {
    const coreValues = [
        {
            title: '깊이 (Depth)',
            desc: <>표면적인 문제 해결을 넘어,<br />데이터 속에 숨겨진 개인의 본질과<br />심리적 기제를 깊이 있게 분석합니다.</>,
        },
        {
            title: '연결 (Connection)',
            desc: '개인의 내면 데이터와 외부의 삶(커리어, 관계)을 로드맵으로 연결하여 통합적인 성장을 설계합니다.',
        },
        {
            title: '지속 (Sustainability)',
            desc: '단발성 코칭이 아닌, 장기 로드맵을 통해 행동 변화가 습관으로 정착되는 성장의 지속성을 지향합니다.',
        },
        {
            title: '공헌 (Contribution)',
            desc: '성장의 혜택이 특정 집단에 머물지 않도록, 신진 리더를 위한 공익 프로그램을 통해 사회적 선순환을 만듭니다.',
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="py-24 px-4 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                        GrowGraph Philosophy
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                        데이터로 증명하고,<br />
                        로드맵으로 지속하는 성장의 선순환
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        그로우그래프는 단순히 한 번의 깨달음에 그치지 않고,<br className="hidden md:block" />
                        스스로의 궤적을 그리며 지속적으로 확장해 나가는 성장 생태계를 구축합니다.
                    </p>
                </div>
            </section>

            {/* 01. 핵심이념 */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-blue-600 font-bold mb-4">01. 핵심이념 (Core Ideology)</h3>
                            <h4 className="text-3xl font-bold text-slate-900 mb-6">모든 성장은 명확한<br />'좌표 인식'에서 시작됩니다.</h4>
                            <p className="text-slate-600 leading-loose">
                                그로우그래프는 막연한 기대를 실질적인 가능성으로 <span className="text-slate-900 font-semibold">‘가시화(Visualize)’</span>하는 순간을 함께합니다.
                                자신의 현재를 데이터로 직면할 때, 우리는 비로소 다음 단계를 향한 정교한 설계를 시작할 수 있습니다.
                                당신의 잠재력이 그래프 위에서 현실이 되도록 가장 과학적인 로드맵을 제시합니다.
                            </p>
                        </div>
                        {/* 이 자리에 첨부하신 기업 이념 이미지를 넣으시면 좋습니다 */}
                        <div className="bg-slate-50 rounded-3xl p-8 flex items-center justify-center border border-slate-100 shadow-inner">
                            <div className="text-center">
                                <p className="text-slate-400 text-sm mb-4">Core Value Visualization</p>
                                <div className="text-6xl text-blue-200">∞</div>
                                <p className="mt-4 text-slate-500 font-medium">깊이 · 연결 · 지속 · 공헌</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02. 비전 */}
            <section className="py-24 px-4 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-blue-600 font-bold mb-4">02. 비전 (Vision)</h3>
                    <h4 className="text-3xl font-bold text-slate-900 mb-8">개인의 성장을 넘어,<br />데이터가 흐르는 건강한 조직문화를 꿈꿉니다.</h4>
                    <p className="text-slate-600 leading-loose max-w-2xl mx-auto">
                        그로우그래프는 한 사람의 변화가 그가 속한 팀과 조직, 나아가 사회 전체의 건강한 순환으로 이어지길 바랍니다.
                        객관적인 자기 인식을 갖춘 개인이 모여 <strong className="text-slate-900">‘성장 가능성’</strong>이 중심이 되는 깨어 있는 사회를 만드는 것,
                        그것이 그로우그래프가 지향하는 미래 교육의 본질입니다.
                    </p>
                </div>
            </section>

            {/* 03. 핵심 가치 (Core Values) - 그리드 스타일 */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-blue-600 font-bold mb-2">03. 핵심 가치</h3>
                        <p className="text-slate-400">성장을 실현하는 그로우그래프의 4가지 기둥</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((val, idx) => (
                            <div key={idx} className="p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    0{idx + 1}
                                </div>
                                <h5 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed" style={{ wordBreak: 'keep-all' }}>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 04. 사회적 공헌 */}
            <section className="py-24 px-4 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-blue-400 font-bold mb-4">04. 사회적 공헌 (Contribution)</h3>
                            <h4 className="text-2xl md:text-3xl font-bold mb-6">변화의 궤적이 또 다른 누군가의<br />이정표가 되도록</h4>
                            <p className="text-slate-400 leading-loose mb-10">
                                그로우그래프는 성장의 기회가 특정 집단에 매몰되지 않도록 노력합니다.
                                신진 리더들을 위한 <span className="text-white font-semibold">‘공익 성장 로드맵’</span>을 운영하며,
                                한 사람의 내면 변화가 타인의 삶을 밝히는 등불이 되는 ‘선순환적 성장 생태계’를 지향합니다.
                                우리가 만든 데이터는 누군가에게 다시 시작할 수 있는 용기가 됩니다.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                                    <p className="text-sm opacity-60 mb-2">Social Impact</p>
                                    <p className="font-bold">선순환적 성장 생태계 구축</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                                    <p className="text-sm opacity-60 mb-2">Target</p>
                                    <p className="font-bold">신진 리더 및 취약계층 청년 지원</p>
                                </div>
                            </div>
                        </div>
                        {/* 배경 장식 요소 */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GrowGraphPhilosophy;
