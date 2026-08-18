"use client";

import { useState } from "react";

interface Match {
  id: number;
  season: string;
  opponent: string;
  score: string;
  result: "W" | "D" | "L";
  date: string;
  competition: string;
}

const matches: Match[] = [
  {
    id: 1,
    season: "2023-24",
    opponent: "בית״ר ירושלים",
    score: "3-1",
    result: "W",
    date: "15/08/2023",
    competition: "ליגת העל",
  },
  {
    id: 2,
    season: "2023-24",
    opponent: "מכבי תל אביב",
    score: "2-2",
    result: "D",
    date: "20/08/2023",
    competition: "ליגת העל",
  },
  {
    id: 3,
    season: "2023-24",
    opponent: "הפועל באר שבע",
    score: "1-0",
    result: "W",
    date: "25/08/2023",
    competition: "ליגת העל",
  },
  {
    id: 4,
    season: "2023-24",
    opponent: "מכבי חיפה",
    score: "2-2",
    result: "D",
    date: "30/08/2023",
    competition: "ליגת העל",
  },
  {
    id: 5,
    season: "2022-23",
    opponent: "בית״ר ירושלים",
    score: "1-2",
    result: "L",
    date: "10/05/2023",
    competition: "ליגת העל",
  },
  {
    id: 6,
    season: "2022-23",
    opponent: "מכבי תל אביב",
    score: "3-1",
    result: "W",
    date: "15/04/2023",
    competition: "ליגת העל",
  },
];

export default function Matches() {
  const [selectedSeason, setSelectedSeason] = useState<string>("2023-24");

  const seasons = [...new Set(matches.map((m) => m.season))].sort((a, b) =>
    b.localeCompare(a)
  );

  const filteredMatches = matches.filter(
    (m) => m.season === selectedSeason
  );

  const stats = {
    W: filteredMatches.filter((m) => m.result === "W").length,
    D: filteredMatches.filter((m) => m.result === "D").length,
    L: filteredMatches.filter((m) => m.result === "L").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-3">
            ⚽ משחקי הפועל באר שבע
          </h1>
          <p className="text-xl text-red-100">
            ארכיון משחקים וסטטיסטיקות לפי עונה
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <label
            htmlFor="season"
            className="block text-lg font-bold text-gray-800 mb-3"
          >
            בחר עונה
          </label>

          <select
            id="season"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="border-2 border-red-300 rounded-lg px-4 py-3 text-lg font-semibold bg-white text-gray-800"
          >
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-green-600">
              {stats.W}
            </div>
            <div className="text-gray-700 font-bold mt-2">ניצחונות</div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-yellow-600">
              {stats.D}
            </div>
            <div className="text-gray-700 font-bold mt-2">תיקו</div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-red-600">
              {stats.L}
            </div>
            <div className="text-gray-700 font-bold mt-2">הפסדים</div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    {match.date} · {match.competition}
                  </div>

                  <h2 className="text-2xl font-black text-gray-900">
                    הפועל באר שבע — {match.opponent}
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-gray-900">
                    {match.score}
                  </div>

                  <div
                    className={`px-4 py-2 rounded-lg font-black ${
                      match.result === "W"
                        ? "bg-green-100 text-green-700"
                        : match.result === "D"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {match.result === "W"
                      ? "ניצחון"
                      : match.result === "D"
                      ? "תיקו"
                      : "הפסד"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}