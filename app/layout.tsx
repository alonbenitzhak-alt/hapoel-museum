import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גמלופדיה - ארכיון האוהדים של הפועל באר שבע",
  description: "ארכיון דיגיטלי של הפועל באר שבע - שירים, משחקים, חולצות וסגלים",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-white text-gray-900">
        <nav className="sticky top-0 z-50 gradient-to-right text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 font-black text-2xl hover:opacity-90 transition-opacity">
              <span className="text-3xl">🏛️</span>
              <span>גמלופדיה</span>
            </Link>
            
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/songs" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold flex items-center gap-2 hover:bg-red-800/30">
                🎵 שירים
              </Link>
              <Link href="/matches" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold flex items-center gap-2 hover:bg-red-800/30">
                ⚽ משחקים
              </Link>
              <Link href="/jerseys" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold flex items-center gap-2 hover:bg-red-800/30">
                👕 חולצות
              </Link>
              <Link href="/squads" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold flex items-center gap-2 hover:bg-red-800/30">
                👥 סגלים
              </Link>
              <Link href="/" className="hover:text-red-100 px-4 py-2 rounded-lg transition-all font-semibold flex items-center gap-2 hover:bg-red-800/30">
                🏆 הישגים
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-black mb-3 flex items-center gap-2">
                  🏛️ גמלופדיה
                </h3>
                <p className="text-gray-400">ארכיון האוהדים של הפועל באר שבע</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">קישורים</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <Link href="/" className="block hover:text-red-500 transition-colors">בית</Link>
                  <Link href="/songs" className="block hover:text-red-500 transition-colors">שירים</Link>
                  <Link href="/matches" className="block hover:text-red-500 transition-colors">משחקים</Link>
                  <Link href="/jerseys" className="block hover:text-red-500 transition-colors">חולצות</Link>
                  <Link href="/squads" className="block hover:text-red-500 transition-colors">סגלים</Link>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">עלינו</h4>
                <p className="text-sm text-gray-400">שמירה על הזיכרון, חגיגת ההיסטוריה של הפועל באר שבע לדור הבא</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
              <p>© 2024 גמלופדיה - ארכיון האוהדים של הפועל באר שבע | כל הזכויות שמורות</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
