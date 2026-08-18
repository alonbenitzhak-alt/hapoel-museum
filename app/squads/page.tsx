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
      <section className="gradient-to-right text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-black mb-3">👥 סגלים</h1>
          <p className="text-xl text-red-100">שחקנים אגדיים, שחקנים עדכניים ומאמנים</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Managers Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">מאמנים</h2>
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
