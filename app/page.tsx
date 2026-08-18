"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ClubInfo {
  name: string;
  englishName: string;
  founded: number;
  city: string;
  englishCity: string;
  colors: {
    primary: string;
    secondary: string;
  };
  nickname: string;
  englishNickname: string;
  stadium: {
    name: string;
    englishName: string;
    capacity: number;
    built: number;
    opened: string;
  };
  description: string;
  englishDescription: string;
}

const defaultClub: ClubInfo = {
  name: "הפועל באר שבע",
  englishName: "Hapoel Beersheba",
  founded: 1949,
  city: "באר שבע",
  englishCity: "Beersheba",
  colors: { primary: "#CC0000", secondary: "#FFFFFF" },
  nickname: "האדומים",
  englishNickname: "The Reds",
  stadium: { name: "אצטדיון טרנר", englishName: "Turner Stadium", capacity: 16126, built: 2015, opened: "2015-09-20" },
  description: "קבוצת כדורגל ישראלית מבאר שבע, המייצגת את תנועת הפועל",
  englishDescription: "Israeli football club from Beersheba, representing the Hapoel movement",
};

export default function Home() {
  const [club, setClub] = useState<ClubInfo>(defaultClub);

  useEffect(() => {
    fetch("/data/club_info.json")
      .then(res => res.json())
      .then(data => setClub(data))
      .catch(err => console.error("Failed to load club info:", err));
  }, []);

  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - club.founded;

  const features = [
    { icon: "🎵", title: "שירים וקריאות", description: "שירי הפועל וקריאות היסטוריות של האוהדים", href: "/songs" },
    { icon: "⚽", title: "משחקים זיכרוניים", description: "משחקים משמעותיים ודרביים בהיסטוריית הקבוצה", href: "/matches" },
    { icon: "👕", title: "עיצובי חולצות", description: "התפתחות עיצובי החולצות לאורך השנים", href: "/jerseys" },
    { icon: "👥", title: "סגלי קבוצה", description: "שחקנים אגדיים, כוכבים עדכניים ומאמנים", href: "/squads" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-to-right text-white py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-[200px] animate-pulse">⚽</div>
          <div className="absolute bottom-5 right-5 text-[200px] animate-pulse">🏛️</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-red-500/20 border-2 border-red-300 rounded-full px-6 py-2 mb-6">
            <span className="text-red-100 font-semibold">🔴 עלון הפועל - ארכיון דיגיטלי</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight tracking-tight">גמלופדיה</h1>
          <p className="text-2xl md:text-3xl font-bold text-red-100 mb-8">ארכיון האוהדים של הפועל באר שבע</p>
          <p className="text-lg md:text-xl text-red-100 mb-12 font-light max-w-3xl mx-auto leading-relaxed">{club.description}</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/songs" className="btn-primary text-lg py-4 px-10 shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 transition-all">
              🎵 בואו נתחיל
            </Link>
            <Link href="/matches" className="btn-secondary text-lg py-4 px-10 shadow-2xl hover:shadow-red-600/30 transform hover:scale-105 transition-all">
              ⚽ לבחירות
            </Link>
          </div>
        </div>
      </section>

      {/* Club Info Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">מידע על הקבוצה</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">עקב שנות היסטוריה עשירות של הפועל באר שבע</p>
          <div className="grid-4">
            <div className="card bg-white border-2 border-red-200 hover:border-red-400 text-center shadow-lg hover:shadow-2xl transition-all transform hover:translate-y-[-8px]">
              <div className="text-6xl mb-4 inline-block p-4 bg-red-100 rounded-full">📅</div>
              <div className="text-5xl font-black text-red-600 mb-3">{club.founded}</div>
              <div className="text-gray-700 font-semibold">שנת ייסוד</div>
              <div className="text-sm text-gray-500 mt-2">מתחילת ההתנועה בארץ</div>
            </div>
            <div className="card bg-white border-2 border-red-200 hover:border-red-400 text-center shadow-lg hover:shadow-2xl transition-all transform hover:translate-y-[-8px]">
              <div className="text-6xl mb-4 inline-block p-4 bg-red-100 rounded-full">⏳</div>
              <div className="text-5xl font-black text-red-600 mb-3">{yearsActive}+</div>
              <div className="text-gray-700 font-semibold">שנות היסטוריה</div>
              <div className="text-sm text-gray-500 mt-2">זמן ארוך של תרומה</div>
            </div>
            <div className="card bg-white border-2 border-red-200 hover:border-red-400 text-center shadow-lg hover:shadow-2xl transition-all transform hover:translate-y-[-8px]">
              <div className="text-6xl mb-4 inline-block p-4 bg-red-100 rounded-full">🏙️</div>
              <div className="text-4xl font-black text-red-600 mb-3">{club.city}</div>
              <div className="text-gray-700 font-semibold">עיר הקבוצה</div>
              <div className="text-sm text-gray-500 mt-2">נציגי תנועת הפועל</div>
            </div>
            <div className="card bg-white border-2 border-red-200 hover:border-red-400 text-center shadow-lg hover:shadow-2xl transition-all transform hover:translate-y-[-8px]">
              <div className="text-6xl mb-4 inline-block p-4 bg-red-100 rounded-full">🏟️</div>
              <div className="text-2xl font-black text-red-600 mb-2">{club.stadium.name}</div>
              <div className="text-gray-700 font-semibold">{club.stadium.capacity.toLocaleString()} צופים</div>
              <div className="text-sm text-gray-500 mt-2">נפתח {club.stadium.built}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">מה תוכלו לגלות</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">בחנו את עולם הפועל באר שבע בכל היבטיו</p>
          <div className="grid-2">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href} className="group">
                <div className="gradient-primary p-10 rounded-3xl text-white h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer border-2 border-red-300 hover:border-red-100">
                  <div>
                    <div className="text-8xl mb-6 transform group-hover:scale-125 transition-transform inline-block">{feature.icon}</div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-white/95 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-3 text-lg font-bold group-hover:text-white/100 text-white/90">
                    <span>כנס לסעיף</span>
                    <span className="transform group-hover:translate-x-[-8px] transition-transform text-2xl">←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-to-right text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 text-9xl">⚽</div>
          <div className="absolute bottom-10 left-10 text-9xl">🏆</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-black mb-6">גמלופדיה - כל ההיסטוריה בקליק אחד</h3>
          <p className="text-xl md:text-2xl text-red-100 font-light mb-10">חקור את העבר המכובד, חגוג את הנוכח המרגש, בנה את העתיד הזוהר</p>
          <Link href="/songs" className="inline-block btn-primary text-xl py-4 px-12 shadow-2xl hover:shadow-red-600/50 transform hover:scale-110 transition-all">
            🚀 התחל את ההסע
          </Link>
        </div>
      </section>
    </>
  );
}
