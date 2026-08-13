"use client";

import Link from "next/link";

export default function Home() {
  const stats = [
    { number: "1924", label: "שנת ייסוד" },
    { number: "100+", label: "שנות היסטוריה" },
    { number: "1000+", label: "משחקים מתוועדים" },
    { number: "50+", label: "שירים קלאסיים" },
  ];

  const features = [
    { icon: "🎵", title: "שירים", description: "אוסף של שירי הפועל", href: "/songs" },
    { icon: "⚽", title: "משחקים", description: "ארכיון משחקים וסטטיסטיקות", href: "/matches" },
    { icon: "👕", title: "חולצות", description: "גלריה של חולצות לאורך השנים", href: "/jerseys" },
    { icon: "👥", title: "סגלים", description: "שחקנים ומאמנים", href: "/squads" },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">🏛️ מוזיאום הפועל</h1>
          <p className="text-xl text-red-100 mb-8">מוזיאום דיגיטלי של הפועל - שירים, משחקים, סגלים וחולצות</p>
          <div className="flex justify-center gap-4">
            <Link href="/songs" className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-red-50">🎵 שירים</Link>
            <Link href="/matches" className="bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800">⚽ משחקים</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">מספרים מעניינים</h2>
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">מה תוכלו למצוא</h2>
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href} className="bg-white p-8 rounded-lg shadow hover:shadow-lg">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="text-red-600 font-bold">לחץ →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
