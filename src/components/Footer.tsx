/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer id="main-app-footer" className="bg-brand-charcoal text-brand-cream-50 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 select-none pointer-events-none opacity-[0.02] font-script text-[18rem] md:text-[28rem] text-brand-gold">
        Songi
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-brand-cream-200/10 pb-16">
          
          {/* Column 1: Newsletter & brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl tracking-wide text-brand-cream-50 font-bold">
                SONGI
              </span>
              <span className="font-sans text-xs tracking-[0.2em] text-brand-gold font-bold -mt-1 uppercase">
                Songi Bake Room
              </span>
            </div>

            <p className="font-sans text-sm text-[#D3E2CE] max-w-sm leading-relaxed font-normal">
              주말 한정 가마빵 일정, 송이 아빠의 따뜻한 베이킹 설명서, 새로운 마스코트 송이의 일상 소식을 메일로 받아보세요!
            </p>

            {subscribed ? (
              <div className="p-4 bg-brand-olive-dark/40 rounded-xl border border-brand-olive-light/20 flex items-center space-x-3 text-xs">
                <Check className="w-4 h-4 text-brand-gold font-bold" />
                <span className="font-sans text-brand-cream-100 font-bold">환영합니다! 주말 가마 오븐 스케줄을 제일 먼저 발송드릴게요.🐾</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="songi.love@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#2D2925] border border-brand-cream-200/10 text-brand-cream-50 px-4 py-2.5 rounded-full text-xs font-sans flex-1 focus:outline-none focus:border-brand-gold"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-gold text-brand-charcoal rounded-full text-xs font-sans tracking-widest uppercase font-bold hover:bg-brand-cream-50 transition-colors cursor-pointer"
                >
                  동참하기
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Navigation Links 1 (L'Atelier) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="font-sans text-[11px] font-bold tracking-widest text-[#B3C8B0] uppercase">
              송이네 가게 탐방
            </h5>
            <ul className="space-y-2 font-sans text-xs md:text-sm text-brand-cream-100/70 font-normal">
              <li><a href="#hero-section" className="hover:text-brand-gold transition-colors">우리의 고마운 마음</a></li>
              <li><a href="#asymmetric-gallery" className="hover:text-brand-gold transition-colors">가마 구이 명작</a></li>
              <li><a href="#menu-explore" className="hover:text-brand-gold transition-colors">따끈한 빵들</a></li>
              <li><a href="#profiler" className="hover:text-brand-gold transition-colors">나의 빵 MBTI 분석기</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation Links 2 (Bespoke Services) */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="font-sans text-[11px] font-bold tracking-widest text-[#B3C8B0] uppercase">
              우리가 드리는 행복
            </h5>
            <ul className="space-y-2 font-sans text-xs md:text-sm text-brand-cream-100/70 font-normal">
              <li><span className="hover:text-brand-gold transition-colors slider-trigger cursor-pointer">개별 원맥 조율</span></li>
              <li><span className="hover:text-brand-gold transition-colors slider-trigger cursor-pointer">주간 골목 배송</span></li>
              <li><span className="hover:text-brand-gold transition-colors slider-trigger cursor-pointer">프라이빗 가마 수업</span></li>
              <li><span className="hover:text-brand-gold transition-colors slider-trigger cursor-pointer">소규모 제휴 케이터링</span></li>
            </ul>
          </div>

          {/* Column 4: Certifications & Heritage */}
          <div className="md:col-span-3 space-y-4 font-sans">
            <h5 className="font-sans text-[11px] font-bold tracking-widest text-[#B3C8B0] uppercase">
              엄격한 우리의 원칙
            </h5>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="border border-brand-gold/30 p-1 text-brand-gold text-[7px] font-mono rounded-sm uppercase tracking-widest flex-shrink-0 mt-0.5">
                  100%
                </div>
                <div className="text-xxs leading-snug font-normal text-brand-cream-100/60">
                  <p className="font-bold text-brand-cream-50">프랑스 천연 유기농 밀밭 원맥</p>
                  <p>이산화황 처리가 전혀 없고 맷돌로 부드럽게 숙성 성분 가공한 돌구이용 밀가루만 수입 공수합니다.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="border border-brand-gold/30 p-1 text-brand-gold text-[7px] font-mono rounded-sm uppercase tracking-widest flex-shrink-0 mt-0.5">
                  효모
                </div>
                <div className="text-xxs leading-snug font-normal text-brand-cream-100/60">
                  <p className="font-bold text-brand-cream-50">살아있는 수제 발효종 '잔루크'</p>
                  <p>우리 빵집 마스코트 유기농 효모 아가는 매일 아침 깨끗한 물 한 대접 수화로 고유 풍미를 성실히 지켜내고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Bottom Credits */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-xxs md:text-xs text-brand-cream-100/40 font-normal">
          <p className="max-w-md text-center md:text-left leading-relaxed">
            송이베이크룸 (Songi Bake Room) &copy; {new Date().getFullYear()}. 우리의 모든 건강 밀가루 빵은 손끝의 온기와 마스코트 송이의 코 지장 검수를 통해 구워집니다.
          </p>

          <div className="flex items-center gap-1.5 text-brand-gold font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-sans uppercase tracking-[0.1em] text-[10px]">매일 정성을 다해 굽는 빵집</span>
          </div>

          <p className="font-sans text-[9px] uppercase tracking-widest">
            마스코트 송이 보금자리 🐾
          </p>
        </div>

      </div>
    </footer>
  );
}
