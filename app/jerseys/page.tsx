"use client";

interface Jersey {
  id: number;
  year: number;
  era: string;
  description: string;
  color: string;
  design: string;
  emoji: string;
}

const jerseys: Jersey[] = [
  {
    id: 1,
    year: 1924,
    era: "העונות הראשונות",
    description: "חולצה פשוטה עם פסים צהוב כחול",
    color: "צהוב וכחול",
    design: "פסים אנכיים",
    emoji: "👕",
  },
  {
    id: 2,
    year: 1960,
    era: "שנות ה-60",
    description: "עיצוב קלאסי עם שם הקבוצה בצד",
    color: "צהוב",
    design: "צהוב מלא עם כחול",
    emoji: "👕",
  },
  {
    id: 3,
    year: 1980,
    era: "שנות ה-80",
    description: "חולצה עם לוגו הפועל בחזה",
    color: "צהוב וכחול",
    design: "לוגו קלאסי",
    emoji: "👕",
  },
  {
    id: 4,
    year: 2000,
    era: "שנות ה-2000",
    description: "עיצוב מודרני עם פסים זעירים",
    color: "צהוב וכחול",
    design: "פסים דקים",
    emoji: "👕",
  },
  {
    id: 5,
    year: 2010,
    era: "שנות ה-2010",
    description: "חולצה עם ספונסור ראשי",
    color: "צהוב",
    design: "ספונסור במרכז",
    emoji: "👕",
  },
  {
    id: 6,
    year: 2020,
    era: "שנות ה-2020",
    description: "עיצוב עכשווי עם טכנולוגיה חדשה",
    color: "צהוב",
    design: "טכנולוגיה מתקדמת",
    emoji: "👕",
  },
];

export default function Jerseys() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-3">👕 חולצות גמלופדיה</h1>
          <p className="text-xl text-purple-100">ארכיון חולצות ועיצובים לאורך 100 שנות היסטוריה</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jerseys.map((jersey) => (
            <div
              key={jersey.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                className={`h-40 flex items-center justify-center text-6xl`}
                style={{
                  background:
                    jersey.color === "צהוב"
                      ? "#FBBF24"
                      : jersey.color === "צהוב וכחול"
                      ? "linear-gradient(90deg, #FBBF24 50%, #3B82F6 50%)"
                      : "white",
                }}
              >
                {jersey.emoji}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-purple-600">{jersey.year}</span>
                  <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded font-semibold">
                    {jersey.era}
                  </span>
                </div>

                <h3 className="text-lg font-black mb-2 text-gray-800">
                  {jersey.design}
                </h3>

                <p className="text-gray-600 mb-4">{jersey.description}</p>

                <div className="flex gap-2">
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded font-semibold">
                    צבע: {jersey.color}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-black mb-6 text-right">לוגו הפועל לאורך הזמן</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-6 pb-6 border-b">
              <div className="text-5xl">🏛️</div>
              <div className="flex-1">
                <h3 className="text-xl font-black">1924 - הלוגו המקורי</h3>
                <p className="text-gray-600">הלוגו הראשון של הפועל - פשוט ומינימליסטי</p>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-6 border-b">
              <div className="text-5xl">⚽</div>
              <div className="flex-1">
                <h3 className="text-xl font-black">1960 - עדכון הלוגו</h3>
                <p className="text-gray-600">הוספת סמלים ספורטיביים ללוגו</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-5xl">🐪</div>
              <div className="flex-1">
                <h3 className="text-xl font-black">2024 - גמלופדיה</h3>
                <p className="text-gray-600">לוגו מודרני עם סמל הגמל - הגאון של מדבר המידע</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
