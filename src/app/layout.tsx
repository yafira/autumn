import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autumn — AI-enabled marketing for independent hotels",
  description:
    "Autumn turns Google into your #1 direct-booking channel. Done-for-you search engine marketing for independent inns, B&Bs and boutique hotels — risk-free.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- app-router layout, not pages/_document */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
