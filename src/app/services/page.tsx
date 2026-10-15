import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DATA } from "@/data/services";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services — Layanan Manufaktur Apparel & Tactical Gear",
  description:
    "Layanan manufaktur spesialis seragam taktis, workshirt lapangan, corporate uniform, pakaian dinas, dan jersey sublimasi custom Ozra Tactical.",
};

const PROCESS_STEPS = [
  { num: "01", title: "Konsultasi & Kebutuhan", desc: "Diskusi mendalam mengenai kebutuhan seragam, identitas kesatuan, pemilihan material kain, serta spesifikasi operasional di lapangan." },
  { num: "02", title: "Desain & Sampling", desc: "Pembuatan mockup desain teknis dan sample fisik untuk validasi pola, bordir/sublimasi, serta kesesuaian fitting sebelum produksi." },
  { num: "03", title: "Approval & Persiapan", desc: "Persetujuan resmi sample oleh klien dan persiapan rantai pasok material berkualitas tinggi serta penjadwalan antrean mesin." },
  { num: "04", title: "Produksi & QC", desc: "Proses cutting, bordir berkerapatan tinggi, penjahitan presisi, dan inspeksi bertingkat di setiap tahapan pengerjaan." },
  { num: "05", title: "Packaging & Pengiriman", desc: "Finishing uap rapi, penataan per ukuran, dan pengiriman tepat waktu ke alamat instansi pemesan di seluruh Indonesia." },
];

export default function ServicesPage() {
  return (
    <div>
      {/* ── 1. PAGE HERO ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(56px, 7vw, 96px) 0",
        }}
      >
        {/* Tactical grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.3,
          }}
        />
        <div className="section-container" style={{ position: "relative" }}>
          <div className="section-label">Solusi Manufaktur Terpadu</div>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(2.2rem,6vw,5.5rem)", maxWidth: 900, marginTop: 16 }}
          >
            Layanan Manufaktur{" "}
            <em>Ozra Tactical</em>
          </h1>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: 16,
              color: "var(--grey-mid)",
              lineHeight: 1.8,
              maxWidth: 600,
              marginTop: 20,
            }}
          >
            Spesialisasi produksi seragam taktis, pakaian kerja lapangan,
            seragam korporat, dan sportswear dengan teknologi manufaktur
            presisi di Indonesia.
          </p>
        </div>
      </section>

      {/* ── 2. THREE MAIN SERVICES ── */}
      {SERVICES_DATA.map((srv, index) => {
        const isEven = index % 2 === 1;
        const relatedPortfolio = PORTFOLIO_DATA.filter((p) => {
          if (srv.id === "tactical-workshirt")
            return p.category === "Tactical & Workshirt" || p.category === "Pakaian Dinas";
          if (srv.id === "corporate-institutional")
            return p.category === "Corporate & Institutional Uniform";
          return p.category === "Sportswear & Jersey Sublimasi";
        }).slice(0, 4);

        return (
          <section
            key={srv.id}
            id={srv.slug}
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            {/* Split panel: image | content (responsive stacked on mobile/tablet) */}
            <div
              className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[480px]"
            >
              {/* Image side */}
              <div
                className={`relative overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Number overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "clamp(5rem, 10vw, 8rem)",
                    fontWeight: 900,
                    color: "rgba(240,234,216,0.12)",
                    lineHeight: 1,
                    letterSpacing: -4,
                    userSelect: "none",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content side */}
              <div
                style={{
                  background: isEven ? "var(--near-black)" : "var(--black)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className={`p-6 sm:p-10 md:p-12 lg:p-16 gap-6 sm:gap-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 4,
                      textTransform: "uppercase",
                      color: "var(--olive-light)",
                      marginBottom: 10,
                    }}
                  >
                    Layanan Utama {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                      fontWeight: 900,
                      color: "var(--cream)",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      lineHeight: 1.1,
                    }}
                  >
                    {srv.title}
                  </h2>
                </div>

                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontSize: 14.5,
                    color: "var(--grey-mid)",
                    lineHeight: 1.8,
                  }}
                >
                  {srv.description}
                </p>

                {/* Scope list */}
                <div>
                  <div
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "var(--olive)",
                      marginBottom: 12,
                    }}
                  >
                    Cakupan Produksi:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {srv.scope.map((scopeItem, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontFamily: "Barlow, sans-serif",
                          fontSize: 13,
                          color: "rgba(240,234,216,0.7)",
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            background: "var(--olive)",
                            flexShrink: 0,
                            transform: "rotate(45deg)",
                          }}
                        />
                        {scopeItem}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: 4 }}>
                  <Link
                    href="/contact"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "var(--black)",
                      background: "var(--olive)",
                      padding: "13px 26px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "background 0.2s",
                    }}
                  >
                    Konsultasi Produk Ini →
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Portfolio Preview */}
            {relatedPortfolio.length > 0 && (
              <div
                style={{
                  background: "var(--near-black)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div className="max-w-7xl mx-auto px-5 py-8 sm:px-8 lg:px-12">
                <div
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "var(--olive-light)",
                    marginBottom: 20,
                  }}
                >
                  Contoh Portofolio Terkait:
                </div>
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                >
                  {relatedPortfolio.map((p) => (
                    <Link
                      key={p.id}
                      href={`/portfolio/${p.slug}`}
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "var(--black)" }}>
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          style={{ objectFit: "cover", transition: "transform 0.5s" }}
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(9,9,10,0.9) 0%, transparent 60%)",
                          }}
                        />
                        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
                          <div
                            style={{
                              fontFamily: "Barlow Condensed, sans-serif",
                              fontSize: 9,
                              fontWeight: 700,
                              letterSpacing: 2,
                              textTransform: "uppercase",
                              color: "var(--olive-light)",
                              marginBottom: 2,
                            }}
                          >
                            {p.category}
                          </div>
                          <div
                            style={{
                              fontFamily: "Barlow Condensed, sans-serif",
                              fontSize: 12,
                              fontWeight: 700,
                              color: "var(--cream)",
                              letterSpacing: 0.5,
                              lineHeight: 1.1,
                            }}
                          >
                            {p.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* ── 3. PRODUCTION PROCESS ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
        }}
        className="section-pad"
      >
        <div className="section-container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-label">Alur Kerja</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Proses <em>Produksi Kami</em>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2"
          >
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: i % 2 === 0 ? "var(--black)" : "var(--grey-dark)",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "3rem",
                    fontWeight: 900,
                    color: "var(--olive)",
                    lineHeight: 1,
                    opacity: 0.5,
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontSize: 12,
                    color: "var(--grey-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA STRIP ── */}
      <section
        style={{
          background: "var(--olive-dark)",
          textAlign: "center",
          padding: "clamp(48px, 6vw, 80px) 0",
        }}
      >
        <div className="section-container" style={{ maxWidth: 840 }}>
          <h3
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 900,
              color: "var(--cream)",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Memerlukan Penyesuaian Pola atau{" "}
            <em style={{ fontStyle: "italic", color: "var(--tan-light)" }}>
              Sampling Khusus?
            </em>
          </h3>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: 15,
              color: "rgba(240,234,216,0.7)",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Tim kami mendukung pembuatan sample uji coba bahan dan bordir
            sebelum produksi massal dijalankan.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--black)",
                background: "var(--cream)",
                padding: "14px 32px",
                textDecoration: "none",
              }}
            >
              Ajukan Diskusi Sampling →
            </Link>
            <Link
              href="/portfolio"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--cream)",
                border: "1px solid rgba(240,234,216,0.4)",
                padding: "14px 32px",
                textDecoration: "none",
              }}
            >
              Lihat Portfolio Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
