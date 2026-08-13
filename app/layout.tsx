import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מוזיאום הפועל הדיגיטלי",
  description: "מוזיאום דיגיטלי של הפועל",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-white text-gray-900">
        <nav className="bg-gradient-to-r from-red-700 to-red-600 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black flex items-center gap-2">
              <span className="text-4xl">🏛️</span>
              <span>הפועל</span>
            </Link>
            <div className="flex gap-8 items-center">
              <Link href="/songs" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 hover:bg-red-800/30">
                <span>🎵</span> שירים
              </Link>
              <Link href="/matches" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 hover:bg-red-800/30">
                <span>⚽</span> משחקים
              </Link>
              <Link href="/jerseys" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 hover:bg-red-800/30">
                <span>👕</span> חולצות
              </Link>
              <Link href="/squads" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold text-lg flex items-center gap-2 hover:bg-red-800/30">
                <span>👥</span> סגלים
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-black mb-2">🏛️ מוזיאום הפועל</h3>
              <p className="text-gray-400">שמירה על הזיכרון, חגיגת ההיסטוריה</p>
            </div>
            <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400">
              <Link href="/" className="hover:text-red-500 transition-colors">בית</Link>
              <Link href="/songs" className="hover:text-red-500 transition-colors">שירים</Link>
              <Link href="/matches" className="hover:text-red-500 transition-colors">משחקים</Link>
              <Link href="/jerseys" className="hover:text-red-500 transition-colors">חולצות</Link>
              <Link href="/squads" className="hover:text-red-500 transition-colors">סגלים</Link>
            </div>
            <div className="border-t border-gray-700 pt-6 text-sm text-gray-500">
              <p>© 2024 מוזיאום הפועל הדיגיטלי | כל הזכויות שמורות</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
