import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Road Next",
  description: "Sample fullstack Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed left-0 right-0 top-0 z-20 flex justify-between py-2.5 px-5 border-b bg-white">
          <div>
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
          </div>
          <div>
            <Link href="/tickets" className="text-sm underline">
              Tickets
            </Link>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-slate-300 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
