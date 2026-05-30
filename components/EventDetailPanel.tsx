import Image from 'next/image';
import { Event } from '../types/event';

interface EventDetailPanelProps {
  event: Event;
  onClose: () => void;
}

export default function EventDetailPanel({ event, onClose }: EventDetailPanelProps) {
  return (
    <div className="border-2 border-[#0B1E46] rounded-xl overflow-hidden bg-white shadow-xl flex flex-col h-full">

      {/* サムネイル画像 */}
      <div className="relative w-full aspect-[16/9] shrink-0 bg-slate-100">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />

        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-900 transition-colors z-10"
          aria-label="閉じる"
        >
          ✕
        </button>
      </div>

      {/* 詳細テキストエリア */}
      <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-5 flex-1 overflow-y-auto">

        {/* 日付・タイトル */}
        <div>
          <p className="text-xs md:text-sm font-bold text-[#B8860B] mb-1">
            {new Date(event.date).toLocaleDateString('ja-JP', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </p>
          <h2 className="text-lg md:text-xl font-bold text-[#0B1E46] leading-tight">{event.title}</h2>
        </div>

        {/* 開催情報（会場・時間） */}
        {(event.venue || event.time) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm font-bold text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
            {event.time  && <span className="flex items-center gap-1">🕐 {event.time}</span>}
            {event.venue && <span className="flex items-center gap-1">📍 {event.venue}</span>}
          </div>
        )}

        {/* 対象学生 */}
        <div>
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">TARGET</p>
          <p className="text-xs md:text-sm font-bold text-slate-700">{event.target}</p>
        </div>

        {/* 参加企業一覧 */}
        {event.companies && event.companies.length > 0 && (
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">COMPANIES</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {event.companies.map(company => (
                <span
                  key={company}
                  className="bg-white text-slate-700 text-[11px] md:text-xs font-bold px-2.5 py-1 rounded-md border border-slate-200 shadow-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LPへのリンクボタン */}
        {event.lpUrl ? (
          <a
            href={event.lpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full block text-center bg-[#0B1E46] text-white font-bold py-3.5 md:py-4 rounded-xl hover:bg-[#0B1E46]/90 transition-colors shadow-md text-sm md:text-base active:scale-95"
          >
            イベント詳細（LP）を見る ↗
          </a>
        ) : (
          <div className="mt-auto w-full text-center bg-slate-100 text-slate-400 font-bold py-3.5 md:py-4 rounded-xl text-sm md:text-base cursor-not-allowed">
            詳細ページ準備中
          </div>
        )}
      </div>
    </div>
  );
}