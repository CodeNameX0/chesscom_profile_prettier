# Chess.com 프로필 스타일링 🌌

Chess.com에서 특정 사용자명을 우주틱한 파스텔 그라데이션으로 꾸며주는 스크립트입니다.

## ✨ 기능

- **우주틱 파스텔 그라데이션**: 민트 → 청록 → 보라 → 라벤더 → 핑크 → 로즈 → 스카이블루로 흘러가는 애니메이션
- **간편한 관리**: 실행 후 간단한 명령어로 비활성화

## 🚀 사용법

### 1. 기본 설치
1. [Chess.com](https://chess.com)에 접속
2. **F12** 키를 눌러 개발자 도구 열기
3. **Console** 탭 클릭
4. `chesscom_profile_prettier.js` 파일의 내용을 복사해서 붙여넣기:
```chesscom_profile_prettier.js
(function() {
    const USERNAME = '0xemanedoc';
    const STORAGE_KEY = 'chess_simple_enhancer';
    
    localStorage.setItem(STORAGE_KEY, 'active');
    
    function addStyles() {
        if (document.getElementById('chess-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'chess-styles';
        style.innerHTML = `
            .enhanced-user {
                background: linear-gradient(90deg, #a8e6cf, #88d8c0, #b8a9ff, #d4a5ff, #ffb3de, #ff9acd, #87ceeb, #a8e6cf) !important;
                background-size: 300% 100% !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                background-clip: text !important;
                animation: cosmic-drift 4s ease-in-out infinite !important;
                font-weight: bold !important;
                color: transparent !important;
                filter: drop-shadow(0 0 8px rgba(168, 230, 207, 0.4)) !important;
            }
            @keyframes cosmic-drift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    }
    
    function enhanceProfile() {
        if (!localStorage.getItem(STORAGE_KEY)) return;
        
        const selectors = ['.username', '.user-username', '.profile-card-username', '.player-name', '[data-test-element="user-username"]', '.sidebar-username', '.user-info .username', '.master-player-name', 'h1.profile-card-username', '.profile-header .username', '.user-tagline-username'];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (element.textContent.trim().toLowerCase() === USERNAME.toLowerCase() && !element.classList.contains('enhanced-user')) {
                    element.classList.add('enhanced-user');
                    element.style.cssText += `background: linear-gradient(90deg, #a8e6cf, #88d8c0, #b8a9ff, #d4a5ff, #ffb3de, #ff9acd, #87ceeb, #a8e6cf) !important; background-size: 300% 100% !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; animation: cosmic-drift 4s ease-in-out infinite !important; font-weight: bold !important; color: transparent !important; filter: drop-shadow(0 0 8px rgba(168, 230, 207, 0.4)) !important;`;
                }
            });
        });
    }
    
    addStyles();
    enhanceProfile();
    setInterval(enhanceProfile, 1000);
    
    if (document.body) {
        new MutationObserver(enhanceProfile).observe(document.body, {childList: true, subtree: true});
    }
    
    if (!document.getElementById('chess-auto-restart')) {
        const autoScript = document.createElement('script');
        autoScript.id = 'chess-auto-restart';
        autoScript.textContent = `
            (function() {
                const STORAGE_KEY = '${STORAGE_KEY}';
                const USERNAME = '${USERNAME}';
                
                function addStyles() {
                    if (document.getElementById('chess-styles')) return;
                    const style = document.createElement('style');
                    style.id = 'chess-styles';
                    style.innerHTML = '.enhanced-user{background:linear-gradient(90deg,#a8e6cf,#88d8c0,#b8a9ff,#d4a5ff,#ffb3de,#ff9acd,#87ceeb,#a8e6cf)!important;background-size:300% 100%!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important;animation:cosmic-drift 4s ease-in-out infinite!important;font-weight:bold!important;color:transparent!important;filter:drop-shadow(0 0 8px rgba(168,230,207,0.4))!important}@keyframes cosmic-drift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}';
                    document.head.appendChild(style);
                }
                
                function enhanceProfile() {
                    if (!localStorage.getItem(STORAGE_KEY)) return;
                    ['.username', '.user-username', '.profile-card-username', '.player-name', '[data-test-element="user-username"]', '.sidebar-username', '.user-info .username', '.master-player-name', 'h1.profile-card-username', '.profile-header .username', '.user-tagline-username'].forEach(selector => {
                        document.querySelectorAll(selector).forEach(element => {
                            if (element.textContent.trim().toLowerCase() === USERNAME.toLowerCase() && !element.classList.contains('enhanced-user')) {
                                element.classList.add('enhanced-user');
                                element.style.cssText += 'background:linear-gradient(90deg,#a8e6cf,#88d8c0,#b8a9ff,#d4a5ff,#ffb3de,#ff9acd,#87ceeb,#a8e6cf)!important;background-size:300% 100%!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important;animation:cosmic-drift 4s ease-in-out infinite!important;font-weight:bold!important;color:transparent!important;filter:drop-shadow(0 0 8px rgba(168,230,207,0.4))!important;';
                            }
                        });
                    });
                }
                
                if (!localStorage.getItem(STORAGE_KEY)) return;
                
                const run = () => {
                    if (location.hostname.includes('chess.com')) {
                        addStyles();
                        enhanceProfile();
                        setInterval(enhanceProfile, 1000);
                        if (document.body) new MutationObserver(enhanceProfile).observe(document.body, {childList: true, subtree: true});
                    }
                };
                
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', run);
                } else {
                    run();
                }
                window.addEventListener('load', run);
            })();
        `;
        document.head.appendChild(autoScript);
    }
    
    window.disableChessEnhancer = function() {
        localStorage.removeItem(STORAGE_KEY);
        document.getElementById('chess-styles')?.remove();
        document.getElementById('chess-auto-restart')?.remove();
        document.querySelectorAll('.enhanced-user').forEach(el => el.classList.remove('enhanced-user'));
    };
})();

```
6. **Enter** 키로 실행

### 2. 사용자명 변경
파일의 2번째 줄에서 사용자명을 변경할 수 있습니다:
```javascript
const USERNAME = '0xemanedoc';  // 여기에 원하는 사용자명 입력
```

### 3. 비활성화
콘솔에서 다음 명령어 실행:
```javascript
disableChessEnhancer()
```

## 📁 파일 설명

- `chesscom_profile_prettier.js` - 메인 스크립트 (권장)
- `simple_permanent_enhancer.js` - 상세 버전 (주석 포함)
- `minimal_enhancer.js` - 최소 압축 버전

## 🎯 지원 영역

스크립트는 다음 위치의 사용자명을 자동으로 찾아 스타일링을 적용합니다:

- 프로필 페이지
- 게임 화면의 플레이어명
- 사이드바의 사용자명
- 채팅창의 사용자명
- 랭킹 페이지의 사용자명

## 🔧 기술적 특징

- **localStorage 활용**: 브라우저 저장소에 설정 저장
- **DOM 감지**: MutationObserver로 실시간 요소 변화 감지
- **자동 재시작**: 페이지 새로고침 시 자동으로 스크립트 재실행
- **CSS 애니메이션**: 하드웨어 가속을 활용한 부드러운 그라데이션

## 🎨 색상 팔레트

```css
#a8e6cf  /* 파스텔 민트 */
#88d8c0  /* 연한 청록 */
#b8a9ff  /* 파스텔 보라 */
#d4a5ff  /* 라벤더 */
#ffb3de  /* 파스텔 핑크 */
#ff9acd  /* 로즈 핑크 */
#87ceeb  /* 스카이 블루 */
```

## ⚠️ 주의사항

- 이 스크립트는 **클라이언트 사이드**에서만 작동합니다
- 본인의 브라우저에서만 효과가 보이며, 다른 사용자에게는 보이지 않습니다
- Chess.com의 업데이트로 인해 일부 기능이 작동하지 않을 수 있습니다

## 🤝 기여하기

버그 리포트나 기능 제안이 있으시면 이슈를 생성해주세요.

## 📝 라이선스

이 프로젝트는 개인적인 용도로 자유롭게 사용 가능합니다.

---

**만든이**: GitHub Copilot  
**버전**: 3.0  
**최종 업데이트**: 2025년 7월 26일

---

**주의사항**: 페이지를 새로고침하면 원래대로 돌아옵니다.
