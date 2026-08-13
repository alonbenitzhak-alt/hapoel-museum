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
    opponent: "בית\"ר ירושלים",
    score: "3-1",
    result: "W",
    date: "15/08/2023",
    competition: "ליגה לאומית",
  },
  {
    id: 2,
    season: "2023-24",
    opponent: "מכבי תל אביב",
    score: "2-2",
    result: "D",
    date: "20/08/2023",
    competition: "ליגה לאומית",
  },
  {
    id: 3,
    season: "2023-24",
    opponent: "הפועל באר שבע",
    score: "1-0",
    result: "W",
    date: "25/08/2023",
    competition: "ליגה לאומית",
  },
  {
    id: 4,
    season: "2023-24",
    opponent: "מ\"כ חיפה",
    score: "2-2",
    result: "D",
    date: "30/08/2023",
    competition: "ליגה לאומית",
  },
  {
    id: 5,
    season: "2022-23",
    opponent: "בית\"ר ירושלים",
    score: "1-2",
    result: "L",
    date: "10/05/2023",
    competition: "ליגה לאומית",
  },
  {
    id: 6,
    season: "2022-23",
    opponent: "מכבי תל אביב",
    score: "3-1",
    result: "W",
    date: "15/04/2023",
    competition: "ליגה לאומית",
  },
];

export default function Matches() {
  const [selectedSeason, setSelectedSeason] = useState<string>("2023-24");

  const seasons = [...new Set(matches.map((m) => m.season))].sort((a, b) =>
    b.localeCompare(a)
  );
  const filteredMatches = matches.filter((m) => m.season === selectedSeason);

  const stats = {
    W: filteredMatches.filter((m) => m.result === "W").length,
    D: filteredMatches.filter((m) => m.result === "D").length,
    L: filteredMatches.filter((m) => m.result === "L").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-3">⚽ משחקי גמלופדיה</h1>
          <p className="text-xl text-blue-100">ארכיון משחקים וסטטיסטיקות לאורך השנים</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
