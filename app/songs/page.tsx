"use client";

import { useState } from "react";

interface Song {
  id: number;
  title: string;
  year: number;
  lyrics: string;
  youtubeId?: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: "אדום לבן אדום",
    year: 1980,
    lyrics: "אדום לבן אדום, צבעי הלב שלי\nהפועל קודם הכל, ועד היום האחרון שלי",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "הפועל גדול",
    year: 1990,
    lyrics: "הפועל גדול, הפועל חזק\nבכל משחק ניצחה, בכל משחק ניצחה",
  },
  {
    id: 3,
    title: "בנו של הפועל",
    year: 2000,
    lyrics: "אני בן של הפועל, מתוך הלב שלי\nאדום לבן, ללא הפסקה, עד היום שלי",
  },
  {
    id: 4,
    title: "משחק מלא חיזוק",
    year: 2010,
    lyrics: "משחק מלא חיזוק, קרב עד הסוף\nהפועל בכל משחק, תמיד תמיד נלחם",
  },
  {
    id: 5,
    title: "באר שבע הזהב",
    year: 2015,
    lyrics: "באר שבע הזהב, עיר של השחקנים\nהפועל יוצא זוכה, בכל מקום בעולם",
  },
];

export default function Songs() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const years = [...new Set(songs.map((s) => s.year))].sort((a, b) => b - a);
  const filteredSongs = selectedYear
    ? songs.filter((s) => s.year === selectedYear)
    : songs;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-3">🐪 שירי גמלופדיה</h1>
          <p className="text-xl text-yellow-100">אוסף שירים קלאסיים של הפועל לאורך השנים</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">סנן לפי שנה</h2>
              <button
                onClick={() => setSelectedYear(null)}
                className={`block w-full text-right py-2 px-3 rounded mb-2 font-semibold ${
                  selectedYear === null
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-yellow-50 border border-yellow-200"
                }`}
              >
                הכל
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`block w-full text-right py-2 px-3 rounded mb-2 font-semibold ${
                    selectedYear === year
                      ? "bg-yellow-500 text-white"
                      : "hover:bg-yellow-50 border border-yellow-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-2">
            {selectedSong ? (
              <div className="bg-white rounded-lg shadow p-8">
                <button
                  onClick={() => setSelectedSong(null)}
                  className="text-yellow-600 font-bold mb-6 hover:text-yellow-700"
                >
                  ← חזור לרשימה
                </button>
                <div className="mb-6">
                  <h2 className="text-3xl font-black mb-2">{selectedSong.title}</h2>
                  <p className="text-gray-500 text-lg">שנה: {selectedSong.year}</p>
                </div>

                {selectedSong.youtubeId && (
                  <div className="mb-8">
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
                      title={selectedSong.title}
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                )}

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-black mb-4">מילים</h3>
                  <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed font-semibold">
                    {selectedSong.lyrics}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredSongs.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => setSelectedSong(song)}
                    className="bg-white rounded-lg shadow p-6 text-right hover:shadow-lg transition-shadow border-l-4 border-yellow-500 hover:border-yellow-600"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500 text-sm">{song.year}</div>
                      <div>
                        <h3 className="text-xl font-black text-yellow-600">{song.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {song.lyrics.split("\n")[0]}...
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
