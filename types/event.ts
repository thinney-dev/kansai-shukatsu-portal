export interface Event {
  id: string;          // イベントの一意識別子（"1", "2" など連番で管理）
  title: string;       // イベントタイトル（カードの見出しに使用）
  date: string;        // 開催日（"YYYY-MM-DD" 形式で統一）
  target: string;      // 対象学生（例: "京阪神・関関同立の27卒学生"）
  imageUrl: string;    // サムネイル画像のパス（/public/images/ 以下に配置）
  description: string; // イベントの簡単な説明文（出展企業名など）
  tags: string[];      // 出展企業のカテゴリタグ（例: ["戦略コンサル", "メガベン"]）
  isPast: boolean;     // true = 過去イベント（左カラム）/ false = 今後のイベント（右カラム）
  lpUrl?: string;      // LPへのURL（任意。未設定の場合はリンクなし）
  companies?: string[];// 参加企業名リスト（詳細パネルに表示）
  venue?: string;      // 開催場所（例: "AP大阪茶屋町"）
  time?: string;       // 開催時間（例: "14:00〜"）
}