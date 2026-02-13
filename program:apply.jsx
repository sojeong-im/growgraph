import React, { useState } from 'react';

const ProgramApply = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        program: '',
        message: '',
        couponCode: '',
        agreed: false
    });

    const [price, setPrice] = useState(0);

    const prices = {
        'g-check': 80000,
        'g-boost': 400000,
        'g-restore': 650000,
        'g-mastery': 1000000
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'program') {
            setPrice(prices[value] || 0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`성공적으로 접수되었습니다.\n\n[접수 내용]\n- 신청 프로그램: ${formData.program}\n\n담당 코치가 기재해주신 연락처로 24시간 이내에 개별 연락드리겠습니다.`);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-24 pb-32">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-50 text-blue-600 font-bold text-sm px-4 py-2 rounded-full mb-6">
                        Online Application
                    </span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">프로그램 신청하기</h2>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        원하시는 프로그램을 선택하여 신청서를 작성해 주세요.<br />
                        담당 코치가 확인 후 24시간 이내에 개별 연락드립니다.
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="bg-blue-600 p-6 text-center text-white">
                        <p className="text-sm font-medium opacity-90">📋 모든 상담 내용은 철저히 비밀이 보장됩니다.</p>
                    </div>

                    <div className="p-12 md:p-16">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block font-bold text-slate-800 mb-3 text-sm">성함</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="성함을 입력해주세요"
                                        className="w-full p-4 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-800 mb-3 text-sm">연락처</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="010-0000-0000"
                                        className="w-full p-4 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block font-bold text-slate-800 mb-3 text-sm">이메일</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="example@email.com"
                                    className="w-full p-4 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all"
                                />
                            </div>

                            <div className="mb-8">
                                <label className="block font-bold text-slate-800 mb-3 text-sm">희망 프로그램</label>
                                <div className="relative">
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none appearance-none cursor-pointer transition-all"
                                    >
                                        <option value="">프로그램을 선택해주세요</option>
                                        <option value="g-check">🔍 G-Check (1회 정밀 진단) - 80,000원</option>
                                        <option value="g-boost">🚀 G-Boost (5회 단기 집중) - 400,000원</option>
                                        <option value="g-restore">🌿 G-Restore (8회 회복 과정) - 650,000원</option>
                                        <option value="g-mastery">👑 G-Mastery (3개월 마스터리) - 1,000,000원</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block font-bold text-slate-800 mb-3 text-sm">상담 희망 내용 / 현재 고민</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="현재 가장 고민되는 부분이나 상담을 통해 얻고 싶은 변화를 작성해 주세요."
                                    className="w-full p-4 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none resize-y leading-relaxed transition-all"
                                ></textarea>
                            </div>

                            {/* Payment Amount Display */}
                            <div className="mb-8 bg-amber-50 p-6 rounded-2xl border border-amber-200">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-amber-800">예상 결제 금액</span>
                                    <span className="text-2xl font-extrabold text-amber-700">{price.toLocaleString()}원</span>
                                </div>
                                <p className="text-sm text-amber-700">* 선택하신 프로그램에 따라 금액이 변동됩니다.</p>
                            </div>

                            <div className="mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="agreed"
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                        required
                                        className="w-5 h-5 accent-blue-600"
                                    />
                                    <span className="text-sm text-slate-600 font-medium">
                                        (필수) <a href="#" className="text-blue-600 underline">개인정보 수집 및 이용</a>에 동의합니다.
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-extrabold text-xl rounded-2xl hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>신청서 제출하기</span>
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramApply;
