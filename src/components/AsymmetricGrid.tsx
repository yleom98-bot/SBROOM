/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ASSETS } from '../data';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface AsymmetricGridProps {
  onOpenOrder: () => void;
  onOpenProfiler: () => void;
}

export default function AsymmetricGrid({ onOpenOrder, onOpenProfiler }: AsymmetricGridProps) {
  return (
    <section
      id="asymmetric-gallery"
      className="py-24 bg-brand-cream-100 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-1/3 right-10 pointer-events-none select-none opacity-[0.015] font-display text-[15rem] text-brand-gold uppercase tracking-[0.1em]">
        Tradition
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tiered Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-cream-200 pb-10">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-brand-gold uppercase block mb-2">
              SONGI BAKE ROOM LOOKBOOK 🐾
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-wide max-w-xl font-bold">
              우리는 마음을 담아 빵을 빚고, 그 빵은 일상의 소소한 행복을 빚어냅니다.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-serif italic text-sm text-brand-charcoal/70 leading-relaxed mb-4">
              "천연 발효빵의 길은 눈에 보이지 않는 미생물의 호흡에 귀를 기울이고, 계절과 일기예보의 고유한 리듬을 온몸으로 존중하는 법을 배우는 정직의 여정입니다."
            </p>
            <div className="text-right">
              <span className="font-mono text-[10px] tracking-widest text-brand-charcoal/50 uppercase">
                &mdash; 헤드베이커 이종훈 셰프 (송이 아빠 👨‍🍳)
              </span>
            </div>
          </div>
        </div>

        {/* Elegant Multi-Tiered Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1 (Left 7 Columns): Large artistic features */}
          <div className="md:col-span-7 space-y-20">
            
            {/* Round/Arched Photo 1: Heavily floured sourdough boule */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="arch-top-rounded overflow-hidden bg-brand-cream-200 aspect-[4/5] shadow-lg relative">
                {/* Visual Label (like the handbags in design) */}
                <div className="absolute top-6 left-6 z-10 bg-brand-cream-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-cream-200/50">
                  <span className="font-mono text-[9px] tracking-widest text-brand-charcoal uppercase">
                    No. 01 / 송이 대표 호밀 사워도우 🌾
                  </span>
                </div>
                
                <img
                  src={ASSETS.sourdoughBoule}
                  alt="밀가루 솔솔 부린 건강 천연 발효 통밀빵"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Beautiful descriptive overlay card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/40 to-transparent p-8 md:p-12 text-brand-cream-50 flex flex-col justify-end">
                  <span className="font-script text-3xl text-brand-gold mb-1">Naturally Leavened</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide mb-2">36시간의 마법, 시골 깜파뉴 사워도우</h3>
                  <p className="font-serif italic text-xs md:text-sm text-brand-cream-100/80 max-w-md leading-relaxed">
                    속이 더부룩하지 않고 소화가 정말 뛰어난 비결! 돌가마 은은한 열기로 오랫동안 고온에 구워 구수한 껍질과 촉촉하고 쫀득한 속살의 완벽한 조화입니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Block 1 (Combo): 'French Tradition' in script + Oven */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
              className="bg-brand-cream-50 p-8 md:p-12 rounded-3xl border border-brand-cream-200 shadow-sm"
              id="french-tradition-block"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-cream-100 rounded-full border border-brand-cream-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-olive-light" />
                    <span className="font-mono text-[9px] tracking-widest text-brand-charcoal uppercase font-bold">건강 100% 약속</span>
                  </div>
                  
                  <div>
                    <span className="font-script text-4xl text-brand-gold block leading-none">
                      Bake With Love
                    </span>
                    <h3 className="font-serif text-2xl text-brand-charcoal tracking-wide mt-2 font-bold leading-tight">
                      유기농 무가당 천연 발효식빵
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-brand-charcoal/80 leading-relaxed">
                    상업용 살균 이스트나 화학 보존제, 유화제는 절대 넣지 않아요. 귀여운 강아지 송이네 가족들이 매일 먹는 빵이니까요! 오직 유기농 원맥, 말돈 천연 소금, 정수된 깨끗한 물과 천연 배양 효모종 Jean-Luc(잔루크)로만 채웁니다. 🌱
                  </p>

                  <div className="pt-2">
                    <button
                      id="btn-tradition-profiler"
                      onClick={onOpenProfiler}
                      className="group flex items-center space-x-2 text-xs font-sans tracking-wide font-bold uppercase text-brand-charcoal hover:text-brand-gold transition-colors cursor-pointer"
                    >
                      <span>나에게 꼭 맞는 시그니처 빵 진단하기</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="arch-asymmetric-1 overflow-hidden bg-brand-cream-100 aspect-square shadow-md">
                  <img
                    src={ASSETS.stoneOven}
                    alt="유럽식 주물 화덕 가마 오븐"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Column 2 (Right 5 Columns): Unique asymmetrical layouts */}
          <div className="md:col-span-5 space-y-20 md:mt-16">
            
            {/* Round/Arched Photo 2: Baker Chef Pierre */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <div className="arch-pill overflow-hidden bg-brand-cream-200 aspect-[3/4] shadow-lg relative">
                {/* Branding flag */}
                <div className="absolute top-10 right-4 -rotate-90 origin-top-right translate-y-4 z-10 bg-brand-gold text-brand-cream-50 px-3 py-1 rounded-sm text-[8px] tracking-[0.25em] font-mono uppercase font-bold">
                  BAKERY PARTNER 🥐
                </div>

                <img
                  src={ASSETS.masterBaker}
                  alt="바게트를 들고 웃고 있는 헤드 베이커"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Captivating overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent p-6 text-brand-cream-50 text-center">
                  <h4 className="font-serif text-lg tracking-wide font-bold">이종훈 대표 파티시에</h4>
                  <p className="font-sans italic text-[11px] text-brand-cream-200 mt-1">
                    "매일 새벽 주방을 가득 채우는 갓 구운 고소한 빵 냄새에 강아지 송이가 먼저 반응해 꼬리를 흔든답니다."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Block 2 (Text, echoing image_0.png with signature items) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2 }}
              id="signature-block"
              className="space-y-10"
            >
              {/* Header */}
              <div>
                <span className="font-mono text-xs tracking-widest text-brand-olive-light uppercase block mb-1">
                  BEST SELLER
                </span>
                <span className="font-serif text-3xl font-bold text-brand-charcoal block">
                  송이베이크룸 시그니처 ⭐
                </span>
              </div>

              {/* Croissant Layer */}
              <div className="space-y-4 border-b border-brand-cream-200 pb-6 group">
                <h4 className="font-serif text-lg text-brand-charcoal tracking-wide flex justify-between items-center group-hover:text-brand-gold transition-colors duration-300">
                  <span className="font-bold">송이 최애 치오빵 (소금 크루아상)</span>
                  <span className="font-mono text-sm text-brand-gold font-bold">₩3,500</span>
                </h4>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                  노르망디 풀 먹인 앵커 버터 동굴이 빵 깊숙이 촉촉히 스며들어 하단은 누룽지처럼 바삭바삭하고 상단은 말돈 천연 소금으로 완성한 최고의 찰떡 단짠 궁합!
                </p>
              </div>

              {/* Sourdough Slices Layer */}
              <div className="space-y-4 border-b border-brand-cream-200 pb-6 group">
                <h4 className="font-serif text-lg text-brand-charcoal tracking-wide flex justify-between items-center group-hover:text-brand-gold transition-colors duration-300">
                  <span className="font-bold">달콤 밤깜파뉴 조각 & 천연 벌꿀 크림</span>
                  <span className="font-mono text-sm text-brand-gold font-bold">₩7,500</span>
                </h4>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  구수한 호밀 깜파뉴 한 조각에 달달 촉촉한 가마솥 밤조림을 아낌없이 가득 채워, 수제 벌꿀 생크림 가득 무화과를 얹어 특별한 디저트처럼 즐기는 접시 메뉴입니다.
                </p>
              </div>

              {/* Card visual matching image_0 */}
              <div className="arch-asymmetric-2 overflow-hidden aspect-[4/3] bg-brand-cream-200 shadow-md relative">
                <img
                  src={ASSETS.signaturePastry}
                  alt="맛있는 크루아상 디저트 정밀 샷"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Embedded Interactive Tease */}
              <div className="bg-brand-olive-dark text-brand-cream-50 p-6 rounded-2xl flex items-center justify-between shadow-md">
                <div className="max-w-[75%]">
                  <h5 className="font-serif text-sm tracking-wide mb-1 font-bold">진짜 맛있는 나만의 최애 빵 찾기!</h5>
                  <p className="font-sans text-[11px] text-brand-cream-100/80 leading-snug">
                    송이와 이종훈 베이커가 직접 고안해 만든 귀여운 빵 성격 분석(MBT-Bread) 테스트로 인생 빵을 바로 추천받아 보세요!
                  </p>
                </div>
                <button
                  id="btn-grid-profiler-cta"
                  onClick={onOpenProfiler}
                  className="p-3 bg-brand-gold hover:bg-white text-brand-charcoal rounded-full transition-all cursor-pointer shadow flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '4s' }}
                >
                  <Sparkles className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
