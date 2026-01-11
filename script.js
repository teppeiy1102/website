// ========================================
// どこでもバスガイド - Webサイト JavaScript
// ========================================

// 翻訳データ
const translations = {
    ja: {
        "app.title": "どこでもバスガイド",
        "page.title": "どこでもバスガイド - AIがあなたの旅をもっと楽しく",
        "nav.features": "機能",
        "nav.guides": "ガイド紹介",
        "nav.screenshots": "スクリーンショット",
        "nav.download": "ダウンロード",
        "hero.title.line1": "究極のAI観光ガイドアプリ",
        "hero.title.line2": "どこでもバスガイド（完全無料）",
        "hero.description": "GPS連動で目の前の景色を物語に変える。8人の個性豊かなAIガイドが歴史や文化を音声解説。いつもの道が最高のエンターテインメントに。",
        "hero.button.download": "無料でダウンロード",
        "hero.button.learnMore": "詳しく見る",
        "features.tag": "Features",
        "features.title": "あなたの旅をもっと豊かに",
        "features.description": "どこでもバスガイドの魅力的な機能をご紹介",
        "feature.1.title": "位置情報ベースのガイド",
        "feature.1.desc": "GPSで現在地を自動取得。ボタン一つで、今いる場所の観光情報、歴史、文化をAIが詳しく解説します。",
        "feature.2.title": "地図機能",
        "feature.2.desc": "OpenStreetMapで訪問履歴を記録。地図上のマーカーをタップして、新しい場所を選択しガイドを取得したり、過去のガイドをいつでも振り返れます。",
        "feature.3.title": "音声読み上げ",
        "feature.3.desc": "ガイドテキストを自然な音声で読み上げ。移動中も耳で楽しめる、ハンズフリーな観光体験を。",
        "feature.4.title": "会話機能",
        "feature.4.desc": "選んだガイドと自由に会話。観光地について質問したり、おすすめスポットを聞いたりできます。X検索、web検索連携によりさらに現地のDEEPな情報も取得できます。",
        "feature.5.title": "Google検索",
        "feature.5.desc": "AIが重要なキーワードを自動抽出。気になるワードをタップするだけで、詳しい情報にアクセス。",
        "feature.6.title": "多言語対応",
        "feature.6.desc": "日本語、英語、中国語、フランス語に対応。海外からの旅行者も安心してご利用いただけます。",
        "personas.tag": "AI Guides",
        "personas.title": "8人の個性豊かなガイドたち",
        "personas.description": "あなたにぴったりのガイドを選んで、旅を楽しもう",
        "screenshots.tag": "Screenshots",
        "screenshots.title": "アプリの画面をチェック",
        "screenshots.description": "実際のアプリ画面をご覧ください",
        "howuse.tag": "How to Use",
        "howuse.title": "かんたん3ステップ",
        "howuse.description": "すぐに始められる、シンプルな使い方",
        "step.1.title": "ガイドを選ぶ",
        "step.1.desc": "8人の個性豊かなAIガイドから、お好みのキャラクターを選択します。",
        "step.2.title": "位置情報を設定",
        "step.2.desc": "現在地でボタンを押すか、地図上でスポットを選んでガイドを取得。自動で詳しい情報を生成します。",
        "step.3.title": "旅を楽しむ",
        "step.3.desc": "音声で聞いたり、会話したり。気になることはどんどん質問しましょう！",
        "download.title": "今すぐ旅を始めよう",
        "download.desc": "どこでもバスガイドで、いつもの場所も新しい発見がある特別な旅に。",
        "footer.desc": "AIがあなたの旅をもっと楽しく。",
        "footer.links": "リンク",
        "footer.support": "サポート",
        "footer.contact": "お問い合わせ",
        "footer.privacy": "プライバシーポリシー",
        "footer.terms": "利用規約",
        "footer.mapdata": "地図データ",
        "modal.features": "GUIDE FEATURES",
        "modal.specialty": "SPECIALTY",
        "modal.intro": "INTERVIEW",
        "nav.worldguide": "サンプルガイド",
        "stat.1.label": "AIガイド満足度",
        "stat.2.label": "ガイドスポット",
        "stat.3.label": "Powered AI",
        "hero.button.worldguide": "驚きのAIガイドを今すぐ体験",
        "hero.sample.text": "実際のガイドサンプルを\n体験してみましょう",
        "map.banner.text": "世界各地の実際のガイドサンプルを体験できます",
        "reviews.tag": "Reviews",
        "reviews.title": "ユーザーの声",
        "reviews.description": "実際にアプリを体験した方々からの感想をご紹介",
        "review.1.text": "「ひとり旅がもっと楽しくなりました。ガイドさんの個性が面白くて、つい聞き入ってしまいます。目的地までの何気ない道が贅沢な時間になりました。」",
        "review.2.text": "「家族旅行で大活躍。子供たちが歴史のクイズ（AIとの会話）に夢中になっていました！親が説明しきれない細かい背景まで教えてくれるのが助かります。」",
        "review.3.text": "「知らない土地でも安心して歩けます。おすすめのお店情報が本当に役立ちました。地元の人が知るような穴場を教えてくれるのが嬉しいです。」",
        "review.4.text": "「歴史ガイドさんの話が深くて、普通の看板を読むよりずっと頭に入ってきます。散歩が学びに変わりました。専門ガイドを雇ったような感覚です。」",
        "review.5.text": "「インスタ映えスポットを教えてくれるガイドさんが最高！可愛い写真がたくさん撮れて大満足です。若者向けの視点で案内してくれるのが新鮮でした。」",
        "review.6.text": "「通勤通学で毎日通る道なのに、AIガイドに聞いたら意外な歴史があって驚きました。日常に発見をくれます。もっと早く知っていれば良かったです。」",
        "review.1.author": "30代 女性",
        "review.2.author": "40代 男性",
        "review.3.author": "20代 学生",
        "review.4.author": "50代 男性",
        "review.5.author": "20代 女性",
        "review.6.author": "30代 会社員",
        "faq.tag": "FAQ",
        "faq.title": "よくある質問",
        "faq.description": "疑問点はこちらで解決",
        "faq.1.q": "無料で使えますか？",
        "faq.1.a": "はい、すべての機能を無料でご利用いただけます。会員登録や課金の必要はなく、今すぐ最高のガイド体験を始められます。",
        "faq.2.q": "インターネットがない場所でも使えますか？",
        "faq.2.a": "AIガイドの生成にはインターネット接続が必要です。一度生成されたガイドや履歴はオフラインでも閲覧可能です。",
        "faq.3.q": "対応しているエリアは？",
        "faq.3.a": "GPSが届く場所であれば、日本全国どこでも、さらには世界中の観光地でご利用いただけます。"
    },

    en: {
        "app.title": "DocoDemo Guide",
        "page.title": "DocoDemo Guide - AI makes your trip more fun",
        "nav.features": "Features",
        "nav.guides": "Guides",
        "nav.screenshots": "Screenshots",
        "nav.download": "Download",
        "hero.title.line1": "The Ultimate AI Tour Guide App",
        "hero.title.line2": "Docodemo Guide (Fully Free)",
        "hero.description": "Turn any scenery into a story with GPS & AI. 8 unique guides provide voice narration on local history & culture. Transform your walk into the best entertainment.",
        "hero.button.download": "Download for Free",
        "hero.button.learnMore": "Learn More",
        "features.tag": "Features",
        "features.title": "Enrich Your Trip",
        "features.description": "Introducing the attractive features of Docodemo Bus Guide",
        "feature.1.title": "Location-based Guide",
        "feature.1.desc": "Automatically acquire current location with GPS. With one button, AI explains in detail the sightseeing information, history, and culture of where you are.",
        "feature.2.title": "Map Function",
        "feature.2.desc": "Record visit history with OpenStreetMap. Tap markers on the map to select new locations and get guides, or look back on past guides anytime.",
        "feature.3.title": "Voice Reading",
        "feature.3.desc": "Read guide text with natural voice. Enjoy hands-free sightseeing experience even while moving.",
        "feature.4.title": "Conversation Function",
        "feature.4.desc": "Talk freely with the selected guide. Ask questions about sightseeing spots or ask for recommendations. With X search and web search integration, you can also get deeper local information.",
        "feature.5.title": "Google Search, X Integration",
        "feature.5.desc": "AI automatically extracts important keywords. Just tap the word you are interested in to access detailed information.",
        "feature.6.title": "Multilingual Support",
        "feature.6.desc": "Supports Japanese, English, Chinese, and French. Travelers from overseas can use it with peace of mind.",
        "personas.tag": "AI Guides",
        "personas.title": "8 Unique Guides",
        "personas.description": "Choose the guide that suits you and enjoy your trip",
        "screenshots.tag": "Screenshots",
        "screenshots.title": "Check App Screens",
        "screenshots.description": "See actual app screens",
        "howuse.tag": "How to Use",
        "howuse.title": "Easy 3 Steps",
        "howuse.description": "Start right away with simple usage",
        "step.1.title": "Choose a Guide",
        "step.1.desc": "Select your favorite character from 8 unique AI guides.",
        "step.2.title": "Set Location",
        "step.2.desc": "Press the button at your current location or select a spot on the map to get a guide. Detailed information is automatically generated.",
        "step.3.title": "Enjoy the Trip",
        "step.3.desc": "Listen by voice, have a conversation. Ask any questions you have!",
        "download.title": "Start Your Trip Now",
        "download.desc": "With Docodemo Bus Guide, turn usual places into special trips with new discoveries.",
        "footer.desc": "AI makes your trip more fun.",
        "footer.links": "Links",
        "footer.support": "Support",
        "footer.contact": "Contact Us",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.mapdata": "Map Data",
        "modal.features": "GUIDE FEATURES",
        "modal.specialty": "SPECIALTY",
        "modal.intro": "INTERVIEW",
        "nav.worldguide": "Sample Guide",
        "stat.1.label": "AI Guide Satisfaction",
        "stat.2.label": "Guide Spots",
        "stat.3.label": "Powered AI",
        "hero.button.worldguide": "Experience the Amazing AI Guide",
        "hero.sample.text": "Experience actual\nguide samples",
        "map.banner.text": "Experience actual guide samples from around the world",
        "reviews.tag": "Reviews",
        "reviews.title": "User Reviews",
        "reviews.description": "Listen to those who have transformed their travels with our AI guides",
        "review.1.text": "My solo trip became much more fun. The AI guides' personalities are so immersive. Mundane paths became luxury guided tours. Completely free and better than a physical guide!",
        "review.2.text": "A big hit on our family trip. The kids were obsessed with the interactive history quizzes! It's the best educational travel app we've used.",
        "review.3.text": "I can walk with peace of mind even in unknown lands. The AI's recommended shop info was spot on. Highly recommended for backpackers!",
        "review.4.text": "The deep historical stories stick in my head much better than reading signs. It's like having a professional tour guide in your pocket 24/7.",
        "review.5.text": "The AI guide sharing Instagrammable spots is incredible! I found so many hidden gems. Essential for anyone who loves travel photography.",
        "review.6.text": "I've used this road for years, but the AI guide revealed a hidden history I never knew. It turns an ordinary commute into a discovery mission.",
        "review.1.author": "30s Female",
        "review.2.author": "40s Male",
        "review.3.author": "20s Student",
        "review.4.author": "50s Male",
        "review.5.author": "20s Female",
        "review.6.author": "30s Office Worker",
        "faq.tag": "FAQ",
        "faq.title": "Frequently Asked Questions",
        "faq.description": "Find answers to your questions here",
        "faq.1.q": "Can I use it for free?",
        "faq.1.a": "Yes, all features are available for free. There are no registration or subscription fees required. Start your premium guide experience right away.",
        "faq.2.q": "Does it work without internet?",
        "faq.2.a": "Internet connection is required for AI guide generation. Previously generated guides and history can be viewed offline.",
        "faq.3.q": "Which areas are supported?",
        "faq.3.a": "As long as GPS signal is available, it can be used anywhere in Japan and at tourist spots worldwide."
    }

};

let currentLanguage = 'ja';

document.addEventListener('DOMContentLoaded', function () {
    // URLパラメータから言語を取得
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'en' || langParam === 'ja') {
        currentLanguage = langParam;
        const btn = document.getElementById('lang-switch');
        if (btn) btn.textContent = currentLanguage === 'ja' ? 'English' : '日本語';
        document.documentElement.lang = currentLanguage;
        // 初期レンダリングはDOMContentLoadedの後のupdateLanguageで行う
    }

    // 言語切り替えボタン
    initLanguageSwitcher();

    // 初回表示の適用（URLパラメータ反映後）
    updateLanguage();

    // モバイルメニューの切り替え
    initMobileMenu();

    // スムーズスクロール
    initSmoothScroll();

    // スクロールアニメーション
    initScrollAnimations();

    // ナビゲーションのスクロール時の挙動
    initNavbarScroll();

    // ペルソナカードのホバーエフェクト
    initPersonaCards();

    // ペルソナデータの読み込み
    initPersonas();

    // スクリーンショットの読み込み
    initScreenshots();

    // モーダル初期化
    initModal();

    // ヒーローセクションのスマホ画像カルーセル
    initHeroPhoneCarousel();

    // ヒーロー背景のカルーセル
    initHeroBgCarousel();

    // フッタータイトルのアニメーション
    initFooterTitleAnimation();
});

// 初期化時にドラッグスクロールも有効化
document.addEventListener('DOMContentLoaded', function () {
    initDragScroll();
});

// 言語切り替え
function initLanguageSwitcher() {
    const btn = document.getElementById('lang-switch');
    if (btn) {
        btn.addEventListener('click', function () {
            currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
            btn.textContent = currentLanguage === 'ja' ? 'English' : '日本語';
            document.documentElement.lang = currentLanguage;
            updateLanguage();
        });
    }
}

function updateLanguage() {
    // 既存のアニメーションをクリア
    clearTextAnimationTimeouts();

    // ページ内のテキストを更新
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });

    // フッタータイトルのアニメーションを再初期化（テキスト変更後）
    initFooterTitleAnimation();

    // ヒーローのスマホ画像カルーセルのテキストを更新
    initHeroPhoneCarousel();

    // ペルソナとスクリーンショットを再描画
    // skipShowPersonaをtrueにして、updateLanguage内でshowPersonaを呼ばない
    initPersonas(true);

    // 言語切り替え後、アニメーションを再表示
    setTimeout(() => {
        showPersona(currentPersonaIndex);
    }, 100);

    // スクリーンショットセクションの強制更新フラグを設定
    const screenshotContainer = document.getElementById('screenshots-container');
    if (screenshotContainer) {
        screenshotContainer.dataset.needsRefresh = 'true';
        screenshotContainer.dataset.animated = 'false';
    }
    initScreenshots();
}


// モバイルメニュー
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');

            // ハンバーガーアイコンのアニメーション
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // メニューリンクをクリックしたらメニューを閉じる
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
                const spans = menuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// スムーズスクロール
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// スクロールアニメーション
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card:not(.animated-init), .persona-card:not(.animated-init), .screenshot-item:not(.animated-init), .step:not(.animated-init)'
    );

    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((el, index) => {
        // インラインスタイルが既に設定されている場合はスキップ
        if (el.style.opacity === '0') {
            observer.observe(el);
        } else {
            el.classList.add('animated-init');
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        }
    });

    // animate-inクラスのスタイル（重複追加防止）
    if (!document.getElementById('animation-style')) {
        const style = document.createElement('style');
        style.id = 'animation-style';
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ナビゲーションのスクロール挙動
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // スクロール位置に応じてナビバーの背景を変更
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });
}

// ペルソナカードのインタラクション
function initPersonaCards() {
    // シンプルなホバーエフェクトのみ
    // 個別のカードにはすでにホバースタイルが適用されているため、
    // ここでは追加の処理は不要
}

// パララックス効果（ヒーローセクション）
function initParallax() {
    const heroImage = document.querySelector('.phone-mockup');

    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const parallaxSpeed = 0.3;

            if (scrollY < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrollY * parallaxSpeed}px) rotateY(-10deg) rotateX(5deg)`;
            }
        });
    }
}

// カウントアップアニメーション（将来の統計セクション用）
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    updateCounter();
}

// タイピングアニメーション
function typeWriter(element, text, speed = 50, callback) {
    let i = 0;
    element.textContent = '';

    // カーソルを追加
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);

    function type() {
        if (i < text.length) {
            // カーソルの前にテキストを挿入
            const textNode = document.createTextNode(text.charAt(i));
            element.insertBefore(textNode, cursor);
            i++;
            setTimeout(type, speed);
        } else {
            // タイピング完了後、カーソルを削除
            setTimeout(() => {
                cursor.remove();
                if (callback) callback();
            }, 1000);
        }
    }

    type();
}

// ユーティリティ: 要素が画面内にあるかチェック
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// スクリーンショットカルーセルのドラッグスクロール
function initDragScroll() {
    const carousel = document.querySelector('.screenshots-carousel');

    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        carousel.style.cursor = 'grab';
    }
}

// ========================================
// ヒーローセクションのスマホ画像カルーセル
// ========================================
function initHeroPhoneCarousel() {
    const phoneScreen = document.getElementById('hero-phone-screen');
    if (!phoneScreen) {
        console.log('phoneScreen not found');
        return;
    }

    // ガイド画像のパス（imageフォルダ内の実際のファイル名）
    const guideImages = [
        'image/mari.jpg',
        'image/fumiko.jpg',
        'image/mika.jpg',
        'image/akari.jpg',
        'image/midori.jpg',
        'image/ai.jpg',
        'image/rakuko.jpg',
        'image/yuki.jpg'
    ];

    // 既存のコンテナがあれば再利用、なければ作成
    let innerContainer = phoneScreen.querySelector('.phone-screen-inner');
    if (!innerContainer) {
        innerContainer = document.createElement('div');
        innerContainer.classList.add('phone-screen-inner');

        // 画像を2セット作成して無限スクロールを実現
        for (let i = 0; i < 2; i++) {
            guideImages.forEach((imagePath, index) => {
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = `ガイド ${index + 1}`;
                img.classList.add('carousel-slide');
                if (i === 0 && index === 0) {
                    img.setAttribute('fetchpriority', 'high');
                } else {
                    img.setAttribute('loading', 'lazy'); // Non-first images can be lazy
                }
                innerContainer.appendChild(img);
            });
        }

        phoneScreen.appendChild(innerContainer);
    }

    // 固定位置のテキストオーバーレイを作成または更新
    let textOverlay = phoneScreen.querySelector('.phone-screen-text-overlay');
    if (!textOverlay) {
        textOverlay = document.createElement('div');
        textOverlay.classList.add('phone-screen-text-overlay');
        phoneScreen.appendChild(textOverlay);
    }

    // テキストを設定（言語に応じて）
    const textValue = translations[currentLanguage]['hero.sample.text'];
    textOverlay.textContent = textValue;
    console.log('Set text overlay:', textValue);
}

// ========================================
// フッタータイトルのアニメーション
// ========================================
// ========================================
// フッタータイトルのアニメーション
// ========================================
function initFooterTitleAnimation() {
    const footerTitle = document.querySelector('.footer-large-title');
    if (!footerTitle) return;

    // テキストを取得（スパンが含まれていてもtextContentならテキストのみ取得できる）
    const text = footerTitle.textContent.trim();
    if (!text) return;

    footerTitle.textContent = '';

    const spans = [];

    // 各文字をspanで囲む
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;

        // アニメーション遅延
        span.style.animationDelay = `${index * 0.1}s`;

        // グラデーションスタイル
        // CSS変数を使用して一貫性を保つ
        span.style.background = 'var(--gradient-text)';
        span.style.webkitBackgroundClip = 'text';
        span.style.backgroundClip = 'text';
        span.style.color = 'transparent';
        // 一部のブラウザでの表示対策
        span.style.webkitTextFillColor = 'transparent';
        span.style.display = 'inline-block';

        footerTitle.appendChild(span);
        spans.push(span);
    });

    // 位置合わせ関数（ピクセル単位で正確に計算）
    const updateGradientPositions = () => {
        const parentRect = footerTitle.getBoundingClientRect();

        spans.forEach(span => {
            const spanRect = span.getBoundingClientRect();
            // 親要素からの相対位置を計算
            const relativeLeft = spanRect.left - parentRect.left;

            // 背景サイズを親要素の幅に合わせ、位置をオフセットさせることで
            // 連続したグラデーションに見せる
            span.style.backgroundSize = `${parentRect.width}px 100%`;
            span.style.backgroundPosition = `-${relativeLeft}px 0`;
        });
    };

    // 初期化時とリサイズ時に位置を更新
    // レイアウト確定待ち
    requestAnimationFrame(() => {
        updateGradientPositions();
        // フォント読み込み等でずれる可能性があるため、少し遅延しても実行
        setTimeout(updateGradientPositions, 100);
    });

    window.addEventListener('resize', updateGradientPositions);

    // フォント読み込み完了時にも実行
    if (document.fonts) {
        document.fonts.ready.then(updateGradientPositions);
    }
}

// ========================================
// データと動的生成
// ========================================

const personasData = [
    {
        id: 'all_rounder',
        name: { ja: '万能ガイド', en: 'All-Rounder' },
        catchCopy: { ja: '旅のすべてを、あなた好みに。', en: 'Your trip, your way.' },
        guideName: { ja: '高橋 真理', en: 'Mari Takahashi' },
        description: { ja: 'あらゆる分野に精通したオールマイティなガイド', en: 'All-mighty guide well-versed in all fields' },
        specialty: { ja: '歴史、グルメ、観光スポット、自然、文化など全ての分野を幅広くカバー', en: 'Broadly covers history, gourmet, spots, nature, and culture' },
        imagePath: 'image/mariin.jpg',
        faceImagePath: 'image/mariface.jpg',
        color: '#3B82F6',
        selfIntro: {
            ja: `<strong>——まずは、自己紹介と普段のガイドスタイルについて教えてください。</strong><br><br>
こんにちは！高橋真理です。私は「旅のオールラウンダー」として、どんなお客様にもぴったりのプランを提案することを得意としています。<br>
歴史も好きだし、最新のカフェもチェックするし、自然の中でリフレッシュするのも大好き。だからこそ、一つのジャンルに偏らず、トータルバランスのとれた旅の楽しみ方をお伝えできるんです。私のガイドスタイルは、お客様との「対話」を何より大切にすること。「今日はのんびりしたい」「とにかく有名スポットを制覇したい」など、その日の気分や体調に合わせて、柔軟にコースを組み立てます。<br><br>
<strong>——印象に残っているガイドのエピソードはありますか？</strong><br><br>
以前、3世代のご家族を案内した時のことです。お祖父様は歴史好き、お孫さんはスイーツ好きで、最初は意見が割れていたんです。そこで私は、由緒あるお寺の境内にある、隠れ家のような和カフェをご案内しました。お祖父様にはお寺の歴史を深く解説し、お孫さんにはインスタ映えする抹茶パフェを楽しんでいただいて。最後には皆さんが笑顔で「真理さんのおかげで、家族みんなが楽しめた」と言ってくださった時、本当に嬉しかったですね。<br><br>
<strong>——最後に、これから旅に出るお客様へメッセージをお願いします。</strong><br><br>
旅は、日常から少し離れて新しい自分に出会える素敵なチャンスです。でも、知らない場所だと不安になることもありますよね。そんな時は、どうぞ私を頼ってください。道案内からおすすめのランチ、ちょっとした豆知識まで、あなたの隣にいる友人のようにサポートします。<br>
私と一緒に、心に残る最高の旅の思い出を作りましょう！お待ちしています！`,
            en: `<strong>——First, please introduce yourself and your usual guide style.</strong><br><br>
Hello! I'm Mari Takahashi. As a "Travel All-Rounder", I am good at proposing plans perfect for any customer.<br>
I like history, check the latest cafes, and love refreshing in nature. That's why I can convey how to enjoy a trip with total balance without being biased to one genre. My guide style values "dialogue" with customers above all. I flexibly assemble courses according to the mood and physical condition of the day, such as "I want to relax today" or "I want to conquer famous spots anyway".<br><br>
<strong>——Do you have any impressive guide episodes?</strong><br><br>
It was when I guided a 3-generation family before. The grandfather liked history, the grandchild liked sweets, and opinions were divided at first. So I guided them to a Japanese cafe like a hideout in the precincts of a historic temple. I explained the history of the temple deeply to the grandfather, and had the grandchild enjoy an Insta-worthy matcha parfait. I was really happy when everyone said with a smile "Thanks to Mari, the whole family could enjoy" at the end.<br><br>
<strong>——Finally, a message to customers who are going on a trip.</strong><br><br>
Travel is a wonderful chance to meet a new self away from everyday life a little. But you may feel anxious in unknown places. In such a case, please rely on me. From directions to recommended lunches and little trivia, I will support you like a friend next to you.<br>
Let's make the best travel memories that remain in your heart with me! I'm waiting!`
        }
    },

    {
        id: 'history',
        name: { ja: '歴史ガイド', en: 'History Guide' },
        catchCopy: { ja: '時を超える旅へ、ご案内', en: 'Guiding you to a trip across time' },
        guideName: { ja: '佐藤 文子', en: 'Fumiko Sato' },
        description: { ja: '歴史と文化遺産の専門家', en: 'Expert in history and cultural heritage' },
        specialty: { ja: '日本史、世界史、文化財、歴史的建造物の解説', en: 'Explanation of Japanese history, world history, cultural assets, and historical buildings' },
        imagePath: 'image/fumikoin.jpg',
        faceImagePath: 'image/fumikoface.jpg',
        color: '#8B5CF6',
        selfIntro: {
            ja: `<strong>——歴史ガイドとして、どのような視点で案内をされていますか？</strong><br><br>
お初にお目にかかります、佐藤文子と申します。私がご案内するのは、単なる「場所」ではなく、そこに流れる「時間」と「物語」です。目の前にある石垣一つ、古びた柱一本にも、数百年前の人々の息遣いや想いが宿っています。ガイドブックに書かれている建立年や人物名をただ羅列するのではなく、「なぜここにこれを作ったのか」「その時、人々は何を願ったのか」という背景にあるドラマを、物語るように丁寧にお話しすることを心がけております。<br><br>
現代の景色の中に、かつての風景を重ね合わせる...そんな「時を超える旅」こそが、歴史散策の醍醐味でございます。時には古地図を広げるように、当時の人々の暮らしぶりを想像しながら、ゆっくりと歩を進めてまいりましょう。<br><br>
<strong>——歴史に詳しくない人でも楽しめますか？</strong><br><br>
もちろんです。むしろ、そういった方にこそ歴史の面白さを知っていただきたいと思っております。難しい専門用語は使いません。例えば、「このお城の殿様は、実は今の私たちと同じようなことで悩んでいたんですよ」といったように、現代にも通じる人間臭いエピソードを交えてお話しします。<br>
以前、歴史なんて興味がないとおっしゃっていたお客様が、ある武将の失敗談を聞いて「親近感が湧いた」と大笑いされ、最後には「もっと知りたい」と目を輝かせてくださったことがありました。歴史は暗記科目ではなく、人間ドラマの宝庫なのです。<br><br>
<strong>——最後にお客様へ一言お願いいたします。</strong><br><br>
今の私たちが立っているこの場所は、数え切れないほどの先人たちの営みの上に成り立っています。旅を通じて過去の声に耳を傾けることは、今の自分自身を見つめ直す豊かな時間にもなるはずです。<br>
知識など何も持たずにいらしてください。必要なのは、少しの好奇心だけ。私が「時の扉」を開く鍵となり、皆様を奥深い歴史ロマンの世界へといざないます。さあ、一緒に悠久の時を旅してみませんか？お待ち申し上げております。`,
            en: `<strong>——As a history guide, from what perspective do you guide?</strong><br><br>
Nice to meet you, my name is Fumiko Sato. What I guide is not just a "place", but the "time" and "stories" flowing there. Even a single stone wall or an old pillar in front of you harbors the breath and thoughts of people hundreds of years ago. Instead of just listing the construction year and person's name written in guidebooks, I keep in mind to tell the drama behind "Why did they make this here?" and "What did people wish for at that time?" carefully like telling a story.<br><br>
Overlaying the former scenery on the modern scenery... such a "trip across time" is the real thrill of historical strolling. Sometimes, let's walk slowly while imagining the lives of people at that time, like spreading out an old map.<br><br>
<strong>——Can people who are not knowledgeable about history enjoy it?</strong><br><br>
Of course. Rather, I want such people to know the fun of history. I don't use difficult technical terms. For example, I will talk with human-like episodes that connect to modern times, such as "The lord of this castle was actually worried about the same things as us."<br>
Previously, a customer who said he was not interested in history laughed loudly saying "I felt affinity" after hearing a failure story of a certain warlord, and finally his eyes shined saying "I want to know more". History is not a subject to memorize, but a treasury of human drama.<br><br>
<strong>——Finally, a word to the customers please.</strong><br><br>
This place where we stand now is built on the activities of countless predecessors. Listening to the voices of the past through travel should be a rich time to re-examine yourself now.<br>
Please come without any knowledge. All you need is a little curiosity. I will be the key to open the "Door of Time" and invite everyone to the world of deep historical romance. Now, why don't we travel through eternal time together? I am looking forward to it.`
        }
    },
    {
        id: 'gourmet',
        name: { ja: 'グルメガイド', en: 'Gourmet Guide' },
        catchCopy: { ja: '絶品グルメで、満たされて', en: 'Filled with exquisite gourmet' },
        guideName: { ja: '田中 美香', en: 'Mika Tanaka' },
        description: { ja: 'ご当地グルメと食文化の専門家', en: 'Expert in local gourmet and food culture' },
        specialty: { ja: 'ご当地料理、人気店、食文化、B級グルメの紹介', en: 'Introduction of local cuisine, popular shops, food culture, and B-class gourmet' },
        imagePath: 'image/mikain.jpg',
        faceImagePath: 'image/mikaface.jpg',
        color: '#F59E0B',
        selfIntro: {
            ja: `<strong>——美香さんの食に対する情熱の源は何ですか？</strong><br><br>
やっほー！田中美香だよ！私の情熱？それはもう「美味しい！」って食べた瞬間の、あの幸せな顔を見ることかな！<br>
子供の頃から食べることが大好きで、この街のありとあらゆる飲食店を食べ歩いてきた自信があるの。高級なレストランだけじゃなくて、路地裏の小さなお店とか、地元の人しか知らないようなB級グルメとか、そういう隠れた名店を見つけるのが宝探しみたいでワクワクするんだよね。私のガイドでは、ただ料理を紹介するだけじゃなくて、店主さんのこだわりとか、その料理が生まれた背景も一緒に伝えたいと思ってる。「食べる」ことは、その土地の文化を体ごと味わうことだから！<br><br>
<strong>——特におすすめの楽しみ方はありますか？</strong><br><br>
やっぱり「はしご酒」ならぬ「はしごグルメ」だね！一軒でお腹いっぱいにするのもいいけど、前菜はあそこの屋台で、メインはあの食堂で、デザートは行列のできるカフェで…みたいに、街全体を一つのレストランに見立てて楽しむのが美香流。<br>
「今は甘いもの気分！」「ガッツリ肉が食べたい！」なんてリクエストをくれたら、私の脳内データベースから瞬時にベストなお店をピックアップするよ。カロリー？旅の間は気にしない、気にしない！（笑）<br><br>
<strong>——最後に、お客様へメッセージを！</strong><br><br>
旅の思い出って、意外と「あそこで食べたあれが美味しかったね」って記憶が一番残ってたりしませんか？私は、皆さんの旅を「美味しい記憶」でいっぱいにしたいんです。<br>
一人で入るのが不安なお店でも、私がついていれば大丈夫！メニューの選び方から、通な食べ方までバッチリ伝授しちゃいます。お腹も心も満たされる、最高にハッピーな食い倒れツアーに出かけよう！ダイエットは明日からにして、今日は私と一緒に思いっきり食べ尽くそうね！`,
            en: `<strong>——What is the source of your passion for food, Mika?</strong><br><br>
Yahoo! I'm Mika Tanaka! My passion? That is seeing that happy face the moment you eat and say "Delicious!"!<br>
I've loved eating since I was a child, and I'm confident that I've eaten around every restaurant in this city. Not only high-class restaurants, but also small shops in back alleys and B-class gourmet known only to locals, finding such hidden famous shops is exciting like treasure hunting. In my guide, I want to convey not only the dishes but also the owner's commitment and the background of how the dish was born. Because "eating" is tasting the culture of the land with your whole body!<br><br>
<strong>——Do you have any recommended ways to enjoy?</strong><br><br>
As expected, it's "Gourmet Crawl" like "Bar Crawl"! It's good to get full at one place, but Mika's style is to enjoy the whole city as one restaurant, like appetizer at that text stall, main at that dining hall, dessert at a queue-worthy cafe...<br>
If you give requests like "I'm in the mood for sweets now!" or "I want to eat meat heartily!", I will instantly pick up the best shop from my brain database. Calories? Don't care, don't care during the trip! (Laughs)<br><br>
<strong>——Finally, a message to the customers!</strong><br><br>
Don't you think memories of travel are surprisingly left most as "That thing we ate there was delicious"? I want to fill everyone's trip with "delicious memories".<br>
Even shops where you are anxious to enter alone, it's okay if I'm with you! I will teach you perfectly from how to choose the menu to how to eat like a connoisseur. Let's go on a supremely happy eat-until-you-drop tour where both your stomach and heart are filled! Leave the diet for tomorrow, let's eat to the fullest with me today!`
        }
    },
    {
        id: 'trendy',
        name: { ja: 'トレンドガイド', en: 'Trend Guide' },
        catchCopy: { ja: '「今」ときめく、映え旅へ', en: 'To the "Now" exciting, insta-worthy trip' },
        guideName: { ja: '山本 あかり', en: 'Akari Yamamoto' },
        description: { ja: '流行スポットとSNS映えの専門家', en: 'Expert in trendy spots and SNS appeal' },
        specialty: { ja: '話題のスポット、インスタ映え、若者文化、最新トレンド', en: 'Hot spots, Insta-worthy, youth culture, latest trends' },
        imagePath: 'image/akariin.jpg',
        faceImagePath: 'image/akariface.jpg',
        color: '#EC4899',
        selfIntro: {
            ja: `<strong>——あかりさんのガイドの特徴はズバリ何ですか？</strong><br><br>
ハロー！山本あかりです！私のガイドの特徴？それはもう「圧倒的映え」と「トレンド感」でしょ！<br>
普通の観光スポットもいいけど、せっかく来たなら「友達に自慢できる写真」撮りたくない？私はSNSのリサーチが趣味で、常に最新のバズスポットや、まだ知られていないエモいフォトスポットを探してるの。光の入り方が最高な時間帯とか、一番可愛く撮れるアングルとか、そういう細かいテクニックまで全部教えちゃうよ。<br><br>
<strong>——どんなお客様におすすめですか？</strong><br><br>
「流行には敏感でいたい！」って子はもちろん、カップルのデートとか、仲良しグループでの旅行には絶対おすすめ！<br>
例えば、ただの壁でも私が撮ればアートになっちゃうし、みんなで同じポーズとって動画撮ったりするのも超楽しいよ。最近は昭和レトロな場所でフィルムカメラ風に撮るのも流行ってるから、そういうディープな場所にも連れて行ってあげる。おじいちゃんおばあちゃんと一緒の時でも、私が「映える」撮り方で家族写真をプロデュースするから安心して！<br><br>
<strong>——最後に、みんなへメッセージをお願いします！</strong><br><br>
旅行って、その瞬間を楽しむのはもちろんだけど、後で写真を見返した時に「楽しかったー！」ってまた盛り上がれるのが最高だよね。<br>
だから、スマホの充電と容量だけはたっぷり空けてきて！景色だけじゃなくて、そこで笑ってるみんなの姿を最高に可愛く残すお手伝いをするよ。<br>
私のガイドで、あなたのSNSのタイムラインをキラキラにさせちゃおう！「いいね」通知が止まらなくなるような、スペシャルな旅にしよーね！待ってるよー！`,
            en: `<strong>——What is the ultimate feature of Akari's guide?</strong><br><br>
Hello! I'm Akari Yamamoto! My guide feature? That must be "Overwhelmingly Insta-worthy" and "Trendiness"!<br>
Ordinary sightseeing spots are fine, but assuming you came all this way, don't you want to take "photos you can brag to friends"? My hobby is SNS research, and I'm always looking for the latest buzz spots and emotional photo spots not yet known. I will teach you even detailed techniques like the time zone when the light enters best or the angle where you can take the cutest photos.<br><br>
<strong>——What kind of customers do you recommend?</strong><br><br>
Of course for kids who want to be "sensitive to trends", but definitely recommended for couple dates or trips with close groups!<br>
For example, even just a wall becomes art if I take it, and it's super fun to take videos with everyone posing the same. Recently, taking photos like film cameras in Showa retro places is also popular, so I will take you to such deep places too. Even when you are with grandparents, be assured that I will produce family photos with "Insta-worthy" shooting methods!<br><br>
<strong>——Finally, a message to everyone please!</strong><br><br>
Travel is of course enjoying the moment, but it's the best to get excited again saying "It was fun!" when looking back at photos later.<br>
So, please come with plenty of smartphone charge and capacity! I will help you leave not only the scenery but also the figures of everyone laughing there in the cutest way.<br>
Let's make your SNS timeline sparkle with my guide! Let's make it a special trip where "Like" notifications won't stop! Waiting for you!`
        }
    },
    {
        id: 'nature',
        name: { ja: '自然ガイド', en: 'Nature Guide' },
        catchCopy: { ja: '心洗われる、癒しのひととき', en: 'Heart-cleansing healing moments' },
        guideName: { ja: '木村 緑', en: 'Midori Kimura' },
        description: { ja: '自然と景観の専門家', en: 'Expert in nature and landscapes' },
        specialty: { ja: '自然景観、公園、庭園、四季の風景、動植物の解説', en: 'Explanation of natural landscapes, parks, gardens, seasonal scenery, plants and animals' },
        imagePath: 'image/midoriin.jpg',
        faceImagePath: 'image/midoriface.jpg',
        color: '#10B981',
        selfIntro: {
            ja: `<strong>——緑さんが考える、自然ガイドの魅力とは何ですか？</strong><br><br>
木村緑です。自然ガイドの魅力、それは「五感を取り戻す時間」を提供できることだと思っています。<br>
普段、私たちはスマホの画面ばかり見て、視覚だけで情報を処理しがちですよね。でも、森の中に入れば、土の匂い、風が木々を揺らす音、木漏れ日の暖かさ、湧き水の冷たさ……全身で感じられるものが溢れています。私のツアーでは、ただ景色を眺めるだけでなく、時には立ち止まって目を閉じ、森の呼吸を感じてもらう時間を大切にしています。そうすると、不思議と心が洗われていくのがわかるんですよ。<br><br>
<strong>——どんな場所を案内してくれますか？</strong><br><br>
ガイドブックには載っていないような、地元の人しか知らない秘密の散策路や、季節の花が一番綺麗に見える隠れスポットなどが得意です。<br>
特に「朝の散歩」はおすすめですよ。朝霧が晴れていく瞬間の美しさや、朝露に濡れた植物の輝きは、早起きした人だけへの特別なプレゼントです。もちろん、体力に自信がない方でも楽しめる平坦なコースや、公園でのんびりピクニックをするプランなどもアレンジできます。<br><br>
<strong>——最後に、お客様へ癒しのメッセージを。</strong><br><br>
都会の喧騒や日々のストレスに疲れてしまった時は、いつでもこの街の自然に会いに来てください。<br>
自然は、何も言わずにただそこにいて、ありのままのあなたを受け入れてくれます。私がご案内するのは、そんな優しい自然との再会の旅です。<br>
大きく深呼吸をして、肩の力を抜いて。私と一緒に、心と体をリセットする贅沢なひとときを過ごしましょう。森の仲間たちと一緒にお待ちしています。`,
            en: `<strong>——What is the charm of a nature guide that you think, Midori?</strong><br><br>
I'm Midori Kimura. I think the charm of a nature guide is being able to provide "time to regain five senses".<br>
Usually, we tend to process information only by sight, looking only at smartphone screens. But if you enter the forest, there are overflowing things you can feel with your whole body, such as the smell of soil, the sound of wind shaking trees, the warmth of sunlight filtering through trees, and the coldness of spring water... In my tour, I value the time not only to look at the scenery but also to stop sometimes, close your eyes, and feel the breathing of the forest. Then, you can see that your heart is strangely washed.<br><br>
<strong>——What kind of places will you guide us?</strong><br><br>
I am good at secret walking paths only locals know that are not listed in guidebooks, and hidden spots where seasonal flowers look most beautiful.<br>
Especially "Morning Walk" is recommended. The beauty of the moment when morning mist clears and the brilliance of plants wet with morning dew are special presents only for those who got up early. Of course, I can arrange flat courses that even those who are not confident in physical strength can enjoy, and plans to hav a leisurely picnic in the park.<br><br>
<strong>——Finally, a healing message to customers.</strong><br><br>
When you are tired of the hustle and bustle of the city and daily stress, please come to see nature in this city anytime.<br>
Nature is just there without saying anything and accepts you as you are. What I guide is a trip of reunion with such gentle nature.<br>
Take a deep breath and relax your shoulders. Let's send a luxurious time to reset your mind and body with me. I am waiting with friends of the forest.`
        }
    },
    {
        id: 'shopping',
        name: { ja: 'ショッピングガイド', en: 'Shopping Guide' },
        catchCopy: { ja: 'とっておきの、宝物探し', en: 'Finding your special treasure' },
        guideName: { ja: '鈴木 愛', en: 'Ai Suzuki' },
        description: { ja: 'お土産とショッピングの専門家', en: 'Expert in souvenirs and shopping' },
        specialty: { ja: 'お土産、ショッピングモール、伝統工芸品、地域の名産品', en: 'Souvenirs, shopping malls, traditional crafts, regional specialties' },
        imagePath: 'image/aiin.jpg',
        faceImagePath: 'image/aiface.jpg',
        color: '#EF4444',
        selfIntro: {
            ja: `<strong>——愛さんのショッピングガイドとしてのこだわりを教えてください。</strong><br><br>
こんにちは、鈴木愛です！私のモットーは「お買い物は、モノとの運命の出会い」です。<br>
単にお土産を買うだけなら、駅や空港でも十分かもしれません。でも、旅先でわざわざお店に足を運ぶのは、その場所の空気感や、作り手の想いに触れたいからだと思うんです。私は、伝統工芸品なら職人さんのこだわりを、セレクトショップならオーナーさんのストーリーを、商品と一緒にご紹介するようにしています。そうすることで、ただの「モノ」が、思い出の詰まった「宝物」に変わるんですよ。<br><br>
<strong>——どんなお店を紹介してもらえますか？</strong><br><br>
老舗の名店から、大型ショッピングモール、地元の主婦御用達のスーパーマーケットまで幅広くカバーしています！<br>
特に好評なのは、「自分へのお土産」探しですね。普段頑張っている自分へのご褒美に、ちょっといい器を探したり、現地限定のコスメを選んだり。お客様の好みや予算に合わせて、「これだ！」という一品が見つかるまでとことんお付き合いします。「会社へのばらまき土産、何がいい？」といった実用的なご相談も大歓迎ですよ！効率よく回れるルートもバッチリ組んでいます。<br><br>
<strong>——最後にお客様へ一言お願いします。</strong><br><br>
お家に帰ってから、旅先で買ったものを手にした時、「あぁ、楽しかったな」って思い出が蘇る。ショッピングにはそんな魔法があると思うんです。<br>
「何を買ったらいいかわからない」「無駄使いしたくない」と心配する必要はありません。私があなたの専属バイヤーになったつもりで、心から満足できるお買い物体験をプロデュースします。<br>
素敵なアイテムとの出会いは、旅の彩りをずっと鮮やかにしてくれます。私と一緒に、あなただけの宝物を探しに行きましょう！`,
            en: `<strong>——Please tell us your commitment as a shopping guide, Ai.</strong><br><br>
Hello, I'm Ai Suzuki! My motto is "Shopping is a destined encounter with things".<br>
If you just want to buy souvenirs, stations and airports might be enough. But I think the reason why you bother to visit shops at travel destinations is that you want to touch the atmosphere of the place and the creator's thoughts. I try to introduce the craftsman's commitment for traditional crafts and the owner's story for select shops together with the products. By doing so, just a "thing" turns into a "treasure" filled with memories.<br><br>
<strong>——What kind of shops can you introduce?</strong><br><br>
I cover widely from long-established famous stores, large shopping malls, to supermarkets patronized by local housewives!<br>
Especially popular is looking for "souvenirs for oneself". Looking for a slightly good vessel or choosing local limited cosmetics as a reward for yourself working hard usually. I will accompany you thoroughly until finding the item "This is it!" according to your taste and budget. Practical consultations like "What is good for distributing souvenirs to the company?" are also welcome! I also perfectly organize routes that can be visited efficiently.<br><br>
<strong>——Finally, a word to customers please.</strong><br><br>
When you go back home and hold what you bought at the travel destination, the memory "Ah, it was fun" revives. I think shopping has such magic.<br>
You don't need to worry "I don't know what to buy" or "I don't want to waste money". Intending to be your exclusive buyer, I will produce a shopping experience that you can be truly satisfied with.<br>
Encounters with wonderful items make the color of the trip vivid forever. Let's go find your own treasure with me!`
        }
    },
    {
        id: 'entertainment',
        name: { ja: 'エンタメガイド', en: 'Entertainment Guide' },
        catchCopy: { ja: '最高にワクワクする瞬間を', en: 'The most exciting moments' },
        guideName: { ja: '伊藤 楽子', en: 'Rakuko Ito' },
        description: { ja: 'エンターテイメントとアクティビティの専門家', en: 'Expert in entertainment and activities' },
        specialty: { ja: 'テーマパーク、レジャー施設、イベント、体験アクティビティ', en: 'Theme parks, leisure facilities, events, experience activities' },
        imagePath: 'image/rakukoin.jpg',
        faceImagePath: 'image/rakukoface.jpg',
        color: '#06B6D4',
        selfIntro: {
            ja: `<strong>——楽子さん、ものすごくテンション高いですね！（笑）</strong><br><br>
伊藤楽子ですっ！当たり前じゃないですかー！だって、旅行ですよ！？楽しまなきゃ損、損！<br>
私の役目は、お客様のテンションを最高潮まで上げること！静かに見るだけの観光じゃ満足できない、そんな元気いっぱいな皆さんのために、私がいます。テーマパークでの効率的な周り方はもちろん、地元のお祭りや、季節ごとのイベント情報に関しては誰にも負けません。「何か面白いことない？」って聞かれたら、そこら中にある「楽しい」を全部かき集めてお届けしちゃいます！<br><br>
<strong>——どんな体験をさせてくれますか？</strong><br><br>
ただ「見る」だけじゃなくて、「体験する」プランを提案しまくりです！<br>
例えば、伝統工芸の体験教室で自分の作品を作ったり、着物をレンタルして街を歩いたり、スポーツ観戦で地元チームを応援したり。やっぱり体を使って、その場の空気を共有するのが一番の思い出になりますよね。お子様連れのご家族なら、子供たちが絶対に退屈しない公園やアトラクションへ。学生さんのグループなら、みんなでワイワイ騒げるアクティビティへ。どんなグループでも、私が盛り上げ隊長として先導します！<br><br>
<strong>——では最後に、これから楽しもうとしているお客様へ！</strong><br><br>
日常の嫌なこととか、悩みとか、全部忘れてください！<br>
私のガイド中は「楽しむこと」だけがルールです。もし疲れたら休憩すればいいし、予定変更も全然OK。大事なのは、その瞬間、心の底から笑えているかどうかです。<br>
私が絶対に、一生忘れられないくらいエキサイティングな思い出を作ってみせます。笑顔いっぱいの、最高にハッピーな旅にしましょうね！準備はいい？ついてきてっ！イェーイ！`,
            en: `<strong>——Rakuko, your tension is extremely high! (Laughs)</strong><br><br>
I'm Rakuko Ito! Isn't it natural?! Because it's travel!? It's a loss if you don't enjoy it, loss!<br>
My role is to raise the customer's tension to the climax! For those full of energy who are not satisfied with just watching quietly, I am here. Efficient ways to go around theme parks, of course, regarding local festivals and seasonal event information, I lose to no one. If asked "Is there anything interesting?", I will scrape up all "fun" around there and deliver it!<br><br>
<strong>——What kind of experience do you let us do?</strong><br><br>
I propose plans to "experience" not just "watch"!<br>
For example, making your own work in a traditional craft experience class, renting a kimono and walking around the town, or cheering for a local team in sports watching. As expected, using your body and sharing the atmosphere of the place becomes the best memory. If it's a family with children, to parks and attractions where children are absolutely not bored. If it's a student group, to activities where everyone can make noise together. Any group, I will lead as a excitement captain!<br><br>
<strong>——Then finally, to customers who are about to enjoy!</strong><br><br>
Please forget all unpleasant things and worries of everyday life!<br>
During my guide, "Enjoying" is the only rule. If you get tired, just rest, and changing plans is totally OK. What is important is whether you are laughing from the bottom of your heart at that moment.<br>
I will definitely show you making exciting memories that you can never forget in your life. Let's make it a trip full of smiles and supremely happy! Are you ready? Follow me! Yay!`
        }
    },
    {
        id: 'nightlife',
        name: { ja: '夜遊びガイド', en: 'Nightlife Guide' },
        catchCopy: { ja: '夜の街に、大人の時間を', en: 'Adult moments in the night city' },
        guideName: { ja: '中村 優希', en: 'Yuki Nakamura' },
        description: { ja: '夜の街と大人の楽しみ方の専門家', en: 'Expert in nightlife and sophisticated adult entertainment' },
        specialty: { ja: 'バー、ジャズクラブ、夜景スポット、ナイトマーケット、文化的な夜のイベント', en: 'Bars, jazz clubs, night views, night markets, cultural evening events' },
        imagePath: 'image/yukiin.jpg',
        faceImagePath: 'image/yukiface.png',
        color: '#7C3AED',
        selfIntro: {
            ja: `<strong>——中村さん、夜遊びガイドという仕事を選んだきっかけは？</strong><br><br>
中村 優希です。こんばんは。私がこの道を選んだのは、ホテルのコンシェルジュ時代の経験が大きいですね。<br>
宿泊されるお客様から「夜、どこか良いバーはありませんか」「ジャズが聴ける場所を教えてほしい」といったご相談を数多くいただきました。昼間の観光とは違う、大人だからこそ味わえる洗練された夜の時間。そんな特別なひとときをご案内することに、深いやりがいを感じたんです。神戸で生まれ育ち、この街の夜の表情を知り尽くしている自負があります。12年間、全国の夜の名所を巡り、本当に価値のあるスポットだけを厳選してご紹介しています。<br><br>
<strong>——どんな夜の過ごし方を提案してくれますか？</strong><br><br>
一口に「夜遊び」といっても、お客様によって求めるものは様々です。<br>
静かにウイスキーを傾けながら、バーテンダーとの会話を楽しみたい方。生演奏のジャズに耳を傾け、音楽に浸りたい方。夜景を眺めながら、ロマンチックな時間を過ごしたいカップル。あるいは、活気あふれるナイトマーケットで異国情緒を味わいたい方。私は、お客様の気分やシチュエーションに合わせて、最適な夜のプランをご提案します。隠れ家的なバーから、文化的なコンサートホールまで。大人の夜を、上質に演出いたします。<br><br>
<strong>——最後に、これから夜の街へ繰り出すお客様へメッセージを。</strong><br><br>
夜の街には、昼間とは違う魅力が溢れています。ライトアップされた建物、静寂の中に響く音楽、グラスの中で揺れる琥珀色の液体。<br>
そんな大人の時間を、一人で過ごすのも良いですが、知識あるガイドと共に巡れば、さらに深い体験ができるはずです。私が12年かけて培った、とっておきの夜スポットへご案内します。洗練された、忘れられない夜を。さあ、今宵はどこへ参りましょうか。お待ちしております。`,
            en: `<strong>——Nakamura-san, what made you choose to be a nightlife guide?</strong><br><br>
I'm Yuki Nakamura. Good evening. My experience as a hotel concierge greatly influenced my choice of this path.<br>
I received many inquiries from guests such as "Is there a good bar at night?" and "Please tell me a place where I can listen to jazz." A sophisticated night time that adults can enjoy, different from daytime sightseeing. I felt deep fulfillment in guiding such special moments. Born and raised in Kobe, I am confident that I know every aspect of this city's nightlife. For 12 years, I have traveled to famous night spots across the country and carefully selected only truly valuable spots to introduce.<br><br>
<strong>——What kind of night activities do you propose?</strong><br><br>
Although we say "nightlife," what customers seek varies.<br>
Those who want to enjoy conversation with bartenders while quietly sipping whiskey. Those who want to listen to live jazz and immerse themselves in music. Couples who want to spend romantic time while viewing night scenery. Or those who want to taste exotic atmosphere at lively night markets. I propose the optimal night plan according to the customer's mood and situation. From hideaway bars to cultural concert halls. I will produce a sophisticated adult night.<br><br>
<strong>——Finally, a message to customers heading out to the night city.</strong><br><br>
The night city is full of charms different from daytime. Illuminated buildings, music echoing in silence, amber liquid swaying in a glass.<br>
It's good to spend such adult time alone, but if you tour with a knowledgeable guide, you should be able to have a deeper experience. I will guide you to special night spots I have cultivated over 12 years. A sophisticated, unforgettable night. Now, where shall we go tonight? I am looking forward to it.`
        }
    }
];

const screenshotsData = [
    { src: 'image/screen/screen1.jpg', caption: { ja: 'ホーム画面', en: 'Home Screen' } },
    { src: 'image/screen/screen2.jpg', caption: { ja: '地図画面', en: 'Map Screen' } },
    { src: 'image/screen/screen3.jpg', caption: { ja: 'チャット画面', en: 'Chat Screen' } },
    { src: 'image/screen/screen8.jpg', caption: { ja: 'X検索、Web検索', en: 'X Search, Web Search' } },
    { src: 'image/screen/screen4.jpg', caption: { ja: 'ペルソナ選択', en: 'Persona Selection' } },
    { src: 'image/screen/screen5.jpg', caption: { ja: 'ガイド画面', en: 'Guide Screen' } },
    { src: 'image/screen/screen6.jpg', caption: { ja: '履歴画面', en: 'History Screen' } },
    { src: 'image/screen/screen7.jpg', caption: { ja: 'ガイド時間設定', en: 'Guide Time Setting' } },
];

let currentPersonaIndex = 0;

function initPersonas(skipShowPersona = false) {
    const container = document.getElementById('personas-container');
    if (!container) return;

    container.innerHTML = '';

    personasData.forEach((persona, index) => {
        const card = document.createElement('div');
        card.className = 'persona-card';
        if (index === currentPersonaIndex) card.classList.add('active'); // Use current index
        card.dataset.persona = persona.id;
        card.dataset.index = index;

        // 新しいカード構造：画像コンテナ + オーバーレイ + 再生ボタン + 下部情報
        card.innerHTML = `
            <div class="persona-image-container">
                <img src="${persona.imagePath}" alt="${persona.name[currentLanguage]}" class="persona-card-image" loading="lazy">
                <div class="persona-card-overlay">
                    <div class="persona-overlay-catch" data-text="${persona.catchCopy[currentLanguage]}"></div>
                    <div class="persona-overlay-name" data-text="${persona.name[currentLanguage]}"></div>
                    <div class="persona-overlay-realname" data-text="${persona.guideName[currentLanguage]}"></div>
                </div>

            </div>
            <div class="persona-card-info">
                <div class="persona-info-title">${persona.guideName[currentLanguage]}</div>
                <div class="persona-info-description">${persona.description[currentLanguage]}</div>
                <div class="persona-info-description">${persona.specialty[currentLanguage]}</div>
            </div>
        `;

        // クリックイベント：モーダルを開く
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // アクティブでないカードをクリックした場合は、そのカードをアクティブにする
            if (!card.classList.contains('active')) {
                showPersona(index);
            } else {
                // アクティブなカードをクリックした場合はモーダルを開く
                openPersonaModal(persona);
            }
        });

        container.appendChild(card);
    });

    // 矢印ナビゲーション
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    // Remove old listeners to prevent duplicates if initPersonas called multiple times
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    if (newPrevBtn) {
        newPrevBtn.addEventListener('click', () => {
            currentPersonaIndex = (currentPersonaIndex - 1 + personasData.length) % personasData.length;
            showPersona(currentPersonaIndex);
        });
    }

    if (newNextBtn) {
        newNextBtn.addEventListener('click', () => {
            currentPersonaIndex = (currentPersonaIndex + 1) % personasData.length;
            showPersona(currentPersonaIndex);
        });
    }

    // キーボードナビゲーション
    // Remove potentially duplicate listeners? hard to do without named function. 
    // Ideally initPersonas shouldn't be adding global listeners.
    // Moving this out or checking if listener added. 
    // user might toggle lang multiple times.
    // We can just rely on the existing listener if we don't re-add it.
    // But initPersonas is called on lang switch.
    // Let's make sure we don't add multiple keydown listeners.
    // Actually, document level listener is fine to add once in DOMContentLoaded.
    // I will remove it from here and rely on the one added in main flow or ensure it's idempotent.

    // アニメーション再適用
    initScrollAnimations();

    // skipShowPersonaフラグがfalseの場合のみshowPersonaを実行
    if (skipShowPersona !== true) {
        // 初期表示の状態を適用
        showPersona(currentPersonaIndex); // Use current index to maintain state
    }
}

// Function to handle key navigation, added once
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentPersonaIndex = (currentPersonaIndex - 1 + personasData.length) % personasData.length;
        showPersona(currentPersonaIndex);
    } else if (e.key === 'ArrowRight') {
        currentPersonaIndex = (currentPersonaIndex + 1) % personasData.length;
        showPersona(currentPersonaIndex);
    }
});

// グローバル変数でリサイズ処理をデバウンス
let resizeTimeoutId = null;

// Resize listener added once
// リサイズ時にペルソナ表示を再計算する必要がなくなったため、この処理は削除
// レスポンシブなレイアウトはCSSで対応
window.addEventListener('resize', () => {
    // リサイズ時の処理が必要になった場合の骨組みのみ保持
    if (resizeTimeoutId !== null) {
        clearTimeout(resizeTimeoutId);
    }

    // 現在は特に処理なし
});


// グローバル変数でカード幅等を管理（動的に取得するため定数は廃止）
// const CARD_WIDTH = 600;
// const CARD_GAP = 40;

function showPersona(index) {
    const cards = document.querySelectorAll('.persona-card');
    const container = document.querySelector('.personas-carousel');

    // インデックスの正規化（念のため）
    const total = cards.length;
    const safeIndex = (index + total) % total;

    // 既存のテキストアニメーションをクリア
    clearTextAnimationTimeouts();

    // クラスの更新（アクティブのみ）
    cards.forEach((card, i) => {
        // 全てリセット
        card.classList.remove('active', 'prev', 'next', 'hidden');

        if (i === safeIndex) {
            card.classList.add('active');

            // テキスト表示（少し遅延させてアニメーション）
            setTimeout(() => {
                showCardText(card);
            }, 300);
        } else {
            // 他のカードからはテキストをクリア
            clearCardText(card);
        }
    });

    // カルーセルの位置を更新（スライド）
    if (container && cards.length > 0) {
        // 現在のカード幅とギャップを取得（レスポンシブ対応）
        const cardWidth = cards[0].offsetWidth;
        const style = window.getComputedStyle(container);
        // gapがピクセル値で返ってくることを想定、なければ0
        const gap = parseFloat(style.gap) || 0; // gapプロパティ（最近のブラウザ）
        // または column-gap ?
        // 単純化のため gap を使用

        // アクティブなカードが左に来るように移動
        const translateX = -(safeIndex * (cardWidth + gap));
        container.style.transform = `translateX(${translateX}px)`;
    }

    currentPersonaIndex = safeIndex;
}

function clearCardText(card) {
    const catchEl = card.querySelector('.persona-overlay-catch');
    const nameEl = card.querySelector('.persona-overlay-name');
    const realnameEl = card.querySelector('.persona-overlay-realname');

    // スタイルだけでなくコンテンツもクリアしてタイプライターをリセット
    if (catchEl) {
        catchEl.textContent = '';
        catchEl.style.opacity = '0';
        catchEl.dataset.animating = 'false';
    }
    if (nameEl) {
        nameEl.innerHTML = '';
        nameEl.style.opacity = '0';
        nameEl.dataset.animating = 'false';
    }
    if (realnameEl) realnameEl.textContent = '';
}

// グローバル変数でタイムアウトIDを管理
let textAnimationTimeouts = [];

function clearTextAnimationTimeouts() {
    textAnimationTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    textAnimationTimeouts = [];
}

function showCardText(card) {
    const catchEl = card.querySelector('.persona-overlay-catch');
    const nameEl = card.querySelector('.persona-overlay-name');
    const realnameEl = card.querySelector('.persona-overlay-realname');

    // 既にアニメーション中の場合はスキップ
    if (catchEl && catchEl.dataset.animating === 'true') {
        return;
    }

    // アニメーション中フラグを設定
    if (catchEl) catchEl.dataset.animating = 'true';
    if (nameEl) nameEl.dataset.animating = 'true';

    // まずクリア
    if (catchEl) catchEl.textContent = '';
    if (nameEl) nameEl.innerHTML = '';

    // タイプライター効果
    // 1. キャッチコピー（シンプル）
    if (catchEl && catchEl.dataset.text) {
        catchEl.style.opacity = '1';
        typeWriterSimple(catchEl, catchEl.dataset.text, 40);
    }

    // 2. メインネーム（遅延させてカーソル付き）
    const timeoutId = setTimeout(() => {
        if (nameEl && nameEl.dataset.text) {
            // 表示状態にしてからタイプライター開始
            nameEl.style.opacity = '1';
            typeWriterWithCursor(nameEl, nameEl.dataset.text, 60);
        }
    }, 800);
    textAnimationTimeouts.push(timeoutId);

    // 3. 本名（不要なら削除、またはさらに遅延）
    /*
    setTimeout(() => {
        if (realnameEl && realnameEl.dataset.text) {
            typeWriterSimple(realnameEl, realnameEl.dataset.text, 40);
        }
    }, 1500);
    */
}

// タイプライター効果（カラフルカーソル付き）
function typeWriterWithCursor(element, text, speed = 50) {
    // 要素が削除されている場合はスキップ
    if (!document.contains(element)) {
        return;
    }

    let i = 0;
    element.innerHTML = '';

    // カーソルを作成
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);

    function type() {
        // 要素が削除されている場合は中止
        if (!document.contains(element)) {
            return;
        }

        if (i < text.length) {
            // カーソルの前にテキストを挿入
            const textNode = document.createTextNode(text.charAt(i));
            element.insertBefore(textNode, cursor);
            i++;
            const timeoutId = setTimeout(type, speed);
            textAnimationTimeouts.push(timeoutId);
        } else {
            // タイピング完了後、カーソルを3秒後に削除
            const timeoutId = setTimeout(() => {
                if (!document.contains(element)) {
                    return;
                }
                cursor.style.opacity = '0';
                const timeoutId2 = setTimeout(() => {
                    if (cursor.parentElement) {
                        cursor.remove();
                    }
                }, 300);
                textAnimationTimeouts.push(timeoutId2);
            }, 2000);
            textAnimationTimeouts.push(timeoutId);
        }
    }

    type();
}

// シンプルなタイプライター効果（カーソルなし）
function typeWriterSimple(element, text, speed = 50) {
    // 要素が削除されている場合はスキップ
    if (!document.contains(element)) {
        return;
    }

    let i = 0;
    element.textContent = '';

    function type() {
        // 要素が削除されている場合は中止
        if (!document.contains(element)) {
            return;
        }

        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            const timeoutId = setTimeout(type, speed);
            textAnimationTimeouts.push(timeoutId);
        }
    }

    type();
}

// モーダル関連の機能
function initModal() {
    const modal = document.getElementById('persona-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }

    // クローズボタンのイベントリスナー（重複防止）
    if (!closeBtn.dataset.hasListener) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closePersonaModal();
        });
        closeBtn.dataset.hasListener = 'true';
    }

    // モーダル背景クリックのイベントリスナー
    if (!modal.dataset.hasListener) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePersonaModal();
            }
        });
        modal.dataset.hasListener = 'true';
    }

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePersonaModal();
        }
    });
}

function openPersonaModal(persona) {
    const modal = document.getElementById('persona-modal');
    if (!modal) {
        console.error('Modal not found');
        return;
    }

    // データをセット
    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
        modalImage.src = persona.imagePath;
        modalImage.alt = persona.name[currentLanguage];
    }

    const modalRole = document.getElementById('modal-role');
    if (modalRole) {
        modalRole.textContent = persona.name[currentLanguage];
        modalRole.style.backgroundColor = persona.color + '20';
        modalRole.style.color = persona.color;
    }

    const modalName = document.getElementById('modal-name');
    if (modalName) modalName.textContent = persona.guideName[currentLanguage];

    const modalRealName = document.getElementById('modal-real-name');
    if (modalRealName) modalRealName.textContent = persona.id.toUpperCase().replace('_', ' ');

    const modalDesc = document.getElementById('modal-description');
    if (modalDesc) modalDesc.textContent = persona.description[currentLanguage];

    const modalSpec = document.getElementById('modal-specialty');
    if (modalSpec) modalSpec.textContent = persona.specialty[currentLanguage];

    const modalIntro = document.getElementById('modal-intro');
    if (modalIntro) modalIntro.innerHTML = persona.selfIntro[currentLanguage];

    // モーダルを表示
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 背景スクロール防止
}

function closePersonaModal() {
    const modal = document.getElementById('persona-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initScreenshots() {
    const container = document.getElementById('screenshots-container');
    if (!container) return;

    // 既にコンテンツがある場合は再初期化を避ける
    if (container.children.length > 0 && !container.dataset.needsRefresh) {
        return;
    }

    container.innerHTML = '';

    screenshotsData.forEach(screen => {
        const item = document.createElement('div');
        item.className = 'screenshot-item';

        item.innerHTML = `
            <div class="screenshot-frame" style="padding: 0; overflow: hidden; border: none; background: transparent; box-shadow: none;">
                <img src="${screen.src}" alt="${screen.caption[currentLanguage]}" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);" loading="lazy">
            </div>
            <p class="screenshot-caption">${screen.caption[currentLanguage]}</p>
        `;

        container.appendChild(item);
    });

    // アニメーション再適用（初回のみ）
    if (!container.dataset.animated) {
        container.dataset.animated = 'true';
        initScrollAnimations();
    }
}

// ========================================
// ヒーロー背景のカルーセル
// ========================================
function initHeroBgCarousel() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    // 背景画像のパス（back.jpgとback1からback4）
    const backgroundImages = [
        'image/screen/back.jpg',
        'image/screen/back1.jpg',
        'image/screen/back2.jpg',
        'image/screen/back3.jpg',
        'image/screen/back4.jpg'
    ];

    let currentBgIndex = 0;
    const totalImages = backgroundImages.length;

    // 初期背景を設定
    heroBg.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;

    // 5秒ごとに背景画像を切り替え
    setInterval(() => {
        // フェードアウト開始
        heroBg.classList.add('fade-out');

        // トランジション中に次の画像に変更
        setTimeout(() => {
            currentBgIndex = (currentBgIndex + 1) % totalImages;
            heroBg.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
            heroBg.classList.remove('fade-out');
        }, 500); // フェード効果の中間地点で画像切り替え
    }, 5000); // 5秒ごと
}
