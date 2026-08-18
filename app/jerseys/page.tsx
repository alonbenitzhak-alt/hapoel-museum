"use client";

import { useEffect, useState } from "react";

interface Jersey {
  id: number;
  season: string;
  era: string;
  englishEra: string;
  description: string;
  englishDescription: string;
  primaryColor: string;
  secondaryColor: string;
  manufacturer: string;
  englishManufacturer: string;
  imageUrl: string | null;
}

interface JerseysData {
  jerseys: Jersey[];
}

const defaultData: JerseysData = { jerseys: [] };

const getColorStyle = (primaryColor: string, secondaryColor: string) => {
  if (primaryColor === "#CC0000" && secondaryColor === "#FFFFFF") {
    return "linear-gradient(90deg, #CC0000 50%, #FFFFFF 50%)";
  }
  return primaryColor;
};

export default function Jerseys() {
  const [data, setData] = useState<JerseysData>(defaultData);

  useEffect(() => {
    fetch("/data/jerseys.json")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Failed to load jerseys:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-to-right text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-black mb-3">👕 חולצות</h1>
          <p className="text-xl text-red-100">ארכיון חולצות הפועל לאורך הדורות</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.jerseys.map((jersey) => (
            <div
              key={jersey.id}
              className="card hover:shadow-2xl transition-all"
            >
              <div
                className="h-40 flex items-center justify-center text-6xl rounded-lg mb-6"
                style={{
                  background: getColorStyle(jersey.primaryColor, jersey.secondaryColor),
                }}
              >
                👕
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-red-600">{jersey.season}</span>
                  <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded font-semibold">
                    {jersey.era}
                  </span>
                </div>

                <h3 className="text-lg font-black mb-3 text-gray-800">
                  {jersey.description}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  <span className="font-semibold">יצרן:</span> {jersey.manufacturer}
                </p>

                <div className="flex gap-2">
                  <span
                    className="text-xs px-3 py-1 rounded font-semibold text-white"
                    style={{ backgroundColor: jersey.primaryColor }}
                  >
                    ראשי
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded font-semibold border-2"
                    style={{
                      backgroundColor: jersey.secondaryColor,
                      borderColor: jersey.primaryColor,
                      color: jersey.primaryColor,
                    }}
                  >
                    משני
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
