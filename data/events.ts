import { Event } from '../types/event';

/**
 * イベントデータの一覧
 *
 * ・過去のイベント   → isPast: true  （画面左側「過去イベント」に表示）
 * ・今後のイベント   → isPast: false （画面右側「開催予定イベント」に表示）
 *
 * 新しいイベントを追加するときはこの配列にオブジェクトを追加するだけでOK。
 * 画像は /public/images/ フォルダに配置し、imageUrl に "/images/ファイル名" を指定する。
 */
export const eventsData: Event[] = [

  // ===== 過去イベント（isPast: true） =====

  {
    id: "1",
    title: "関西就活 3/28(土) 合同説明会",
    date: "2026-03-28",
    target: "京阪神・関関同立の27卒学生",
    imageUrl: "/images/top_3.28.png",
    description: "DeNA・Deloitteなどが出展。",
    tags: ["戦略コンサル", "食品メーカー", "半導体", "メガベン"],
    isPast: true,
    lpUrl: "https://example.com/event1",
    companies: ["デロイト トーマツ ベンチャーサポート", "DeNA", "シンプレクス", "ナハト", "レイスグループ", "NES"],
    venue: "AP大阪茶屋町",
    time: "14:00〜",
  },
  {
    id: "2",
    title: "関西就活 4/26(日) 合同説明会",
    date: "2026-04-26",
    target: "京大・阪大・神大・海外大・国公立大学院・海外大学院の28卒生（30名限定）",
    imageUrl: "/images/top_4.26.png",
    description: "JCB・野村證券・三井住友海上火災保険・日本新薬・ナハト・オースビーが出展。30名限定の少人数制イベント。",
    tags: ["決済サービス", "証券・金融", "損害保険", "医薬品", "マーケティング", "経営コンサル"],
    isPast: true,
    lpUrl: "https://career-summit-2026-4-26.pages.dev/",
    companies: ["JCB", "野村證券", "三井住友海上火災保険", "日本新薬", "ナハト", "オースビー"],
    venue: "AP大阪茶屋町 ルームH・I",
    time: "14:00〜",
  },

  // ===== 開催予定イベント（isPast: false） =====

  {
    id: "3",
    title: "関西就活 5/9(土) 合同説明会",
    date: "2026-05-09",
    target: "関関同立・国公立の28卒学生（50名限定）",
    imageUrl: "/images/top_5.9.png", // /public/images/ に画像を配置したら有効になる
    description: "クボタ・Leverages・オムロングループ・船井総合研究所・クスリのアオキが出展。50名限定。",
    tags: ["食料・水・環境", "急成長ベンチャー", "センシング技術", "経営コンサル", "食料・医薬品"],
    isPast: false, // 未開催なので右カラム（開催予定イベント）に表示
    lpUrl: "https://kansai-shukatsu-2026-5-9.pages.dev/",
    companies: ["Kubota（クボタ）", "Leverages（レバレジーズ）", "オムロングループ", "船井総合研究所", "クスリのアオキ"],
    venue: "グランフロント大阪",
    time: "13:00〜",
  },
  {
    id: "4",
    title: "関西就活 5/23(土) 合同説明会",
    date: "2026-05-23",
    target: "京阪神の28卒学生（50名限定）",
    imageUrl: "/images/top_5.23.png", // /public/images/ に画像を配置したら有効になる
    description: "アビームコンサルティング・GO・レバレジーズ・オリックス・Sansanなど10社が出展。50名限定。",
    tags: ["戦略コンサル", "社会課題解決", "金融", "食品メーカー", "SaaS・DX", "半導体"],
    isPast: false, // 未開催なので右カラム（開催予定イベント）に表示
    lpUrl: "https://kansai-shukatsu-2026-5-23.pages.dev/",
    companies: [
      "アビームコンサルティング（戦略部門）",
      "GO",
      "レバレジーズ",
      "オリックス",
      "日本食研",
      "Sansan",
      "クスリのアオキ",
      "ダイヘン",
      "ニアメロ",
    ],
    venue: "グランフロント大阪",
    time: "13:00〜",
  },

  // ↓ 今後のイベントを追加する場合のテンプレート
  // {
  //   id: "5",
  //   title: "関西就活 〇/〇(〇) 合同説明会",
  //   date: "2026-XX-XX",
  //   target: "対象学生",
  //   imageUrl: "/images/イベント画像.png",
  //   description: "出展企業の説明",
  //   tags: ["タグ1", "タグ2"],
  //   isPast: false,
  //   lpUrl: "https://example.com/eventX",
  //   companies: ["企業A", "企業B"],
  //   venue: "会場名",
  //   time: "13:00〜",
  // },
];