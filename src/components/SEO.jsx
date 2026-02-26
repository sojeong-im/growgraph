import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title = 'GrowGraph - 데이터로 설계하는 나만의 성장 로드맵',
    description = '그로우그래프는 데이터 기반의 성장 로드맵 설계 전문 기관입니다. 우울증·번아웃·스트레스 자가진단, 1:1 맞춤 코칭, 기업 워크숍까지. Growth Visualized.',
    keywords = '그로우그래프, GrowGraph, 성장 로드맵, 자기계발, 코칭, 심리 자가진단, 우울증 자가진단, 번아웃 진단, 스트레스 진단, 기업 코칭, 리더십 코칭, 워크숍',
    url = 'https://growgraph.site'
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            <link rel="canonical" href={url} />
        </Helmet>
    );
}
