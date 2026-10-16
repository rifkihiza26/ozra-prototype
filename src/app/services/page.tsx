import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
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
    <div className="pt-[106px] pb-20 w-full overflow-x-hidden">
      {/* ── 1. PAGE HERO (CENTERED) ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(60px, 8vw, 100px) 0",
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
            opacity: 0.25,
          }}
        />

        <div
          className="relative max-w-4xl mx-auto text-center"
          style={{ padding: "0 clamp(20px, 5vw, 48px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-olive)] bg-[var(--surface)] text-[var(--olive-light)] text-xs font-mono tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--olive)] animate-pulse" />
            Solusi Manufaktur Terpadu
          </div>

          <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-normal uppercase leading-tight mb-5">
            LAYANAN MANUFAKTUR <br className="hidden sm:inline" />
            <span className="text-[var(--tan-light)]">OZRA TACTICAL</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--cream)]/75 leading-relaxed font-sans">
            Spesialisasi produksi seragam dinas lapangan, workshirt taktikal,
            seragam korporat, dan sportswear sublimasi dengan standar mutu presisi di Indonesia.
          </p>
        </div>
      </section>

      {/* ── 2. THREE MAIN SERVICES (CONTAINED & CENTERED) ── */}
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(20px, 5vw, 48px)" }}>
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
              className="my-12 sm:my-16"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "16px",
                background: "var(--surface)",
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
              }}
            >
              {/* Split panel: image | content */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image side */}
                <div
                  className={`relative overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[520px] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/30" />

                  {/* Number overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(4rem, 8vw, 7rem)",
                      fontWeight: 900,
                      color: "rgba(240,234,216,0.18)",
                      lineHeight: 1,
                      letterSpacing: -2,
                      userSelect: "none",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content side */}
                <div
                  style={{
                    background: isEven ? "var(--near-black)" : "var(--surface)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "clamp(28px, 5vw, 52px)",
                  }}
                  className={`gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--olive)]" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--olive-light)] font-bold">
                        Layanan Utama {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="font-condensed text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-wider leading-tight">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--cream)]/75 leading-relaxed font-sans">
                    {srv.description}
                  </p>

                  {/* Scope list */}
                  <div
                    style={{
                      backgroundColor: "var(--surface-mid)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      padding: "20px",
                    }}
                  >
                    <div className="font-condensed text-xs font-bold uppercase tracking-wider text-[var(--tan-light)] mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--olive-light)]" />
                      <span>Cakupan Spesifikasi Produksi:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.scope.map((scopeItem, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-[var(--cream)]/80 font-sans"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--olive)] shrink-0" />
                          <span>{scopeItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "var(--olive)",
                        color: "#09090a",
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-condensed font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-lg"
                    >
                      <span>Konsultasi Produk Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Portfolio Preview */}
              {relatedPortfolio.length > 0 && (
                <div
                  style={{
                    background: "var(--surface-mid)",
                    borderTop: "1px solid var(--border)",
                    padding: "clamp(20px, 3vw, 32px)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[var(--olive-light)] uppercase tracking-wider font-bold">
                      Contoh Portofolio Terkait:
                    </span>
                    <Link
                      href="/portfolio"
                      className="text-xs text-[var(--tan-light)] hover:text-white transition-colors font-mono"
                    >
                      Lihat Semua →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {relatedPortfolio.map((p) => (
                      <Link
                        key={p.id}
                        href={`/portfolio/${p.slug}`}
                        style={{ textDecoration: "none", display: "block" }}
                        className="group"
                      >
                        <div
                          style={{
                            position: "relative",
                            aspectRatio: "1/1",
                            overflow: "hidden",
                            borderRadius: "10px",
                            border: "1px solid var(--border)",
                            background: "var(--black)",
                          }}
                        >
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          <div className="absolute bottom-2.5 left-2.5 right-2.5">
                            <div className="font-mono text-[9px] text-[var(--olive-light)] uppercase tracking-wider mb-1">
                              {p.category}
                            </div>
                            <div className="font-condensed text-xs font-bold text-white uppercase tracking-wide truncate">
                              {p.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ── 3. PRODUCTION PROCESS (CENTERED CONTAINER) ── */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(56px, 7vw, 84px) 0",
        }}
        className="my-10"
      >
        <div
          className="max-w-7xl mx-auto space-y-10"
          style={{ padding: "0 clamp(20px, 5vw, 48px)" }}
        >
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-olive)] bg-[var(--surface-mid)] text-[var(--olive-light)] text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Alur Kerja Standar
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">
              PROSES PRODUKSI KAMI
            </h2>
            <p className="text-xs sm:text-sm text-[var(--grey-mid)] font-sans leading-relaxed">
              Manajemen manufaktur terstruktur menjamin kualitas material, kerapihan jahitan, dan ketepatan jadwal pengiriman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: i % 2 === 0 ? "var(--surface-mid)" : "var(--black)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "var(--olive)",
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  {step.num}
                </div>
                <h4 className="font-condensed text-base font-bold text-white uppercase tracking-wider">
                  {step.title}
                </h4>
                <p className="text-xs text-[var(--cream)]/70 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA STRIP (CENTERED) ── */}
      <section
        style={{
          background: "var(--olive-dark)",
          padding: "clamp(56px, 7vw, 96px) 0",
        }}
        className="text-center"
      >
        <div
          className="max-w-3xl mx-auto space-y-6"
          style={{ padding: "0 clamp(20px, 5vw, 48px)" }}
        >
          <h3 className="font-condensed text-3xl sm:text-5xl font-black text-white uppercase tracking-wider leading-tight">
            MEMERLUKAN PENYESUAIAN POLA ATAU <br className="hidden sm:inline" />
            <span className="text-[var(--tan-light)] italic">SAMPLING KHUSUS?</span>
          </h3>

          <p className="text-sm sm:text-base text-[var(--cream)]/85 leading-relaxed font-sans max-w-xl mx-auto">
            Tim kami siap mendukung pembuatan sampel fisik (approval sample) untuk validasi bahan baku dan bordir sebelum tahap produksi massal.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center pt-2">
            <Link
              href="/contact"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--black)",
              }}
              className="px-8 py-4 rounded-xl font-condensed font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg"
            >
              Ajukan Diskusi Sampling →
            </Link>
            <Link
              href="/portfolio"
              style={{
                border: "1px solid rgba(240,234,216,0.4)",
                color: "var(--cream)",
              }}
              className="px-8 py-4 rounded-xl font-condensed font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Lihat Portfolio Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
