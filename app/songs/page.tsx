"use client";

import { useState, useEffect } from "react";

interface Song {
  id: number;
  title: string;
  englishTitle: string;
  year: number | null;
  lyrics: string;
  englishLyrics: string;
  description: string;
  englishDescription: string;
}

interface Chant {
  id: number;
  name: string;
  englishName: string;
  text: string;
  englishText: string;
  occasion: string;
  englishOccasion: string;
}

interface SongsData {
  songs: Song[];
  chants: Chant[];
}

const defaultData: SongsData = { songs: [], chants: [] };

export default function Songs() {
  const [data, setData] = useState<SongsData>(defaultData);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [showChants, setShowChants] = useState(false);

  useEffect(() => {
    fetch("/data/songs.json")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Failed to load songs:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-black mb-3">🎵 שירים</h1>
          <p className="text-xl text-red-100">אוסף שירי הפועל וקריאות היסטוריות</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Toggle Buttons */}
        <div className="mb-8 flex gap-4 justify-center">
          <button
            onClick={() => {
              setShowChants(false);
              setSelectedSong(null);
            }}
            className={px-8 py-3 rounded-lg font-bold transition-all }
          >
            🎵 שירים
          </button>
          <button
            onClick={() => {
              setShowChants(true);
              setSelectedSong(null);
            }}
            className={px-8 py-3 rounded-lg font-bold transition-all }
          >
            📢 קריאות
          </button>
        </div>

        {!showChants ? (
          <div>
            {selectedSong ? (
              <div className="card card-with-border">
                <button
                  onClick={() => setSelectedSong(null)}
                  className="text-red-600 font-bold mb-6 hover:text-red-700"
                >
                  ← חזור לרשימה
                </button>
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-2 text-red-700">{selectedSong.title}</h2>
                  <p className="text-gray-600 text-lg">{selectedSong.description}</p>
                  {selectedSong.year && (
                    <p className="text-gray-500 text-sm mt-2">שנה: {selectedSong.year}</p>
                  )}
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                  <h3 className="text-xl font-black mb-4">מילים</h3>
                  {selectedSong.lyrics === "יש להוסיף מילים" ? (
                    <p className="text-gray-600 italic">{selectedSong.lyrics}</p>
                  ) : (
                    <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed font-semibold">
                      {selectedSong.lyrics}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {data.songs.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => setSelectedSong(song)}
                    className="card card-with-border text-right hover:shadow-lg hover:border-red-400 transition-all"
                  >
                    <h3 className="text-xl font-black text-red-700 mb-2">
                      {song.title}
                    </h3>
                    <p className="text-gray-600">{song.description}</p>
                    {song.year && (
                      <p className="text-gray-500 text-sm mt-2">📅 {song.year}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-6">
            {data.chants.map((chant) => (
              <div key={chant.id} className="card card-with-border">
                <h3 className="text-2xl font-black text-red-700 mb-3">{chant.name}</h3>
                <p className="text-gray-700 mb-4 text-lg font-semibold">"{chant.text}"</p>
                <p className="text-gray-600">
                  <span className="font-semibold">מתי:</span> {chant.occasion}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
