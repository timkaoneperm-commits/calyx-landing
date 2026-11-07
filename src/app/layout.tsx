import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { AgeGate } from "@/components/AgeGate";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CALYX — Delta-9 THC strips · без курения",
  description:
    "CALYX — оральные стрипы Delta-9 THC. Холодная мята, Лесные ягоды, Тёмный шоколад. 10 мг D9 · 30 стрипов · 21+.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
