"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ArrowRight, MessageSquare, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: string;
  quantity: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  category?: string;
  description?: string;
}

const CATEGORY_OPTIONS = [
  "Tactical & Workshirt",
  "Corporate & Institutional Uniform",
  "Sportswear & Jersey",
  "Pakaian Dinas",
  "Trousers & Accessories",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    category: "",
    quantity: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor WhatsApp wajib diisi.";
    } else if (!/^[0-9+()-\s]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Format nomor WhatsApp tidak valid (minimal 8 digit).";
    }

    if (!formData.category) {
      newErrors.category = "Pilih salah satu kategori kebutuhan.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Deskripsi kebutuhan wajib diisi.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedSummary(formData);
    }
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      category: "",
      quantity: "",
      description: "",
    });
    setErrors({});
  };

  const generateWhatsAppUrl = () => {
    if (!submittedSummary) return "#";
    const text = `*KONSULTASI APPAREL — OZRA TACTICAL*\n\n` +
      `*Nama:* ${submittedSummary.fullName}\n` +
      `*Perusahaan/Instansi:* ${submittedSummary.companyName || "-"}\n` +
      `*Email:* ${submittedSummary.email}\n` +
      `*WhatsApp:* ${submittedSummary.phone}\n` +
      `*Kategori:* ${submittedSummary.category}\n` +
      `*Estimasi Kuantitas:* ${submittedSummary.quantity || "-"}\n\n` +
      `*Detail Kebutuhan:*\n${submittedSummary.description}`;

    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const generateMailtoUrl = () => {
    if (!submittedSummary) return "#";
    const subject = `Konsultasi Kebutuhan Apparel - ${submittedSummary.fullName} (${submittedSummary.category})`;
    const body = `Nama: ${submittedSummary.fullName}\n` +
      `Perusahaan / Instansi: ${submittedSummary.companyName || "-"}\n` +
      `Email: ${submittedSummary.email}\n` +
      `Nomor WhatsApp: ${submittedSummary.phone}\n` +
      `Kategori Kebutuhan: ${submittedSummary.category}\n` +
      `Estimasi Jumlah: ${submittedSummary.quantity || "-"}\n\n` +
      `Deskripsi Kebutuhan:\n${submittedSummary.description}`;

    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-[#191D18] border border-[#353B32] rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      {submittedSummary ? (
        /* Summary view after validation */
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-[#222820] border border-[#A4B66A]/40 text-[#A4B66A]">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-[#F3F3ED]">
                Validasi Formulir Berhasil
              </h4>
              <p className="text-xs text-[#A5ACA1]">
                Data telah divalidasi. Sebagai prototype, data tidak disimpan ke server. Silakan teruskan langsung ke tim Ozra Tactical melalui WhatsApp atau Email resmi.
              </p>
            </div>
          </div>

          <div className="bg-[#141813] border border-[#353B32] rounded-lg p-5 space-y-3 text-xs">
            <h5 className="font-mono text-[11px] uppercase tracking-wider text-[#A4B66A] pb-2 border-b border-[#353B32]">
              Ringkasan Kebutuhan Anda
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#A5ACA1]">
              <div>
                <span className="text-[#737c6f] block">Nama:</span>
                <span className="text-[#F3F3ED] font-medium">{submittedSummary.fullName}</span>
              </div>
              <div>
                <span className="text-[#737c6f] block">Instansi / Perusahaan:</span>
                <span className="text-[#F3F3ED] font-medium">{submittedSummary.companyName || "-"}</span>
              </div>
              <div>
                <span className="text-[#737c6f] block">Email:</span>
                <span className="text-[#F3F3ED] font-medium">{submittedSummary.email}</span>
              </div>
              <div>
                <span className="text-[#737c6f] block">WhatsApp:</span>
                <span className="text-[#F3F3ED] font-medium">{submittedSummary.phone}</span>
              </div>
              <div>
                <span className="text-[#737c6f] block">Kategori:</span>
                <span className="text-[#A4B66A] font-semibold">{submittedSummary.category}</span>
              </div>
              <div>
                <span className="text-[#737c6f] block">Estimasi Jumlah:</span>
                <span className="text-[#F3F3ED] font-medium">{submittedSummary.quantity || "-"}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#353B32]/60">
              <span className="text-[#737c6f] block mb-1">Deskripsi:</span>
              <p className="text-[#F3F3ED] bg-[#191D18] p-3 rounded border border-[#353B32] whitespace-pre-wrap">
                {submittedSummary.description}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#A4B66A] text-[#101310] font-bold text-xs uppercase tracking-wider hover:bg-[#b8cc78] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kirim via WhatsApp Resmi</span>
            </a>
            <a
              href={generateMailtoUrl()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#222820] text-[#F3F3ED] border border-[#353B32] font-bold text-xs uppercase tracking-wider hover:bg-[#2b3329] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim via Email Resmi</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full text-center text-xs text-[#A5ACA1] hover:text-[#F3F3ED] underline pt-2"
          >
            Ubah / Buat Permintaan Baru
          </button>
        </div>
      ) : (
        /* Form view */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-[#353B32] pb-4 mb-6">
            <h3 className="text-xl font-bold text-[#F3F3ED]">
              Formulir Permintaan Penawaran &amp; Konsultasi
            </h3>
            <p className="text-xs text-[#A5ACA1] mt-1">
              Silakan lengkapi formulir di bawah. Tim kami siap memberikan rekomendasi spesifikasi teknis dan estimasi produksi terbaik.
            </p>
          </div>

          {/* Full Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Nama Lengkap <span className="text-[#A4B66A]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Contoh: Rian Pratama"
                className={`w-full px-3.5 py-2.5 rounded bg-[#141813] border ${
                  errors.fullName ? "border-red-500 focus:ring-red-500" : "border-[#353B32] focus:border-[#A4B66A]"
                } text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 transition-colors`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Nama Perusahaan / Instansi <span className="text-[#737c6f] font-normal">(Opsional)</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Contoh: Divisi Logistik Operasional"
                className="w-full px-3.5 py-2.5 rounded bg-[#141813] border border-[#353B32] focus:border-[#A4B66A] text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 focus:ring-[#A4B66A] transition-colors"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Email Aktif <span className="text-[#A4B66A]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className={`w-full px-3.5 py-2.5 rounded bg-[#141813] border ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-[#353B32] focus:border-[#A4B66A]"
                } text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 transition-colors`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Nomor WhatsApp <span className="text-[#A4B66A]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="081234567890"
                className={`w-full px-3.5 py-2.5 rounded bg-[#141813] border ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-[#353B32] focus:border-[#A4B66A]"
                } text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 transition-colors`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Category & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Kategori Kebutuhan <span className="text-[#A4B66A]">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded bg-[#141813] border ${
                  errors.category ? "border-red-500 focus:ring-red-500" : "border-[#353B32] focus:border-[#A4B66A]"
                } text-sm text-[#F3F3ED] focus:outline-none focus:ring-1 transition-colors`}
              >
                <option value="" disabled className="text-[#737c6f]">
                  -- Pilih Kategori --
                </option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#191D18] text-[#F3F3ED]">
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.category}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="quantity" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
                Perkiraan Jumlah Pesanan <span className="text-[#737c6f] font-normal">(Opsional)</span>
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Contoh: 50 pcs / 200 set"
                className="w-full px-3.5 py-2.5 rounded bg-[#141813] border border-[#353B32] focus:border-[#A4B66A] text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 focus:ring-[#A4B66A] transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-mono font-medium text-[#F3F3ED] mb-1.5">
              Deskripsi Kebutuhan &amp; Spesifikasi <span className="text-[#A4B66A]">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Jelaskan jenis seragam, preferensi kain, kebutuhan bordir/sablon, atau tanggal target selesai..."
              className={`w-full px-3.5 py-2.5 rounded bg-[#141813] border ${
                errors.description ? "border-red-500 focus:ring-red-500" : "border-[#353B32] focus:border-[#A4B66A]"
              } text-sm text-[#F3F3ED] placeholder-[#606d5c] focus:outline-none focus:ring-1 transition-colors`}
            />
            {errors.description && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.description}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded bg-[#A4B66A] text-[#101310] font-bold text-xs uppercase tracking-wider hover:bg-[#b8cc78] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#A4B66A]/20"
            >
              <span>Verifikasi &amp; Tampilkan Ringkasan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#737c6f] text-center mt-2.5">
              Data Anda aman dan ditujukan untuk konsultasi langsung dengan representatif Ozra Tactical.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
