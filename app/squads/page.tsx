"use client";

import { useEffect, useState } from "react";

interface LegendaryPlayer {
  id: number;
  name: string;
  englishName: string;
  position: string;
  englishPosition: string;
  yearsActive: string;
  description: string;
  englishDescription: string;
  achievements: string[];
}

interface RecentPlayer {
  id: number;
  name: string;
  englishName: string;
  position: string;
  englishPosition: string;
  nationality: string;
  englishNationality: string;
  joinedYear: number;
  number: number;
}

interface Manager {
  id: number;
  name: string;
  englishName: string;
  yearsActive: string;
  achievements: string;
  englishAchievements: string;
}

interface PlayersData {
  legendaryPlayers: LegendaryPlayer[];
  recentPlayers: RecentPlayer[];
  managers: Manager[];
}

const defaultData: PlayersData = { legendaryPlayers: [], recentPlayers: [], managers: [] };

export default function Squads() {
  const [data, setData] = useState<PlayersData>(defaultData);

  useEffect(() => {
    fetch("/data/players.json")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Failed to load players:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-[180px]">👥</div>
          <div className="absolute bottom-5 right-5 text-[180px]">⭐</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-black mb-6">👥 סגלי הקבוצה</h1>
          <p className="text-2xl md:text-3xl text-red-100 font-bold mb-4">שחקנים אגדיים, כוכבים עדכניים ומאמנים חכמים</p>
          <p className="text-lg text-red-100/90 max-w-2xl mx-auto">מנהיגים שהביאו את הפועל לגבהים, ושחקנים שעשו הפרש</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        {/* Managers Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-4">מאמנים</h2>
            <p className="text-gray-600 text-lg">מנהיגים שעיצבו את הקבוצה והביאו ניצחונות</p>
          </div>
          <div className="grid gap-6">
            {data.managers.map((manager) => (
              <div key={manager.id} className="card card-with-border">
                <h3 className="text-2xl font-black text-red-700 mb-3">{manager.name}</h3>
                <p className="text-gray-600 mb-3">
                  <span className="font-semibold">שנים:</span> {manager.yearsActive}
                </p>
                <p className="text-gray-700">{manager.achievements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legendary Players Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">שחקנים אגדיים</h2>
          <div className="grid gap-6">
            {data.legendaryPlayers.map((player) => (
              <div key={player.id} className="card card-with-border">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-red-700 mb-3">{player.name}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">תפקיד:</span> {player.position}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">שנים פעיל:</span> {player.yearsActive}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{player.description}</p>
                {player.achievements.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">הישגים:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {player.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Players Section */}
        <div>
          <h2 className="text-4xl font-black mb-8">שחקנים עדכניים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.recentPlayers.map((player) => (
              <div key={player.id} className="card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-red-600 opacity-50">
                    {player.number}
                  </span>
                  <h3 className="text-xl font-black text-red-700">{player.name}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">תפקיד:</span> {player.position}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">לאום:</span> {player.nationality}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">הצטרף:</span> {player.joinedYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
