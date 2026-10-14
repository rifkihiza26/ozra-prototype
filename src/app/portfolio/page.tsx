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
    <div>
      {/* ── PAGE HERO ── */}
      <section
        style={{
          padding: "72px 48px 56px",
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">Galeri Produksi</div>
          <h1 className="section-title">
            OUR <em>PORTFOLIO</em>
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "14px",
              color: "rgba(240,234,216,0.55)",
              marginTop: "20px",
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
          padding: "0",
          background: "var(--black)",
        }}
      >
        <div style={{ padding: "0 48px 80px" }} className="px-0 md:px-12">
          <div style={{ paddingTop: "32px" }}>
            <PortfolioList items={PORTFOLIO_DATA} showFilter />
          </div>
        </div>
      </section>
    </div>
  );
}
