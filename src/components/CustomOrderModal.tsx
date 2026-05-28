/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Clock, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preorderedItems: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearPreorder: () => void;
}

export default function CustomOrderModal({
  isOpen,
  onClose,
  preorderedItems,
  onRemoveItem,
  onClearPreorder,
}: CustomOrderModalProps) {
  // Custom Loaf Builder State
  const [customLoaf, setCustomLoaf] = useState({
    flour: 'T65 프랑스식 유기농 밀가루 베이스',
    inclusions: [] as string[],
    scoring: '정통 일등 쿠프 단일 칼집 🥖',
    browning: 'Medium caramelized bronze'
  });

  const [pickupDate, setPickupDate] = useState('내일 아침 일찍 수령 (오전 7:00 - 오전 11:00)');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const inclusionsList = [
    '캘리포니아 유기농 고소한 호두',
    '아마씨 & 해바라기씨 곡물 믹스',
    '프랑스 이즈니 고메 버터 조각',
    '지중해 깔라마타 블랙 올리브',
    '로즈마리 허브 & 구운 양파칩',
    '고급 카카오 다크 초콜릿 칩'
  ];

  const handleToggleInclusion = (inc: string) => {
    setCustomLoaf((prev) => ({
      ...prev,
      inclusions: prev.inclusions.includes(inc)
        ? prev.inclusions.filter((x) => x !== inc)
        : [...prev.inclusions, inc]
    }));
  };

  // Base price calculations in Korean Won (₩)
  const customLoafPrice = 9500 + customLoaf.inclusions.length * 1500;
  const preorderedTotal = preorderedItems.reduce((acc, item) => {
    // Robustly strip any non-digit character to parse Won prices
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return acc + priceNum;
  }, 0);

  const grandTotal = preorderedTotal + customLoafPrice;

  // Real-time timeline generator in Korean
  const getTimeline = () => {
    return [
      { step: '반죽 수화(Autolyse) 및 직접 믹싱', time: '오늘 오후 2시', desc: '돌가루 맷돌 원맥 가루와 맑은 물과 천연 연수가 하나가 되는 시간' },
      { step: '1차 천연 효모종 르방(Levain) 상온 숙성', time: '오늘 저녁 6시', desc: '효모종 잔루크가 열심히 숨쉬며 맛있는 산소 방울을 풍부하게 내뿜는 과정' },
      { step: '2차 저온 동굴 장기 숙성 (Cold Retardation)', time: '오늘 밤 10시', desc: '섭씨 4도 전용 숙성고에서 깊고 더부룩하지 않은 유산 균형을 잡습니다.' },
      { step: '돌구이 화덕 촉촉 직화 불꽃 베이킹', time: '내일 새벽 5시 30분', desc: '섭씨 240도 초고온의 천연 가마 스팀 오븐 속에서 빵이 노릇노릇 부풀어 오릅니다.' },
      { step: '갓 구운 뽀송 빵 픽업 쇼케이스 대기', time: '내일 오전 7시', desc: '따뜻하게 갓 구운 상태로 친환경 크라프트 백에 담아 수령하실 포장을 완료합니다.' }
    ];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setClientName('');
    setClientContact('');
    setCustomLoaf({
      flour: 'T65 프랑스식 유기농 밀가루 베이스',
      inclusions: [],
      scoring: '정통 일등 쿠프 단일 칼집 🥖',
      browning: 'Medium caramelized bronze'
    });
    onClearPreorder();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-charcoal z-50 backdrop-blur-xs"
          />

          {/* Core Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="builder-order-drawer"
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-brand-cream-50 z-50 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-cream-200 flex justify-between items-center sticky top-0 bg-brand-cream-50 z-10">
              <div>
                <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] block font-bold">
                  SONGI BESPOKE BAKE SHOP 🐾
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-charcoal tracking-wide">
                  실시간 화덕 예약 &amp; 주문서
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-brand-cream-200 text-brand-charcoal/60 hover:text-brand-gold transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              /* Success Panel */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center flex-1 flex flex-col justify-center items-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-olive-light/20 flex items-center justify-center text-brand-olive-dark">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h4 className="font-serif text-2xl font-bold text-brand-charcoal tracking-wide">
                    소중한 가마 예약 성공! 🥐
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-normal">
                    고맙습니다, <span className="font-semibold text-brand-charcoal">{clientName}</span> 단골 고객님! 주문하신 정성 레시피 빵이 셰프님의 내일 새벽 장부에 소중하게 추가 보관되었습니다!
                  </p>
                </div>

                {/* Simulated Bakery ticket */}
                <div className="bg-brand-cream-100 border border-brand-cream-200 p-6 rounded-2xl w-full max-w-md text-left text-xs font-sans text-brand-charcoal/80 space-y-3 shadow-inner">
                  <div className="text-center font-serif text-sm tracking-wider font-bold uppercase border-b border-brand-cream-200 pb-2">
                    🎟️ 송이베이크룸 주문 예약증
                  </div>
                  <div className="flex justify-between">
                    <span>방문 예약자:</span>
                    <span className="font-bold">{clientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>연락처 정보:</span>
                    <span className="font-mono">{clientContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>매장 수령 시간:</span>
                    <span className="text-right max-w-[65%] font-bold text-brand-olive-dark">{pickupDate}</span>
                  </div>
                  <div className="border-t border-brand-cream-200 pt-3 flex justify-between font-bold text-brand-charcoal text-sm">
                    <span>수령 시 현장 결제액:</span>
                    <span className="text-brand-gold text-base">₩{grandTotal.toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] text-brand-gold flex items-center gap-1 mt-2 justify-center font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> 대형 가마 화덕에서 갓 꺼내 겉바속촉 온도를 확실히 지킵니다!
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={handleReset}
                    className="px-10 py-3.5 rounded-full bg-brand-charcoal text-brand-cream-50 text-xs font-sans tracking-wide font-bold uppercase hover:bg-brand-gold transition-all cursor-pointer"
                  >
                    새로운 빵 또 구우러 가기 🐾
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Configuration Panels */
              <div className="p-6 md:p-8 flex-1 space-y-10">
                
                {/* Panel 1: Selected Pastries Catalog */}
                {preorderedItems.length > 0 ? (
                  <div className="space-y-4">
                    <h4 className="font-sans text-[11px] font-bold tracking-wider text-brand-charcoal/50 uppercase border-b border-brand-cream-200 pb-2">
                      01 / 🧺 예약 장바구니 리스트 ({preorderedItems.length}개 메뉴)
                    </h4>
                    
                    <div className="space-y-3">
                      {preorderedItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-brand-cream-100 rounded-xl border border-brand-cream-200/50">
                          <div className="flex items-center gap-3">
                            <span className="font-serif text-xs text-brand-charcoal font-bold">{item.name}</span>
                            <span className="font-mono text-xs text-brand-gold font-bold">{item.price}</span>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 font-sans font-bold cursor-pointer"
                          >
                            빼기
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-brand-cream-100 rounded-2xl border border-brand-cream-200 text-center">
                    <p className="font-sans text-xs text-brand-charcoal/60 italic leading-relaxed">
                      장바구니가 비어 있어요 아래 메뉴판에서 예약하고 싶은 디저트나 소금빵 옆의 [+] 버튼을 눌러보세요!
                    </p>
                  </div>
                )}

                {/* Panel 2: The Sourdough Customizer */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-brand-cream-200 pb-2">
                    <h4 className="font-sans text-[11px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
                      02 / 🥖 나만의 특별한 화덕 깜파뉴 만글기
                    </h4>
                    <span className="font-sans text-sm text-brand-gold font-bold">
                      ₩{customLoafPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Flour blend select */}
                  <div className="space-y-3">
                    <label className="font-sans text-xs font-bold text-brand-charcoal block">
                      대들보 반죽용 핵심 밀가루 가루 베이스 지정하기
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'T65 프랑스식 유기농 밀가루 베이스', desc: '아이들도 좋아하는 부드러운 유산균 산미' },
                        { name: '100% 맷돌 통호밀가루 베이스', desc: '더부룩함이 없고 밀도가 가득 차 묵직해요' },
                        { name: '고대 통곡 스펠트 아인콘 비단 믹스', desc: '구수하고 달고 깊은 풀잎 아로마 향기' },
                        { name: '오가닉 야생 통밀 & 배아 듬뿍 배합', desc: '거칠지만 식이섬유가 폭발하는 누룽지 맛' },
                      ].map((fl) => (
                        <button
                          key={fl.name}
                          type="button"
                          onClick={() => setCustomLoaf(prev => ({ ...prev, flour: fl.name }))}
                          className={`p-3 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                            customLoaf.flour === fl.name
                              ? 'bg-brand-olive-dark text-brand-cream-50 border-brand-olive-dark shadow-sm font-bold'
                              : 'bg-transparent border-brand-cream-200 text-brand-charcoal/80 hover:border-brand-olive-light/50'
                          }`}
                        >
                          <span className="font-sans font-bold block">{fl.name}</span>
                          <span className="font-sans text-[9px] opacity-70 block mt-1 font-normal leading-tight">{fl.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seed & Herb inclusions */}
                  <div className="space-y-3">
                    <label className="font-sans text-xs font-bold text-brand-charcoal block">
                      빵 속에 가득 채울 건강 토핑 (+₩1,500씩 추가)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {inclusionsList.map((inc) => {
                        const isSelected = customLoaf.inclusions.includes(inc);
                        return (
                          <button
                            key={inc}
                            type="button"
                            onClick={() => handleToggleInclusion(inc)}
                            className={`p-3 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                              isSelected
                                ? 'bg-brand-gold/10 text-brand-charcoal border-brand-gold font-bold'
                                : 'bg-transparent border-brand-cream-200 text-brand-charcoal/70'
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span className="font-sans">{inc}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-brand-gold font-bold" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scoring pattern select */}
                  <div className="space-y-3">
                    <label className="font-sans text-xs font-bold text-brand-charcoal block">
                      구워질 때 벌어질 가마 칼집(쿠프) 모양 디자인
                    </label>
                    <select
                      value={customLoaf.scoring}
                      onChange={(e) => setCustomLoaf(prev => ({ ...prev, scoring: e.target.value }))}
                      className="w-full bg-brand-cream-100 border border-brand-cream-200 p-3 rounded-xl font-sans text-xs text-brand-charcoal font-bold"
                    >
                      <option value="정통 일등 쿠프 단일 칼집 🥖">정통 일등 쿠프 단일 칼집 🥖</option>
                      <option value="이삭 문양 더블 쉐브론 칼집 🌾">이삭 문양 더블 쉐브론 칼집 🌾</option>
                      <option value="나선형 소용돌이 일식 문양 🌀">나선형 소용돌이 일식 문양 🌀</option>
                      <option value="눈부신 프랑스 태양 살 모양 ☀️">눈부신 프랑스 태양 살 모양 ☀️</option>
                    </select>
                  </div>
                </div>

                {/* Panel 3: Sourdough Baker's Timeline (Live scheduling based on local time) */}
                <div className="space-y-4">
                  <h4 className="font-sans text-[11px] font-bold tracking-wider text-brand-charcoal/50 uppercase border-b border-brand-cream-200 pb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" /> 03 / ⏰ 가마 화덕 실시간 연수 발효 타임라인
                  </h4>
                  
                  <div className="border-l border-brand-cream-200 pl-4 space-y-4 ml-2">
                    {getTimeline().map((t, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-gold" />
                        <div className="space-y-0.5">
                          <span className="font-sans text-[9px] tracking-wide text-brand-gold font-bold uppercase block">
                            {t.time}
                          </span>
                          <span className="font-serif text-xs font-bold text-brand-charcoal block">
                            {t.step}
                          </span>
                          <span className="font-sans text-[10px] text-brand-charcoal/60 leading-normal font-normal">
                            {t.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout Intake Form */}
                <form id="preorder-checkout-form" onSubmit={handleSubmit} className="space-y-4 pt-6 mt-6 border-t border-brand-cream-200">
                  <h4 className="font-sans text-[11px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
                    04 / 🛵 수령 고객 연락처 및 수령 예약
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <label className="font-sans text-xs text-brand-charcoal/70 block mb-1 font-bold">
                        수령 예정 픽업 요일 및 시간대
                      </label>
                      <select
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full bg-brand-cream-100 border border-brand-cream-200 p-3 rounded-xl font-sans text-xs text-brand-charcoal font-bold"
                      >
                        <option value="내일 아침 일찍 수령 (오전 7:00 - 오전 11:00)">내일 아침 일찍 수령 (오전 7:00 - 오전 11:00)</option>
                        <option value="내일 여유로운 오후 (오후 12:00 - 오후 4:00)">내일 여유로운 오후 (오후 12:00 - 오후 4:00)</option>
                        <option value="토요일 주말 스페셜 브런치 타임 (오전 8:00 - 오후 12:00)">토요일 주말 스페셜 브런치 타임 (오전 8:00 - 오후 12:00)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs text-brand-charcoal/70 block mb-1 font-bold">
                          고객님 실명
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="김가람"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-brand-cream-100 border border-brand-cream-200 p-3 rounded-xl font-sans text-xs text-brand-charcoal font-bold focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs text-brand-charcoal/70 block mb-1 font-bold">
                          휴대폰 번호
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="010-1234-5678"
                          value={clientContact}
                          onChange={(e) => setClientContact(e.target.value)}
                          className="w-full bg-brand-cream-100 border border-brand-cream-200 p-3 rounded-xl font-sans text-xs text-brand-charcoal font-bold focus:outline-none focus:border-brand-gold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-cream-150 p-4 rounded-xl border border-brand-cream-200 flex justify-between items-center my-6">
                    <span className="font-sans text-sm text-brand-charcoal font-bold">매장 카운터 현장 결제액</span>
                    <span className="font-mono text-lg text-brand-charcoal font-black">₩{grandTotal.toLocaleString()}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-olive-dark text-brand-cream-50 font-sans text-xs tracking-widest font-bold uppercase rounded-full hover:bg-brand-gold transition-all duration-300 shadow-md cursor-pointer"
                  >
                    송이네 화덕 기록장에 내역 전송 예약하기 🐾
                  </button>
                </form>

              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
