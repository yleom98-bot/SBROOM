/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES } from '../data';
import { MenuItem } from '../types';
import { Plus, Check, ShoppingBag, BookOpen, Percent, Clock, Heart } from 'lucide-react';

interface InteractiveMenuProps {
  onSelectItem: (item: MenuItem) => void;
  preorderedIds: string[];
}

export default function InteractiveMenu({ onSelectItem, preorderedIds }: InteractiveMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('morning-pastries');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const activeCategory = MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) || MENU_CATEGORIES[0];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <section id="menu-explore" className="py-24 bg-brand-cream-50 px-6 md:px-12 relative border-t border-b border-brand-cream-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block font-bold">
            SONGI BAKE MAIN MENU 🐾
          </span>
          <span className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-charcoal block">
            송이의 따끈따끈 메뉴판
          </span>
          <p className="font-sans text-sm text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed font-normal">
            인공 첨가물을 전혀 쓰지 않는 빵 트레이입니다. 수분율, 밀가루 함유, 저온 숙성 시간을 꼼꼼하게 설계했어요. 빵을 꾹 눌러 송이의 코멘트와 영양 성분을 살펴보세요!
          </p>
        </div>

        {/* Case Study segmented navigation */}
        <div className="border-t border-b border-brand-cream-200/80 mb-16 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-cream-200 bg-white/40">
          {MENU_CATEGORIES.map((cat, idx) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                id={`menu-cat-btn-${cat.id}`}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedItem(null);
                }}
                className={`py-6 px-5 text-left transition-all duration-500 cursor-pointer ${
                  isActive ? 'bg-brand-cream-100/80' : 'bg-transparent hover:bg-brand-cream-50/50'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-[9px] text-brand-gold/80 font-bold">
                    PLATE 0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                  )}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal leading-none">
                  {cat.title}
                </h3>
                <p className="font-sans text-[11px] text-brand-charcoal/60 mt-2 line-clamp-2 max-w-[95%] leading-normal">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Content Section: 2 Columns - Items List and Dynamic Preview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Items dynamic list) */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="font-sans text-[11px] tracking-wide text-brand-charcoal/50 uppercase border-b border-brand-cream-200 pb-3 font-bold flex items-center gap-1.5">
              <span>오늘의 리스트</span>
              <span className="text-brand-gold font-bold">({activeCategory.items.length}개 메뉴 대기중)</span>
            </h4>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {activeCategory.items.map((item) => {
                  const isCurSelected = selectedItem?.id === item.id;
                  const isPreordered = preorderedIds.includes(item.id);
                  const isFavorited = favorites.includes(item.id);

                  return (
                    <motion.div
                      key={item.id}
                      id={`menu-item-row-${item.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedItem(item)}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                        isCurSelected
                          ? 'bg-brand-cream-100 border-brand-gold/50 shadow-md transform -translate-y-0.5'
                          : 'bg-brand-cream-50/70 border-brand-cream-200 hover:border-brand-cream-200/80 hover:bg-white/80 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {/* Tiny thumbnail frame like in fine layouts */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-cream-200 flex-shrink-0 border border-brand-cream-200/50 relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-serif text-sm sm:text-base text-brand-charcoal font-bold tracking-tight">
                              {item.name}
                            </span>
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="font-sans text-[8px] tracking-wide px-2 py-0.5 bg-brand-cream-200 text-brand-charcoal/80 rounded-md uppercase font-bold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed font-normal line-clamp-1 max-w-[90%]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Right side interaction (Price and action) */}
                      <div className="flex items-center gap-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                        <span className="font-sans text-sm text-brand-gold font-bold">
                          {item.price}
                        </span>
                        
                        <div className="flex items-center gap-1.5">
                          {/* Favorite button */}
                          <button
                            onClick={(e) => toggleFavorite(item.id, e)}
                            className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                              isFavorited
                                ? 'bg-red-50 border-red-200 text-red-500'
                                : 'border-brand-cream-200 text-brand-charcoal/40 hover:text-red-500 hover:bg-red-50'
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
                          </button>

                          {/* Preorder quick toggle button */}
                          <button
                            id={`btn-menu-add-${item.id}`}
                            onClick={() => onSelectItem(item)}
                            className={`p-2 rounded-full border transition-colors cursor-pointer ${
                              isPreordered
                                ? 'bg-brand-olive-dark text-brand-cream-50 border-brand-olive-dark'
                                : 'border-brand-cream-200 text-brand-charcoal hover:bg-brand-olive-dark hover:text-brand-cream-50 hover:border-brand-olive-dark'
                            }`}
                          >
                            {isPreordered ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column (Focus Detail Window, modeling high fashion details) */}
          <div className="lg:col-span-5">
            <div className="bg-brand-cream-100/90 rounded-3xl p-6 border border-brand-cream-200 sticky top-28 shadow-sm space-y-6 min-h-[440px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {selectedItem ? (
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* Beautiful Large Arch Photo Panel */}
                    <div className="arch-top-rounded overflow-hidden bg-brand-cream-200 aspect-[4/3] relative border border-brand-cream-200/50 shadow-inner">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-brand-charcoal text-brand-cream-50 px-3 py-1 rounded-full text-xxs font-sans font-bold">
                        {selectedItem.price}
                      </div>
                    </div>

                    {/* Metadata summary for deep artisan styling */}
                    <div className="flex justify-between items-center py-1.5 border-b border-brand-cream-200/60">
                      <span className="font-mono text-[9px] tracking-widest text-brand-charcoal/50 uppercase font-bold">
                        MENU NUMBER: #{selectedItem.id}
                      </span>
                      <span className="font-sans text-[10px] text-brand-olive-dark font-bold flex items-center gap-1 select-none">
                        🐶 송이가 검수 완료!
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-serif text-lg md:text-xl font-bold text-brand-charcoal">
                        {selectedItem.name}
                      </h4>
                      <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-normal">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Dynamic Technical Specifications for the Sourdough (like Hydration, Flour, Time) */}
                    <div className="grid grid-cols-2 gap-3 bg-white/60 p-3 rounded-xl border border-brand-cream-200">
                      
                      <div className="space-y-0.5">
                        <span className="font-sans text-[9px] text-brand-charcoal/50 uppercase block font-bold">
                          🌾 핵심 원재료 list
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {selectedItem.flours ? (
                            selectedItem.flours.map((flour) => (
                              <span key={flour} className="font-sans text-[11px] text-brand-charcoal font-bold leading-none">
                                • {flour}
                              </span>
                            ))
                          ) : (
                            <span className="font-sans text-[11px] text-brand-charcoal font-bold">
                              • 최고급 앵커 버터
                            </span>
                          )}
                        </div>
                      </div>

                      {selectedItem.hydration && (
                        <div className="space-y-0.5 border-l border-brand-cream-200 pl-3">
                          <span className="font-sans text-[9px] text-brand-charcoal/50 uppercase block font-bold flex items-center gap-0.5">
                            <Percent className="w-2.5 h-2.5" /> 수분 함유량
                          </span>
                          <span className="font-mono text-xs font-bold text-brand-charcoal">
                            {selectedItem.hydration}
                          </span>
                        </div>
                      )}

                      {selectedItem.fermentationTime && (
                        <div className="col-span-2 space-y-0.5 pt-2 border-t border-brand-cream-200">
                          <span className="font-sans text-[9px] text-brand-charcoal/50 uppercase block font-bold flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" /> 자연 저온 숙성시간
                          </span>
                          <span className="font-sans text-xs font-bold text-brand-charcoal/85">
                            {selectedItem.fermentationTime}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* Primary action */}
                    <button
                      id="btn-detail-order-toggle"
                      onClick={() => onSelectItem(selectedItem)}
                      className={`w-full py-3 rounded-full text-xs font-sans tracking-widest font-bold uppercase flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                        preorderedIds.includes(selectedItem.id)
                          ? 'bg-red-500 text-white hover:bg-brand-charcoal'
                          : 'bg-brand-charcoal text-brand-cream-50 hover:bg-brand-gold'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>
                        {preorderedIds.includes(selectedItem.id)
                          ? '📋 실시간 주문 취소하기'
                          : '🧺 예약 바구니에 담기'}
                      </span>
                    </button>

                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-3 flex-1"
                  >
                    <BookOpen className="w-10 h-10 text-brand-charcoal/30 stroke-[1.5] animate-bounce" style={{ animationDuration: '4s' }} />
                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal tracking-normal">
                        맛있는 빵을 톡 선택해 보세요!
                      </h4>
                      <p className="font-sans text-xs text-brand-charcoal/60 max-w-[240px] mx-auto leading-relaxed">
                        왼쪽 제품 목록에서 먹고 싶은 빵을 콕 선택하면, 정성 어린 수분 측정값, 저온 발효 시간 등 촉촉 비밀 스펙이 여기에 뿅 나타납니다! 🐾
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Little Footer note */}
              <div className="text-center pt-3 border-t border-brand-cream-200/50">
                <span className="font-mono text-[8px] tracking-[0.2em] text-brand-charcoal/40 uppercase font-bold">
                  유기농 수제 정직 빵공방 • 송이베이크룸 (Songi Bake Room)
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
