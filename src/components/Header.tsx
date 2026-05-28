/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShoppingBag, Navigation, Sparkles } from 'lucide-react';
import { ASSETS } from '../data';

interface HeaderProps {
  onOpenOrder: () => void;
  onOpenProfiler: () => void;
}

export default function Header({ onOpenOrder, onOpenProfiler }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-cream-50/90 backdrop-blur-md py-3 border-b border-brand-cream-200/50 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Editorial Typography Links in Korean */}
        <nav className="hidden md:flex space-x-6 text-xs font-sans font-medium tracking-wide text-brand-charcoal/80">
          <a href="#asymmetric-gallery" className="hover:text-brand-gold transition-colors duration-300">
            🌳 카페 투어
          </a>
          <a href="#signature" className="hover:text-brand-gold transition-colors duration-300">
            ⭐ 베스트 빵
          </a>
          <a href="#menu-explore" className="hover:text-brand-gold transition-colors duration-300">
            🥐 전체 메뉴
          </a>
        </nav>

        {/* Center Logo: Fine high-fashion look with custom cute mascot */}
        <div className="flex items-center space-x-2">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-brand-gold/20 blur-sm group-hover:bg-brand-gold/30 transition duration-300"></div>
            <img 
              src={ASSETS.songiDog} 
              alt="송이 귀여운 강아지" 
              className="relative w-10 h-10 rounded-full border border-brand-gold/30 bg-white p-0.5 shadow-sm transform group-hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" 
              style={{ animationDuration: '3s' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-base md:text-lg tracking-tight text-brand-charcoal">
              송이베이크룸
            </span>
            <span className="text-[9px] tracking-widest text-brand-gold font-sans font-bold uppercase mt-0.5">
              SONGI BAKE ROOM 🐾
            </span>
          </div>
        </div>

        {/* Right Side: Primary Actions */}
        <div className="flex items-center space-x-3 text-xs font-sans tracking-wide">
          <button
            id="btn-nav-profiler"
            onClick={onOpenProfiler}
            className="hidden sm:flex items-center space-x-1 text-brand-olive-dark hover:text-brand-gold transition-colors duration-300 cursor-pointer font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>맞춤 빵 고르기</span>
          </button>

          <button
            id="btn-nav-find-us"
            onClick={() => document.getElementById('find-us-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:flex items-center space-x-1 hover:text-brand-gold transition-colors duration-300 cursor-pointer font-medium"
          >
            <Navigation className="w-3 h-3" />
            <span>찾아오시는 길</span>
          </button>

          <button
            id="btn-header-order"
            onClick={onOpenOrder}
            className="relative px-4 py-2 bg-brand-olive-dark hover:bg-brand-gold text-brand-cream-50 rounded-full flex items-center space-x-1.5 transition-all duration-300 shadow-sm cursor-pointer font-bold shrink-0 text-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>송이네 주문예약</span>
          </button>
        </div>
      </div>
    </header>
  );
}
