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
      <section className="relative gradient-to-right text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">⚽</div>
          <div className="absolute bottom-20 right-20 text-9xl">🏛️</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight">גמלופדיה</h1>
          <p className="text-2xl md:text-3xl font-bold text-red-100 mb-6">ארכיון האוהדים של הפועל באר שבע</p>
          <p className="text-lg md:text-xl text-red-100 mb-10 font-light max-w-2xl mx-auto">{club.description}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/songs" className="btn-primary">
              🎵 בואו נתחיל
            </Link>
            <Link href="/matches" className="btn-secondary">
              ⚽ לבחירות
            </Link>
          </div>
        </div>
      </section>

      {/* Club Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">מידע על הקבוצה</h2>
          <div className="grid-4">
            <div className="card bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-center">
              <div className="text-5xl mb-4">📅</div>
              <div className="text-5xl font-black text-red-600 mb-3">{club.founded}</div>
              <div className="text-gray-700 font-semibold">שנת ייסוד</div>
            </div>
            <div className="card bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-center">
              <div className="text-5xl mb-4">⏳</div>
              <div className="text-5xl font-black text-red-600 mb-3">{yearsActive}+</div>
              <div className="text-gray-700 font-semibold">שנות היסטוריה</div>
            </div>
            <div className="card bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-center">
              <div className="text-5xl mb-4">🏙️</div>
              <div className="text-5xl font-black text-red-600 mb-3">{club.city}</div>
              <div className="text-gray-700 font-semibold">עיר</div>
            </div>
            <div className="card bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-center">
              <div className="text-5xl mb-4">🏟️</div>
              <div className="text-lg font-black text-red-600 mb-3">{club.stadium.name}</div>
              <div className="text-gray-700 font-semibold">{club.stadium.capacity} צופים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">מה תוכלו לגלות</h2>
          <div className="grid-2">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href} className="group">
                <div className="gradient-primary p-8 rounded-2xl text-white h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                  <div>
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <h3 className="text-3xl font-black mb-3">{feature.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-lg font-bold">
                    <span>בואו נתחיל</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-to-right text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-4">גמלופדיה - כל ההיסטוריה בקליק אחד</h3>
          <p className="text-lg text-red-100">חקור את העבר, חגוג את הנוכח, בנה את העתיד</p>
        </div>
      </section>
    </>
  );
}
