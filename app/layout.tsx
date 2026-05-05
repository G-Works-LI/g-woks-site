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

export const metadata = {
  title: "G-Works RC – Upgrade Parts für ASW 28 V2",
  description: "Hochwertige 3D-gedruckte Upgrade Teile für die ASW 28 V2.",

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "G-Works RC",
    description: "Upgrade Parts für ASW 28 V2 – langlebig, getestet, durchdacht.",
    url: "https://g-works-site.vercel.app",
    siteName: "G-Works",
    images: [
      {
        url: "/logo-preview-v2.png",
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