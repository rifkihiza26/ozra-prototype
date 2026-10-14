import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-[#191D18] border border-[#353B32] p-8 sm:p-10 rounded-xl shadow-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#222820] border border-[#A4B66A]/40 text-[#A4B66A] text-2xl font-mono font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F3F3ED]">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-[#A5ACA1]">
            Halaman yang Anda cari mungkin telah dipindahkan, diubah jalurnya, atau belum tersedia pada prototype ini.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#A4B66A] text-[#101310] text-xs font-bold uppercase tracking-wider hover:bg-[#b8cc78] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#222820] text-[#F3F3ED] border border-[#353B32] text-xs font-bold uppercase tracking-wider hover:bg-[#2b3329] transition-all"
          >
            <span>Hubungi Kami</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
