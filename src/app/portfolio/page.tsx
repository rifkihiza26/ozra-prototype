import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import PortfolioList from "@/components/portfolio/PortfolioList";

export const metadata: Metadata = {
  title: "Portfolio — Seragam Taktis & Apparel Custom Ozra Tactical",
  description:
    "Galeri portofolio PDL, workshirt, BDU, corporate uniform, jersey sublimasi, dan tactical apparel custom yang diproduksi oleh Ozra Tactical.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-[106px] w-full overflow-x-hidden">
      {/* ── PAGE HERO ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(48px, 6vw, 72px) 0",
        }}
      >
        <div className="section-container">
          <div className="section-label">Galeri Produksi</div>
          <h1 className="section-title">
            OUR <em>PORTFOLIO</em>
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "14px",
              color: "rgba(240,234,216,0.55)",
              marginTop: "16px",
              maxWidth: "560px",
              lineHeight: 1.8,
            }}
          >
            {PORTFOLIO_DATA.length} item — PDL, Workshirt, BDU, Jersey Sublimasi, Corporate Uniform, dan aksesoris taktis dari klien instansi, militer, dan komunitas olahraga.
          </p>
        </div>
      </section>

      {/* ── GRID + FILTER ── */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(36px, 5vw, 64px) 0",
        }}
      >
        <div className="section-container">
          <PortfolioList items={PORTFOLIO_DATA} showFilter />
        </div>
      </section>
    </div>
  );
}
