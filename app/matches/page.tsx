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

interface Derby {
  id: number;
  opponent: string;
  englishOpponent: string;
  description: string;
  englishDescription: string;
  recordAgainst: string;
  englishRecordAgainst: string;
}

interface MatchesData {
  memorableMatches: MemorableMatch[];
  derbies: Derby[];
}

const defaultData: MatchesData = { memorableMatches: [], derbies: [] };

export default function Matches() {
  const [data, setData] = useState<MatchesData>(defaultData);

  useEffect(() => {
    fetch("/data/matches.json")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Failed to load matches:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-3">⚽ משחקים</h1>
          <p className="text-xl text-red-100">משחקים משמעותיים ודרביים בהיסטוריית הפועל</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-8 text-right">משחקים זיכרוניים</h2>
          <div className="grid gap-6">
            {data.memorableMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-red-700 mb-2">
                      {match.opponent}
                    </h3>
                    <p className="text-gray-600">
                      <span className="font-semibold">תאריך:</span> {match.date}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">תחרות:</span> {match.competition}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-red-600 mb-2">
                      {match.score}
                    </div>
                    <div className="text-gray-500 text-sm">{match.significance}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{match.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black mb-8 text-right">דרביים</h2>
          <div className="grid gap-6">
            {data.derbies.map((derby) => (
              <div key={derby.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-red-700 mb-3">
                      {derby.opponent}
                    </h3>
                    <p className="text-gray-700 mb-4">{derby.description}</p>
                    <p className="text-gray-600">
                      <span className="font-semibold">רקורד:</span> {derby.recordAgainst}
                    </p>
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