import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const Story = () => {
    return (
        <div className="story-page">
            <SEO title="브랜드 스토리 | GrowGraph" description="우리는 왜 데이터 기반의 성장 로드맵을 이야기할까요? 그로우그래프의 시작과 비전." url="https://growgraph.site/intro/story" />

            {/* Hero */}
            <section className="story-hero">
                <div className="container-limit text-center">
                    <h1 className="story-label">GrowGraph Story</h1>
                    <h2 className="story-title">막연한 속도전에서 벗어나,<br />나만의 성장 궤적을 찾기까지</h2>
                    <div className="story-divider"></div>
                </div>
            </section>

            {/* Content */}
            <section className="story-content">
                <div className="container-limit">
                    <div className="story-block">
                        <h3 className="story-subtitle">01. 엄마라는 이름으로 마주한 질문</h3>
                        <div className="story-text">
                            <p>대표이기 이전에, 저 역시 두 아이의 엄마였습니다. 아이들이 그저 남들보다 앞서 나가길 바라는 마음으로, 좋은 성적과 눈에 보이는 결과만이 행복의 유일한 척도라 믿었던 시절이 있었습니다.</p>
                            <p>하지만 그 막연한 속도전은 아이에게도, 그리고 저 자신에게도 깊은 상처를 남겼습니다. <span className="highlight-bg">"우리는 지금 어디로 가고 있는 걸까?"</span> 목적지 없는 질주 속에서 깨달았습니다. 우리에게 필요한 것은 더 빠른 속도가 아니라 나다운 방향을 안내해 줄 명확한 이정표였다는 것을요.</p>
                        </div>
                    </div>

                    <div className="story-block">
                        <h3 className="story-subtitle">02. 숨 고르기 끝에 발견한 '진짜 나'</h3>
                        <div className="story-text">
                            <p>넘어지고 숨이 차오를 때 비로소 '진짜 나'를 만나게 되었습니다. 진정한 성장은 남과의 경쟁에서 이기는 것이 아니라, 내 안의 목소리를 듣고 나만의 좌표를 정확히 인지하는 것에서 시작된다는 사실을요.</p>
                            <p>배움은 결과를 위한 수단이 아니라 삶을 이해하는 과정이어야 하며, <strong style={{ color: 'var(--color-primary)' }}>성장은 추상적인 위로가 아닌 구체적인 실행의 기록</strong>이어야 합니다. 이 확신이 그로우그래프를 만든 씨앗이 되었습니다.</p>
                        </div>
                    </div>

                    <div className="story-block story-block-highlight">
                        <h3 className="story-subtitle">03. 감성을 넘어, 데이터와 구조로 설계하다</h3>
                        <div className="story-text">
                            <p>그로우그래프는 단순히 "힘내세요"라는 위로에 그치지 않습니다. 우리는 개인의 경험에서 얻은 통찰을 <strong style={{ color: 'var(--color-secondary)' }}>[로드맵]</strong>이라는 과학적이고 구조화된 시스템으로 발전시켰습니다.</p>
                            <ul className="story-list">
                                <li className="story-item"><strong>가시화</strong>보이지 않는 내면의 상태를 지표로 나타냅니다.</li>
                                <li className="story-item"><strong>구조화</strong>막연한 고민을 실행 가능한 단계별 경로로 설계합니다.</li>
                                <li className="story-item"><strong>지속성</strong>삶의 궤적을 바꾸는 장기적 변화를 지향합니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="story-block">
                        <h3 className="story-subtitle">04. 당신의 다음 걸음을 위한 설계도</h3>
                        <div className="story-text">
                            <p>그로우그래프는 당신의 성장이 길을 잃지 않도록, '나'라는 세상의 지도를 함께 그리는 페이스메이커가 되겠습니다. 주입식 교육이 정해준 기준을 넘어, 온전한 주체로서 당신만의 성장 그래프를 완성해 보세요.</p>
                        </div>
                        <div className="story-signature">
                            <p className="signature-main">막연했던 성장을 명확한 경로로.</p>
                            <p className="signature-sub">그로우그래프 대표 정지은</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Quote */}
            <section className="story-philosophy">
                <div className="container-limit text-center">
                    <p className="philo-label">GrowGraph Philosophy</p>
                    <h4 className="philo-title">"Turning vague aspirations into <br className="desktop-only" /> a visible path for your growth."</h4>
                    <Link to="/community/diagnostic" className="cta-button">현재의 좌표 확인하기 →</Link>
                </div>
            </section>
       