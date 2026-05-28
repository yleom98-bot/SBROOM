/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { ASSETS } from '../data';

interface HeroProps {
  onOpenOrder: () => void;
}

export default function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-brand-cream-50 flex flex-col justify-center items-center px-6 pt-36 pb-16 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(242, 239, 232, 0.7) 0%, transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(166, 139, 103, 0.08) 0%, transparent 50%)
        `
      }}
    >
      {/* Editorial Decorative Background Element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] font-script text-[12rem] md:text-[22rem] text-brand-olive-dark">
        Songi
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Adorable Mascot Hero Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 flex flex-col items-center"
        >
          {/* Paw print background decor */}
          <div className="absolute -top-6 -left-6 text-xl opacity-30 animate-pulse">🐾</div>
          <div className="absolute -bottom-2 -right-6 text-xl opacity-35 animate-bounce" style={{ animationDelay: '1s' }}>🥐</div>
          
          {/* Songi Waving Avatar with Cute Border */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-white p-2 border-2 border-brand-gold/30 shadow-lg flex items-center justify-center overflow-hidden">
            <img 
              src={ASSETS.songiDog} 
              alt="하얗고 귀여운 강아지 송이 베이커리 마스코트" 
              className="w-full h-full object-contain rounded-full referrerPolicy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Adorable Sweet Chat Bubble from Songi */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -top-12 left-24 sm:left-28 bg-brand-charcoal text-brand-cream-50 px-3.5 py-1.5 rounded-2xl rounded-bl-none text-[10px] md:text-xs font-sans tracking-wide font-medium shadow-md whitespace-nowrap flex items-center gap-1.5"
          >
            <span>어서오세요! 왈! 🐶🐾</span>
          </motion.div>
        </motion.div>

        {/* Calligraphic French/Korean script headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl md:text-6xl text-brand-charcoal leading-[1.25] tracking-tight mb-2">
            갓 구운 <span className="text-brand-gold underline decoration-dashed decoration-brand-gold/40 underline-offset-8">소금빵</span>과 행복이 숨 쉬는 곳
          </h1>
          <p className="font-script text-3xl sm:text-5xl md:text-6xl text-brand-olive-dark leading-none block mt-1">
            Songi Bake Room
          </p>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-[1px] bg-brand-gold my-6"
        />

        {/* Welcome subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif text-lg sm:text-2xl text-brand-charcoal/90 tracking-wide max-w-2xl font-medium mb-4 leading-relaxed"
        >
          송이베이크룸에 오신 것을 환영합니다! ✨
        </motion.p>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans text-xs sm:text-sm text-brand-charcoal/70 tracking-wide max-w-xl mb-10 leading-relaxed font-normal"
        >
          귀여운 우리 집 강아지 <b>송이</b>처럼 하얗고 퐁신퐁신한 빵의 향기가 널리 퍼지는 작은 가마입니다. 유기농 밀가루와 전통 천연 효모종을 사용하여 아이들도 안심하고 맛있게 먹을 수 있는 소화 잘 되는 건강 빵을 고집합니다. 🥖🐾
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            id="btn-hero-order"
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-olive-dark hover:bg-brand-gold text-brand-cream-50 rounded-full text-xs font-sans tracking-widest font-bold uppercase transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-1.5 group"
          >
            <span>송이네 빵 예약하기</span>
            <span className="group-hover:translate-x-1 transition-transform">🐾</span>
          </button>
          <a
            href="#asymmetric-gallery"
            className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-brand-charcoal/30 text-xs font-sans tracking-widest font-bold uppercase text-brand-charcoal hover:border-brand-charcoal hover:bg-brand-cream-100 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>이곳저곳 둘러보기</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scrolling guide */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1.5 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-charcoal pl-1">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-charcoal to-transparent animate-pulse" />
      </div>
    </section>
  );
}
