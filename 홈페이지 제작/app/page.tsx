"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  PhoneCall,
  Droplet,
  Thermometer,
  ShieldCheck,
  HeartHandshake,
  Users,
  Tv,
  CheckCircle2,
  CheckCircle,
  Check,
  MapPin,
  Star,
  Sparkles,
  LifeBuoy,
  Award,
  UsersRound,
  ShieldAlert,
  Shield,
  ThermometerSun,
} from "lucide-react";

interface Branch {
  name: string;
  region: string;
  address: string;
  tel: string;
  capacity: string;
  features: string;
}

const BRANCHES: Branch[] = [
  {
    name: "빛가람점",
    region: "나주 혁신도시",
    address: "전남광주통합특별시 나주시 빛가람로 838 주4동",
    tel: "0507-1382-7375",
    capacity: "1:5 소수정예 & 생존수영",
    features: "최신 해수풀 정화 설비 & 온수",
  },
  {
    name: "봉선점",
    region: "광주 남구 봉선동",
    address: "전남광주통합특별시 남구 봉선로52번길 14 (주월동)",
    tel: "010-6747-9764",
    capacity: "1:4 밀착 프리미엄 수업",
    features: "학원 연계 안심 셔틀 운행",
  },
  {
    name: "양산점",
    region: "광주 북구 양산동",
    address: "전남광주통합특별시 북구 연양로67번길 21",
    tel: "062-572-9764",
    capacity: "1:5 소수정예 & 생존수영",
    features: "어린이 전용 안전 수심 & 셔틀 운행",
  },
  {
    name: "각화점",
    region: "광주 북구 각화동",
    address: "전남광주통합특별시 북구 동문대로248번길 48",
    tel: "0507-1367-9764",
    capacity: "1:5 소수정예 & 생존수영",
    features: "32℃ 사계절 온수 해수풀 & 올케어",
  },
  {
    name: "효천점",
    region: "광주 남구 효천지구",
    address: "전남광주통합특별시 남구 임암길 173",
    tel: "0507-1380-0569",
    capacity: "1:5 소수정예 & 생존수영",
    features: "학부모 힐링 라운지 & 맞춤 레인",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"kids" | "adults" | "family">("kids");
  const [selectedMobileTel, setSelectedMobileTel] = useState("tel:0507-1382-7375");
  const [highlightedBranch, setHighlightedBranch] = useState<string | null>(null);

  const scrollToBranch = (branchName: string) => {
    const el = document.getElementById(`branch-${branchName}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlightedBranch(branchName);
      setTimeout(() => setHighlightedBranch(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-urban-pink selection:text-white pb-20 md:pb-0">
      {/* 1. TOP NOTIFICATION BAR */}
      <aside aria-label="이벤트 공지" className="bg-urban-dark text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-urban-pink text-white animate-pulse">
              HOT
            </span>
            <span className="font-medium text-slate-300">
              대회장 화제의 '블랙&핑크' 어반수영장 5개 지점 수강생 상시 모집 중!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>
              <Droplet className="w-3.5 h-3.5 inline text-cyan-400 mr-1" />
              락스 0% 친환경 해수풀
            </span>
            <span>
              <Thermometer className="w-3.5 h-3.5 inline text-urban-pink mr-1" />
              32~33℃ 사계절 온수풀
            </span>
          </div>
        </div>
      </aside>

      {/* 2. NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="어반수영장 공식 로고"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-urban-black tracking-tight">어반수영장</span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-urban-black text-urban-pink border border-urban-pink/30">
                  URBAN
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">친환경 해수풀 프리미엄 패밀리 수영장</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 font-medium text-slate-700 text-sm">
            <a href="#about-usp" className="hover:text-urban-pink transition-colors">해수풀 특징</a>
            <a href="#broadcast-video" className="hover:text-urban-pink transition-colors flex items-center gap-1">
              <span>방송 검증</span>
              <span className="w-2 h-2 rounded-full bg-urban-pink animate-ping" />
            </a>
            <a href="#survival-swimming" className="hover:text-urban-pink transition-colors font-bold text-slate-900 flex items-center gap-1">
              <LifeBuoy className="w-4 h-4 text-urban-pink" />
              <span>생존수영 전문</span>
            </a>
            <a href="#programs" className="hover:text-urban-pink transition-colors">프로그램</a>
            <a href="#branches" className="hover:text-urban-pink transition-colors">5개 지점 안내</a>
            <a href="#reviews" className="hover:text-urban-pink transition-colors">생생 후기</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-urban-black hover:bg-slate-900 border border-urban-pink/50 hover:border-urban-pink transition-all shadow-md group"
            >
              <PhoneCall className="w-4 h-4 text-urban-pink group-hover:animate-bounce" />
              <span>지점 직통 상담</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-urban-black text-white border border-urban-pink/40 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-urban-pink animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                대회장을 사로잡은 블랙&핑크 시그니처 🏊‍♂️
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">
              락스 냄새 없는 맑은 물,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-urban-black via-slate-800 to-urban-pink">
                온 가족이 안심하는 수영장
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed">
              독한 화학 락스는 단 1g도 쓰지 않습니다.<br className="hidden sm:inline" />
              천연 소금 전기분해 <strong>100% 친환경 해수풀</strong>에서 아이 피부부터 어른 건강까지 완벽하게 지켜드립니다.
            </p>

            <div className="pt-2 pb-1">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                가까운 지점을 선택하고 바로 확인하세요
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {BRANCHES.map((b) => (
                  <button
                    key={b.name}
                    onClick={() => scrollToBranch(b.name)}
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-urban-pink hover:text-urban-pink text-xs sm:text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    📍 {b.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#survival-swimming"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-white bg-urban-pink hover:bg-urban-pinkHover shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5"
              >
                <LifeBuoy className="w-5 h-5" />
                <span>생존수영 전문 교육 확인하기</span>
              </a>
              <a
                href="#branches"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 shadow-sm transition-all"
              >
                <MapPin className="w-5 h-5 text-urban-pink" />
                <span>5개 지점 상세주소 & 직통번호</span>
              </a>
            </div>

            {/* Polaroid Photo Gallery */}
            <div className="pt-6 pb-2 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-2">
                <div className="bg-white p-2 pb-4 sm:p-2.5 sm:pb-5 rounded-lg shadow-lg border border-slate-200/80 -rotate-3 hover:rotate-0 hover:scale-110 hover:z-20 transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square rounded overflow-hidden bg-slate-100">
                    <img
                      src="/images/hero-polaroid-1.jpg"
                      alt="맑은 해수풀 수중 미소"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-center font-bold text-[10px] sm:text-xs text-slate-700 mt-2">눈 안 시린 맑은 물 🫧</p>
                </div>

                <div className="bg-white p-2 pb-4 sm:p-2.5 sm:pb-5 rounded-lg shadow-lg border border-slate-200/80 rotate-2 hover:rotate-0 hover:scale-110 hover:z-20 transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square rounded overflow-hidden bg-slate-100">
                    <img
                      src="/images/hero-polaroid-2.jpg"
                      alt="친구와 함께하는 즐거운 수영"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-center font-bold text-[10px] sm:text-xs text-slate-700 mt-2">친구랑 신나게! ✌️</p>
                </div>

                <div className="bg-white p-2 pb-4 sm:p-2.5 sm:pb-5 rounded-lg shadow-lg border border-slate-200/80 -rotate-2 hover:rotate-0 hover:scale-110 hover:z-20 transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square rounded overflow-hidden bg-slate-100">
                    <img
                      src="/images/hero-polaroid-3.jpg"
                      alt="활짝 웃는 어반 아이들"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-center font-bold text-[10px] sm:text-xs text-slate-700 mt-2">어반 패밀리 스마일 😊</p>
                </div>

                <div className="bg-white p-2 pb-4 sm:p-2.5 sm:pb-5 rounded-lg shadow-lg border border-slate-200/80 rotate-3 hover:rotate-0 hover:scale-110 hover:z-20 transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square rounded overflow-hidden bg-slate-100">
                    <img
                      src="/images/hero-polaroid-4.jpg"
                      alt="투명한 수중 놀이터"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-center font-bold text-[10px] sm:text-xs text-slate-700 mt-2">물속이 신나는 놀이터 🏊</p>
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-sm">
                <div className="text-urban-pink font-extrabold text-xl sm:text-2xl">0%</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5">화학 락스 전면 배제</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-sm">
                <div className="text-slate-900 font-extrabold text-xl sm:text-2xl">32.5℃</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5">사계절 체온 보호 온수</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-sm">
                <div className="text-urban-blue font-extrabold text-xl sm:text-2xl">5 Branch</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5">광주·나주 거점 네트워크</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USP SECTION */}
      <section id="about-usp" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-urban-pink mb-2">
              Safe & Pure Water System
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              왜 부모님들은 아이 첫 수영장으로<br />
              <span className="text-urban-pink">'어반 친환경 해수풀'</span>을 고집할까요?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              눈이 따갑고 피부가 가려운 수영장은 이제 그만. 인체 체액과 동일한 천연 소금 전기분해 친환경 공법을 고집합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-7 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-urban-pink tracking-wider uppercase">USP 01</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">화학 락스 ZERO, 천연 해수풀</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                인공 염소 락스를 전혀 첨가하지 않고 천연 소금을 전기분해하여 복합 살균합니다. 눈 시림, 아토피, 수영 후 특유의 독한 소독약 냄새 걱정이 전혀 없습니다.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 눈 충혈 없는 부드러운 수질</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 아토피 및 민감성 피부 안심</li>
              </ul>
            </div>

            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-7 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-urban-pink tracking-wider uppercase">USP 02</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">아이 밀착 올케어 (All-Care)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                탈의부터 샤워, 꼼꼼한 머리 말리기, 안전한 셔틀 승하차까지 전문 선생님이 처음부터 끝까지 정성으로 밀착 케어하여 학부모님의 손길을 덜어드립니다.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 기본 1:5 (봉선점 1:4) 소수정예</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 학부모 전용 실시간 관람 라운지</li>
              </ul>
            </div>

            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-7 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-black text-urban-pink tracking-wider uppercase">USP 03</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">32℃ 사계절 친환경 온수풀</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                아이들도 성인도 추위와 감기 걱정 없이 1년 365일 체온을 보호해 주는 32~33℃ 친환경 온수로 쾌적하고 건강하게 수영을 즐길 수 있습니다.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium border-t border-slate-200 pt-3">
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 사계절 적정 수온 32~33℃ 유지</li>
                <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-urban-pink" /> 어린이지도부터 성인까지 모두 만족</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BROADCAST VIDEO SECTION */}
      <section id="broadcast-video" className="py-16 sm:py-24 bg-urban-dark text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-urban-pink/40 text-urban-pink text-xs font-bold mb-3">
              <Tv className="w-3.5 h-3.5" />
              <span>SBS Biz 고수열전 51회 방영</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              방송에서도 주목한 어반수영장<br />
              <span className="text-urban-pink text-glow-pink">"수영 영재를 길러내는 유아 수영강습의 고수"</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              교육과 놀이를 결합한 어반만의 독보적인 친환경 수질 관리와 유아·어린이 생존 수영 교육을 직접 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: TV Poster */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-black max-w-sm w-full group hover:border-urban-pink transition-all">
                <img
                  src="/images/tv-gosu-poster.jpg"
                  alt="상위 1%의 비밀 고수열전 방송출연 - 수영 영재를 길러내는 유아 수영강습의 고수"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-urban-black/80 backdrop-blur-md text-urban-pink text-[11px] font-black border border-urban-pink/40 shadow">
                    📺 방송 하이라이트
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Video & Buttons */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-black aspect-video group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/xxvKMkUZXt4"
                  title="고수열전 51회 어린이 맞춤 수영장, 친환경 수질 개선 시스템 어반수영장"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://www.youtube.com/watch?v=xxvKMkUZXt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-urban-pink hover:bg-urban-pinkHover text-white text-xs sm:text-sm font-black transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <Tv className="w-4 h-4 fill-current" />
                  <span>YouTube에서 고화질 풀영상 바로보기</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] sm:text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-urban-pink flex-shrink-0" />
                  <span>독성 소독 부산물 원천 차단</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-urban-pink flex-shrink-0" />
                  <span>눈 시림 없는 0.9% 체액 염도</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-urban-pink flex-shrink-0" />
                  <span>24시간 자동 여과 순환 가동</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. [NEW] SURVIVAL SWIMMING SECTION */}
      <section id="survival-swimming" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-urban-pink/30 text-urban-pink text-xs font-extrabold mb-3">
              <LifeBuoy className="w-4 h-4" />
              <span>생존수영 전문 교육 기관</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              "위기 상황에서 아이 스스로를 지키는 힘"<br />
              <span className="text-urban-pink">생존수영 자격증 보유 전문 강사진의 100% 실전 교육</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              형식적인 물놀이식 수업이 아닙니다. 어반수영장은 <strong>생존수영 지도 자격증을 소유한 검증된 전문 선생님들</strong>이 실제 해상 위기 상황에서 가장 결정적인 도움이 되는 핵심 기술들을 체계적이고 안전하게 교육합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">공인 생존수영 지도 자격 강사진</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                전문 자격증을 보유한 지도자가 아이들의 눈높이에 맞춰 위기 대처 이론과 안전 수칙을 철저하게 1:1 맞춤 지도합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-4 shadow-sm">
                <UsersRound className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">실전 체온 유지 집단 부유 (Huddle)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                구명조끼 착용 후 원형으로 모여 저체온증을 방지하고 구조대를 안전하게 기다리는 실전 대형 부유 기술을 체득합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-urban-black text-urban-pink flex items-center justify-center mb-4 shadow-sm">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">실제 해상 구명뗏목(라이프래프트) 실습</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                책이나 영상이 아닌 실제 해상용 구명뗏목을 풀장에 띄워 승하선 및 비상 탈출을 직접 몸으로 익히는 실전형 모의 훈련입니다.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-100 p-6 sm:p-8 border border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span>어반수영장 실제 생존수영 실습 현장</span>
                  <span className="text-xs font-bold text-urban-pink px-2 py-0.5 rounded bg-rose-50 border border-urban-pink/30">100% 실습</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">이론 안전 교육부터 풀장 집단 부유, 구명뗏목 탈출까지 전 과정 실습</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>아이들 프라이버시 보호 모자이크 적용</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] group shadow-md">
                <img
                  src="/images/survival-theory.jpg"
                  alt="어반수영장 생존수영 사전 안전 이론 교육"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-[61%] left-[70%] w-[26%] h-[16%] backdrop-blur-md bg-white/10 rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase text-urban-pinkLight tracking-wider">Step 01</span>
                    <p className="text-white text-xs font-bold">사전 안전 & 위기대처 이론 교육</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] group shadow-md">
                <img
                  src="/images/survival-pool-huddle.jpg"
                  alt="URBAN Swimming Lab 집단 체온유지 원형 부유 훈련"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-[48%] left-[20%] w-[65%] h-[14%] backdrop-blur-md bg-white/10 rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider">Step 02</span>
                    <p className="text-white text-xs font-bold">체온유지 원형 집단 부유 훈련</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] group shadow-md">
                <img
                  src="/images/survival-raft-kids.jpg"
                  alt="실제 해상 구명뗏목 탑승 훈련"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-[36%] left-[23%] w-[48%] h-[15%] backdrop-blur-md bg-white/10 rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase text-rose-300 tracking-wider">Step 03</span>
                    <p className="text-white text-xs font-bold">해상 구명뗏목 실제 승선 실습</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] group shadow-md">
                <img
                  src="/images/survival-raft-training.jpg"
                  alt="전문 강사진의 비상 탈출 지도"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-[56%] left-[41%] w-[14%] h-[11%] backdrop-blur-md bg-white/10 rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">Step 04</span>
                    <p className="text-white text-xs font-bold">전문 강사진 밀착 비상 탈출 지도</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROGRAMS SECTION */}
      <section id="programs" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-urban-pink mb-2">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              아이부터 어른까지, 안심 맞춤 프로그램
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              연령과 실력에 맞춘 세분화된 레슨으로 기초 생존 수영부터 마스터즈 대회 준비까지 함께합니다.
            </p>

            <div className="mt-8 inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => setActiveTab("kids")}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "kids"
                    ? "bg-urban-black text-urban-pink shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                어린이 전문 수영
              </button>
              <button
                onClick={() => setActiveTab("adults")}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "adults"
                    ? "bg-urban-black text-urban-pink shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                성인 레슨 / 마스터즈
              </button>
              <button
                onClick={() => setActiveTab("family")}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "family"
                    ? "bg-urban-black text-urban-pink shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                온가족 친환경 수영장
              </button>
            </div>
          </div>

          {activeTab === "kids" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-urban-pink transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-rose-50 text-urban-pink text-xs font-bold">기초 / 물적응</span>
                  <span className="text-xs font-bold text-slate-500">6세 ~ 중학생</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">유아 & 주니어 기초 생존수영</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  물을 무서워하는 아이도 게임형 놀이 수업으로 자연스럽게 물과 친해지고 부력과 호흡법을 배웁니다.
                </p>
                <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <p className="font-bold text-urban-pink">• 정원: 기본 1:5 소수정예 (봉선점 1:4)</p>
                  <p>• 대상: 6세부터 중학생까지 수강 가능</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-urban-pink transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-rose-50 text-urban-pink text-xs font-bold">정규 영법</span>
                  <span className="text-xs font-bold text-slate-500">6세 ~ 중학생</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">4대 영법 완성 마스터</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  자유형, 배영, 평영, 접영의 정확한 폼을 익히고 폐활량과 지구력을 기르는 체계적인 단계별 강습입니다.
                </p>
                <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <p className="font-bold text-urban-pink">• 정원: 기본 1:5 집중 레슨 (봉선점 1:4)</p>
                  <p>• 대상: 6세부터 중학생까지 수강 가능</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-urban-pink/40 bg-gradient-to-b from-white to-rose-50/30 p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-urban-black text-urban-pink text-xs font-bold">선수 육성 / 시그니처</span>
                  <span className="text-xs font-bold text-slate-500">주니어 대상</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">어반 블랙핑크 주니어 대회반</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  전국 및 지역 수영대회 출전을 목표로 스타트, 턴, 기록 단축을 전문 지도자가 체계적으로 훈련하는 심화반입니다.
                </p>
                <div className="text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-rose-200/60 space-y-1">
                  <p className="font-bold text-slate-900">• 정원: 선발 테스트 및 맞춤 훈련</p>
                  <p>• 전문 지도자의 대회 규정 및 기록 단축 집중 코칭</p>
                </div>
              </div>
            </div>

            {/* Contest Group Mini Gallery */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-urban-pink animate-pulse" />
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                    대회장을 빛낸 어반 '블랙핑크' 선수단 단체 활약상
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-urban-black text-urban-pink">BLACK & PINK</span>
                </div>
                <p className="text-[11px] text-slate-500">나주시장배, 화순적벽배 등 수영대회 출전 및 메달 획득 순간</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                  <div className="h-28 sm:h-36 overflow-hidden">
                    <img
                      src="/images/contest-4.jpg"
                      alt="나주시장배 수영대회 어반 선수단 단체 사진"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 bg-white text-center">
                    <p className="text-[11px] font-bold text-slate-800 truncate">제8회 나주시장배 수영대회</p>
                  </div>
                </div>

                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                  <div className="h-28 sm:h-36 overflow-hidden">
                    <img
                      src="/images/contest-3.jpg"
                      alt="화순적벽배 수영대회 메달 획득 기념 단체 사진"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 bg-white text-center">
                    <p className="text-[11px] font-bold text-slate-800 truncate">화순적벽배 메달 획득 🏅</p>
                  </div>
                </div>

                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                  <div className="h-28 sm:h-36 overflow-hidden">
                    <img
                      src="/images/contest-2.jpg"
                      alt="나주시장배 단체 훈련 사진"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 bg-white text-center">
                    <p className="text-[11px] font-bold text-slate-800 truncate">나주시장배 단체 훈련</p>
                  </div>
                </div>

                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                  <div className="h-28 sm:h-36 overflow-hidden">
                    <img
                      src="/images/contest-1.jpg"
                      alt="광주 교육감배 단체훈련 사진"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 bg-white text-center">
                    <p className="text-[11px] font-bold text-slate-800 truncate">광주 교육감배 단체훈련</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {activeTab === "adults" && (
            <div>
              <div className="mb-4 p-3 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs font-bold text-slate-600">
                💡 <span className="text-slate-800">(지점별로 강습 프로그램 및 운영 시간표에 차이가 있습니다. 세부 시간표는 해당 지점으로 문의해 주세요.)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold">모닝 & 이브닝</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-3 mb-2">직장인 새벽 / 저녁 기초반</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    출근 전, 퇴근 후 맑은 해수풀에서 상쾌하게 하루를 시작하고 마무리하는 성인 입문 클래스입니다.
                  </p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• 대상: 물 공포 극복 및 기초 수영 희망 성인</p>
                    <p>• 지점별 운영 시간 상이</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold">자세 교정</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-3 mb-2">영법 교정 & 체력 증진반</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    올바른 수영 영법 자세를 정밀 교정하고 코어 근육과 심폐 지구력을 강화하는 성인 강습입니다.
                  </p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• 대상: 기본 영법 가능자 및 체력 증진 희망자</p>
                    <p>• 맞춤 스트로크 및 호흡법 교정</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold">마스터즈</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-3 mb-2">성인 마스터즈 & 장거리반</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    체계적인 인터벌 훈련과 장거리 수영, 아마추어 대회 출전을 준비하는 성인 고급 레슨입니다.
                  </p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• 대상: 4대 영법 완주 숙련자</p>
                    <p>• 어반 성인 마스터즈 정기 훈련</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {activeTab === "family" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  <Droplet className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">어린이도, 성인도 다닐 수 있는 깨끗한 수영장</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  화학 락스를 전혀 쓰지 않는 100% 친환경 천연 해수풀로, 피부가 민감한 아이부터 쾌적한 운동 환경을 원하는 어른까지 온 가족이 안심하고 다닐 수 있습니다.
                </p>
                <p className="text-xs font-bold text-urban-pink">• 눈 시림 없는 0.9% 체액 염도 친환경 수질 관리</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-urban-pink flex items-center justify-center mb-4">
                  <ThermometerSun className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">365일 사계절 따뜻한 32℃ 친환경 온수</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  추운 겨울철에도 감기 걱정 없이 온 가족이 수영을 즐길 수 있도록 사계절 내내 최적의 온수(32~33℃)를 유지하여 체온을 안전하게 보호합니다.
                </p>
                <p className="text-xs font-bold text-slate-700">• 아이들 감기 걱정 없는 쾌적한 실내 온습도 시스템</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. 5 BRANCHES SECTION */}
      <section id="branches" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-urban-pink mb-2">
              Direct Branch Network
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              광주·나주 5개 거점 지점 안내<br />
              <span className="text-urban-pink">가까운 지점으로 바로 전화 상담하세요</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              궁금하신 강습 시간표, 셔틀버스 노선, 1회 체험 가능 여부를 해당 지점 직통 전화로 친절하게 안내해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((b) => (
              <div
                key={b.name}
                id={`branch-${b.name}`}
                className={`rounded-2xl border-2 p-6 bg-slate-50/50 hover:bg-white shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group ${
                  highlightedBranch === b.name
                    ? "border-urban-pink ring-4 ring-rose-200 scale-105"
                    : "border-slate-200 hover:border-urban-pink"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-urban-black text-white">
                      {b.region}
                    </span>
                    <span className="text-xs font-bold text-urban-pink flex items-center gap-1">
                      {b.name === "봉선점" ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5" /> 1:4 단독 운영
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" /> 상담 가능
                        </>
                      )}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-urban-pink transition-colors">
                    어반수영장 {b.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 mt-2 mb-4 flex items-start gap-1.5 leading-snug">
                    <MapPin className="w-4 h-4 text-urban-pink flex-shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <div className="space-y-2 py-3 border-y border-slate-200 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="font-medium">수업 정원</span>
                      <span className={`font-bold ${b.name === "봉선점" ? "text-urban-pink" : "text-slate-800"}`}>
                        {b.capacity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">시설 특징</span>
                      <span className="font-bold text-slate-800">{b.features}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <div className="text-xs text-slate-400 font-medium mb-1.5">{b.name} 직통 전화</div>
                  <a
                    href={`tel:${b.tel}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm bg-urban-black text-white hover:bg-urban-pink transition-all shadow-md group-hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4 text-urban-pink group-hover:text-white" />
                    <span>{b.tel}</span>
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-urban-black via-slate-900 to-urban-dark border-2 border-urban-pink/40 p-6 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-urban-pink/20 text-urban-pink flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">어느 지점으로 가야 할까요?</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  거주하시는 아파트나 학교 위치를 알려주시면 가장 가까운 지점과 최적의 셔틀버스 정류장 및 시간표를 친절히 안내해 드립니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800">
                <p className="text-xs text-urban-pink font-bold mb-2">광주·나주 5개 거점 직영/가맹 네트워크</p>
                <div className="text-[11px] text-slate-400">
                  상담 가능 시간: 평일 09:00 ~ 21:00 / 토요일 09:00 ~ 15:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REVIEWS SECTION */}
      <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-urban-pink mb-2">
              Real Voice
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              수강생과 학부모님이 증명하는 만족도
            </h2>
            <div className="flex items-center justify-center gap-1 text-amber-400 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-sm font-bold text-slate-800 ml-2">4.9 / 5.0 (누적 리뷰 1,200건+)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "아이가 아토피가 심해서 다른 수영장은 락스 냄새 때문에 한 번 가고 그만뒀는데, 어반은 해수풀이라 수영하고 와도 피부 가려움이 전혀 없어요! 생존수영 시간에 구명뗏목 타는 훈련도 너무 유익했습니다."
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
                <span>봉선점 초3 학부모 이** 님</span>
                <span className="text-urban-pink">어린이 정규반</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "대회 나갈 때 검정 바탕에 핑크색 어반 수모 쓴 선수들 보고 멋있어서 등록했어요. 성인반 저녁 타임 수질도 정말 깨끗하고 강사님이 자세 하나하나 친절하게 잡아주셔서 기록이 많이 줄었습니다."
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
                <span>빛가람점 직장인 김** 님</span>
                <span className="text-urban-pink">성인 마스터즈반</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">★★★★★</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "물이 32도 온수라서 겨울에도 아이 감기 걱정이 없어요. 왜 방송(고수열전)에 나올 만큼 유명한지 직접 다녀보니 알겠네요. 셔틀버스 기사님과 인솔 선생님도 너무 친절하십니다."
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
                <span>효천점 회원 박** 님</span>
                <span className="text-urban-pink">어린이 케어반</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-urban-dark text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="어반수영장 로고" className="w-10 h-10 object-contain" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg text-white">어반수영장</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-urban-black text-urban-pink border border-urban-pink/40">
                    URBAN SWIM
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">친환경 해수풀 어린이 & 성인 패밀리 전문 수영장</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              {BRANCHES.map((b, i) => (
                <React.Fragment key={b.name}>
                  {i > 0 && <span>•</span>}
                  <span>
                    {b.name} {b.tel}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-6 space-y-2 text-slate-500 text-[11px] leading-relaxed">
            <p className="text-slate-400 font-medium">📍 어반수영장 5개 지점별 상세 도로명 주소:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-slate-400">
              {BRANCHES.map((b) => (
                <p key={b.name}>
                  • <strong>{b.name}</strong>: {b.address}
                </p>
              ))}
            </div>
            <div className="pt-3 flex flex-col sm:flex-row justify-between gap-2 text-slate-500">
              <p>운영시간: 평일 06:00 ~ 22:00 / 토요일 08:00 ~ 17:00 (일요일 및 공휴일 휴무)</p>
              <p>© 2026 어반수영장 (URBAN SWIM). All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 11. MOBILE FLOATING CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-urban-dark/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <select
          value={selectedMobileTel}
          onChange={(e) => setSelectedMobileTel(e.target.value)}
          className="w-1/2 bg-slate-800 text-white text-xs font-bold py-2.5 px-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-urban-pink"
        >
          {BRANCHES.map((b) => (
            <option key={b.name} value={`tel:${b.tel}`}>
              📍 {b.name} {b.name === "봉선점" ? "(1:4)" : ""} 전화
            </option>
          ))}
        </select>

        <a
          href={selectedMobileTel}
          className="w-1/2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-urban-pink text-white text-xs font-black shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span>지점 직통 통화</span>
        </a>
      </div>
    </div>
  );
}
