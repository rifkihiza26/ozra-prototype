import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Hubungi Ozra Tactical",
  description:
    "Hubungi PT. Ozra Mega Perkasa Indonesia untuk penawaran, konsultasi seragam dinas, tactical apparel, dan pesanan sportswear custom.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* ── PAGE HERO dengan foto kantor asli ── */}
      <section className="relative py-20 sm:py-28 border-b border-[#353B32] overflow-hidden">
        {/* Real office photo from client PDF */}
        <div className="absolute inset-0">
          <Image
            src="/images/client_pdf/office-building.jpg"
            alt="Ozra Tactical Office"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101310]/88 via-[#101310]/70 to-[#101310]/95" />
        </div>

        <div
          className="relative max-w-5xl mx-auto text-center space-y-4"
          style={{ padding: "0 clamp(20px, 5vw, 48px)" }}
        >
          <span className="text-xs font-mono tracking-widest text-[#A4B66A] uppercase">
            Hubungi Representatif Resmi
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Konsultasi &amp; Penawaran
          </h1>
          <p className="max-w-xl mx-auto text-base text-white/60 leading-relaxed">
            Sampaikan kebutuhan seragam institusi, tactical gear, atau apparel custom Anda kepada tim Ozra Tactical.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID: Info + Form ── */}
      <section
        className="max-w-7xl mx-auto py-16 sm:py-20"
        style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ─ Left: Contact Info ─ */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#191D18] border border-[#353B32] rounded-xl overflow-hidden shadow-xl">
              {/* Company header */}
              <div className="p-6 sm:p-8 space-y-1 border-b border-[#353B32]">
                <span className="text-xs font-mono text-[#A4B66A] uppercase tracking-wider">Informasi Resmi</span>
                <h2 className="text-lg font-bold text-[#F3F3ED]">{COMPANY_INFO.name}</h2>
                <p className="text-xs text-[#A5ACA1]">{COMPANY_INFO.descriptor}</p>
              </div>

              {/* Contact details */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#222820] border border-[#353B32] flex items-center justify-center text-[#A4B66A] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-[#737c6f] uppercase block">Alamat Kantor &amp; Workshop</span>
                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#F3F3ED] hover:text-[#A4B66A] transition-colors leading-relaxed block"
                    >
                      {COMPANY_INFO.address}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#222820] border border-[#353B32] flex items-center justify-center text-[#A4B66A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-[#737c6f] uppercase block">WhatsApp &amp; Telepon</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#A4B66A] hover:text-[#b8cc78] transition-colors block"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#222820] border border-[#353B32] flex items-center justify-center text-[#A4B66A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-[#737c6f] uppercase block">Email Resmi</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs text-[#F3F3ED] hover:text-[#A4B66A] transition-colors block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#222820] border border-[#353B32] flex items-center justify-center text-[#A4B66A] shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-[#737c6f] uppercase block">Instagram Resmi</span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#F3F3ED] hover:text-[#A4B66A] transition-colors block"
                    >
                      {COMPANY_INFO.instagram}
                    </a>
                  </div>
                </div>

                {/* Quality commitment note */}
                <div className="pt-3 border-t border-[#353B32] p-4 rounded-lg bg-[#141813] border-[#353B32] space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-[#A4B66A] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Komitmen Layanan Klien</span>
                  </div>
                  <p className="text-[#A5ACA1] leading-relaxed">
                    Setiap permintaan penawaran direspons langsung oleh tim spesialis kami untuk memastikan solusi teknis yang tepat sasaran.
                  </p>
                </div>
              </div>

              {/* Maps CTA */}
              <div className="px-6 sm:px-8 pb-6">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#222820] text-[#F3F3ED] border border-[#353B32] text-xs font-semibold hover:bg-[#2b3329] hover:border-[#A4B66A]/40 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#A4B66A]" />
                  <span>Buka di Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp shortcut */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 rounded-xl bg-[#A4B66A] text-[#101310] font-bold text-xs uppercase tracking-wider hover:bg-[#b8cc78] transition-all text-center shadow-lg shadow-[#A4B66A]/20 flex items-center justify-center gap-2"
            >
              <span>💬 Konsultasi Langsung via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* ─ Right: Contact Form ─ */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
