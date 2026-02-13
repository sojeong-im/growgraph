# Firebase 연결 가이드 🔥

GrowGraph 웹사이트에 Firebase가 성공적으로 연결되었습니다!

## 📋 완료된 작업

✅ Firebase SDK 추가 (CDN 방식)
✅ Firebase 설정 파일 생성 (`firebase-config.js`)
✅ Firebase 유틸리티 함수 생성 (`firebase-utils.js`)
✅ 제휴 문의 폼에 Firebase 연동 완료
✅ 폼 제출 시 Firestore에 데이터 저장

## 🚀 다음 단계

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력: `growgraph` (원하는 이름)
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료

### 2. 웹 앱 등록

1. Firebase 콘솔에서 프로젝트 선택
2. 프로젝트 개요 > "웹 앱 추가" (</> 아이콘) 클릭
3. 앱 닉네임 입력: `growgraph-web`
4. "Firebase 호스팅 설정" 체크 해제
5. "앱 등록" 클릭

### 3. Firebase 설정 정보 복사

앱을 등록하면 다음과 같은 설정 정보가 표시됩니다:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
  measurementId: "G-XXXXXXXXXX" // (선택사항)
};
```

### 4. 설정 파일 업데이트

위에서 복사한 정보를 `/Users/imsojeong/Desktop/growgraph/firebase-config.js` 파일에 붙여넣으세요:

```javascript
// firebase-config.js
const firebaseConfig = {
  apiKey: "여기에 YOUR_API_KEY 입력",
  authDomain: "여기에 YOUR_AUTH_DOMAIN 입력",
  projectId: "여기에 YOUR_PROJECT_ID 입력",
  storageBucket: "여기에 YOUR_STORAGE_BUCKET 입력",
  messagingSenderId: "여기에 YOUR_MESSAGING_SENDER_ID 입력",
  appId: "여기에 YOUR_APP_ID 입력",
  measurementId: "G-XXXXXXXXXX" // Optional
};
```

### 5. Firestore 데이터베이스 설정

1. Firebase 콘솔 왼쪽 메뉴에서 **"Firestore Database"** 선택
2. **"데이터베이스 만들기"** 클릭
3. **프로덕션 모드** 선택 (나중에 규칙 수정 가능)
4. 위치 선택: `asia-northeast3 (Seoul)` 권장
5. **"사용 설정"** 클릭

### 6. Firestore 보안 규칙 설정

Firebase 콘솔 > Firestore Database > 규칙 탭에서 다음과 같이 설정:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 제휴 문의 (partnerships) - 쓰기만 허용
    match /partnerships/{document} {
      allow read: if false; // 보안을 위해 읽기 금지
      allow create: if true; // 누구나 제출 가능
    }
    
    // 프로그램 신청 (applications) - 쓰기만 허용
    match /applications/{document} {
      allow read: if false;
      allow create: if true;
    }
    
    // 진단 결과 (diagnostics) - 선택사항
    match /diagnostics/{document} {
      allow read: if false;
      allow create: if true;
    }
  }
}
```

**규칙 게시** 버튼을 클릭하여 저장합니다.

### 7. Firebase Authentication 설정 (선택사항)

로그인 기능이 필요한 경우:

1. Firebase 콘솔 > Authentication 선택
2. **"시작하기"** 클릭
3. **로그인 방법** 탭에서 원하는 방법 활성화:
   - 이메일/비밀번호
   - Google
   - 기타 소셜 로그인

## 📊 데이터 구조

### partnerships 컬렉션
```javascript
{
  name: "홍길동",
  organization: "(주)그로우컴퍼니",
  phone: "010-1234-5678",
  email: "contact@example.com",
  inquiryType: "corporate", // lecture, corporate, campus, other
  message: "기업 제휴 문의드립니다...",
  timestamp: Timestamp,
  status: "pending" // pending, contacted, completed
}
```

### applications 컬렉션
```javascript
{
  name: "김철수",
  phone: "010-9876-5432",
  email: "user@example.com",
  programType: "g-boost", // g-check, g-boost, g-mastery, etc.
  preferredDate: "2026-02-15",
  concerns: "번아웃 극복을 위한 프로그램...",
  timestamp: Timestamp,
  status: "pending"
}
```

## 🧪 테스트 방법

1. 로컬에서 웹사이트 열기
2. "제휴 문의" 페이지로 이동 (`/apply/partnership`)
3. 폼 작성 후 제출
4. Firebase 콘솔 > Firestore Database에서 데이터 확인

## 🐛 문제 해결

### "Firebase not initialized" 오류
- `firebase-config.js`에서 Firebase 설정 정보를 올바르게 입력했는지 확인
- 브라우저 콘솔에서 Firebase 초기화 로그 확인

### "Permission denied" 오류
- Firestore 보안 규칙이 올바르게 설정되었는지 확인
- 컬렉션 이름이 일치하는지 확인 (partnerships, applications)

### 데이터가 저장되지 않음
- 브라우저 개발자 도구 > 콘솔에서 에러 메시지 확인
- Firebase 프로젝트가 활성화 상태인지 확인
- 네트워크 연결 확인

## 📚 추가 기능

현재 구현된 Firebase 유틸리티 함수:

- ✅ `savePartnershipInquiry(formData)` - 제휴 문의 저장
- ✅ `saveProgramApplication(formData)` - 프로그램 신청 저장
- ✅ `saveDiagnosticResult(resultData)` - 진단 결과 저장 (선택)
- ✅ `signUpUser(email, password)` - 회원가입
- ✅ `loginUser(email, password)` - 로그인
- ✅ `logoutUser()` - 로그아웃

## 🎯 다음 구현 예정

- [ ] 프로그램 신청 폼 Firebase 연동
- [ ] 로그인/회원가입 폼 연동
- [ ] 관리자 대시보드 (문의 내역 조회)
- [ ] 이메일 알림 (Cloud Functions)

## 🔗 참고 자료

- [Firebase 문서](https://firebase.google.com/docs)
- [Firestore 시작하기](https://firebase.google.com/docs/firestore/quickstart)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

---

**작성일:** 2026-02-07  
**버전:** 1.0  
**문의:** Firebase 연동 관련 질문이 있으시면 언제든 말씀해주세요!
