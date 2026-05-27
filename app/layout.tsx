import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicius Hansel",
  description:
    "Portfólio de Vinicius Hansel — Backend, sistemas distribuídos e engenharia de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        scroll-smooth
      `}
    >
      <body
        className="
          min-h-full
          bg-zinc-950
          text-zinc-100
          antialiased
          font-sans
          selection:bg-cyan-400
          selection:text-zinc-950
        "
      >
        {children}
      </body>
    </html>
  );
}