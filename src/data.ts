/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory } from './types';

export const ASSETS = {
  sourdoughBoule: new URL('./assets/images/sourdough_boule_1779929550958.png', import.meta.url).href,
  masterBaker: new URL('./assets/images/master_baker_1779929569724.png', import.meta.url).href,
  stoneOven: new URL('./assets/images/stone_oven_1779929587161.png', import.meta.url).href,
  signaturePastry: new URL('./assets/images/signature_pastry_1779929604039.png', import.meta.url).href,
  bakeryExterior: new URL('./assets/images/bakery_exterior_1779929621109.png', import.meta.url).href,
  songiDog: new URL('./assets/images/songi_dog_1779930486446.png', import.meta.url).href,
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'morning-pastries',
    title: '송이의 디저트 & 페이스트리 🥐',
    description: '매일 아침 유기농 천연 유제품과 정성 가득한 반죽으로 갓 구워낸 달콤 바삭 고소한 아이들이에요!',
    items: [
      {
        id: 'p1',
        name: '송이 최애 소금빵 (시오빵) 🧂',
        description: '국산 유기농 밀가루와 뉴질랜드산 앵커버터를 아낌없이 넣어, 겉은 바삭하고 속은 뻥 뚫려 버터 동굴이 촉촉하게 살아있는 송이 최애 빵!',
        price: '₩3,500',
        flours: ['유기농 강력분 T55', '말돈 소금'],
        tags: ['버터 동굴', '인기 폭발', '단짠고소'],
        image: ASSETS.signaturePastry,
      },
      {
        id: 'p2',
        name: '동글동글 결이 고운 크루아상',
        description: '3일간 정성스럽게 저온 숙성하고 밀어낸 27겹의 바삭바삭한 페이스트리. 한 입 베어물면 버터 향이 입 안 가득 사르르!',
        price: '₩4,500',
        flours: ['프랑스산 밀가루', '엘르앤비르 버터'],
        tags: ['바삭바삭', '겹겹의 마법'],
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'p3',
        name: '초코 가득 뺑 오 쇼콜라 🍫',
        description: '겹겹이 바삭한 페이스트리 시트 속에 최고급 발로나 다크 초콜릿 스틱을 두 줄 쏙 발라 구워낸 달콤 쌉싸름한 힐링 브레드.',
        price: '₩4,800',
        flours: ['유기농 유기밀', '발로나 초콜릿 70%'],
        tags: ['초코초코', '달콤 충전'],
        image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'p4',
        name: '솔솔 해피 시나몬 롤 🌀',
        description: '향긋한 유기농 계피 가루와 메이플 시럽을 달달하게 채운 소용돌이 식감에 고소한 피칸 분태를 올린 영양 백점 간식.',
        price: '₩5,200',
        flours: ['유기농 우리밀', '시나몬', '피칸'],
        tags: ['시나몬향', '달달구리'],
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
      }
    ]
  },
  {
    id: 'lunch-panini',
    title: '송이 방앗간 샌드위치 & 파니니 🥪',
    description: '구수한 깜파뉴와 바게트 사이에 엄선된 치즈와 수제 햄을 속을 채워 만든 든든하고 신선한 한 끼 직송 든든 메뉴!',
    items: [
      {
        id: 'l1',
        name: '잠봉뵈르 프렌치 런치 바게트',
        description: '하루 동안 숙성해 겉바속촉한 소형 바게트에 최고급 수제 잠봉 햄과 도톰한 엘르앤비르 고메버터, 그리고 수제 무화과 잼의 만남!',
        price: '₩8,900',
        flours: ['맷돌 호밀가루', '전통 밀 T85'],
        tags: ['시그니처', '단짠의 정석'],
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'l2',
        name: '구운 버섯 & 트러플 크림 파니니',
        description: '버터를 발라 앞뒤로 노릇하게 구운 식빵에 볶은 모둠 버섯, 향긋한 고르고졸라 치즈와 블랙 트러플 꿀을 끼얹어 구워낸 어른 입맛 파니니.',
        price: '₩11,500',
        flours: ['천연 발효 우리밀 블렌드'],
        tags: ['트러플향', '따뜻하게 쭈욱'],
        image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'l3',
        name: '허니 고구마 듬뿍 캄파뉴 샌드위치',
        description: '꿀고구마 패티와 쫀득하고 달달한 까망베르 치즈, 로즈마리 허브를 아낌없이 올려 오븐에 따뜻하게 구운 귀여운 단짠 깜파뉴.',
        price: '₩10,500',
        flours: ['아인콘 고대밀', '치즈', '고구마'],
        tags: ['구수한 맛', '꿀고구마'],
        image: 'https://images.unsplash.com/photo-1563865436874-9aef32095ffd?auto=format&fit=crop&q=80&w=400',
      }
    ]
  },
  {
    id: 'take-home',
    title: '매일 행복한 건강 식사빵 🍞',
    description: '송이베이크룸의 자부심! 수분율을 가득 높여 소화가 정말 잘 되고 속이 편안한 천연발효 사워도우와 식사용 웰빙 빵들입니다.',
    items: [
      {
        id: 'lh1',
        name: '송이네 시그니처 시골 사워도우',
        description: '송이네 대표 주자! 36시간 천연 야생 효모로 저온 숙성해 겉은 돌가마에 구운 것처럼 누룽지처럼 바삭구수하고, 속은 기공이 살아있어 쫀득해요.',
        price: '₩8,000',
        hydration: '85%',
        flours: ['우리 통밀가루 T65', '천연 효모종'],
        fermentationTime: '36시간 저온 발효',
        tags: ['비건 식사빵', '소화 만점', '겉바속촉'],
        image: ASSETS.sourdoughBoule,
      },
      {
        id: 'lh2',
        name: '공주 알밤 가득 시골 캄파뉴 🌰',
        description: '달달한 공주 알밤을 통째로 듬뿍 집어넣고 무화과와 해바라기씨, 아마씨를 가득 버무려 고소함과 달콤함이 더블로 팡팡 터지는 호밀빵.',
        price: '₩9,000',
        hydration: '78%',
        flours: ['호밀 밀가루 (T170)', '달콤 통알밤'],
        fermentationTime: '48시간 저온 발효',
        tags: ['알밤가득', '할매입맛 치트키'],
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'lh3',
        name: '송이처럼 뽀얗고 촉촉한 생식빵 🐾',
        description: '야생 천연 효모와 유기농 우유, 최고급 고메버터로 반죽해 송이 엉덩이처럼 뽀송뽀송하고 부드러워 결대로 쭉쭉 찢어먹는 무가당 마법 식빵.',
        price: '₩6,500',
        hydration: '82%',
        flours: ['해피밀 밀가루', '유기농 저지방 우유'],
        fermentationTime: '24시간 숙성',
        tags: ['인생 식빵', '아기들의 원픽'],
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
      }
    ]
  },
  {
    id: 'coffee-menu',
    title: '동네 사랑방 향긋한 커피 & 스윗 드링크 ☕️',
    description: '빵과 함께 먹으면 행복감이 두 배가 되는, 로스팅 챔피언 선배님의 최고급 유기농 원두 에스프레소와 송이베이크룸 한정 음료들이에요.',
    items: [
      {
        id: 'c1',
        name: '송이 크림 아인슈페너 (라떼) 🐶',
        description: '달달하고 풍부하고 쫀쫀한 수제 생크림 위에 초콜릿 가루로 귀여운 강아지 송이 얼굴 스텐실 아트를 톡 올려 드리는 송이베이크룸 시그니처 크림라떼!',
        price: '₩6,000',
        tags: ['인생라떼', '스윗 생크림', '시그니처'],
        image: 'https://images.unsplash.com/photo-1510972527409-cef190317417?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'c2',
        name: '몽글몽글 플랫 바닐라',
        description: '가볍지 않은 묵직한 마다가스카르 천연 바닐라 빈을 농축해 바리스타가 정성들여 내린 부드러운 유기농 우유 우유 거품 플랫 화이트.',
        price: '₩5,000',
        tags: ['바닐라빈 콕콕', '실키한 거품'],
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 'c3',
        name: '제주 청귤 톡톡 선라이즈 에이드 🍊',
        description: '상큼 달달한 유기농 제주 청귤 청을 천연 가야 탄산수와 블렌딩하여 이슬비처럼 상쾌함을 오감으로 전하는 무알콜 스파클링 에이드.',
        price: '₩5,500',
        tags: ['청량함 최고', '비타민 충전'],
        image: 'https://images.unsplash.com/photo-1461023722440-77f16f2d1264?auto=format&fit=crop&q=80&w=400',
      }
    ]
  }
];
