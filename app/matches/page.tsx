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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-black mb-3">⚽ משחקים</h1>
          <p className="text-xl text-red-100">משחקים משמעותיים ודרביים בהיסטוריית הפועל</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Memorable Matches */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">משחקים זיכרוניים</h2>
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

        {/* Derbies */}
        <div>
          <h2 className="text-4xl font-black mb-8">דרביים</h2>
          <div className="grid gap-6">
            {data.derbies.map((derby) => (
              <div key={derby.id} className="card card-with-border">
                <h3 className="text-2xl font-black text-red-700 mb-3">
                  {derby.opponent}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{derby.description}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">רקורד:</span> {derby.recordAgainst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
