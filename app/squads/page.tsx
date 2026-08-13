"use client";

import { useState } from "react";

interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  season: string;
}

interface Squad {
  season: string;
  coach: string;
  players: Player[];
}

const squads: Squad[] = [
  {
    season: "2023-24",
    coach: "עמירם לוין",
    players: [
      { id: 1, name: "אלעד לנדר", number: 1, position: "שוער", season: "2023-24" },
      { id: 2, name: "עומר בלבט", number: 2, position: "הגנה", season: "2023-24" },
      { id: 3, name: "שי שדה", number: 3, position: "הגנה", season: "2023-24" },
      { id: 4, name: "דוד זוקרמן", number: 4, position: "הגנה", season: "2023-24" },
      { id: 5, name: "אוסי אלסו", number: 5, position: "קשר", season: "2023-24" },
      { id: 6, name: "אמנון צור", number: 6, position: "קשר", season: "2023-24" },
      { id: 7, name: "ניקולה מיליוק", number: 7, position: "התקפה", season: "2023-24" },
      { id: 8, name: "טוראן חמיס", number: 8, position: "התקפה", season: "2023-24" },
      { id: 9, name: "דיאגו ירבס", number: 9, position: "התקפה", season: "2023-24" },
      { id: 10, name: "לוטן אלתרמן", number: 10, position: "התקפה", season: "2023-24" },
      { id: 11, name: "מוהמד אבו עוביידה", number: 11, position: "התקפה", season: "2023-24" },
    ],
  },
  {
    season: "2022-23",
    coach: "יואב תלמה",
    players: [
      { id: 12, name: "אלעד לנדר", number: 1, position: "שוער", season: "2022-23" },
      { id: 13, name: "עומר בלבט", number: 2, position: "הגנה", season: "2022-23" },
      { id: 14, name: "שי שדה", number: 3, position: "הגנה", season: "2022-23" },
      { id: 15, name: "דוד זוקרמן", number: 4, position: "הגנה", season: "2022-23" },
      { id: 16, name: "אוסי אלסו", number: 5, position: "קשר", season: "2022-23" },
      { id: 17, name: "ניקולה מיליוק", number: 7, position: "התקפה", season: "2022-23" },
      { id: 18, name: "טוראן חמיס", number: 8, position: "התקפה", season: "2022-23" },
      { id: 19, name: "דיאגו ירבס", number: 9, position: "התקפה", season: "2022-23" },
      { id: 20, name: "ליאור רפאלוביץ", number: 10, position: "התקפה", season: "2022-23" },
    ],
  },
];

export default function Squads() {
  const [selectedSeason, setSelectedSeason] = useState<string>("2023-24");

  const currentSquad = squads.find((s) => s.season === selectedSeason);

  const positions = ["שוער", "הגנה", "קשר", "התקפה"];

  const getPositionColor = (position: string) => {
    switch (position) {
      case "שוער":
        return "bg-purple-100 text-purple-700";
      case "הגנה":
        return "bg-green-100 text-green-700";
      case "קשר":
        return "bg-blue-100 text-blue-700";
      case "התקפה":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-3">👥 סגלי גמלופדיה</h1>
          <p className="text-xl text-yellow-100">שחקנים ומאמנים מארגנים לפי עונה ותפקיד</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-4">בחר עונה</h2>
          <div className="flex gap-2 flex-wrap">
            {squads.map((squad) => (
              <button
                key={squad.season}
                onClick={() => setSelectedSeason(squad.season)}
                className={`px-6 py-2 rounded font-bold transition-all ${
                  selectedSeason === squad.season
                    ? "bg-yellow-600 text-white"
                    : "bg-white border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                }`}
              >
                {squad.season}
              </button>
            ))}
          </div>
        </div>

        {currentSquad && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-black mb-2">מאמן</h2>
            <p className="text-xl text-yellow-600 font-black">{currentSquad.coach}</p>
          </div>
        )}

        {currentSquad && (
          <div className="space-y-8">
            {positions.map((position) => {
              const positionPlayers = currentSquad.players.filter(
                (p) => p.position === position
              );

              if (positionPlayers.length === 0) return null;

              return (
                <div key={position}>
                  <h3 className="text-2xl font-black mb-4 text-gray-800">
                    {position}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {positionPlayers.map((player) => (
                      <div
                        key={player.id}
                        className={`rounded-lg p-6 text-right ${getPositionColor(
                          position
                        )}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-4xl font-black opacity-50">
                            {player.number}
                          </span>
                          <h4 className="text-lg font-black">{player.name}</h4>
                        </div>
                        <p className="text-sm font-semibold">{position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-black mb-6">מידע כללי על הסגלים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-600 mb-2">
                {squads.length}
              </div>
              <p className="text-gray-600">עונות מתועדות</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-600 mb-2">
                {squads.reduce((acc, s) => acc + s.players.length, 0)}
              </div>
              <p className="text-gray-600">שחקנים בסך הכל</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-600 mb-2">
                {squads.length}
              </div>
              <p className="text-gray-600">מאמנים</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
