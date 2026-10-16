import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import ContactForm from "@/components/contact/ContactForm";
import CopyAddressButton from "@/components/contact/CopyAddressButton";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Hubungi Ozra Tactical",
  description:
    "Hubungi PT. Ozra Mega Perkasa Indonesia untuk penawaran, konsultasi seragam dinas, tactical apparel, dan pesanan sportswear custom di Jakarta.",
};

const PILLARS = [
  {
    title: "Tepat Guna",
    desc: "Dirancang ergonomis sesuai standar aktivitas operasional institusi & lapangan.",
  },
  {
    title: "Tepat Kualitas",
    desc: "Material tahan gesek, jahitan berdaya tahan tinggi, serta QC berlapis tanpa kompromi.",
  },
  {
    title: "Tepat Waktu",
    desc: "Alur manajemen produksi terstruktur untuk menjamin tenggat waktu pengiriman.",
  },
];

const FAQS = [
  {
    q: "Berapa minimal pemesanan (MOQ) di Ozra Tactical?",
    a: "Kami memiliki fleksibilitas produksi untuk pesanan skala kecil mulai dari 24 pcs hingga pesanan skala besar ribuan pcs untuk instansi pemerintah, korporasi, dan militer.",
  },
  {
    q: "Apakah Ozra Tactical menyediakan layanan sampling / prototipe?",
    a: "Ya. Sebelum produksi massal berjalan, kami dapat membuat sampel fisik (approval sample) agar klien dapat memeriksa pola, kenyamanan bahan, dan presisi bordir/cetak sesuai spesifikasi.",
  },
  {
    q: "Berapa lama estimasi waktu pengerjaan produksi?",
    a: "Waktu pengerjaan standar adalah 14 hingga 25 hari kerja setelah sampel disetujui, tergantung pada tingkat kerumitan desain, detail bordir, dan kuantitas pesanan. Untuk kebutuhan mendesak (urgent order), silakan konsultasikan dengan tim representatif kami.",
  },
  {
    q: "Apakah melayani pengiriman ke seluruh Indonesia?",
    a: "Tentu. Kami bermitra dengan ekspedisi kargo darat, laut, dan udara terpercaya untuk memastikan pengiriman seragam dan apparel Anda sampai dengan aman dan tepat waktu ke seluruh Indonesia.",
  },
  {
    q: "Apakah ada garansi kualitas produk?",
    a: "Ya. Ozra Tactical memberikan jaminan garansi purna jual untuk setiap unit produk yang mengalami cacat produksi jahitan atau bordir, sebagai wujud tanggung jawab atas kualitas produk kami.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-[106px] pb-24">
      {/* ── 1. HERO SECTION DENGAN FOTO KANTOR ASLI DARI PDF ── */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-[var(--border)] overflow-hidden">
        {/* Real office photo from client PDF */}
        <div className="absolute inset-0">
          <Image
            src="/images/client_pdf/office-building.jpg"
            alt="Gedung Kantor PT. Ozra Mega Perkasa Indonesia"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle tactical dark overlay matching site design */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090a]/92 via-[#09090a]/85 to-[#09090a]/96" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(126,139,82,0.12)_0%,_transparent_70%)]" />
        </div>

        <div
          className="relative max-w-5xl mx-auto text-center space-y-4"
          style={{ padding: "0 clamp(20px, 5vw, 48px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-olive)] bg-[var(--surface)]/80 text-[var(--olive-light)] text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--olive)] animate-pulse" />
            Official Contact &amp; Headquarters
          </div>

          <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-normal uppercase leading-tight">
            KONSULTASI &amp; PENAWARAN
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--cream)]/75 leading-relaxed font-sans">
            Hubungi PT. Ozra Mega Perkasa Indonesia untuk konsultasi spesifikasi teknis, estimasi biaya, dan pembuatan seragam dinas, tactical gear, serta apparel kustom Anda.
          </p>
        </div>
      </section>

      {/* ── 2. COMMITMENT STRIP DARI PDF HALAMAN 20 ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-mid)]/60">
        <div
          className="max-w-7xl mx-auto py-10"
          style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--tan-light)] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--tan-light)]" />
                Komitmen Produksi Resmi
              </span>
              <h2 className="font-condensed text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider leading-tight">
                Where Professionalism Meets Uncompromising Quality
              </h2>
              <p className="text-xs text-[var(--cream)]/70 leading-relaxed font-sans">
                Kami mengundang Anda untuk berdiskusi lebih lanjut mengenai kebutuhan spesifik institusi atau komunitas Anda, dan biarkan kami menerjemahkannya menjadi produk berstandar tinggi.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PILLARS.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                  }}
                  className="p-4 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--olive-light)] shrink-0" />
                    <span className="font-condensed text-sm font-bold text-white uppercase tracking-wider">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-[12px] text-[var(--grey-mid)] leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MAIN SECTION: INFO KANTOR + FORMULIR PENAWARAN ── */}
      <section
        className="max-w-7xl mx-auto py-16 sm:py-20"
        style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ─ Left Column: Official Headquarters & Direct Channels ─ */}
          <div className="lg:col-span-5 space-y-6">

            {/* Head Office Card with real photo from PDF */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
              }}
            >
              {/* Photo preview of building */}
              <div className="relative h-48 w-full border-b border-[var(--border)] overflow-hidden">
                <Image
                  src="/images/client_pdf/office-building.jpg"
                  alt="Head Office Ozra Tactical Cilandak"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="font-condensed text-xs font-bold text-white bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20 uppercase tracking-widest">
                    HEAD OFFICE LOCATION
                  </span>
                  <span className="text-[11px] font-mono text-[var(--olive-light)] bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded border border-[var(--border-olive)]">
                    Jakarta Selatan
                  </span>
                </div>
              </div>

              {/* Company Title */}
              <div className="p-6 border-b border-[var(--border)] space-y-1">
                <span className="text-[10px] font-mono text-[var(--olive-light)] uppercase tracking-widest font-bold">
                  Identitas Manufaktur Resmi
                </span>
                <h3 className="font-condensed text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-[var(--tan-light)] font-mono">
                  {COMPANY_INFO.descriptor}
                </p>
              </div>

              {/* Contact Details List */}
              <div className="p-6 space-y-5 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div
                    style={{ backgroundColor: "var(--surface-mid)", borderColor: "var(--border)" }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center text-[var(--olive-light)] shrink-0 mt-0.5"
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[11px] font-mono text-[var(--grey-mid)] uppercase block tracking-wider font-semibold">
                      Alamat Kantor &amp; Workshop
                    </span>
                    <p className="text-xs text-[var(--cream)] leading-relaxed font-sans">
                      {COMPANY_INFO.address}
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2 items-center">
                      <CopyAddressButton address={COMPANY_INFO.address} />
                      <a
                        href={COMPANY_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[var(--olive-light)] hover:text-white transition-colors"
                      >
                        <span>Buka Peta</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div
                    style={{ backgroundColor: "var(--surface-mid)", borderColor: "var(--border)" }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center text-[var(--olive-light)] shrink-0 mt-0.5"
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[var(--grey-mid)] uppercase block tracking-wider font-semibold">
                        WhatsApp &amp; Telepon
                      </span>
                      <span className="text-[10px] text-[var(--olive-light)] font-mono">
                        Fast Response
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-condensed text-base font-bold text-white hover:text-[var(--olive-light)] transition-colors block tracking-wider"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div
                    style={{ backgroundColor: "var(--surface-mid)", borderColor: "var(--border)" }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center text-[var(--olive-light)] shrink-0 mt-0.5"
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[11px] font-mono text-[var(--grey-mid)] uppercase block tracking-wider font-semibold">
                      Email Resmi
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs text-[var(--cream)] hover:text-[var(--olive-light)] transition-colors block font-mono"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div
                    style={{ backgroundColor: "var(--surface-mid)", borderColor: "var(--border)" }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center text-[var(--olive-light)] shrink-0 mt-0.5"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[11px] font-mono text-[var(--grey-mid)] uppercase block tracking-wider font-semibold">
                      Instagram Resmi
                    </span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--cream)] hover:text-[var(--olive-light)] transition-colors block font-mono"
                    >
                      {COMPANY_INFO.instagram}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div
                  style={{
                    backgroundColor: "var(--surface-mid)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                  }}
                  className="p-3.5 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Clock className="w-3.5 h-3.5 text-[var(--tan-light)]" />
                    <span>Jam Operasional Kantor &amp; Workshop</span>
                  </div>
                  <div className="text-[11px] text-[var(--grey-mid)] space-y-0.5">
                    <div className="flex justify-between">
                      <span>Senin – Jumat:</span>
                      <span className="text-[var(--cream)] font-mono">08:00 – 18:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu:</span>
                      <span className="text-[var(--cream)] font-mono">08:00 – 15:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu &amp; Libur:</span>
                      <span className="text-[var(--tan-light)]">Janji Temu Khusus</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps CTA Button */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "var(--surface-mid)",
                    border: "1px solid var(--border)",
                    color: "var(--cream)",
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:border-[var(--olive-light)] hover:text-white transition-all text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--olive-light)]" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--grey-mid)]" />
                </a>
              </div>
            </div>

            {/* Quick Direct WhatsApp Hero Button */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "var(--olive)",
                color: "#09090a",
              }}
              className="block w-full py-4 px-6 rounded-xl font-condensed font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all text-center shadow-xl flex items-center justify-center gap-2"
            >
              <span>Konsultasi Cepat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Quality Commitment Card from PDF page 6 */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
              }}
              className="p-5 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-condensed">
                <ShieldCheck className="w-4 h-4 text-[var(--olive-light)]" />
                <span>Standar Mutu &amp; Garansi Ozra</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--cream)]/75 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--olive-light)] font-bold font-mono">01</span>
                  <span>Proses inspeksi quality control (QC) berlapis dari cutting hingga packaging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--olive-light)] font-bold font-mono">02</span>
                  <span>Mesin bordir komputer high-density &amp; teknologi sublimasi berpresisi tinggi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--olive-light)] font-bold font-mono">03</span>
                  <span>Garansi purna jual resmi sebagai komitmen integritas kemitraan jangka panjang.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ─ Right Column: Interactive Consultation & RFQ Form ─ */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTION WORKFLOW STRIP (DARI PDF HALAMAN 7) ── */}
      <section className="border-t border-b border-[var(--border)] bg-[var(--surface)] py-14">
        <div
          className="max-w-7xl mx-auto space-y-8"
          style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
        >
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-[var(--olive-light)] uppercase tracking-widest font-bold">
              {"//"} PRODUCTION WORKFLOW
            </span>
            <h2 className="font-condensed text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider">
              Alur Kerja Produksi — Dari Konsultasi Hingga Pengiriman
            </h2>
            <p className="text-xs text-[var(--grey-mid)] max-w-xl mx-auto font-sans">
              Sistem manufaktur transparan dan terjadwal menjamin akurasi pesanan Anda di setiap fase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              {
                step: "Tahap 01",
                title: "Konsultasi & Kebutuhan",
                desc: "Diskusi pola, fungsi seragam, pemilihan jenis material, dan spesifikasi bordir.",
              },
              {
                step: "Tahap 02",
                title: "Desain & Sampling",
                desc: "Pembuatan mockup teknis dan prototipe sampel fisik untuk disetujui klien.",
              },
              {
                step: "Tahap 03",
                title: "Approval & Persiapan",
                desc: "Finalisasi spesifikasi, approval tertulis, dan pengadaan bahan baku premium.",
              },
              {
                step: "Tahap 04",
                title: "Produksi & Quality Control",
                desc: "Cutting, bordir komputer, perakitan jahitan, dan inspeksi QC berlapis.",
              },
              {
                step: "Tahap 05",
                title: "Pengemasan & Pengiriman",
                desc: "Finishing, steam press, individual polybag, dan ekspedisi aman ke alamat Anda.",
              },
            ].map((st, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--surface-mid)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
                className="p-4 space-y-2 relative"
              >
                <span className="font-mono text-[10px] text-[var(--olive-light)] uppercase tracking-widest font-bold block">
                  {st.step}
                </span>
                <h4 className="font-condensed text-sm font-bold text-white uppercase tracking-wide">
                  {st.title}
                </h4>
                <p className="text-[12px] text-[var(--grey-mid)] leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ SECTION (PERTANYAAN UMUM KONSULTASI) ── */}
      <section
        className="max-w-5xl mx-auto pt-16 sm:pt-20"
        style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
      >
        <div className="text-center space-y-2 mb-10">
          <span className="font-mono text-xs text-[var(--olive-light)] uppercase tracking-widest font-bold">
            {"//"} FAQ KONSULTASI &amp; PEMESANAN
          </span>
          <h2 className="font-condensed text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xs text-[var(--grey-mid)] max-w-lg mx-auto font-sans">
            Informasi praktis seputar mekanisme pemesanan, minimum order, dan layanan manufaktur Ozra Tactical.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
              }}
              className="p-5 sm:p-6 space-y-2"
            >
              <h3 className="font-condensed text-base font-bold text-white uppercase tracking-wide flex items-start gap-2.5">
                <span className="text-[var(--olive-light)] font-mono">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[var(--cream)]/80 leading-relaxed pl-6 font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
