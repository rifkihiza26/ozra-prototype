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
    <div
      style={{
        paddingTop: "106px",
        paddingBottom: "80px",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* ── 1. PAGE HERO (CENTERED) ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(60px, 8vw, 100px) 0",
          width: "100%",
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
            opacity: 0.22,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "54rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            padding: "0 clamp(20px, 5vw, 48px)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid var(--border-olive)",
              background: "var(--surface)",
              color: "var(--olive-light)",
              fontSize: "11px",
              fontFamily: "monospace",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--olive)",
                display: "inline-block",
              }}
            />
            Solusi Manufaktur Terpadu
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              fontWeight: 900,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.08,
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            LAYANAN MANUFAKTUR <br />
            <span style={{ color: "var(--tan-light)" }}>OZRA TACTICAL</span>
          </h1>

          <p
            style={{
              maxWidth: "40rem",
              margin: "0 auto",
              fontSize: "15px",
              color: "rgba(240,234,216,0.75)",
              lineHeight: 1.8,
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Spesialisasi produksi seragam dinas lapangan, workshirt taktikal,
            seragam korporat, dan sportswear sublimasi dengan standar mutu presisi di Indonesia.
          </p>
        </div>
      </section>

      {/* ── 2. THREE MAIN SERVICES (CONTAINED & CENTERED) ── */}
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 clamp(20px, 4vw, 48px)",
          width: "100%",
        }}
      >
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
                marginTop: "48px",
                marginBottom: "48px",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                background: "var(--surface)",
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
              }}
            >
              {/* Split panel: image | content */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                }}
              >
                {/* Image side */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "420px",
                    order: isEven ? 2 : 1,
                  }}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, var(--surface) 0%, transparent 60%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />

                  {/* Number overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(4.5rem, 8vw, 7rem)",
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
                    padding: "clamp(32px, 5vw, 56px)",
                    gap: "24px",
                    order: isEven ? 1 : 2,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--olive)",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "3px",
                          color: "var(--olive-light)",
                          fontWeight: 700,
                        }}
                      >
                        Layanan Utama {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                        fontWeight: 900,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        lineHeight: 1.15,
                      }}
                    >
                      {srv.title}
                    </h2>
                  </div>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(240,234,216,0.75)",
                      lineHeight: 1.8,
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
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
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        color: "var(--tan-light)",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <ShieldCheck style={{ width: "16px", height: "16px", color: "var(--olive-light)" }} />
                      <span>Cakupan Spesifikasi Produksi:</span>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "10px",
                      }}
                    >
                      {srv.scope.map((scopeItem, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "12px",
                            color: "rgba(240,234,216,0.85)",
                            fontFamily: "'Barlow', sans-serif",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "var(--olive)",
                              flexShrink: 0,
                            }}
                          />
                          <span>{scopeItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: "6px" }}>
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "var(--olive)",
                        color: "#09090a",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "14px 26px",
                        borderRadius: "10px",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "2.5px",
                        textDecoration: "none",
                        boxShadow: "0 10px 25px -10px rgba(126,139,82,0.5)",
                      }}
                    >
                      <span>Konsultasi Produk Ini</span>
                      <ArrowRight style={{ width: "16px", height: "16px" }} />
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        color: "var(--olive-light)",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        fontWeight: 700,
                      }}
                    >
                      Contoh Portofolio Terkait:
                    </span>
                    <Link
                      href="/portfolio"
                      style={{
                        fontSize: "11px",
                        color: "var(--tan-light)",
                        textDecoration: "none",
                        fontFamily: "monospace",
                      }}
                    >
                      Lihat Semua →
                    </Link>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
                      gap: "12px",
                    }}
                  >
                    {relatedPortfolio.map((p) => (
                      <Link
                        key={p.id}
                        href={`/portfolio/${p.slug}`}
                        style={{ textDecoration: "none", display: "block" }}
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
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: "10px",
                              left: "10px",
                              right: "10px",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "monospace",
                                fontSize: "9px",
                                color: "var(--olive-light)",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "4px",
                              }}
                            >
                              {p.category}
                            </div>
                            <div
                              style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
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
          marginTop: "48px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 clamp(20px, 4vw, 48px)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "42rem",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                border: "1px solid var(--border-olive)",
                background: "var(--surface-mid)",
                color: "var(--olive-light)",
                fontSize: "11px",
                fontFamily: "monospace",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              <Sparkles style={{ width: "14px", height: "14px" }} />
              Alur Kerja Standar
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 900,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              PROSES PRODUKSI KAMI
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "var(--grey-mid)",
                fontFamily: "'Barlow', sans-serif",
                lineHeight: 1.7,
              }}
            >
              Manajemen manufaktur terstruktur menjamin kualitas material, kerapihan jahitan, dan ketepatan jadwal pengiriman.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
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
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "15px",
                    fontWeight: 800,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(240,234,216,0.7)",
                    fontFamily: "'Barlow', sans-serif",
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

      {/* ── 4. CTA STRIP (CENTERED) ── */}
      <section
        style={{
          background: "var(--olive-dark)",
          padding: "clamp(56px, 7vw, 96px) 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 clamp(20px, 4vw, 48px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "1px",
              lineHeight: 1.15,
            }}
          >
            MEMERLUKAN PENYESUAIAN POLA ATAU <br />
            <span style={{ color: "var(--tan-light)", fontStyle: "italic" }}>SAMPLING KHUSUS?</span>
          </h3>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(240,234,216,0.85)",
              lineHeight: 1.7,
              fontFamily: "'Barlow', sans-serif",
              maxWidth: "38rem",
              margin: "0 auto",
            }}
          >
            Tim kami siap mendukung pembuatan sampel fisik (approval sample) untuk validasi bahan baku dan bordir sebelum tahap produksi massal.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
              paddingTop: "8px",
            }}
          >
            <Link
              href="/contact"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--black)",
                padding: "16px 32px",
                borderRadius: "10px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                textDecoration: "none",
                boxShadow: "0 10px 25px -10px rgba(0,0,0,0.5)",
              }}
            >
              Ajukan Diskusi Sampling →
            </Link>
            <Link
              href="/portfolio"
              style={{
                border: "1px solid rgba(240,234,216,0.4)",
                color: "var(--cream)",
                padding: "16px 32px",
                borderRadius: "10px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
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
