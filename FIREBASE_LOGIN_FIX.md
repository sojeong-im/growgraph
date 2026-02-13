# 로그인 문제 해결 가이드 🔧

로그인이 작동하지 않는 문제를 해결하기 위한 단계별 가이드입니다.

## 🚨 가장 가능성 높은 원인

Firebase Authentication에서 **도메인 인증이 필요**합니다.

---

## ✅ 해결 방법: Authorized Domains 추가

### 1단계: Firebase Console 접속
1. https://console.firebase.google.com/ 접속
2. **growgraph-e515f** 프로젝트 선택

### 2단계: Authentication 설정으로 이동
1. 왼쪽 메뉴에서 **"Authentication"** 클릭
2. 상단 탭에서 **"Settings"** (설정) 클릭
3. **"Authorized domains"** (승인된 도메인) 섹션 찾기

### 3단계: 도메인 추가
1. **"Add domain"** (도메인 추가) 버튼 클릭
2. 다음 도메인 입력: `growgraph.site`
3. **"Add"** (추가) 클릭

### 4단계확인
승인된 도메인 목록에 다음이 포함되어 있어야 합니다:
- ✅ `localhost` (기본값)
- ✅ `growgraph-e515f.firebaseapp.com` (기본값)
- ✅ `growgraph.site` (방금 추가)

---

## 🧪 테스트 방법

도메인 추가 후:

1. **https://growgraph.site/auth/login** 접속
2. 브라우저 개발자 도구 열기 (F12)
3. **Console** 탭 확인
4. 다음 메시지가 보여야 합니다:
   ```
   ✅ Firebase initialized successfully
   📊 Firestore ready: true
   🔐 Auth ready: true
   ```

5. 로그인 시도:
   - 이메일: `growgraph@gmail.com`
   - 비밀번호: `growgraph1`

6. 성공 시:
   ```
   ✅ 로그인 성공!
   
   환영합니다, growgraph@gmail.com
   ```

---

## 🐛 여전히 문제가 있다면

### 콘솔에서 확인할 에러 메시지들:

#### 1. "auth/unauthorized-domain"
```
Firebase: Error (auth/unauthorized-domain).
```
**해결:** 위의 Authorized domains 추가 단계를 다시 확인

#### 2. "Firebase not initialized"
```
❌ Firebase initialization error
```
**해결:** 페이지를 새로고침 (Ctrl+F5 또는 Cmd+Shift+R)

#### 3. "auth/user-not-found"
```
등록되지 않은 이메일입니다.
```
**해결:** Firebase Console > Authentication > Users에서 사용자 확인

#### 4. "auth/wrong-password"
```
비밀번호가 올바르지 않습니다.
```
**해결:** 비밀번호 `growgraph1` 정확히 입력 확인

---

## 📝 체크리스트

로그인이 작동하려면 다음이 모두 완료되어야 합니다:

- [ ] Firebase Authentication 활성화됨
- [ ] 이메일/비밀번호 로그인 방법 활성화됨
- [ ] 사용자 계정 생성됨 (growgraph@gmail.com)
- [ ] **Authorized domains에 growgraph.site 추가됨** ← 가장 중요!
- [ ] 웹사이트가 최신 버전으로 배포됨

---

## 🔍 디버깅 팁

### 브라우저 콘솔에서 Firebase 상태 확인:

```javascript
// Firebase가 초기화되었는지 확인
console.log('Firebase App:', window.firebaseApp);
console.log('Firestore:', window.firestoreDB);
console.log('Auth:', window.firebaseAuth);

// 현재 로그인 상태 확인
console.log('Current user:', window.firebaseAuth?.currentUser);

// localStorage의 사용자 정보 확인
console.log('Stored user:', localStorage.getItem('growgraph_user'));
```

모든 값이 `undefined`가 아니어야 합니다!

---

**Authorized domains를 추가하신 후 다시 테스트해보세요!**
