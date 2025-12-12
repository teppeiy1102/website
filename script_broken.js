// ========================================
// どこでもバスガイド - Webサイト JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function () {
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
});

// 初期化時にドラッグスクロールも有効化
document.addEventListener('DOMContentLoaded', function () {
    initDragScroll();
});

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
// データと動的生成
// ========================================

const personasData = [
    {
        id: 'all_rounder',
        name: '万能ガイド',
        guideName: '高橋 真理',
        description: 'あらゆる分野に精通したオールマイティなガイド',
        specialty: '歴史、グルメ、観光スポット、自然、文化など全ての分野を幅広くカバー',
        imagePath: 'image/mari.jpg',
        faceImagePath: 'image/mariface.jpg',
        color: '#3B82F6',
        selfIntro: 'こんにちは！高橋真理です。歴史からグルメまで、この街の魅力を余すところなくご案内しますよ。一緒に素敵な旅の思い出を作りましょう！'
    },
    {
        id: 'history',
        name: '歴史ガイド',
        guideName: '佐藤 文子',
        description: '歴史と文化遺産の専門家',
        specialty: '日本史、世界史、文化財、歴史的建造物の解説',
        imagePath: 'image/fumiko.jpg',
        faceImagePath: 'image/fumikoface.jpg',
        color: '#8B5CF6',
        selfIntro: '佐藤文子と申します。古き良き歴史の息吹を感じてみませんか？私がその奥深い物語の世界へといざないます。'
    },
    {
        id: 'gourmet',
        name: 'グルメガイド',
        guideName: '田中 美香',
        description: 'ご当地グルメと食文化の専門家',
        specialty: 'ご当地料理、人気店、食文化、B級グルメの紹介',
        imagePath: 'image/mika.jpg',
        faceImagePath: 'image/mikaface.jpg',
        color: '#F59E0B',
        selfIntro: 'やっほー！田中美香だよ！美味しいもの食べる準備はできてる？地元の絶品グルメ、私がぜーんぶ教えちゃうから期待しててね！'
    },
    {
        id: 'trendy',
        name: 'トレンドガイド',
        guideName: '山本 あかり',
        description: '流行スポットとSNS映えの専門家',
        specialty: '話題のスポット、インスタ映え、若者文化、最新トレンド',
        imagePath: 'image/akari.jpg',
        faceImagePath: 'image/akariface.jpg',
        color: '#EC4899',
        selfIntro: 'ハロー！山本あかりです！今一番バズってるスポットに行きたくない？映える写真撮って、みんなに自慢しちゃお！'
    },
    {
        id: 'nature',
        name: '自然ガイド',
        guideName: '木村 緑',
        description: '自然と景観の専門家',
        specialty: '自然景観、公園、庭園、四季の風景、動植物の解説',
        imagePath: 'image/midori.jpg',
        faceImagePath: 'image/midoriface.jpg',
        color: '#10B981',
        selfIntro: '木村緑です。自然の中で深呼吸してみませんか？四季折々の美しい景色とともに、心安らぐひとときをご案内します。'
    },
    {
        id: 'shopping',
        name: 'ショッピングガイド',
        guideName: '鈴木 愛',
        description: 'お土産とショッピングの専門家',
        specialty: 'お土産、ショッピングモール、伝統工芸品、地域の名産品',
        imagePath: 'image/ai.jpg',
        faceImagePath: 'image/aiface.jpg',
        color: '#EF4444',
        selfIntro: 'こんにちは、鈴木愛です！お土産選びなら私にお任せ！きっと喜ばれる素敵なアイテムが見つかりますよ。ショッピング楽しみましょう！'
    },
    {
        id: 'entertainment',
        name: 'エンタメガイド',
        guideName: '伊藤 楽子',
        description: 'エンターテイメントとアクティビティの専門家',
        specialty: 'テーマパーク、レジャー施設、イベント、体験アクティビティ',
        imagePath: 'image/rakuko.jpg',
        faceImagePath: 'image/rakukoface.jpg',
        color: '#06B6D4',
        selfIntro: '伊藤楽子ですっ！思いっきり楽しむ準備はOK！？ワクワクするような体験と最高のエンターテイメントをお届けします！'
    }
];

const screenshotsData = [
    { src: 'image/screen/screen1.jpg', caption: 'ガイド画面' },
    { src: 'image/screen/screen2.jpg', caption: '地図画面' },
    { src: 'image/screen/screen3.jpg', caption: 'チャット画面' },
    { src: 'image/screen/screen4.jpg', caption: 'ペルソナ選択' },
    { src: 'image/screen/screen5.jpg', caption: 'ガイド画面' },
    { src: 'image/screen/screen6.jpg', caption: '履歴画面' },
    { src: 'image/screen/screen7.jpg', caption: 'ガイド時間設定' }
];

let currentPersonaIndex = 0;

function initPersonas() {
    const container = document.getElementById('personas-container');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!container) return;

    container.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    personasData.forEach((persona, index) => {
        const card = document.createElement('div');
        card.className = 'persona-card';
        card.dataset.persona = persona.id;
        card.dataset.index = index;

        // カード構造：画像上にタイトル、下に説明
        card.innerHTML = `
            <div class="persona-card-inner">
                <img src="${persona.imagePath}" alt="${persona.name}" class="persona-card-image">
                <div class="persona-card-overlay">
                    <div class="persona-overlay-title">${persona.name}</div>
                </div>
            </div>
            <div class="persona-card-info">
                <div class="persona-info-title">${persona.name}</div>
                <div class="persona-info-name">${persona.guideName}</div>
                <div class="persona-info-description">${persona.description}</div>
            </div>
        `;

        // クリックイベント
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // アクティブなカードのみモーダルを開く
            if (card.classList.contains('active')) {
                openPersonaModal(persona);
            } else {
                // 非アクティブカードをクリックしたら、そのカードをアクティブに
                const clickedIndex = parseInt(card.dataset.index);
                showPersona(clickedIndex);
            }
        });

        container.appendChild(card);

        // ドットインジケーターを生成
        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => showPersona(index));
            dotsContainer.appendChild(dot);
        }
    });

    // 矢印ナビゲーション
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentPersonaIndex = (currentPersonaIndex - 1 + personasData.length) % personasData.length;
            showPersona(currentPersonaIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentPersonaIndex = (currentPersonaIndex + 1) % personasData.length;
            showPersona(currentPersonaIndex);
        });
    }

    // キーボードナビゲーション
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentPersonaIndex = (currentPersonaIndex - 1 + personasData.length) % personasData.length;
            showPersona(currentPersonaIndex);
        } else if (e.key === 'ArrowRight') {
            currentPersonaIndex = (currentPersonaIndex + 1) % personasData.length;
            showPersona(currentPersonaIndex);
        }
    });

    // 初期表示を設定
    showPersona(0);

    // アニメーション再適用
    initScrollAnimations();
}

function showPersona(index) {
    const cards = document.querySelectorAll('.persona-card');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalCards = cards.length;

    cards.forEach((card, i) => {
        card.classList.remove('active', 'prev', 'next', 'hidden');

        if (i === index) {
            // 中央のアクティブカード
            card.classList.add('active');
        } else if (i === (index - 1 + totalCards) % totalCards) {
            // 左のカード
            card.classList.add('prev');
        } else if (i === (index + 1) % totalCards) {
            // 右のカード
            card.classList.add('next');
        } else {
            // その他は非表示
            card.classList.add('hidden');
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentPersonaIndex = index;
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
        modalImage.alt = persona.name;
    }

    const modalRole = document.getElementById('modal-role');
    if (modalRole) {
        modalRole.textContent = persona.name;
        modalRole.style.backgroundColor = persona.color + '20';
        modalRole.style.color = persona.color;
    }

    const modalName = document.getElementById('modal-name');
    if (modalName) modalName.textContent = persona.guideName;

    const modalRealName = document.getElementById('modal-real-name');
    if (modalRealName) modalRealName.textContent = persona.id.toUpperCase().replace('_', ' ');

    const modalDesc = document.getElementById('modal-description');
    if (modalDesc) modalDesc.textContent = persona.description;

    const modalSpec = document.getElementById('modal-specialty');
    if (modalSpec) modalSpec.textContent = persona.specialty;

    const modalIntro = document.getElementById('modal-intro');
    if (modalIntro) modalIntro.textContent = persona.selfIntro;

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
                <img src="${screen.src}" alt="${screen.caption}" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);">
            </div>
            <p class="screenshot-caption">${screen.caption}</p>
        `;

        container.appendChild(item);
    });

    // アニメーション再適用
    initScrollAnimations();
}
