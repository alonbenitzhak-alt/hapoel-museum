"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ClubInfo {
  name: string;
  englishName: string;
  founded: number;
  city: string;
  englishCity: string;
  colors: { primary: string; secondary: string };
  nickname: string;
  englishNickname: string;
  stadium: { name: string; englishName: string; capacity: number; built: number; opened: string };
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

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">⚽</div>
          <div className="absolute bottom-10 right-10 text-9xl">🏆</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4">גמלופדיה</h1>
          <p className="text-2xl md:text-3xl font-bold text-red-100 mb-2">ארכיון האוהדים של הפועל באר שבע</p>
          <p className="text-lg text-red-100/90 max-w-3xl mx-auto mb-8">{club.description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/songs" className="btn-primary px-8 py-3 text-lg font-bold">🎵 שירים וקריאות</Link>
            <Link href="/matches" className="btn-secondary px-8 py-3 text-lg font-bold">⚽ משחקים</Link>
            <Link href="/squads" className="btn-secondary px-8 py-3 text-lg font-bold">👥 סגלים</Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-gray-50 border-b-4 border-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">{club.founded}</div>
              <div className="text-gray-700 font-semibold">שנת ייסוד</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">{yearsActive}+</div>
              <div className="text-gray-700 font-semibold">שנות היסטוריה</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">{club.stadium.capacity.toLocaleString()}</div>
              <div className="text-gray-700 font-semibold">קיבולת אצטדיון</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 mb-2">13</div>
              <div className="text-gray-700 font-semibold">שירים וקריאות</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Songs & Chants */}
            <Link href="/songs" className="group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white h-64 flex flex-col justify-between transform hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-red-500 hover:border-red-300">
                <div>
                  <div className="text-5xl mb-4">🎵</div>
                  <h3 className="text-3xl font-black mb-2">שירים וקריאות</h3>
                  <p className="text-red-100">אוסף מלא של שירי הפועל, קריאות היסטוריות וסרטוני יוטיוב</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-bold group-hover:text-red-200 transition">
                  <span>13 שירים</span>
                  <span className="transform group-hover:translate-x-[-8px] transition-transform">←</span>
                </div>
              </div>
            </Link>

            {/* Matches */}
            <Link href="/matches" className="group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white h-64 flex flex-col justify-between transform hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-red-500 hover:border-red-300">
                <div>
                  <div className="text-5xl mb-4">⚽</div>
                  <h3 className="text-3xl font-black mb-2">משחקים זיכרוניים</h3>
                  <p className="text-red-100">משחקים משמעותיים שהגדירו את הקבוצה</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-bold group-hover:text-red-200 transition">
                  <span>רגעים מרכזיים</span>
                  <span className="transform group-hover:translate-x-[-8px] transition-transform">←</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Squads */}
            <Link href="/squads" className="group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white h-64 flex flex-col justify-between transform hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-red-500 hover:border-red-300">
                <div>
                  <div className="text-5xl mb-4">👥</div>
                  <h3 className="text-3xl font-black mb-2">סגלים ושחקנים</h3>
                  <p className="text-red-100">שחקנים אגדיים, כוכבים עדכניים ומאמנים חכמים</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-bold group-hover:text-red-200 transition">
                  <span>11 אגדות</span>
                  <span className="transform group-hover:translate-x-[-8px] transition-transform">←</span>
                </div>
              </div>
            </Link>

            {/* Jerseys */}
            <Link href="/jerseys" className="group">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white h-64 flex flex-col justify-between transform hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-red-500 hover:border-red-300">
                <div>
                  <div className="text-5xl mb-4">👕</div>
                  <h3 className="text-3xl font-black mb-2">עיצובי חולצות</h3>
                  <p className="text-red-100">התפתחות הערכים הראש לאורך השנים</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-bold group-hover:text-red-200 transition">
                  <span>ארכיון עיצובים</span>
                  <span className="transform group-hover:translate-x-[-8px] transition-transform">←</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Club Info Section */}
      <section className="py-16 bg-gray-50 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center text-gray-900">על הקבוצה</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-red-600">
              <div className="text-5xl mb-3">📅</div>
              <div className="text-3xl font-black text-red-600 mb-2">{club.founded}</div>
              <div className="text-gray-700 font-semibold">שנת ייסוד</div>
              <p className="text-sm text-gray-500 mt-2">הקבוצה נוסדה בשנה זו</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-red-600">
              <div className="text-5xl mb-3">🏙️</div>
              <div className="text-3xl font-black text-red-600 mb-2">{club.city}</div>
              <div className="text-gray-700 font-semibold">עיר הקבוצה</div>
              <p className="text-sm text-gray-500 mt-2">מנציגי תנועת הפועל</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-red-600">
              <div className="text-5xl mb-3">🏟️</div>
              <div className="text-3xl font-black text-red-600 mb-2">{club.stadium.capacity.toLocaleString()}</div>
              <div className="text-gray-700 font-semibold">{club.stadium.name}</div>
              <p className="text-sm text-gray-500 mt-2">קיבולת אצטדיון</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-red-600">
              <div className="text-5xl mb-3">⏳</div>
              <div className="text-3xl font-black text-red-600 mb-2">{yearsActive}+</div>
              <div className="text-gray-700 font-semibold">שנות היסטוריה</div>
              <p className="text-sm text-gray-500 mt-2">מתמדות וגדולה</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-to-right text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-6">כל הארכיון שלך בקליק אחד</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">חקור את ההיסטוריה העשירה, אהוד את הקבוצה, וחיה את הרוח של הפועל באר שבע</p>
          <Link href="/songs" className="inline-block btn-primary px-12 py-4 text-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all">
            🚀 התחל עכשיו
          </Link>
        </div>
      </section>
    </>
  );
}
