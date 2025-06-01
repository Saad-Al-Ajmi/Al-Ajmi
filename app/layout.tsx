// app/layout.tsx
"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

// 1. Import LanguageProvider
import { LanguageProvider } from "../context/LanguageContext"; // Adjusted path assuming context is in app/context
import { Providers } from "./providers"; // Your existing Providers component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Local language state and toggle function are removed from here.
  // The useEffect for document.documentElement.lang is also removed (handled by LanguageProvider).

  return (
    // The lang attribute will be dynamically set by LanguageProvider's useEffect.
    // suppressHydrationWarning is useful if the initial server render might differ.
    <html suppressHydrationWarning lang="en" className="scroll-smooth"> {/* Default lang, will be updated */}
      <head /> {/* Next.js 13+ manages head content differently, often via metadata in page.tsx or layout.tsx */}
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* 2. Wrap your application with LanguageProvider */}
        <LanguageProvider>
          <Providers> {/* Your existing Providers wrapper */}
            {/* Header no longer needs language and toggleLanguage props here */}
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}