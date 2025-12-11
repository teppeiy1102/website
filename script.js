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
        catchCopy: '旅のすべてを、あなた好みに。',
        guideName: '高橋 真理',
        description: 'あらゆる分野に精通したオールマイティなガイド',
        specialty: '歴史、グルメ、観光スポット、自然、文化など全ての分野を幅広くカバー',
        imagePath: 'image/mari.png',
        faceImagePath: 'image/mariface.png',
        color: '#3B82F6',
        selfIntro: 'こんにちは！高橋真理です。私はこの街の歴史、グルメ、自然、そして最新のトレンドまで、あらゆる魅力を網羅するオールラウンダーガイドです。「何から見ればいいかわからない」「時間の枠内でできるだけ多くの体験をしたい」といったお悩みはありませんか？私がお客様の興味に合わせて、バランスの取れた最高のプランをご提案します。初めての方もリピーターの方も、絶対に満足できる旅をお約束します。どんな質問にもお答えできる自信がありますので、街のことは何でも聞いてくださいね。一緒に素晴らしい旅の思い出を作りましょう！'
    },
    {
        id: 'history',
        name: '歴史ガイド',
        catchCopy: '時を超える旅へ、ご案内',
        guideName: '佐藤 文子',
        description: '歴史と文化遺産の専門家',
        specialty: '日本史、世界史、文化財、歴史的建造物の解説',
        imagePath: 'image/fumiko.png',
        faceImagePath: 'image/fumikoface.png',
        color: '#8B5CF6',
        selfIntro: '佐藤文子と申します。古き良き歴史の息吹を感じたい貴方へ。私はこの土地に眠る物語や、文化遺産の深い背景をご案内することに情熱を注いでいます。教科書には載っていないような地元ならではの伝承や、建物一つ一つに込められた先人たちの想いを丁寧に紐解いていきます。ただ見るだけでは分からない、時を超えたロマンを感じていただけるはずです。静かな寺社仏閣の空気感や、時代ごとの街の変遷に興味はございませんか？知的好奇心を満たす、奥深い歴史探訪の旅へ、私がご案内いたします。'
    },
    {
        id: 'gourmet',
        name: 'グルメガイド',
        catchCopy: '絶品グルメで、満たされて',
        guideName: '田中 美香',
        description: 'ご当地グルメと食文化の専門家',
        specialty: 'ご当地料理、人気店、食文化、B級グルメの紹介',
        imagePath: 'image/mika.png',
        faceImagePath: 'image/mikaface.png',
        color: '#F59E0B',
        selfIntro: 'やっほー！田中美香だよ！美味しいもの食べる準備はできてる？私はこの街の絶品グルメに関しては誰にも負けない自信があるんだ！定番の郷土料理はもちろんだけど、地元の人しか知らない隠れ家レストランや、行列必至のスイーツ店、夜にしっぽり飲める居酒屋まで、私の足で稼いだ情報を全部教えちゃうよ。「安くて美味しいお店知りたい！」とか「ちょっとリッチなランチがいいな」とか、気分別にリクエストしてね。お腹も心も満たされる、最高にハッピーな食い倒れツアーに出かけよう！'
    },
    {
        id: 'trendy',
        name: 'トレンドガイド',
        catchCopy: '「今」ときめく、映え旅へ',
        guideName: '山本 あかり',
        description: '流行スポットとSNS映えの専門家',
        specialty: '話題のスポット、インスタ映え、若者文化、最新トレンド',
        imagePath: 'image/akari.png',
        faceImagePath: 'image/akariface.png',
        color: '#EC4899',
        selfIntro: 'ハロー！山本あかりです！今一番バズってるスポットに行きたくない？私は最新のトレンドや、SNS映えするフォトジェニックスポットをリサーチするのが大好きなの。「友達に自慢できる写真が撮りたい」「話題のあのスイーツを食べてみたい」そんな願いを叶えるなら私にお任せ！絶対に外さないおしゃれなカフェや、可愛い雑貨屋さん、エモい路地裏まで案内するよ。スマホの充電は満タンにしてきてね！一緒に最高の映え写真を撮って、たくさんの「いいね」をゲットしちゃおう！'
    },
    {
        id: 'nature',
        name: '自然ガイド',
        catchCopy: '心洗われる、癒しのひととき',
        guideName: '木村 緑',
        description: '自然と景観の専門家',
        specialty: '自然景観、公園、庭園、四季の風景、動植物の解説',
        imagePath: 'image/midori.png',
        faceImagePath: 'image/midoriface.png',
        color: '#10B981',
        selfIntro: '木村緑です。自然の中で深呼吸してみませんか？私は四季折々の美しい景色や、そこに息づく動植物をご案内するのが得意です。この街には、都会の喧騒を忘れさせてくれるような緑豊かな公園や、清らかな川、美しい花々が咲き誇る庭園がたくさんあります。朝の爽やかな空気、夕暮れの優しい光、風の音や鳥のさえずり……五感を使って自然を感じる癒しの旅へお連れします。少し疲れた心をリフレッシュしたい時、自然のパワーを感じたい時は、私と一緒にのんびりと散策しましょう。'
    },
    {
        id: 'shopping',
        name: 'ショッピングガイド',
        catchCopy: 'とっておきの、宝物探し',
        guideName: '鈴木 愛',
        description: 'お土産とショッピングの専門家',
        specialty: 'お土産、ショッピングモール、伝統工芸品、地域の名産品',
        imagePath: 'image/ai.png',
        faceImagePath: 'image/aiface.png',
        color: '#EF4444',
        selfIntro: 'こんにちは、鈴木愛です！お買い物ってワクワクしますよね？お土産選びや自分へのご褒美探しなら、私にお任せください！この土地ならではの伝統工芸品から、人気の特産品、おしゃれなセレクトショップまで、幅広いショッピングスポットをご案内します。「家族に喜ばれるお菓子は？」「記念に残る雑貨が欲しい」そんなご相談にも親身になってお答えしますよ。賢くお買い物するためのコツや、お得な情報もお教えできるかもしれません。素敵なアイテムとの出会いをサポートしますね！'
    },
    {
        id: 'entertainment',
        name: 'エンタメガイド',
        catchCopy: '最高にワクワクする瞬間を',
        guideName: '伊藤 楽子',
        description: 'エンターテイメントとアクティビティの専門家',
        specialty: 'テーマパーク、レジャー施設、イベント、体験アクティビティ',
        imagePath: 'image/rakuko.png',
        faceImagePath: 'image/rakukoface.png',
        color: '#06B6D4',
        selfIntro: '伊藤楽子ですっ！思いっきり楽しむ準備はOK！？私はテーマパークやイベント、体験アクティビティなど、ワクワクするエンターテイメントが大好き！「とにかく盛り上がりたい！」「珍しい体験をしてみたい！」そんなアクティブなあなたにぴったりのプランを提案するよ。家族みんなで楽しめるレジャー施設から、スリル満点のアトラクション、季節のお祭りまで、退屈なんてさせないよ！最高にエキサイティングな思い出を作って、笑顔いっぱいの旅にしようね！ついてきてっ！'
    }
];

const screenshotsData = [
    { src: 'image/screen/screen1.png', caption: 'ガイド画面' },
    { src: 'image/screen/screen2.png', caption: '地図画面' },
    { src: 'image/screen/screen3.png', caption: 'チャット画面' },
    { src: 'image/screen/screen4.png', caption: 'ペルソナ選択' },
    { src: 'image/screen/screen5.png', caption: 'ガイド画面' },
    { src: 'image/screen/screen6.png', caption: '履歴画面' },
    { src: 'image/screen/screen7.png', caption: 'ガイド時間設定' }
];

let currentPersonaIndex = 0;

function initPersonas() {
    const container = document.getElementById('personas-container');
    if (!container) return;

    container.innerHTML = '';

    personasData.forEach((persona, index) => {
        const card = document.createElement('div');
        card.className = 'persona-card';
        if (index === 0) card.classList.add('active');
        card.dataset.persona = persona.id;
        card.dataset.index = index;

        // 新しいカード構造：画像コンテナ + オーバーレイ + 再生ボタン + 下部情報
        card.innerHTML = `
            <div class="persona-image-container">
                <img src="${persona.imagePath}" alt="${persona.name}" class="persona-card-image">
                <div class="persona-card-overlay">
                    <div class="persona-overlay-catch" data-text="${persona.catchCopy}"></div>
                    <div class="persona-overlay-name" data-text="${persona.name}"></div>
                    <div class="persona-overlay-realname" data-text="${persona.guideName}"></div>
                </div>
                <div class="persona-play-button" title="詳細を見る">
                    <svg viewBox="0 0 24 24">
                        <polygon points="5,3 19,12 5,21" />
                    </svg>
                </div>
            </div>
            <div class="persona-card-info">
                <div class="persona-info-title">${persona.guideName}</div>
                <div class="persona-info-description">${persona.description}</div>
                <div class="persona-info-description">${persona.specialty}</div>
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

    // アニメーション再適用
    initScrollAnimations();

    // 初期表示の状態を適用
    showPersona(0);

    // リサイズ時にレイアウトを再計算
    window.addEventListener('resize', () => {
        showPersona(currentPersonaIndex);
    });
}

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
