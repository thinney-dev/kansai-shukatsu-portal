'use client';

import { useState, useEffect } from 'react';
import SiteLogo from '../components/SiteLogo';
import EventCard from '../components/EventCard';
import EventDetailPanel from '../components/EventDetailPanel';
import { eventsData } from '../data/events';
import { Event } from '../types/event';

const pastEvents     = eventsData.filter(e => e.isPast);
const upcomingEvents = eventsData.filter(e => !e.isPast);

export default function Home() {
  const [selectedPastEvent,     setSelectedPastEvent]     = useState<Event | null>(null);
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState<Event | null>(null);

  // どちらかのイベントが選択されているかを判定
  const selectedEvent = selectedPastEvent || selectedUpcomingEvent;

  // モーダルを閉じる・選択を解除する共通関数
  const closeAll = () => {
    setSelectedPastEvent(null);
    setSelectedUpcomingEvent(null);
  };

  // スマホでモーダル表示時は、裏の画面がスクロールしないようにロック
  useEffect(() => {
    if (selectedEvent && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedEvent]);

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-10 text-gray-900 relative">

      {/* ===== スマホ専用：詳細モーダル（ポップアップ） ===== */}
      {/* md:hidden でスマホサイズのみ表示されます */}
      {selectedEvent && (
        <div 
          className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeAll}
        >
          <div 
            className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-in zoom-in-95 duration-200" 
            onClick={e => e.stopPropagation()}
          >
            <EventDetailPanel event={selectedEvent} onClose={closeAll} />
          </div>
        </div>
      )}

      {/* ===== ヘッダー ===== */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 border-b pb-4 md:pb-6 gap-4 md:gap-0">
        <SiteLogo />
        <h1 className="text-xl md:text-3xl font-bold text-center flex-grow text-[#0B1E46]">
          就活イベントまとめ
        </h1>
        <div className="w-[150px] hidden md:block" />
      </header>

      {/* ===== メインコンテンツ（2カラムグリッド） ===== */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">

        {/* ===== 左カラム：過去イベント ===== */}
        <section>
          <h2 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6 pb-2 border-b-2 border-[#0B1E46] text-[#0B1E46]">
            {/* PC向け：予定イベント選択時は「イベント詳細」に */}
            <span className="hidden md:inline">{selectedUpcomingEvent ? 'イベント詳細' : '過去イベント'}</span>
            {/* スマホ向け：常に「過去イベント」 */}
            <span className="md:hidden">過去イベント</span>
          </h2>

          {/* PC向けの表示制御 */}
          <div className="hidden md:grid gap-6">
            {selectedUpcomingEvent ? (
              <EventDetailPanel event={selectedUpcomingEvent} onClose={closeAll} />
            ) : (
              pastEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  isSelected={selectedPastEvent?.id === event.id}
                  onClick={() => setSelectedPastEvent(prev => prev?.id === event.id ? null : event)}
                />
              ))
            )}
          </div>

          {/* スマホ向けの表示制御（常に一覧を表示し、タップでモーダル起動） */}
          <div className="md:hidden grid gap-4">
            {pastEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isSelected={selectedPastEvent?.id === event.id}
                onClick={() => setSelectedPastEvent(event)}
              />
            ))}
          </div>
        </section>

        {/* ===== 右カラム：開催予定イベント ===== */}
        <section>
          <h2 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6 pb-2 border-b-2 border-[#0B1E46] text-[#0B1E46]">
            {/* PC向け：過去イベント選択時は「イベント詳細」に */}
            <span className="hidden md:inline">{selectedPastEvent ? 'イベント詳細' : '開催予定イベント'}</span>
            {/* スマホ向け：常に「開催予定イベント」 */}
            <span className="md:hidden">開催予定イベント</span>
          </h2>

          {/* PC向けの表示制御 */}
          <div className="hidden md:grid gap-6">
            {selectedPastEvent ? (
              <EventDetailPanel event={selectedPastEvent} onClose={closeAll} />
            ) : (
              upcomingEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  isSelected={selectedUpcomingEvent?.id === event.id}
                  onClick={() => setSelectedUpcomingEvent(prev => prev?.id === event.id ? null : event)}
                />
              ))
            )}
          </div>

          {/* スマホ向けの表示制御（常に一覧を表示し、タップでモーダル起動） */}
          <div className="md:hidden grid gap-4">
            {upcomingEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isSelected={selectedUpcomingEvent?.id === event.id}
                onClick={() => setSelectedUpcomingEvent(event)}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}