import Image from 'next/image';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  isSelected: boolean;
  onClick: () => void;
}

export default function EventCard({ event, isSelected, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white border-2 rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 cursor-pointer transition-all duration-200 group
        ${isSelected
          ? 'border-[#0B1E46] shadow-md scale-[1.01]' 
          : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
        }
      `}
    >
      {/* 左側: サムネイル画像 */}
      <div className="w-[55%] md:w-3/5 relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className={`object-cover transition-transform duration-500 ${!isSelected ? 'group-hover:scale-105' : ''}`}
        />
      </div>

      {/* 右側: タグ一覧 */}
      <div className="w-[45%] md:w-2/5 flex flex-col gap-1.5 md:gap-2 justify-center">
        {/* ▼▼▼ 修正：.slice(0, 4) を追加して最大4つまでに制限 ▼▼▼ */}
        {event.tags.slice(0, 4).map(tag => (
          <span
            key={tag}
            className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] md:text-xs font-bold text-center py-1 md:py-1.5 px-1 rounded-md shadow-sm line-clamp-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}