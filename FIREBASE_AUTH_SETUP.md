# Firebase Authentication 설정 가이드 🔐

로그인 기능이 코드에 추가되었습니다! 이제 Firebase Console에서 Authentication을 활성화하고 사용자를 만들어야 합니다.

## 📋 1단계: Authentication 활성화

### Firebase Console에서:

1. **Authentication 메뉴 클릭**
   - 왼쪽 사이드바에서 "빌드" > **"Authentication"** 클릭

2. **시작하기**
   - **"시작하기"** 버튼 클릭

3. **로그인 방법 설정**
   - **"Sign-in method"** (로그인 방법) 탭 클릭
   - **"이메일/비밀번호"** 선택
   - 첫 번째 옵션만 **"사용 설정"** (두 번째 '이메일 링크' 옵션은 OFF)
   - **"저장"** 클릭

## 👤 2단계: 사용자 계정 생성

### 방법 1: Firebase Console에서 직접 생성

1. **"Users"** (사용자) 탭 클릭
2. **"Add user"** (사용자 추가) 버튼 클릭
3. 다음 정보 입력:
   ```
   이메일: growgraph@gmail.com
   비밀번호: growgraph1
   ```
4. **"Add user"** 클릭

### 방법 2: 개발자 도구에서 생성 (콘솔 사용)

웹사이트를 열고 브라우저 개발자 도구 > 콘솔에서 다음 실행:

```javascript
// Firebase 회원가입
signUpUser('growgraph@gmail.com', 'growgraph1')
  .then(() => console.log('✅ 사용자 생성 완료!'))
  .catch(err => console.error('❌ 에러:', err));
```

## 🧪 3단계: 로그인 테스트

1. **로그인 페이지 접속**
   - 웹사이트에서 `/auth/login` 경로로 이동
   - 또는 네비게이션에서 로그인 메뉴 클릭

2. **로그인 정보 입력**
   ```
   이메일: growgraph@gmail.com
   비밀번호: growgraph1
   ```

3. **로그인 버튼 클릭**
   - 성공 시: "✅ 로그인 성공!" 메시지 표시 → 홈으로 리다이렉트
   - 실패 시: 한국어 에러 메시지 표시

## 📊 로그인 상태 확인

로그인 후 브라우저 개발자 도구에서:

```javascript
// localStorage에 저장된 사용자 정보 확인
JSON.parse(localStorage.getItem('growgraph_user'))
```

다음과 같은 정보가 표시됩니다:
```json
{
  "email": "growgraph@gmail.com",
  "uid": "사용자고유ID",
  "loginTime": "2026-02-07T09:52:00.000Z"
}
```

## 🚀 배포 전 체크리스트

- [x] Firebase 프로젝트 생성
- [x] `firebase-config.js` 설정 완료
- [x] Firestore Database 생성
- [x] Firestore 보안 규칙 설정
- [ ] **Authentication 활성화** ← 지금 할 일!
- [ ] **사용자 계정 생성** ← 지금 할 일!
- [ ] 로그인 테스트
- [ ] 배포

## 🔒 보안 참고사항

### 현재 구현된 기능:
- ✅ 이메일/비밀번호 로그인
- ✅ 로그인 상태 localStorage 저장
- ✅ 한국어 에러 메시지
- ✅ 로딩 상태 UI

### 추후 추가 가능:
- 로그아웃 기능
- 비밀번호 재설정
- 이메일 인증
- Google/카카오 소셜 로그인
- 로그인 상태에 따른 UI 변경 (예: 로그인/로그아웃 버튼 토글)

## ❗ 주의사항

**보안을 위해:**
1. 실제 배포 시에는 더 강력한 비밀번호 사용
2. Firebase 보안 규칙을 반드시 설정
3. API Key는 공개 저장소에 올리지 않기 (이미 환경 변수로 관리 권장)

---

**다음 단계:** Authentication을 활성화하고 사용자를 생성하면 로그인 기능을 바로 테스트할 수 있습니다!

질문이 있으시면 언제든 말씀해주세요! 🙂
