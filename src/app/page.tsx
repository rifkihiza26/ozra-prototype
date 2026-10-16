"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { WORKFLOW_DATA } from "@/data/services";
import { PORTFOLIO_DATA } from "@/data/portfolio";

/* ─────────────────────────────────────────────
   HERO SLIDES CONFIG
───────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    image: "/images/client_pdf/office-interior.jpg",
    eyebrow: "Manufaktur Tactical Apparel",
    titleLine1: "PRECISION",
    titleLine2: "IN EVERY STITCH",
    tagline: "Field-Grade Tactical Apparel — Engineered for Indonesia",
    ctaPrimary: { label: "Lihat Portofolio", href: "/portfolio" },
    ctaSecondary: { label: "Get a Quote", href: "/contact" },
  },
  {
    image: "/images/factory/cutting-qc.jpg",
    eyebrow: "Quality Control Multi-Layer",
    titleLine1: "BUILT TO",
    titleLine2: "PERFORM",
    tagline: "Inspeksi ketat di setiap tahap — dari cutting hingga finishing",
    ctaPrimary: { label: "Layanan Kami", href: "/services" },
    ctaSecondary: { label: "Konsultasi", href: "/contact" },
  },
  {
    image: "/images/products/workshirt-kemenhub.jpg",
    eyebrow: "Custom Institutional Uniform",
    titleLine1: "SERAGAM",
    titleLine2: "INSTANSI",
    tagline: "PDL, Workshirt, BDU, Corporate Uniform — Custom Full Spec",
    ctaPrimary: { label: "Portofolio", href: "/portfolio" },
    ctaSecondary: { label: "WhatsApp", href: `https://wa.me/${COMPANY_INFO.phoneRaw}` },
  },
];

/* ─────────────────────────────────────────────
   CATEGORY CARDS CONFIG
───────────────────────────────────────────── */
const CATEGORIES = [
  {
    num: "01",
    label: "Seragam Taktis & PDL",
    sub: "PDL, BDU, Workshirt, Tactical Field Wear",
    image: "/images/products/full-set-pdl.jpg",
    href: "/portfolio?cat=Pakaian+Dinas",
  },
  {
    num: "02",
    label: "Corporate Uniform",
    sub: "PDH, Jas Institusi, Seragam Kerja Formal",
    image: "/images/products/jacket-taruna-aal.jpg",
    href: "/portfolio?cat=Corporate",
  },
  {
    num: "03",
    label: "Jersey & Sportswear",
    sub: "Sublimasi Full-Print, Jersey Custom Tim",
    image: "/images/products/jersey-pomad.jpg",
    href: "/portfolio?cat=Sportswear",
  },
  {
    num: "04",
    label: "Pants & Accessories",
    sub: "Cargo Tactical, Cap, Aksesoris Taktis",
    image: "/images/products/cargo-pants.jpg",
    href: "/portfolio?cat=Trousers",
  },
];

/* ─────────────────────────────────────────────
   FEATURED PORTFOLIO (4 items for grid)
───────────────────────────────────────────── */
const FEATURED = PORTFOLIO_DATA.filter((p) => p.featured).slice(0, 4);

/* ─────────────────────────────────────────────
   HOMEPAGE CLIENT COMPONENT
───────────────────────────────────────────── */
export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (idx: number) => setActiveSlide(idx);
  const prevSlide = () => setActiveSlide((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => setActiveSlide((c) => (c + 1) % HERO_SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((c) => (c + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((c) => (c + 1) % HERO_SLIDES.length);
    }, 6000);
  };

  return (
    <div>
      {/* ══════════════════════════════════════════════
          SECTION 1: HERO SLIDER
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Slides */}
        <div style={{ display: "flex", height: "100%", transition: "transform 0.85s cubic-bezier(0.77,0,0.175,1)", transform: `translateX(-${activeSlide * 100}%)` }}>
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide${activeSlide === idx ? " active" : ""}`}
              style={{ minWidth: "100%", height: "100%", position: "relative", overflow: "hidden" }}
            >
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.titleLine1}
                fill
                priority={idx === 0}
                className="hero-slide-bg"
                sizes="100vw"
              />
              {/* Gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(9,9,10,0.55) 0%, rgba(9,9,10,0.18) 30%, rgba(9,9,10,0.5) 65%, rgba(9,9,10,0.78) 100%)", zIndex: 1 }} />

              {/* Content */}
              <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px" }}>
                {/* Eyebrow */}
                <div
                  className="hero-eyebrow"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                    color: "var(--tan-light)",
                    marginBottom: "20px",
                    background: "rgba(9,9,10,0.6)",
                    padding: "5px 14px",
                    borderLeft: "2px solid var(--tan)",
                    display: "inline-block",
                  }}
                >
                  {slide.eyebrow}
                </div>

                {/* Title */}
                <h1
                  className="hero-title-el"
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
                    fontSize: "clamp(52px, 11vw, 120px)",
                    fontWeight: 900,
                    lineHeight: 0.88,
                    letterSpacing: "-2px",
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "24px",
                    maxWidth: "800px",
                    textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                  }}
                >
                  {slide.titleLine1}
                  <br />
                  <em style={{ fontStyle: "normal", color: "transparent", WebkitTextStroke: "1.5px var(--cream)" }}>
                    {slide.titleLine2}
                  </em>
                </h1>

                {/* Tagline */}
                <p
                  className="hero-tagline"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                    marginBottom: "44px",
                    textShadow: "0 1px 12px rgba(0,0,0,0.9)",
                    opacity: 0.85,
                  }}
                >
                  {slide.tagline}
                </p>

                {/* CTAs */}
                <div className="hero-ctas flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none justify-center items-stretch sm:items-center px-4">
                  <Link
                    href={slide.ctaPrimary.href}
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "14px 28px",
                      background: "var(--olive)",
                      color: "#fff",
                      border: "1px solid var(--olive)",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {slide.ctaPrimary.label}
                  </Link>
                  <a
                    href={slide.ctaSecondary.href.startsWith("https://wa.me") ? slide.ctaSecondary.href : undefined}
                    {...(!slide.ctaSecondary.href.startsWith("https://wa.me") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "14px 28px",
                      background: "rgba(9,9,10,0.6)",
                      color: "var(--cream)",
                      border: "1px solid rgba(240,234,216,0.4)",
                      textAlign: "center",
                      display: "block",
                    }}
                    onClick={(e) => {
                      if (!slide.ctaSecondary.href.startsWith("https://wa.me")) {
                        e.preventDefault();
                        window.location.href = slide.ctaSecondary.href;
                      }
                    }}
                  >
                    {slide.ctaSecondary.label}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow left (desktop & tablet) */}
        <button
          onClick={() => { prevSlide(); resetTimer(); }}
          className="hidden sm:flex"
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(9,9,10,0.6)",
            border: "1px solid var(--border)",
            color: "var(--cream)",
            width: "44px",
            height: "44px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "20px",
          }}
          aria-label="Slide sebelumnya"
        >
          ‹
        </button>
        {/* Arrow right (desktop & tablet) */}
        <button
          onClick={() => { nextSlide(); resetTimer(); }}
          className="hidden sm:flex"
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(9,9,10,0.6)",
            border: "1px solid var(--border)",
            color: "var(--cream)",
            width: "44px",
            height: "44px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "20px",
          }}
          aria-label="Slide berikutnya"
        >
          ›
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", gap: "8px" }}>
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goToSlide(idx); resetTimer(); }}
              className={`hero-dot${activeSlide === idx ? " active" : ""}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter (tablet & desktop) */}
        <div className="hidden sm:block" style={{ position: "absolute", right: "28px", bottom: "28px", zIndex: 3, fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", color: "var(--grey-mid)" }}>
          <span style={{ color: "var(--tan-light)", fontSize: "18px" }}>0{activeSlide + 1}</span>
          {" / "}0{HERO_SLIDES.length}
        </div>

        {/* Scroll indicator (desktop only) */}
        <div className="hidden md:flex" style={{ position: "absolute", left: "28px", bottom: "28px", zIndex: 3, alignItems: "center", gap: "12px" }}>
          <div className="scroll-line" />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--grey-mid)", writingMode: "vertical-lr", transform: "rotate(180deg)" }}>
            Scroll
          </span>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, var(--black), transparent)", zIndex: 2 }} />
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2: TRUST BAR
      ══════════════════════════════════════════════ */}
      <div className="trust-bar">
        <div className="trust-item">Didirikan <strong>2025</strong></div>
        <span className="trust-sep">◆</span>
        <div className="trust-item">Berbasis di <strong>Jakarta Selatan</strong></div>
        <span className="trust-sep">◆</span>
        <div className="trust-item">Seragam <strong>Instansi &amp; Militer</strong></div>
        <span className="trust-sep">◆</span>
        <div className="trust-item"><strong>Bordir</strong> Komputer Presisi</div>
        <span className="trust-sep">◆</span>
        <div className="trust-item">Garansi <strong>Purna Jual</strong></div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3: CATEGORY CARDS — 4 kolom seperti Molay
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="section-container">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="section-label">Kategori Produk</div>
              <h2 className="section-title">
                OUR <em>SERVICES</em>
              </h2>
            </div>
            <Link
              href="/services"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "var(--tan-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Lihat Semua →
            </Link>
          </div>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {CATEGORIES.map((cat) => (
              <Link key={cat.num} href={cat.href} className="cat-card" style={{ aspectRatio: "3/4" }}>
                <Image src={cat.image} alt={cat.label} fill className="cat-card-bg object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="cat-card-inner">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "4px", color: "var(--olive-light)", marginBottom: "8px" }}>
                    {cat.num}
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(20px,2vw,28px)", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#fff", lineHeight: 1, marginBottom: "8px" }}>
                    {cat.label}
                  </div>
                  <div className="cat-reveal" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "var(--tan-light)", display: "flex", alignItems: "center", gap: "8px" }}>
                    {cat.sub} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4: FEATURED PORTFOLIO — 4 grid seperti products di Molay
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--near-black)" }}>
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="section-label">Galeri Produk</div>
              <h2 className="section-title">
                FEATURED <em>PORTFOLIO</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "var(--tan-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {FEATURED.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="product-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* Image */}
                <div style={{ aspectRatio: "1", background: "#1a1a16", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ transition: "transform 0.5s ease" }}
                  />
                  {/* Tag */}
                  <div style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", padding: "4px 10px", background: "var(--olive)", color: "#fff", zIndex: 1 }}>
                    {item.category.split(" ")[0]}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "18px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "var(--olive)", marginBottom: "5px" }}>
                    {item.category}
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, marginBottom: "5px" }}>
                    {item.title}
                  </div>
                  {item.client && (
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "11px", color: "var(--grey-mid)" }}>
                      {item.client}
                    </div>
                  )}
                  <div
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#fff", padding: "11px", background: "var(--olive)", display: "block", textAlign: "center", marginTop: "14px" }}
                  >
                    View Detail →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5: BRAND STORY — 2 kolom (text | foto) seperti Molay
      ══════════════════════════════════════════════ */}
      <section className="border-t border-b border-[var(--border)] bg-[var(--black)]">
        <div className="max-w-page grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left: text */}
          <div className="split-content-panel flex flex-col justify-center">
            <div className="section-label">Tentang Kami</div>
            <h2 className="section-title" style={{ maxWidth: "480px" }}>
              BUILT FOR <em>PRECISION</em>
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", lineHeight: 1.8, color: "rgba(240,234,216,0.65)", margin: "20px 0 28px", maxWidth: "460px" }}>
              PT. Ozra Mega Perkasa Indonesia didirikan pada <strong style={{ color: "var(--cream)", fontWeight: 500 }}>2025</strong> dengan satu misi: menghadirkan seragam taktis berkualitas field-grade yang memadukan{" "}
              <strong style={{ color: "var(--cream)", fontWeight: 500 }}>desain kontemporer</strong> dengan fungsi operasional nyata.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
              {["Quality Material", "Precision Cut", "Custom Fit", "Multi-Layer QC"].map((b) => (
                <span key={b} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "6px 12px", border: "1px solid var(--border)", color: "var(--tan-light)" }}>
                  {b}
                </span>
              ))}
            </div>

            <div>
              <Link
                href="/about"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", padding: "14px 32px", background: "var(--olive)", color: "#fff", display: "inline-block" }}
              >
                Our Story →
              </Link>
            </div>
          </div>

          {/* Right: foto */}
          <div className="relative bg-[#1a1d19] overflow-hidden min-h-[350px] sm:min-h-[420px] lg:min-h-[500px]">
            <Image
              src="/images/client_pdf/office-building.jpg"
              alt="Fasilitas Produksi Ozra Tactical"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(126,139,82,0.08) 0%, transparent 60%)", zIndex: 1 }} />
            {/* Overlay stat card */}
            <div style={{ position: "absolute", bottom: "24px", right: "24px", zIndex: 2, border: "1px solid var(--border)", padding: "16px 24px", background: "rgba(9,9,10,0.88)", backdropFilter: "blur(8px)" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "40px", fontWeight: 900, color: "var(--olive)", lineHeight: 1 }}>
                24
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--grey-mid)", marginTop: "4px" }}>
                Portfolio Items
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6: STATS ROW — olive-dark bg seperti Molay
      ══════════════════════════════════════════════ */}
      <section style={{ background: "var(--olive-dark)" }} className="py-10 px-4 sm:px-8 md:px-16">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {[
            { num: "18", unit: "+", label: "Instansi Klien" },
            { num: "24", unit: "", label: "Portfolio Items" },
            { num: "5", unit: "★", label: "Tahap QC" },
            { num: "100", unit: "%", label: "Custom Spec" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-4 ${i < 3 ? "md:border-r md:border-[rgba(240,234,216,0.15)]" : ""}`}
            >
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "6px" }}>
                {s.num}
                <span style={{ fontSize: "20px", color: "var(--tan-light)" }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(240,234,216,0.6)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7: PRODUCTION WORKFLOW — horizontal timeline
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="section-label">Alur Kerja</div>
              <h2 className="section-title">
                FROM ORDER <em>TO DELIVERY</em>
              </h2>
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", color: "rgba(240,234,216,0.5)", maxWidth: "340px", lineHeight: 1.7 }}>
              Lima tahap terstruktur untuk memastikan produk selesai tepat waktu, tepat spesifikasi, tepat kualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {WORKFLOW_DATA.map((wf, i) => (
              <div
                key={wf.step}
                style={{
                  background: i % 2 === 0 ? "var(--surface)" : "var(--near-black)",
                  padding: "28px 22px",
                  borderTop: "2px solid",
                  borderTopColor: i % 2 === 0 ? "var(--olive)" : "var(--border)",
                  position: "relative",
                }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "42px", fontWeight: 900, color: "rgba(126,139,82,0.18)", lineHeight: 1, marginBottom: "12px" }}>
                  0{wf.step}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#fff", marginBottom: "10px", lineHeight: 1.2 }}>
                  {wf.title.replace(/^Tahap \d+ - /, "")}
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "rgba(240,234,216,0.55)", lineHeight: 1.7 }}>
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 8: COLLECTION BANNER (full-bleed CTA)
      ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "440px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src="/images/products/bdu-tactical.jpg"
          alt="Koleksi Tactical Apparel Ozra"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(9,9,10,0.95) 0%, rgba(9,9,10,0.85) 50%, rgba(9,9,10,0.4) 100%)", zIndex: 1 }} />
        <div
          className="relative z-10 w-full max-w-page py-14 sm:py-20"
          style={{ paddingLeft: "clamp(24px, 5vw, 64px)", paddingRight: "clamp(24px, 5vw, 64px)" }}
        >
          <div style={{ maxWidth: "560px" }}>
            <div className="section-label">Koleksi Taktis</div>
            <h2 className="section-title" style={{ fontSize: "clamp(34px, 5vw, 68px)", margin: "12px 0 16px" }}>
              TACTICAL <br /><em>APPAREL</em>
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", color: "rgba(240,234,216,0.65)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "440px" }}>
              Seragam PDL, BDU, Workshirt Lapangan, dan Jersey Sublimasi custom untuk institusi pemerintah dan komunitas taktis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/portfolio"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", padding: "14px 32px", background: "var(--olive)", color: "#fff", textAlign: "center" }}
              >
                Explore All →
              </Link>
              <Link
                href="/contact"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", padding: "14px 32px", background: "transparent", color: "var(--cream)", border: "1px solid rgba(240,234,216,0.4)", textAlign: "center" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 9: CLIENT / INSTANSI (logo berwarna dari PDF baru)
      ══════════════════════════════════════════════ */}
      <section style={{ padding: "64px 0", background: "var(--black)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span style={{ width: "36px", height: "1px", background: "var(--olive)", display: "inline-block" }} />
            Kepercayaan Klien
            <span style={{ width: "36px", height: "1px", background: "var(--olive)", display: "inline-block" }} />
          </div>
          <h2 className="section-title">
            TRUSTED BY <em>INSTITUTIONS</em>
          </h2>
          <p style={{ fontFamily: "Barlow, sans-serif", fontSize: 13, color: "var(--grey-mid)", marginTop: 12 }}>
            TNI, Polri, instansi pemerintah, lembaga pendidikan, dan komunitas taktis di seluruh Indonesia.
          </p>
        </div>

        {/* Full-color institutional logo strip */}
        <div style={{ width: "100%", overflowX: "auto", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "#000" }} className="no-scrollbar">
          <div className="max-w-page mx-auto" style={{ padding: "0 clamp(16px, 4vw, 32px)", minWidth: "680px" }}>
            <Image
              src="/images/clients-logos-color.jpg"
              alt="Klien Instansi Ozra Tactical — TNI AL, Kemenkumham, Pengayoman, Polri, Imigrasi, KOPASGAT dan lainnya"
              width={1540}
              height={417}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="100vw"
            />
          </div>
        </div>

        {/* CTA row */}
        <div style={{ textAlign: "center", marginTop: 40, padding: "0 24px" }}>
          <Link
            href="/portfolio"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--olive-light)",
              textDecoration: "none",
              borderBottom: "1px solid var(--olive)",
              paddingBottom: 3,
            }}
          >
            Lihat Seluruh Portfolio →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 10: FACTORY PROCESS — 5 foto proses
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="section-label">Fasilitas Produksi</div>
              <h2 className="section-title">
                MADE WITH <em>PRECISION</em>
              </h2>
            </div>
            <Link
              href="/about"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "var(--tan-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Learn More →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              { src: "/images/factory/cutting-qc.jpg", label: "Quality Control", num: "01" },
              { src: "/images/factory/custom-pattern.jpg", label: "Custom Pattern", num: "02" },
              { src: "/images/factory/embroidery-sublimation.jpg", label: "Bordir & Sublimasi", num: "03" },
              { src: "/images/factory/production-management.jpg", label: "Manajemen Produksi", num: "04" },
              { src: "/images/factory/after-sales-warranty.jpg", label: "Garansi Purna Jual", num: "05" },
            ].map((item) => (
              <div key={item.num} className="cat-card" style={{ aspectRatio: "3/4", cursor: "default" }}>
                <Image src={item.src} alt={item.label} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" style={{ transition: "transform 0.6s ease" }} />
                <div className="cat-card-inner" style={{ transform: "translateY(0)" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "4px", color: "var(--olive-light)", marginBottom: "8px" }}>
                    {item.num}
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#fff", lineHeight: 1.1 }}>
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
