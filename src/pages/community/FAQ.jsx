import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-100">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-500'}`}>
                    {question}
                </span>
                <svg
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
            >
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const GrowGraphFAQ = () => {
    const faqData = [
        {
            question: "Q. 프로그램 신청 및 분석 시작은 어떻게 하나요?",
            answer: "홈페이지 내 [온라인 신청] 메뉴를 통해 희망하시는 로드맵 프로그램을 선택하여 예약하실 수 있습니다. 신청이 완료되면 담당 설계사가 확인 후 개별 안내를 드립니다."
        },
        {
            question: "Q. 각 로드맵 프로그램의 비용 체계가 궁금합니다.",
            answer: "그로우그래프는 회기 수와 목적에 따라 정찰제로 운영됩니다.\n• G-Check(1회): 8만 원\n• G-Boost(5회): 40만 원\n• G-Restore(8회): 65만 원\n• G-Mastery(3개월): 100만 원\n• G-Share(워크숍): 1회 4만 원"
        },
        {
            question: "Q. 세션당 소요 시간과 전체 기간은 어떻게 되나요?",
            answer: "모든 1:1 세션은 1회당 약 50~60분 동안 집중적으로 진행됩니다. 프로그램의 성격에 따라 1회 단기 진단부터 3개월 이상의 장기 프로젝트까지 구성이 상이합니다."
        },
        {
            question: "Q. 오프라인 코칭 시 주차 공간이 확보되어 있나요?",
            answer: "각 거점별 주차 안내는 다음과 같습니다.\n• 구로점: 건물 내 전용 주차장 이용이 가능합니다.\n• 여의도·홍대점: 인근 공영 주차장 이용을 권장해 드립니다."
        },
        {
            question: "Q. 그로우그래프의 운영 시간은 어떻게 되나요?",
            answer: "평일 저녁과 주말 세션을 모두 운영하고 있습니다.\n• 평일: 09:00 ~ 20:00\n• 주말: 10:00 ~ 18:00\n*공휴일은 휴무입니다."
        },
        {
            question: "Q. 개인의 성장 데이터와 상담 내용은 보안이 유지되나요?",
            answer: "네, 철저히 보장됩니다. 그로우그래프는 엄격한 윤리 규정을 준수하며, 수집된 모든 데이터는 오직 본인의 로드맵 설계 목적으로만 활용되고 안전하게 보호됩니다."
        },
        {
            question: "Q. 프로그램 참여 전 미리 준비하거나 제출해야 할 자료가 있나요?",
            answer: "특별히 준비하실 것은 없습니다. 다만, 보다 정밀한 진단을 위해 홈페이지의 [자가진단 도구]를 미리 활용해 보고 오시면 첫 세션에서 더욱 깊이 있는 데이터를 확인하실 수 있습니다."
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">자주 묻는 질문</h1>
                    <p className="text-slate-500">그로우그래프 성장에 대해 궁금하신 내용을 찾아보세요.</p>
                </div>

                <div className="border-t border-slate-100">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>

                <div className="mt-20 p-8 bg-slate-50 rounded-3xl text-center">
                    <p className="text-slate-600 mb-4">찾으시는 답변이 없으신가요?</p>
                    <a href="mailto:contact@growgraph.co.kr" className="text-blue-600 font-bold hover:underline">
                        1:1 문의하기 →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GrowGraphFAQ;
