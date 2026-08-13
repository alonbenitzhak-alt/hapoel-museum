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
      <body className="bg-white">
        <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold">🔴 הפועל</Link>
            <div className="flex gap-6">
              <Link href="/songs" className="hover:bg-red-700 px-3 py-2 rounded">🎵 שירים</Link>
              <Link href="/matches" className="hover:bg-red-700 px-3 py-2 rounded">⚽ משחקים</Link>
              <Link href="/jerseys" className="hover:bg-red-700 px-3 py-2 rounded">👕 חולצות</Link>
              <Link href="/squads" className="hover:bg-red-700 px-3 py-2 rounded">👥 סגלים</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
