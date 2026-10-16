"use client";

import { useState, useCallback } from "react";
import type { PortfolioItem } from "@/types";
import PortfolioCard from "./PortfolioCard";
import Lightbox from "@/components/ui/Lightbox";

const FILTER_TABS = [
  { label: "All Items", value: "all" },
  { label: "Pakaian Dinas", value: "Pakaian Dinas" },
  { label: "Tactical & Workshirt", value: "Tactical & Workshirt" },
  { label: "Sportswear & Jersey", value: "Sportswear & Jersey Sublimasi" },
  { label: "Corporate", value: "Corporate & Institutional Uniform" },
  { label: "Trousers & Accessories", value: "Trousers & Accessories" },
];

interface PortfolioListProps {
  items: PortfolioItem[];
  showFilter?: boolean;
}

export default function PortfolioList({ items, showFilter = true }: PortfolioListProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filteredItems.length) % filteredItems.length)),
    [filteredItems.length]
  );
  const nextLightbox = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filteredItems.length)),
    [filteredItems.length]
  );

  return (
    <div>
      {/* Filter tabs — Molay-style pill-less, tab bar with smooth horizontal swipe on mobile */}
      {showFilter && (
        <div
          className="flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar gap-1 sm:gap-0.5 mb-3 pb-1"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                style={{
                  fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  background: isActive ? "var(--olive)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--grey-mid)",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  borderBottom: isActive ? "2px solid var(--olive-light)" : "2px solid transparent",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--grey-mid)";
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid — responsive 1 col mobile, 2 col tablet, 4 col desktop */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2"
      >
        {filteredItems.map((item, idx) => (
          <div key={item.id} style={{ position: "relative" }}>
            <PortfolioCard item={item} />
            {/* Quick preview button */}
            <button
              onClick={() => openLightbox(idx)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "32px",
                height: "32px",
                background: "rgba(9,9,10,0.75)",
                border: "1px solid var(--border)",
                color: "var(--cream)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
                fontSize: "14px",
                fontFamily: "'Barlow Condensed', sans-serif",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--olive)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--olive)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(9,9,10,0.75)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
              aria-label="Preview foto"
            >
              ⊕
            </button>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div
          style={{
            padding: "80px 24px",
            textAlign: "center",
            color: "var(--grey-mid)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Tidak ada item dalam kategori ini.
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        images={filteredItems.map((item) => item.image)}
        currentIndex={lightboxIndex ?? 0}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />

    </div>
  );
}
