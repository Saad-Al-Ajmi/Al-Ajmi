// components/Hero/index.tsx
"use client";

import Link from "next/link";
// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext";
import { useState, FormEvent } from "react";
import Modal from "../Modal";
import type { ContainerInfo } from "../../types/container";

const Hero = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  const [containerNumber, setContainerNumber] = useState("");
  const [data, setData] = useState<ContainerInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const clean = containerNumber.trim().toUpperCase().replace(/\s+/g, "");
    if (clean.length !== 11) {
      setError("Container number should be 11 characters (e.g., TEMU1234567)");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/container?containerNumber=${encodeURIComponent(clean)}`);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || `Error: ${res.status}`);
      }
      const typed: ContainerInfo = json;
      setData(json);
      setIsOpen(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="home"
        style={{
          backgroundImage: "url('/images/hero/7.png')", //
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative z-10 h-screen overflow-hidden bg-white dark:bg-gray-dark" //
      >
        <div className="flex h-full items-center pl-[150px]"> {/* */}
          <div
              className="wow fadeInUp max-w-[800px] text-left" // Parent container
              data-wow-delay=".2s"
            >
            {/* 3. Use translated text */}
            <h1 className="mb-5 text-3xl font-bold leading-tight text-blue-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              {translations.hero.title}
            </h1>
            <h3 className="mb-9 font-bold text-blue-900 dark:text-white">
              {translations.hero.subtitle}
            </h3>
            {/* <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
              Speed of Completion & Accuracy of Performance
            </p> */}

            <form onSubmit={handleSubmit} className="relative w-full max-w-md mt-12">
              <input
                type="text"
                value={containerNumber}
                onChange={(e) => setContainerNumber(e.target.value.toUpperCase())}
                placeholder={translations.hero.containerPlaceholder}
                className="w-full shadow-lg shadow-blue-200 rounded-full border border-stroke bg-white px-6 py-4 pr-14 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
              <button
                type="submit"
                disabled={loading || !containerNumber}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-900 p-3 text-white hover:bg-blue-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-white/10 dark:hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" //
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            {error && <p className="mt-2 text-red-600">{error}</p>}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={data ? `Container ${data.ContainerNumber}` : undefined}
      >
        {data ? (
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
            <p><strong>Status:</strong> {data.Status}</p>
            <p><strong>POL:</strong> {data.Pol}</p>
            <p><strong>POD:</strong> {data.Pod}</p>
            <p><strong>Vessel:</strong> {data.Vessel} (Voyage {data.VesselVoyage})</p>
            {data.ArrivalDate && (
              <p><strong>ETA:</strong> {new Date(data.ArrivalDate.Date).toLocaleDateString()}</p>
            )}
            {data.ETA && <p><strong>Delay:</strong> {data.ETA}</p>}
            {data.Co2Emission && <p><strong>CO₂:</strong> {data.Co2Emission}</p>}
            {data.LiveMapUrl && (
              <p><a href={data.LiveMapUrl} target="_blank" className="text-blue-600 underline">Live Map</a></p>
            )}
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default Hero;