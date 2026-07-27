# ガイドデータ管理ガイド

## 📁 ファイル構成

- **guide-data.json** - ガイドポイントのデータを管理するJSONファイル
- **map.html** - 地図ページ（JSONファイルからデータを読み込む）

## 🎯 JSON形式を採用した理由

### メリット

1. **データの追加・編集が簡単**
   - テキストエディタで直接編集可能
   - 構造化されたデータで見やすい
   - コンマやブラケットの対応が明確

2. **他ツールとの連携が容易**
   - Excel、Google スプレッドシートから変換可能
   - プログラムでの自動生成が簡単
   - バックアップや復元が容易

3. **拡張性が高い**
   - 新しいフィールドを簡単に追加できる
   - カテゴリやタグなどの分類も可能
   - 階層構造でデータを整理できる

4. **検証とデバッグが容易**
   - JSON検証ツールが豊富
   - エラー箇所が特定しやすい
   - 整形ツールで見やすく編集可能

## 📝 新しいガイドポイントの追加方法

### 基本手順

1. `guide-data.json` をテキストエディタで開く
2. `guides` 配列の最後に新しいオブジェクトを追加
3. 各項目に適切な値を設定
4. ファイルを保存

### データの形式

```json
{
  "id": 5,                              // 一意のID番号
  "latlng": [緯度, 経度],                // 地図上の座標
  "name": "スポット名",                  // 観光地の名前
  "address": "住所",                     // 詳細な住所
  "persona": {
    "name": "ガイド名",                  // ガイドの名前
    "image": "image/xxxface.png"        // ガイドの画像パス
  },
  "spotImage": "image/screen/xxx.jpg",  // スポットの画像パス
  "text": "ガイド説明文",                // ガイドの説明テキスト
  "audio": "音声ファイルのURL"           // 音声ガイドのURL
}
```

### 追加例

```json
{
  "guides": [
    // ... 既存のデータ ...
    {
      "id": 5,
      "latlng": [51.5074, -0.1278],
      "name": "ビッグベン",
      "address": "Westminster, London SW1A 0AA, United Kingdom",
      "persona": {
        "name": "中村 みどり",
        "image": "image/midoriface.png"
      },
      "spotImage": "image/screen/back4.jpg",
      "text": "ロンドンのシンボル、ビッグベンです。正式名称はエリザベスタワーと改名されましたが、今でもビッグベンの愛称で親しまれています。",
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }
  ]
}
```

## 🔧 便利なツール

### オンラインツール

- **JSON Formatter** - https://jsonformatter.org/
  - JSONの整形と検証
  
- **JSON Editor Online** - https://jsoneditoronline.org/
  - GUIでJSONを編集

- **LatLong.net** - https://www.latlong.net/
  - 住所から緯度・経度を取得

### 座標の取得方法

1. **Google マップを使用**
   - 目的地を右クリック
   - 座標をコピー
   - [緯度, 経度] の形式で記載

2. **LatLong.netを使用**
   - 住所や場所名を入力
   - 表示された座標をコピー

## ⚠️ 注意事項

### データ編集時の注意点

1. **JSON形式の厳守**
   - カンマ、ブラケット、クォートを正確に
   - 最後の要素の後ろにカンマを付けない
   - 文字列は必ずダブルクォート `"` で囲む

2. **ID の重複を避ける**
   - 各ガイドポイントに一意のIDを設定
   - 連番で管理することを推奨

3. **画像パスの確認**
   - 画像ファイルが実際に存在するか確認
   - パスの記述ミスに注意（大文字小文字も区別）

4. **文字エンコーディング**
   - UTF-8で保存することを推奨
   - 日本語が文字化けしないように注意

## 🚀 大量データの管理方法

### 100件以上のデータを扱う場合

#### 方法1: カテゴリー別に分割

```
guide-data-asia.json
guide-data-europe.json
guide-data-america.json
```

#### 方法2: Excelで管理してJSONに変換

1. Excelでデータを作成・編集
2. CSVとして保存
3. オンラインツールでCSV → JSON変換
4. guide-data.jsonに統合

#### 方法3: データベースの導入

- より本格的な管理が必要な場合
- Firebase、Supabaseなどのサービス利用を検討

## 🎨 拡張のアイデア

### 追加可能なフィールド例

```json
{
  "category": "歴史的建造物",        // カテゴリー分類
  "tags": ["世界遺産", "人気"],      // タグ
  "rating": 4.5,                    // 評価
  "visitDuration": 60,              // 推奨滞在時間（分）
  "openingHours": "9:00 - 18:00",   // 営業時間
  "ticketPrice": "大人1000円",      // 入場料
  "website": "https://example.com", // 公式サイト
  "relatedSpots": [2, 3]           // 関連スポットのID
}
```

## 📚 参考リソース

- [JSON公式サイト](https://www.json.org/json-ja.html)
- [Leaflet ドキュメント](https://leafletjs.com/)
- [座標取得ツール](https://www.latlong.net/)

---

**最終更新日**: 2025/12/23
**バージョン**: 1.0
