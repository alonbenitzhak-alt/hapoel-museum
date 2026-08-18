"use client";

import { useEffect, useState } from "react";

interface MemorableMatch {
  id: number;
  date: string;
  opponent: string;
  englishOpponent: string;
  score: string;
  competition: string;
  englishCompetition: string;
  description: string;
  englishDescription: string;
  significance: string;
}

interface MatchesData {
  memorableMatches: MemorableMatch[];
}

const defaultData: MatchesData = { memorableMatches: [] };

export default function Matches() {
  const [data, setData] = useState<MatchesData>(defaultData);

  useEffect(() => {
    fetch("/data/matches.json")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Failed to load matches:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-[180px]">⚽</div>
          <div className="absolute bottom-5 right-5 text-[180px]">🏆</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-black mb-6">⚽ משחקים</h1>
          <p className="text-2xl md:text-3xl text-red-100 font-bold mb-4">משחקים משמעותיים בהיסטוריית הפועל</p>
          <p className="text-lg text-red-100/90 max-w-2xl mx-auto">מרגעים שהגדירו את קורת הקבוצה וזיכרונות שנשמרו בלב כל אוהד</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        {/* Memorable Matches */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-4">משחקים זיכרוניים</h2>
            <p className="text-gray-600 text-lg">רגעים שהשאירו חותם בהיסטוריה של הפועל באר שבע</p>
          </div>
          <div className="grid gap-6">
            {data.memorableMatches.map((match) => (
              <div key={match.id} className="card card-with-border">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-red-700 mb-4">
                      {match.opponent}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600">
                        <span className="font-semibold">תאריך:</span> {match.date}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">תחרות:</span> {match.competition}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{match.description}</p>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className="text-5xl font-black text-red-600 mb-2">
                      {match.score}
                    </div>
                    <div className="text-gray-500 text-sm bg-red-50 px-3 py-1 rounded">
                      {match.significance}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
