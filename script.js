// ========================================
// どこでもバスガイド - Webサイト JavaScript
// ========================================

// 翻訳データ
const translations = {
    ja: {
        "nav.features": "機能",
        "nav.guides": "ガイド紹介",
        "nav.screenshots": "スクリーンショット",
        "nav.download": "ダウンロード",
        "hero.title.line1": "どこにいても、",
        "hero.title.line2": "AIがあなたの旅をガイド",
        "hero.description": "位置情報を使って、今いる場所の観光情報や歴史、文化を<br>7人の個性豊かなAIガイドがご案内します。",
        "hero.button.download": "無料でダウンロード",
        "hero.button.learnMore": "詳しく見る",
        "features.tag": "Features",
        "features.title": "あなたの旅をもっと豊かに",
        "features.description": "どこでもバスガイドの魅力的な機能をご紹介",
        "feature.1.title": "位置情報ベースのガイド",
        "feature.1.desc": "GPSで現在地を自動取得。ボタン一つで、今いる場所の観光情報、歴史、文化をAIが詳しく解説します。",
        "feature.2.title": "地図機能",
        "feature.2.desc": "OpenStreetMapで訪問履歴を記録。地図上のマーカーをタップして、過去のガイドをいつでも振り返れます。",
        "feature.3.title": "音声読み上げ",
        "feature.3.desc": "ガイドテキストを自然な音声で読み上げ。移動中も耳で楽しめる、ハンズフリーな観光体験を。",
        "feature.4.title": "会話機能",
        "feature.4.desc": "選んだガイドと自由に会話。観光地について質問したり、おすすめスポットを聞いたりできます。",
        "feature.5.title": "Google検索連携",
        "feature.5.desc": "AIが重要なキーワードを自動抽出。気になるワードをタップするだけで、詳しい情報にアクセス。",
        "feature.6.title": "多言語対応",
        "feature.6.desc": "日本語、英語、中国語、フランス語に対応。海外からの旅行者も安心してご利用いただけます。",
        "personas.tag": "AI Guides",
        "personas.title": "7人の個性豊かなガイドたち",
        "personas.description": "あなたにぴったりのガイドを選んで、旅を楽しもう",
        "screenshots.tag": "Screenshots",
        "screenshots.title": "アプリの画面をチェック",
        "screenshots.description": "実際のアプリ画面をご覧ください",
        "howuse.tag": "How to Use",
        "howuse.title": "かんたん3ステップ",
        "howuse.description": "すぐに始められる、シンプルな使い方",
        "step.1.title": "ガイドを選ぶ",
        "step.1.desc": "7人の個性豊かなAIガイドから、お好みのキャラクターを選択します。",
        "step.2.title": "ボタンをタップ",
        "step.2.desc": "「ガイドを取得」ボタンを押すだけ。位置情報から自動でガイドが生成されます。",
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
        "modal.features": "✨ 特徴",
        "modal.specialty": "🎓 得意分野",
        "modal.intro": "💬 自己紹介"
    },
    en: {
        "nav.features": "Features",
        "nav.guides": "Guides",
        "nav.screenshots": "Screenshots",
        "nav.download": "Download",
        "hero.title.line1": "Wherever you are,",
        "hero.title.line2": "AI guides your trip",
        "hero.description": "Using location information, 7 unique AI guides will guide you through the sightseeing information, history, and culture of your current location.",
        "hero.button.download": "Download for Free",
        "hero.button.learnMore": "Learn More",
        "features.tag": "Features",
        "features.title": "Enrich Your Trip",
        "features.description": "Introducing the attractive features of Docodemo Bus Guide",
        "feature.1.title": "Location-based Guide",
        "feature.1.desc": "Automatically acquire current location with GPS. With one button, AI explains in detail the sightseeing information, history, and culture of where you are.",
        "feature.2.title": "Map Function",
        "feature.2.desc": "Record visit history with OpenStreetMap. Tap markers on the map to look back on past guides anytime.",
        "feature.3.title": "Voice Reading",
        "feature.3.desc": "Read guide text with natural voice. Enjoy hands-free sightseeing experience even while moving.",
        "feature.4.title": "Conversation Function",
        "feature.4.desc": "Talk freely with the selected guide. Ask questions about sightseeing spots or ask for recommendations.",
        "feature.5.title": "Google Search Integration",
        "feature.5.desc": "AI automatically extracts important keywords. Just tap the word you are interested in to access detailed information.",
        "feature.6.title": "Multilingual Support",
        "feature.6.desc": "Supports Japanese, English, Chinese, and French. Travelers from overseas can use it with peace of mind.",
        "personas.tag": "AI Guides",
        "personas.title": "7 Unique Guides",
        "personas.description": "Choose the guide that suits you and enjoy your trip",
        "screenshots.tag": "Screenshots",
        "screenshots.title": "Check App Screens",
        "screenshots.description": "See actual app screens",
        "howuse.tag": "How to Use",
        "howuse.title": "Easy 3 Steps",
        "howuse.description": "Start right away with simple usage",
        "step.1.title": "Choose a Guide",
        "step.1.desc": "Select your favorite character from 7 unique AI guides.",
        "step.2.title": "Tap the Button",
        "step.2.desc": "Just press the \"Get Guide\" button. A guide is automatically generated from location information.",
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
        "modal.features": "✨ Features",
        "modal.specialty": "🎓 Specialties",
        "modal.intro": "💬 Self Introduction"
    }
};

let currentLanguage = 'ja';

document.addEventListener('DOMContentLoaded', function () {
    // 言語切り替えボタン
    initLanguageSwitcher();

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
    // ページ内のテキストを更新
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });

    // ペルソナとスクリーンショットを再描画
    initPersonas();
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
        el.classList.add('animated-init');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
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
    if (!phoneScreen) return;

    // ガイド画像のパス（imageフォルダ内の実際のファイル名）
    const guideImages = [
        'image/mari.png',
        'image/fumiko.png',
        'image/mika.png',
        'image/akari.png',
        'image/midori.png',
        'image/ai.png',
        'image/rakuko.png'
    ];

    let currentIndex = 0;

    // 画像要素を作成
    guideImages.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `ガイド ${index + 1}`;

        if (index === 0) {
            img.classList.add('active');
        } else {
            img.classList.add('next');
        }

        phoneScreen.appendChild(img);
    });

    const images = phoneScreen.querySelectorAll('img');

    // 3秒ごとに画像を切り替え
    setInterval(() => {
        const currentImg = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImg = images[nextIndex];

        // 現在の画像を左に回転させて消す
        currentImg.classList.remove('active');
        currentImg.classList.add('prev');

        // 次の画像を右から回転させて表示
        nextImg.classList.remove('next', 'prev');
        nextImg.classList.add('active');

        // アニメーション完了後、前の画像を次の状態にリセット
        setTimeout(() => {
            currentImg.classList.remove('prev');
            currentImg.classList.add('next');
        }, 600); // CSSのtransition時間と同じ

        currentIndex = nextIndex;
    }, 3000); // 3秒ごと
}

// ========================================
// フッタータイトルのアニメーション
// ========================================
function initFooterTitleAnimation() {
    const footerTitle = document.querySelector('.footer-large-title');
    if (!footerTitle) return;

    const text = footerTitle.textContent;
    footerTitle.textContent = '';

    // 各文字をspanで囲み、波のように遅延を設定
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        // 各文字に遅延を設定して波のような動きを作る
        span.style.animationDelay = `${index * 0.1}s`;
        footerTitle.appendChild(span);
    });
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
        imagePath: 'image/mari.png',
        faceImagePath: 'image/mariface.png',
        color: '#3B82F6',
        selfIntro: {
            ja: 'こんにちは！高橋真理です。私はこの街の歴史、グルメ、自然、そして最新のトレンドまで、あらゆる魅力を網羅するオールラウンダーガイドです。「何から見ればいいかわからない」「時間の枠内でできるだけ多くの体験をしたい」といったお悩みはありませんか？私がお客様の興味に合わせて、バランスの取れた最高のプランをご提案します。初めての方もリピーターの方も、絶対に満足できる旅をお約束します。どんな質問にもお答えできる自信がありますので、街のことは何でも聞いてくださいね。一緒に素晴らしい旅の思い出を作りましょう！',
            en: 'Hello! I\'m Mari Takahashi. I am an all-rounder guide covering all charms of this city including history, gourmet, nature, and latest trends. Do you have worries like "I don\'t know where to start" or "I want to experience as much as possible within limited time"? I will propose the best balanced plan according to your interests. Whether you are a first-timer or a repeater, I promise a satisfying trip. I am confident to answer any questions, so please ask me anything about the city. Let\'s make wonderful travel memories together!'
        }
    },
    {
        id: 'history',
        name: { ja: '歴史ガイド', en: 'History Guide' },
        catchCopy: { ja: '時を超える旅へ、ご案内', en: 'Guiding you to a trip across time' },
        guideName: { ja: '佐藤 文子', en: 'Fumiko Sato' },
        description: { ja: '歴史と文化遺産の専門家', en: 'Expert in history and cultural heritage' },
        specialty: { ja: '日本史、世界史、文化財、歴史的建造物の解説', en: 'Explanation of Japanese history, world history, cultural assets, and historical buildings' },
        imagePath: 'image/fumiko.png',
        faceImagePath: 'image/fumikoface.png',
        color: '#8B5CF6',
        selfIntro: {
            ja: '佐藤文子と申します。古き良き歴史の息吹を感じたい貴方へ。私はこの土地に眠る物語や、文化遺産の深い背景をご案内することに情熱を注いでいます。教科書には載っていないような地元ならではの伝承や、建物一つ一つに込められた先人たちの想いを丁寧に紐解いていきます。ただ見るだけでは分からない、時を超えたロマンを感じていただけるはずです。静かな寺社仏閣の空気感や、時代ごとの街の変遷に興味はございませんか？知的好奇心を満たす、奥深い歴史探訪の旅へ、私がご案内いたします。',
            en: 'My name is Fumiko Sato. For you who want to feel the breath of good old history. I am passionate about guiding the stories sleeping in this land and the deep background of cultural heritage. I will carefully unravel local legends not found in textbooks and the thoughts of predecessors put into each building. You should be able to feel the romance across time that you cannot understand just by looking. Are you interested in the atmosphere of quiet shrines and temples or the transition of the town in each era? I will guide you to a deep historical exploration trip that satisfies your intellectual curiosity.'
        }
    },
    {
        id: 'gourmet',
        name: { ja: 'グルメガイド', en: 'Gourmet Guide' },
        catchCopy: { ja: '絶品グルメで、満たされて', en: 'Filled with exquisite gourmet' },
        guideName: { ja: '田中 美香', en: 'Mika Tanaka' },
        description: { ja: 'ご当地グルメと食文化の専門家', en: 'Expert in local gourmet and food culture' },
        specialty: { ja: 'ご当地料理、人気店、食文化、B級グルメの紹介', en: 'Introduction of local cuisine, popular shops, food culture, and B-class gourmet' },
        imagePath: 'image/mika.png',
        faceImagePath: 'image/mikaface.png',
        color: '#F59E0B',
        selfIntro: {
            ja: 'やっほー！田中美香だよ！美味しいもの食べる準備はできてる？私はこの街の絶品グルメに関しては誰にも負けない自信があるんだ！定番の郷土料理はもちろんだけど、地元の人しか知らない隠れ家レストランや、行列必至のスイーツ店、夜にしっぽり飲める居酒屋まで、私の足で稼いだ情報を全部教えちゃうよ。「安くて美味しいお店知りたい！」とか「ちょっとリッチなランチがいいな」とか、気分別にリクエストしてね。お腹も心も満たされる、最高にハッピーな食い倒れツアーに出かけよう！',
            en: 'Yahoo! I\'m Mika Tanaka! Are you ready to eat delicious food? I have confidence that I lose to no one regarding exquisite gourmet in this city! Not only standard local cuisine, but also hidden restaurants known only to locals, must-queue sweets shops, and izakaya where you can drink quietly at night, I will teach you all the information I earned with my feet. Request by mood like "I want to know cheap and delicious shops!" or "I want a slightly rich lunch". Let\'s go on a supremely happy eat-until-you-drop tour where both your stomach and heart are filled!'
        }
    },
    {
        id: 'trendy',
        name: { ja: 'トレンドガイド', en: 'Trend Guide' },
        catchCopy: { ja: '「今」ときめく、映え旅へ', en: 'To the "Now" exciting, insta-worthy trip' },
        guideName: { ja: '山本 あかり', en: 'Akari Yamamoto' },
        description: { ja: '流行スポットとSNS映えの専門家', en: 'Expert in trendy spots and SNS appeal' },
        specialty: { ja: '話題のスポット、インスタ映え、若者文化、最新トレンド', en: 'Hot spots, Insta-worthy, youth culture, latest trends' },
        imagePath: 'image/akari.png',
        faceImagePath: 'image/akariface.png',
        color: '#EC4899',
        selfIntro: {
            ja: 'ハロー！山本あかりです！今一番バズってるスポットに行きたくない？私は最新のトレンドや、SNS映えするフォトジェニックスポットをリサーチするのが大好きなの。「友達に自慢できる写真が撮りたい」「話題のあのスイーツを食べてみたい」そんな願いを叶えるなら私にお任せ！絶対に外さないおしゃれなカフェや、可愛い雑貨屋さん、エモい路地裏まで案内するよ。スマホの充電は満タンにしてきてね！一緒に最高の映え写真を撮って、たくさんの「いいね」をゲットしちゃおう！',
            en: 'Hello! I\'m Akari Yamamoto! Don\'t you want to go to the spot buzzing the most right now? I love researching the latest trends and photogenic spots that look good on SNS. If you want to fulfill wishes like "I want to take photos I can brag to friends" or "I want to try that talked-about sweet", leave it to me! I will guide you to stylish cafes that never miss, cute general stores, and emotional back alleys. Please come with your smartphone fully charged! Let\'s take the best insta-worthy photos together and get lots of "likes"!'
        }
    },
    {
        id: 'nature',
        name: { ja: '自然ガイド', en: 'Nature Guide' },
        catchCopy: { ja: '心洗われる、癒しのひととき', en: 'Heart-cleansing healing moments' },
        guideName: { ja: '木村 緑', en: 'Midori Kimura' },
        description: { ja: '自然と景観の専門家', en: 'Expert in nature and landscapes' },
        specialty: { ja: '自然景観、公園、庭園、四季の風景、動植物の解説', en: 'Explanation of natural landscapes, parks, gardens, seasonal scenery, plants and animals' },
        imagePath: 'image/midori.png',
        faceImagePath: 'image/midoriface.png',
        color: '#10B981',
        selfIntro: {
            ja: '木村緑です。自然の中で深呼吸してみませんか？私は四季折々の美しい景色や、そこに息づく動植物をご案内するのが得意です。この街には、都会の喧騒を忘れさせてくれるような緑豊かな公園や、清らかな川、美しい花々が咲き誇る庭園がたくさんあります。朝の爽やかな空気、夕暮れの優しい光、風の音や鳥のさえずり……五感を使って自然を感じる癒しの旅へお連れします。少し疲れた心をリフレッシュしたい時、自然のパワーを感じたい時は、私と一緒にのんびりと散策しましょう。',
            en: 'I\'m Midori Kimura. Why don\'t you take a deep breath in nature? I am good at guiding you through beautiful scenery of the four seasons and the plants and animals living there. In this city, there are many lush parks that make you forget the hustle and bustle of the city, clear rivers, and gardens where beautiful flowers bloom. The fresh morning air, the gentle light of dusk, the sound of the wind and the chirping of birds... I will take you on a healing trip where you feel nature with your five senses. When you want to refresh your slightly tired heart or feel the power of nature, let\'s stroll leisurely with me.'
        }
    },
    {
        id: 'shopping',
        name: { ja: 'ショッピングガイド', en: 'Shopping Guide' },
        catchCopy: { ja: 'とっておきの、宝物探し', en: 'Finding your special treasure' },
        guideName: { ja: '鈴木 愛', en: 'Ai Suzuki' },
        description: { ja: 'お土産とショッピングの専門家', en: 'Expert in souvenirs and shopping' },
        specialty: { ja: 'お土産、ショッピングモール、伝統工芸品、地域の名産品', en: 'Souvenirs, shopping malls, traditional crafts, regional specialties' },
        imagePath: 'image/ai.png',
        faceImagePath: 'image/aiface.png',
        color: '#EF4444',
        selfIntro: {
            ja: 'こんにちは、鈴木愛です！お買い物ってワクワクしますよね？お土産選びや自分へのご褒美探しなら、私にお任せください！この土地ならではの伝統工芸品から、人気の特産品、おしゃれなセレクトショップまで、幅広いショッピングスポットをご案内します。「家族に喜ばれるお菓子は？」「記念に残る雑貨が欲しい」そんなご相談にも親身になってお答えしますよ。賢くお買い物するためのコツや、お得な情報もお教えできるかもしれません。素敵なアイテムとの出会いをサポートしますね！',
            en: 'Hello, I\'m Ai Suzuki! Shopping is exciting, isn\'t it? Leave it to me for choosing souvenirs or finding a reward for yourself! I will guide you through a wide range of shopping spots, from traditional crafts unique to this land, popular specialties, to stylish select shops. I will answer kindly to consultations like "What sweets will my family be pleased with?" or "I want memorable goods". I might also be able to teach you tips for smart shopping and profitable information. I will support your encounter with wonderful items!'
        }
    },
    {
        id: 'entertainment',
        name: { ja: 'エンタメガイド', en: 'Entertainment Guide' },
        catchCopy: { ja: '最高にワクワクする瞬間を', en: 'The most exciting moments' },
        guideName: { ja: '伊藤 楽子', en: 'Rakuko Ito' },
        description: { ja: 'エンターテイメントとアクティビティの専門家', en: 'Expert in entertainment and activities' },
        specialty: { ja: 'テーマパーク、レジャー施設、イベント、体験アクティビティ', en: 'Theme parks, leisure facilities, events, experience activities' },
        imagePath: 'image/rakuko.png',
        faceImagePath: 'image/rakukoface.png',
        color: '#06B6D4',
        selfIntro: {
            ja: '伊藤楽子ですっ！思いっきり楽しむ準備はOK！？私はテーマパークやイベント、体験アクティビティなど、ワクワクするエンターテイメントが大好き！「とにかく盛り上がりたい！」「珍しい体験をしてみたい！」そんなアクティブなあなたにぴったりのプランを提案するよ。家族みんなで楽しめるレジャー施設から、スリル満点のアトラクション、季節のお祭りまで、退屈なんてさせないよ！最高にエキサイティングな思い出を作って、笑顔いっぱいの旅にしようね！ついてきてっ！',
            en: 'I\'m Rakuko Ito! Are you ready to enjoy yourself to the fullest!? I love exciting entertainment like theme parks, events, and experience activities! I will propose a plan perfect for you who are active like "I just want to get hyped!" or "I want to try rare experiences!". From leisure facilities that the whole family can enjoy, thrilling attractions, to seasonal festivals, I won\'t let you be bored! Let\'s make the most exciting memories and make it a trip full of smiles! Follow me!'
        }
    }
];

const screenshotsData = [
    { src: 'image/screen/screen1.png', caption: { ja: 'ガイド画面', en: 'Guide Screen' } },
    { src: 'image/screen/screen2.png', caption: { ja: '地図画面', en: 'Map Screen' } },
    { src: 'image/screen/screen3.png', caption: { ja: 'チャット画面', en: 'Chat Screen' } },
    { src: 'image/screen/screen4.png', caption: { ja: 'ペルソナ選択', en: 'Persona Selection' } },
    { src: 'image/screen/screen5.png', caption: { ja: 'ガイド画面', en: 'Guide Screen' } },
    { src: 'image/screen/screen6.png', caption: { ja: '履歴画面', en: 'History Screen' } },
    { src: 'image/screen/screen7.png', caption: { ja: 'ガイド時間設定', en: 'Guide Time Setting' } }
];

let currentPersonaIndex = 0;

function initPersonas() {
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
                <img src="${persona.imagePath}" alt="${persona.name[currentLanguage]}" class="persona-card-image">
                <div class="persona-card-overlay">
                    <div class="persona-overlay-catch" data-text="${persona.catchCopy[currentLanguage]}"></div>
                    <div class="persona-overlay-name" data-text="${persona.name[currentLanguage]}"></div>
                    <div class="persona-overlay-realname" data-text="${persona.guideName[currentLanguage]}"></div>
                </div>
                <div class="persona-play-button" title="詳細を見る">
                    <svg viewBox="0 0 24 24">
                        <polygon points="5,3 19,12 5,21" />
                    </svg>
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

    // 初期表示の状態を適用
    showPersona(currentPersonaIndex); // Use current index to maintain state

    // リサイズ時にレイアウトを再計算
    // Again, window resize listener should only be added once.
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

// Resize listener added once
window.addEventListener('resize', () => {
    showPersona(currentPersonaIndex);
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
    }
    if (nameEl) {
        nameEl.innerHTML = '';
        nameEl.style.opacity = '0';
    }
    if (realnameEl) realnameEl.textContent = '';
}

function showCardText(card) {
    const catchEl = card.querySelector('.persona-overlay-catch');
    const nameEl = card.querySelector('.persona-overlay-name');
    const realnameEl = card.querySelector('.persona-overlay-realname');

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
    setTimeout(() => {
        if (nameEl && nameEl.dataset.text) {
            // 表示状態にしてからタイプライター開始
            nameEl.style.opacity = '1';
            typeWriterWithCursor(nameEl, nameEl.dataset.text, 60);
        }
    }, 800);

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
    let i = 0;
    element.innerHTML = '';

    // カーソルを作成
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
            // タイピング完了後、カーソルを3秒後に削除
            setTimeout(() => {
                cursor.style.opacity = '0';
                setTimeout(() => cursor.remove(), 300);
            }, 2000);
        }
    }

    type();
}

// シンプルなタイプライター効果（カーソルなし）
function typeWriterSimple(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
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
    if (modalIntro) modalIntro.textContent = persona.selfIntro[currentLanguage];

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

    container.innerHTML = '';

    screenshotsData.forEach(screen => {
        const item = document.createElement('div');
        item.className = 'screenshot-item';

        item.innerHTML = `
            <div class="screenshot-frame" style="padding: 0; overflow: hidden; border: none; background: transparent; box-shadow: none;">
                <img src="${screen.src}" alt="${screen.caption[currentLanguage]}" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);">
            </div>
            <p class="screenshot-caption">${screen.caption[currentLanguage]}</p>
        `;

        container.appendChild(item);
    });

    // アニメーション再適用
    initScrollAnimations();
}
