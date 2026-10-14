import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — PT. Ozra Mega Perkasa Indonesia",
  description:
    "Profil, Visi, dan Misi PT. Ozra Mega Perkasa Indonesia (Ozra Tactical) — Manufaktur seragam taktis dan apparel olahraga di Indonesia.",
};

const BRAND_VALUES = [
  {
    title: "Quality",
    desc: "Material dan konstruksi jahitan premium yang teruji di setiap produk yang dihasilkan.",
  },
  {
    title: "Precision",
    desc: "Akurasi pola ergonomis dan bordir komputer berkerapatan tinggi untuk detail yang sempurna.",
  },
  {
    title: "Adaptability",
    desc: "Fleksibilitas penyesuaian ukuran, pola, dan detail teknis sesuai kebutuhan operasional.",
  },
  {
    title: "Professionalism",
    desc: "Pengelolaan alur kerja terstruktur, ketepatan estimasi waktu, dan etika kemitraan jangka panjang.",
  },
  {
    title: "Reliability",
    desc: "Konsistensi kualitas di setiap unit produksi, didukung garansi purna jual resmi.",
  },
];

const STATS = [
  { value: "100+", label: "Proyek Selesai" },
  { value: "50+", label: "Klien Instansi" },
  { value: "2025", label: "Tahun Berdiri" },
  { value: "100%", label: "Custom Made" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── 1. HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/client_pdf/office-building.jpg"
            alt="Kantor PT. Ozra Mega Perkasa Indonesia"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(9,9,10,0.92) 0%, rgba(9,9,10,0.6) 60%, rgba(9,9,10,0.2) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(9,9,10,1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px 80px",
            width: "100%",
          }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>
            Profil Perusahaan
          </div>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: 700 }}
          >
            PT. Ozra Mega Perkasa<br />
            <em>Indonesia</em>
          </h1>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: 16,
              color: "rgba(240,234,216,0.65)",
              maxWidth: 500,
              marginTop: 20,
              lineHeight: 1.7,
            }}
          >
            Spesialis manufaktur seragam taktis dan pakaian olahraga profesional,
            didirikan 2025 di Jakarta Selatan, Indonesia.
          </p>
        </div>
      </section>

      {/* ── 2. STATS ROW ── */}
      <section
        style={{
          background: "var(--olive-dark)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "32px 40px",
                borderRight:
                  i < STATS.length - 1 ? "1px solid rgba(240,234,216,0.15)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "var(--cream)",
                  letterSpacing: 2,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 3,
                  color: "rgba(240,234,216,0.6)",
                  textTransform: "uppercase",
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. COMPANY INTRO + FACTORY PHOTOS ── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "100px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="section-label">Siapa Kami</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Dedikasi Manufaktur untuk Ketangguhan &{" "}
            <em>Profesionalisme</em>
          </h2>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: 15,
              color: "var(--grey-mid)",
              lineHeight: 1.8,
            }}
          >
            {COMPANY_INFO.name}, didirikan pada tahun 2025, adalah perusahaan
            manufaktur yang berfokus pada produksi dan penyediaan seragam taktis
            serta apparel olahraga di Indonesia.
          </p>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: 15,
              color: "var(--grey-mid)",
              lineHeight: 1.8,
            }}
          >
            Perusahaan melayani kebutuhan instansi pemerintah, kesatuan militer &
            kepolisian, institusi pendidikan kedinasan, komunitas taktis, dan
            pelaku bisnis melalui produk pakaian yang fungsional, tahan banting,
            nyaman, dan berwibawa.
          </p>

          {/* Identity grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              marginTop: 8,
            }}
          >
            {[
              { label: "Nama Resmi", value: COMPANY_INFO.name },
              { label: "Brand Operasional", value: COMPANY_INFO.brand, accent: true },
              { label: "Tahun Pendirian", value: `${COMPANY_INFO.establishedYear}` },
              { label: "Domisili", value: "Jakarta Selatan, DKI Jakarta" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  padding: "16px 20px",
                  background: "var(--near-black)",
                  borderLeft: row.accent ? "2px solid var(--olive)" : "2px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--grey-mid)",
                    marginBottom: 4,
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: row.accent ? "var(--olive-light)" : "var(--cream)",
                    letterSpacing: 1,
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factory photos 2×2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          {[
            { src: "/images/factory/cutting-qc.jpg", label: "Quality Control" },
            { src: "/images/factory/embroidery-sublimation.jpg", label: "Bordir & Sublimasi" },
            { src: "/images/factory/custom-pattern.jpg", label: "Custom Pattern" },
            { src: "/images/factory/production-management.jpg", label: "Manajemen Produksi" },
          ].map((img) => (
            <div
              key={img.label}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                style={{ objectFit: "cover" }}
                sizes="300px"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(9,9,10,0.85) 0%, transparent 60%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  fontFamily: "Barlow Condensed, sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "var(--olive-light)",
                }}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. VISION & MISSION ── */}
      <section
        style={{
          background: "var(--near-black)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "100px 48px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Visi &amp; Misi
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Fondasi <em>Perusahaan</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            {/* Vision */}
            <div
              style={{
                background: "var(--black)",
                borderLeft: "3px solid var(--olive)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
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
                    marginBottom: 8,
                  }}
                >
                  Visi Perusahaan
                </div>
                <h3
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Identitas Berpakaian
                </h3>
              </div>
              <blockquote
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontSize: 16,
                  fontStyle: "italic",
                  color: "rgba(240,234,216,0.75)",
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                &ldquo;Merancang identitas berpakaian yang memadukan ketangguhan
                militer dengan keanggunan modern, memberdayakan setiap individu
                untuk merepresentasikan kepercayaan diri, disiplin, dan kekuatan
                dalam aktivitas sehari-hari.&rdquo;
              </blockquote>
              <p
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  fontSize: 10,
                  letterSpacing: 2,
                  color: "var(--grey-mid)",
                }}
              >
                *Dikutip resmi dari draft profil PT. Ozra Mega Perkasa Indonesia.
              </p>
            </div>

            {/* Mission */}
            <div
              style={{
                background: "var(--black)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
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
                    marginBottom: 8,
                  }}
                >
                  Misi Perusahaan
                </div>
                <h3
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Tiga Langkah Fundamental
                </h3>
              </div>
              <ol style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "Mengutamakan material dan konstruksi premium dalam setiap produk yang dihasilkan.",
                  "Berinovasi dengan desain kontemporer tanpa mengesampingkan identitas dan karakter khas Ozra.",
                  "Menginspirasi pola pikir ketangguhan dan kepercayaan diri, menjadikan pakaian lebih dari sekadar fesyen, melainkan simbol karakter.",
                ].map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        color: "var(--olive)",
                        lineHeight: 1,
                        minWidth: 32,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: 14,
                        color: "rgba(240,234,216,0.7)",
                        lineHeight: 1.7,
                      }}
                    >
                      {m}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BRAND VALUES ── */}
      <section style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <div className="section-label">Nilai Tematik</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Prinsip Mutu <em>Ozra</em>
            </h2>
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontSize: 14,
                color: "var(--grey-mid)",
                marginTop: 16,
                maxWidth: 500,
              }}
            >
              Nilai operasional yang menjadi standar kualitas setiap jahitan yang kami hasilkan.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 2,
            }}
          >
            {BRAND_VALUES.map((val, i) => (
              <div
                key={val.title}
                className="brand-value-card"
                style={{
                  background: "var(--near-black)",
                  padding: "40px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "3rem",
                    fontWeight: 900,
                    color: "rgba(126,139,82,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {val.title}
                </h4>
                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontSize: 13,
                    color: "var(--grey-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA STRIP ── */}
      <section
        style={{
          background: "var(--olive-dark)",
          padding: "80px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
            Konsultasikan Kebutuhan{" "}
            <em style={{ fontStyle: "italic", color: "var(--tan-light)" }}>
              Bersama Tim Kami
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
            Kami siap memandu pemilihan kain, pembuatan pola, dan estimasi
            waktu pengerjaan untuk kebutuhan unit atau institusi Anda.
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
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "background 0.2s",
              }}
            >
              Ajukan Konsultasi →
            </Link>
            <Link
              href="/services"
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
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Pelajari Layanan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
