/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sliders, ArrowRight, RotateCcw } from 'lucide-react';

interface TastingProfilerProps {
  onSelectItemById: (id: string) => void;
  preorderedIds: string[];
}

export default function TastingProfiler({ onSelectItemById, preorderedIds }: TastingProfilerProps) {
  const [acidity, setAcidity] = useState<number>(3); // 1 = sweet/milky, 5 = intense sour
  const [density, setDensity] = useState<number>(3); // 1 = light/airy, 5 = solid/dense
  const [crust, setCrust] = useState<number>(3); // 1 = soft/thin, 5 = blistered/thick caramelized
  const [selectedGrain, setSelectedGrain] = useState<string>('wheat'); // wheat, rye, heritage

  // Real-time recommendation algorithm in Korean
  const getRecommendation = () => {
    if (selectedGrain === 'rye' || density >= 4) {
      return {
        id: 'lh2',
        name: '송이네 한밤의 통호밀 바게트 🌙',
        desc: '식이섬유가 아주 풍부하고 씹을수록 구수해 다이어트나 건강 식사 대용으로 강력히 추천하는 든든한 통호밀빵입니다. 호밀 특유의 진한 풍미가 훌륭해요.',
        stats: { hydration: '78%', fermentation: '48시간 저온숙성', flour: '유기농 통호밀 (T170)' },
        flavorNotes: '깊은 카라멜, 구운 커피빈 향, 묵직하고 은은한 허브 밀크 향',
        pair: '훈제 연어 샌드위치, 짭조름한 가염 버터, 천연 아카시아 벌꿀'
      };
    }
    if (selectedGrain === 'heritage' || acidity <= 2) {
      return {
        id: 'lh3',
        name: '송이네 고대곡물 세사미 깜파뉴 🌾',
        desc: '아인콘, 스펠트밀 등 자연 상태 그대로의 귀한 고대 곡물을 혼합하고 골든 참깨를 듬뿍 뿌려 고소하게 구워내 자꾸 손이 가는 비단 속살 깜파뉴입니다.',
        stats: { hydration: '82%', fermentation: '24시간 저온숙성', flour: '고대 통곡밀 (스펠트, 아인콘)' },
        flavorNotes: '톡톡 터지는 깨알 고소함, 달달한 너티 향, 청명한 벌판의 풍미',
        pair: '차가운 치즈 플레이트, 카망베르 치즈, 따뜻한 밀크티'
      };
    }
    // Default / Signature match
    return {
      id: 'lh1',
      name: '송이 시그니처 깜파뉴 (사워도우) 🥖',
      desc: '송이베이크룸을 대표하는 하이라이트 깜파뉴입니다. 고사양 수분 설계 공법으로 구워 겉은 아주 바삭하고 속은 떡처럼 쫄깃촉촉한 최상의 맛을 완성했습니다.',
      stats: { hydration: '85%', fermentation: '36시간 천연발효', flour: '유기농 호밀 및 유기농 밀가루 국산 배합 T65' },
      flavorNotes: '바삭 누룽지 껍질향, 은은하고 산뜻한 기분좋은 효모 과일 산미',
      pair: '노르망디 이즈니 가염버터, 엑스트라 버진 올리브오일 & 발사믹'
    };
  };

  const match = getRecommendation();
  const isPreordered = preorderedIds.includes(match.id);

  const resetFilters = () => {
    setAcidity(3);
    setDensity(3);
    setCrust(3);
    setSelectedGrain('wheat');
  };

  return (
    <section id="profiler" className="py-24 bg-brand-cream-100 px-6 md:px-12 relative border-b border-brand-cream-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-gold uppercase block mb-2 font-bold">
            SONGI BREAD PERSONALITY MATCH 🐾
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-wide max-w-xl font-bold">
            오늘 내 입맛에 잘 맞는 빵 찾기!
          </h2>
          <p className="font-sans text-sm text-brand-charcoal/60 mt-4 max-w-lg leading-relaxed font-normal">
            아래 다이얼의 슬라이더들을 좌우로 움직여 선호하는 산미, 속살 쫄깃함, 겉면 강도를 조절해 보세요. 송이가 추천하는 완벽한 빵이 실시간으로 계산되어 나타납니다.
          </p>
        </div>

        {/* Profiler Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Panel (Left 7 Cols) */}
          <div className="lg:col-span-6 bg-brand-cream-50 rounded-3xl p-8 border border-brand-cream-200 space-y-8">
            <div className="flex justify-between items-center border-b border-brand-cream-200 pb-4">
              <span className="font-sans text-xs text-brand-charcoal font-bold tracking-wider uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4 text-brand-gold" /> 선호 식감 다이얼 조절 🔧
              </span>
              <button
                onClick={resetFilters}
                className="font-sans text-xs text-brand-charcoal/50 hover:text-brand-gold flex items-center gap-1 transition-colors cursor-pointer font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5" /> 설정 초기화하기
              </button>
            </div>

            {/* Dial 1: Acidity */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-brand-charcoal font-bold text-sm">기분 고유의 상큼한 산미</span>
                <span className="font-sans text-brand-gold text-xs font-bold">{acidity}단계 / 5선택</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={acidity}
                onChange={(e) => setAcidity(Number(e.target.value))}
                className="w-full accent-brand-gold h-1 bg-brand-cream-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-sans text-brand-charcoal/50 font-medium">
                <span>달콤 고소함 (초보자용 카스텔라파)</span>
                <span>새콤 산뜻한 매력 (천연 프랑스 사워파)</span>
              </div>
            </div>

            {/* Dial 2: Crumb Density */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-brand-charcoal font-bold text-sm">안쪽 속살 가벼움과 쫀득한 밀도</span>
                <span className="font-sans text-brand-gold text-xs font-bold">{density}단계 / 5선택</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full accent-brand-gold h-1 bg-brand-cream-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-sans text-brand-charcoal/50 font-medium">
                <span>구멍 슝슝 가볍고 크리미한 부드러움</span>
                <span>속이 아주 꽉 차 쫀득하고 촉촉 든든함</span>
              </div>
            </div>

            {/* Dial 3: Crust Thickness */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-brand-charcoal font-bold text-sm">바깥쪽 껍질 부풀어오름과 바삭함</span>
                <span className="font-sans text-brand-gold text-xs font-bold">{crust}단계 / 5선택</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={crust}
                onChange={(e) => setCrust(Number(e.target.value))}
                className="w-full accent-brand-gold h-1 bg-brand-cream-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-sans text-brand-charcoal/50 font-medium">
                <span>아기 살결처럼 보들보들 부드러움</span>
                <span>가마솥에 바삭하게 지진 누룽지 느낌</span>
              </div>
            </div>

            {/* Dial 4: Grain Choice */}
            <div className="space-y-3 pt-4 border-t border-brand-cream-200/60">
              <span className="font-sans text-xs text-brand-charcoal font-bold block">
                ⭐ 가장 선호하는 메인 곡물가루
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'wheat', label: '유기농 백밀가루', desc: '폭신폭신 대중적' },
                  { key: 'rye', label: '유기농 호밀가루', desc: '식이섬유와 밀도감' },
                  { key: 'heritage', label: '유기농 고대곡물', desc: '영양보충용 스펠트' }
                ].map((gr) => (
                  <button
                    key={gr.key}
                    onClick={() => setSelectedGrain(gr.key)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedGrain === gr.key
                        ? 'bg-brand-olive-dark text-brand-cream-50 border-brand-olive-dark shadow-sm'
                        : 'bg-transparent border-brand-cream-200 text-brand-charcoal hover:border-brand-olive-light/50'
                    }`}
                  >
                    <span className="font-sans text-xs font-bold block">{gr.label}</span>
                    <span className="font-sans text-[9px] opacity-70 block mt-0.5 font-normal">{gr.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Display (Right 5 Cols with elegant animation) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-olive-dark text-brand-cream-50 rounded-3xl p-8 relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[460px]"
              >
                {/* Visual Accent */}
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-brand-gold/10 pointer-events-none select-none" />

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-brand-cream-200/10 pb-4">
                    <span className="font-sans text-[9px] tracking-widest text-[#B3C8B0] uppercase flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3 h-3 text-brand-gold" /> 송이의 매칭 결과봇 🤖
                    </span>
                    <span className="font-sans text-[9px] tracking-widest text-[#B3C8B0] uppercase font-bold">
                      NO. #{match.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream-50 tracking-tight font-extrabold leading-tight">
                      {match.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#D3E2CE] leading-relaxed font-normal">
                      {match.desc}
                    </p>
                  </div>

                  {/* Loaf Technical specs */}
                  <div className="grid grid-cols-3 gap-3 border-t border-b border-brand-cream-200/10 py-4 font-sans text-xs">
                    <div className="space-y-0.5">
                      <span className="font-sans text-[9px] text-[#B3C8B0] uppercase block font-bold">수분 가득함</span>
                      <span className="text-xs sm:text-sm font-bold text-brand-gold">{match.stats.hydration}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-sans text-[9px] text-[#B3C8B0] uppercase block font-bold">정성 발효</span>
                      <span className="text-xs sm:text-sm text-brand-cream-50 font-bold">{match.stats.fermentation}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-sans text-[9px] text-[#B3C8B0] uppercase block font-bold">사용한 곡밀</span>
                      <span className="text-xs sm:text-sm text-brand-cream-50 font-bold truncate block">{match.stats.flour}</span>
                    </div>
                  </div>

                  {/* Flavor profiling and wine list pairing */}
                  <div className="space-y-3 font-sans">
                    <div>
                      <span className="font-sans text-[9px] text-[#B3C8B0] uppercase block font-bold">😋 입안의 고유 풍미</span>
                      <span className="text-xs text-brand-cream-100 font-normal">{match.flavorNotes}</span>
                    </div>
                    <div>
                      <span className="font-sans text-[9px] text-[#B3C8B0] uppercase block font-bold">🍯 추천 찰떡 베스트 조합</span>
                      <span className="text-xs text-brand-gold font-bold">{match.pair}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id="btn-profiler-preorder"
                    onClick={() => onSelectItemById(match.id)}
                    className={`w-full py-3.5 rounded-full text-xs font-sans tracking-wide font-bold uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      isPreordered
                        ? 'bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-charcoal'
                        : 'bg-brand-cream-50 text-brand-charcoal hover:bg-brand-gold'
                    }`}
                  >
                    <span>{isPreordered ? '📋 예약 바구니에서 제거하기' : '🧺 이 빵을 우리 집 식탁으로 예약하기'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
