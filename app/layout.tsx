import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/custom/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost Pixel Studios",
  description: "Ghost Pixel Studios is a design studio that specializes in creating beautiful, functional, and user-friendly websites and applications.",
  openGraph: {
    title: "Ghost Pixel Studios",
    description: "Transforming complex ideas into scalable, intuitive software – fast.",
    url: "https://www.ghostpixel.studio", // Replace with your actual domain
    siteName: "Ghost Pixel Studios",
    images: [
      {
        url: "https://www.ghostpixel.studio/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Ghost Pixel Studios - Product Design Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Pixel Studios",
    description: "Transforming complex ideas into scalable, intuitive software – fast.",
    // site: "@yourtwitterhandle", // Replace with your Twitter handle
    // creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["https://www.ghostpixel.studio/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
  // You could also add:
  // keywords: ["product design", "UI/UX", "design studio", "web design", "app design", "software design"],
  // icons: {
  //   icon: '/favicon.ico', // Example path
  //   apple: '/apple-touch-icon.png', // Example path
  // },
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
