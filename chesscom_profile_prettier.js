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
