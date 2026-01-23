import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    const sectionsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el)
        }
    }

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="min-h-[60vh] flex items-center justify-center pt-20 px-6 bg-gray-50">
                <div className="text-center max-w-3xl">
                    <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">About</p>
                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light mb-6">VIBE</h1>
                    <p className="text-xl text-gray-500">데이터 기반 스타일 분석</p>
                </div>
            </section>

            {/* Story */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                {/* Problem */}
                <div ref={addToRefs} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">The Problem</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ wordBreak: 'keep-all' }}>
                            스타일 진단,<br />왜 느낌에만 의존할까?
                        </h2>
                        <p className="text-gray-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                            퍼스널 컬러, 체형 분석 등 다양한 스타일 진단이 있지만,
                            대부분 분석가의 주관에 의존합니다. 같은 사람이 다른 결과를 받는 경우도 많습니다.
                        </p>
                    </div>
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img src="/assets/project2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Solution */}
                <div ref={addToRefs} className="reveal text-center py-20 border-y border-gray-200 mb-32">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">Our Approach</p>
                    <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        느낌이 아닌 데이터.<br />
                        주관이 아닌 수치.
                    </p>
                </div>

                {/* How it works */}
                <div ref={addToRefs} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div className="aspect-square bg-black flex items-center justify-center lg:order-2 overflow-hidden">
                        <img src="/assets/process-step1.png" alt="" className="w-full h-full object-contain p-8" />
                    </div>
                    <div className="lg:order-1">
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">How It Works</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ wordBreak: 'keep-all' }}>
                            시스템 기반 분석
                        </h2>
                        <p className="text-gray-600 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                            VIBE는 얼굴형, 이목구비 비율, 색감 등을 수치화하여 분석합니다.
                            개인의 판단이 개입되지 않아 일관되고 객관적인 결과를 제공합니다.
                        </p>
                    </div>
                </div>

                {/* Result */}
                <div ref={addToRefs} className="reveal bg-black text-white p-12 md:p-20 mb-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">Result</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-light leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
                            나에게 맞는 스타일을<br />명확하게 확인하세요
                        </h2>
                        <p className="text-gray-400 leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                            VIBE PROFILE은 개인 맞춤형 스타일 가이드입니다.
                            헤어, 메이크업, 패션 각 영역에서 어울리는 스타일을 구체적으로 안내합니다.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div ref={addToRefs} className="reveal border-t border-gray-200 pt-20 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">시작하기</h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12" style={{ wordBreak: 'keep-all' }}>
                        나만의 스타일 기준을 데이터로 확인해보세요.
                    </p>
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
