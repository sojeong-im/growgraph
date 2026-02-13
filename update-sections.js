#!/usr/bin/env node

/**
 * .jsx 파일의 JSX 내용을 HTML로 변환하여 index.html에 삽입하는 스크립트
 * 
 * 사용법:
 * node update-sections.js
 */

const fs = require('fs');
const path = require('path');

// JSX를 HTML로 변환하는 간단한 함수
function convertJSXtoHTML(jsxContent) {
    // React import 제거
    let html = jsxContent.replace(/import.*from.*['"];?\n/g, '');

    // export 제거
    html = html.replace(/export default.*;\n?/g, '');

    // 컴포넌트 함수 시그니처 제거
    html = html.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{/g, '');
    html = html.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\(/g, '');

    // return 문 제거
    html = html.replace(/return\s*\(/g, '');
    html = html.replace(/return\s+</g, '<');

    // 맨 마지막 괄호와 세미콜론 제거
    html = html.replace(/\);\s*\}\s*$/g, '');
    html = html.replace(/\);\s*$/g, '');

    // className을 class로 변환
    html = html.replace(/className=/g, 'class=');

    // JSX 주석 제거 {/* */}
    html = html.replace(/\{\/\*.*?\*\/\}/g, '');

    // 자바스크립트 표현식을 일반 텍스트로 (간단한 경우만)
    // 예: {variable} -> variable (실제로는 더 복잡하지만 간단히)

    // 배열 map 제거 (이미 존재하는 HTML 사용)
    // 이 부분은 수동으로 처리해야 할 수 있음

    return html.trim();
}

// 섹션 매핑
const sections = {
    'src/pages/intro/Space.jsx': {
        id: 'new-space-section',
        startMarker: '<div id="new-space-section" style="display: none;">',
        endMarker: '</div>\n  </div>\n\n  <style>'
    }
    // 필요한 다른 섹션들 추가 가능
};

console.log('🔧 .jsx 파일에서 HTML 업데이트 중...\n');

// index.html 읽기
let indexHTML = fs.readFileSync('index.html', 'utf8');

// 각 섹션 처리
Object.entries(sections).forEach(([jsxFile, config]) => {
    if (!fs.existsSync(jsxFile)) {
        console.log(`⚠️  ${jsxFile} 파일이 없습니다. 건너뜁니다.`);
        return;
    }

    console.log(`📝 처리중: ${jsxFile}`);

    // .jsx 파일 읽기
    const jsxContent = fs.readFileSync(jsxFile, 'utf8');

    // HTML로 변환
    const htmlContent = convertJSXtoHTML(jsxContent);

    // index.html에서 해당 섹션 찾아서 교체
    const startIdx = indexHTML.indexOf(config.startMarker);
    const endIdx = indexHTML.indexOf(config.endMarker, startIdx);

    if (startIdx === -1 || endIdx === -1) {
        console.log(`   ❌ ${config.id} 섹션을 찾을 수 없습니다.`);
        return;
    }

    // 새로운 HTML로 교체
    const before = indexHTML.substring(0, startIdx);
    const after = indexHTML.substring(endIdx);

    indexHTML = before + config.startMarker + '\n' + htmlContent + '\n  ' + after;

    console.log(`   ✅ ${config.id} 업데이트 완료`);
});

// 업데이트된 index.html 저장
fs.writeFileSync('index.html', indexHTML, 'utf8');

console.log('\n✨ 모든 섹션 업데이트 완료!');
console.log('📦 이제 배포하세요: npm run deploy');
