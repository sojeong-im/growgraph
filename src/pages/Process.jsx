import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Process() {
    const [openStep, setOpenStep] = useState(0)

    const steps = [
        {
            number: '01',
            title: '프로파일 선택',
            description: 'Services 페이지에서 Hair, Makeup, Fashion 중 원하는 분석을 선택합니다.',
            image: '/assets/process-step1.png',
            details: [
                'Hair Profile - 헤어스타일 30종 분석',
                'Makeup Profile - 메이크업 25종 분석',
                'Fashion Profile - 패션 아이템 35종 분석',
            ],
        },
        {
            number: '02',
            title: '체크리스트 작성',
            description: '간단한 체크리스트를 작성합니다. 응답 데이터를 기반으로 분석이 진행됩니다.',
            image: '/assets/process-step2.jpg',
            details: [
                '신청 후 자정까지 응답 완료',
                '응답 데이터는 분석 목적으로만 사용',
                '개인정보는 서비스 완료 후 6개월 보관',
            ],
        },
        {
            number: '03',
            title: '분석 및 리포트 수령',
            description: 'VIBE 시스템이 데이터를 분석하고, 다음날 결과지가 이메일로 전달됩니다.',
            image: '/assets/process-step3.jpg',
            details: [
                '시스템 기반 객관적 분석',
                '개인 맞춤형 스타일 가이드',
                'PDF 형식으로 영구 보관 가능',
            ],
        },
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">How it works</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6">Process</h1>
                    <p className="text-gray-500 text-lg">선택하고, 응답하고, 받아보세요.</p>
                </div>
            </section>

            {/* Visual Steps */}
            <section className="py-24">
                {steps.map((step, index) => (
                    <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] ${index % 2 === 1 ? '' : ''}`}>
                        {/* Image */}
                        <div className={`relative overflow-hidden bg-gray-100 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </div>

                        {/* Content */}
                        <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                            <div className="p-10 lg:p-16">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-serif text-5xl text-gray-200">{step.number}</span>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">{step.title}</h3>
                                <p className="text-gray-600 mb-8" style={{ wordBreak: 'keep-all' }}>{step.description}</p>
                                <ul className="space-y-3">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-gray-500 flex items-start gap-3">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Note */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        VIBE는 데이터 기반의 일관된 분석 결과를 제공합니다.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-4xl font-light mb-6">시작하기</h2>
                    <p className="text-gray-500 mb-10" style={{ wordBreak: 'keep-all' }}>나만의 스타일 기준을 만들어보세요.</p>
                    <Link
                        to="/services"
                        className="inline-block px-12 py-5 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-gray-800 transition-all"
                    >
                        서비스 보기
                    </Link>
                </div>
            </section>
        </div>
    )
}
