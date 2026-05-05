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
  title: "G-Works – RC Upgrade Parts",
  description: "Funktionale Upgrade- und Ersatzteile für die Volantex ASW 28 V2.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "G-Works – RC Upgrade Parts",
    description: "Praxisnahe 3D-gedruckte Upgrade-Teile für die ASW 28 V2.",
    url: "https://g-works-site.vercel.app",
    siteName: "G-Works",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "G-Works RC Upgrade Parts",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}