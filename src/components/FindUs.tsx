/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ASSETS } from '../data';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function FindUs() {
  return (
    <section
      id="find-us-section"
      className="py-24 bg-brand-cream-50 px-6 md:px-12 relative overflow-hidden border-b border-brand-cream-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-20 text-center md:text-left">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-gold uppercase block mb-1 font-bold">
            매장 찾아오시는 길 🐾
          </span>
          <span className="font-script text-5xl sm:text-7xl text-brand-charcoal block">
            Songi's Place
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal tracking-wide max-w-xl font-bold mt-2">
            골목길 어귀 따사로운 해살 아래 자리한 송이의 집
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Detail Cards (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Hour Block */}
            <div className="p-6 bg-brand-cream-100 rounded-2xl border border-brand-cream-200 space-y-4">
              <div className="flex items-center gap-2 text-brand-gold">
                <Clock className="w-4 h-4" />
                <span className="font-sans text-[11px] tracking-wider uppercase font-bold">영업 시간 및 빵 나오는 타임</span>
              </div>
              <div className="space-y-3 font-sans text-xs md:text-sm text-brand-charcoal/85">
                <div className="flex justify-between border-b border-brand-cream-200/50 pb-2">
                  <span className="font-medium">화요일 &mdash; 금요일</span>
                  <span className="font-bold text-brand-charcoal text-right">07:00 AM &mdash; 07:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-brand-cream-200/50 pb-2">
                  <span className="font-medium">토요일 주말 스페셜</span>
                  <span className="font-bold text-brand-charcoal text-right">08:00 AM &mdash; 06:00 PM</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="font-medium">일요일 &mdash; 월요일</span>
                  <span className="font-bold text-brand-gold">정기 휴무 (르방 효모 밥주는 날 🐾)</span>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="p-6 bg-brand-cream-100 rounded-2xl border border-brand-cream-200 space-y-4">
              <div className="flex items-center gap-2 text-brand-gold">
                <MapPin className="w-4 h-4" />
                <span className="font-sans text-[11px] tracking-wider uppercase font-bold font-bold">인형 같은 매장 위치</span>
              </div>
              <div className="font-sans text-xs md:text-sm text-brand-charcoal/85 space-y-1">
                <p className="font-bold text-brand-charcoal text-sm">송이베이크룸 서울아뜰리에</p>
                <p>서울특별시 성동구 성수 아기자기 골목길 85길 9</p>
                <p>(뚝섬역과 성수역 사이 예쁜 빵 굽는 빨간 지붕 집)</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 bg-brand-cream-100 rounded-2xl border border-brand-cream-200 space-y-3">
              <div className="flex items-center gap-2 text-brand-gold border-b border-brand-cream-200/50 pb-2">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-sans text-xs font-bold text-brand-charcoal">단체 예약 및 주문 제휴 문의</span>
              </div>
              <p className="font-mono text-xs font-bold text-brand-charcoal/70">02-1234-5678</p>
              <p className="font-mono text-xs font-bold text-brand-gold hover:underline cursor-pointer">hello@songibakeroom.co.kr</p>
            </div>

          </div>

          {/* Column 2: Exterior Image Frame (Middle 4 or 5 Cols) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="arch-top-rounded overflow-hidden bg-brand-cream-200 aspect-[3/4] shadow-lg relative border border-brand-cream-200"
            >
              <img
                src={ASSETS.bakeryExterior}
                alt="Charming physical boutique exterior of Maison du Levain in Paris"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent p-6 text-brand-cream-50 text-center">
                <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] block mb-1 font-bold">
                  EST. 2024
                </span>
                <p className="font-sans text-xs italic text-brand-cream-200 leading-relaxed font-normal">
                  "아침 햇살이 화덕 돌담 오븐을 주황색으로 데우는 시간, 사랑스러운 구운 빵 냄새를 따라 발걸음을 옮겨 보세요."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Custom Vector Aesthetic Map (Right 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-[11px] font-bold tracking-brand text-brand-charcoal/50 uppercase border-b border-brand-cream-200 pb-2">
              송이 산책로 &amp; 가마 오븐 동네 지도
            </h4>

            {/* Beautiful minimalist styled map canvas using SVGs */}
            <div className="bg-brand-cream-100 rounded-2xl border border-brand-cream-200 aspect-square p-4 flex flex-col justify-between shadow-sm relative overflow-hidden h-[340px]">
              
              {/* Complex Vector street layers for gorgeous high fidelity styling */}
              <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                {/* River Seine */}
                <path d="M -10,35 Q 30,30 50,55 T 120,60" stroke="#8E9B82" strokeWidth="12" fill="none" opacity="0.3" />
                
                {/* Streets gridding overlay */}
                <line x1="10" y1="-10" x2="30" y2="110" stroke="#E9DFD5" strokeWidth="2" />
                <line x1="45" y1="-10" x2="55" y2="110" stroke="#E9DFD5" strokeWidth="2.5" />
                <line x1="75" y1="-10" x2="80" y2="110" stroke="#E9DFD5" strokeWidth="1.5" />
                
                <line x1="-10" y1="20" x2="110" y2="15" stroke="#E9DFD5" strokeWidth="2" />
                <line x1="-10" y1="50" x2="110" y2="60" stroke="#E9DFD5" strokeWidth="3" />
                <line x1="-10" y1="80" x2="110" y2="85" stroke="#E9DFD5" strokeWidth="1.5" />

                {/* Arched Paris Monument Indicator */}
                <circle cx="20" cy="15" r="5" fill="none" stroke="#C09247" strokeWidth="1" />
                
                {/* Maison du Levain Pin Point */}
                <g transform="translate(52, 57)">
                  <circle cx="0" cy="0" r="14" fill="#3B4433" fillOpacity="0.1" />
                  <circle cx="0" cy="0" r="8" fill="#C09247" fillOpacity="0.2" />
                  <circle cx="0" cy="0" r="3" fill="#3B4433" />
                </g>
              </svg>

              {/* Map textual annotations */}
              <div className="relative z-10 flex justify-between text-[8px] font-sans font-bold text-brand-charcoal/50 uppercase select-none">
                <span>뚝섬 한강공원 방향</span>
                <span>아뜰리에 카페 거리</span>
              </div>

              {/* Floating label for our Bakery venue */}
              <div className="absolute top-[48%] left-[22%] z-10 bg-brand-charcoal text-brand-cream-50 px-3 py-1.5 rounded-xl border border-brand-gold/30 shadow-md flex items-center space-x-1.5 animate-bounce">
                <MapPin className="w-3 h-3 text-brand-gold fill-brand-gold" />
                <span className="font-sans font-semibold text-[10px] tracking-wide">송이베이크룸 🐾</span>
              </div>

              <div className="relative z-10 flex justify-between items-end text-[8px] font-sans font-bold text-brand-charcoal/50 uppercase select-none">
                <span>뚝섬역숲길 공원</span>
                <span>지하철 2호선 성수역 3번출구</span>
              </div>
            </div>

            <p className="font-sans text-xxs text-brand-charcoal/50 text-center leading-normal">
              매장 전면 주차 자리는 협소하오니 성수동 주민공영 주차장 도보 2분 거리를 이용하시면 아주 가깝고 편리합니다.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
