// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
   <html lang="en" className="h-full">
  <body className="min-h-screen w-full bg-electric-gradient bg-cover bg-no-repeat text-white">
  <div className="flex min-h-screen w-full bg-electric-gradient">
    <Sidebar />
    <main className="flex-1 p-6 backdrop-blur-sm bg-black/30 rounded-lg m-4">
      {children}
    </main>
  </div>
</body>

</html>

  );
}
