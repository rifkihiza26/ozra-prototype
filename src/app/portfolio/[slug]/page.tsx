import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { COMPANY_INFO } from "@/lib/constants";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!item) return { title: "Item Tidak Ditemukan" };
  return {
    title: `${item.title} — Portfolio Ozra Tactical`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!item) notFound();

  const relatedItems = PORTFOLIO_DATA.filter(
    (p) => p.category === item.category && p.slug !== item.slug
  ).slice(0, 3);

  const consultationMessage = `Halo Ozra Tactical, saya tertarik dengan portofolio "${item.title}" (${item.category}). Saya ingin berkonsultasi mengenai spesifikasi teknis dan estimasi produksinya.`;

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-[#353B32] bg-[#141813] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A5ACA1] hover:text-[#A4B66A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE PORTOFOLIO</span>
          </Link>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#191D18] border border-[#353B32] text-[#A4B66A] truncate max-w-[200px]">
            {item.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Main Photo + Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Hero photo */}
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#353B32] bg-[#141813] shadow-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-contain sm:object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Gallery thumbnails */}
            {item.gallery && item.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {item.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden border border-[#353B32] bg-[#141813]"
                  >
                    <Image
                      src={img}
                      alt={`${item.title} — foto ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Category & Client */}
            <div className="space-y-1">
              {item.client && (
                <p className="text-xs font-mono text-[#737c6f] uppercase tracking-wider">
                  {item.client}
                </p>
              )}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F3F3ED] leading-tight">
                {item.title}
              </h1>
              <p className="text-sm text-[#A5ACA1] leading-relaxed pt-2">
                {item.description}
              </p>
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#353B32]">
                <span className="text-[11px] font-mono uppercase text-[#737c6f]">
                  Fitur &amp; Spesifikasi Teknis:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#191D18] border border-[#353B32] text-[#F3F3ED]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quality note */}
            <div className="p-4 rounded-xl bg-[#191D18] border border-[#353B32] space-y-2 text-xs text-[#A5ACA1]">
              <div className="flex items-center gap-2 text-[#A4B66A] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Standar Pengerjaan Ozra Tactical</span>
              </div>
              <p className="leading-relaxed">
                Setiap item diproduksi dengan inspeksi mutu bertahap mulai dari pemilihan
                bahan, cutting presisi, penjahitan, hingga finishing dan pengemasan.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#353B32]">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(consultationMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-[#A4B66A] text-[#101310] font-bold text-xs uppercase tracking-wider hover:bg-[#b8cc78] transition-all shadow-md shadow-[#A4B66A]/20"
              >
                <span>Konsultasi Produk Serupa via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-[#222820] text-[#F3F3ED] border border-[#353B32] font-bold text-xs uppercase tracking-wider hover:bg-[#2b3329] transition-all"
              >
                <span>Isi Formulir Penawaran</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-[#353B32] space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest text-[#A4B66A] uppercase">
              Rekomendasi Terkait
            </span>
            <h3 className="text-2xl font-bold text-[#F3F3ED]">
              Portofolio Kategori {item.category} Lainnya
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((rel) => (
              <PortfolioCard key={rel.id} item={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
