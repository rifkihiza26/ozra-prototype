"use client";

import { useState } from "react";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
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
  "Tactical & Workshirt (Kemenhub, Brimob, TNI, dll)",
  "Corporate & Institutional Uniform (STIN, IPDN, dll)",
  "Sportswear & Jersey Sublimasi (POMAD, POMAL, dll)",
  "Pakaian Dinas (Full Set PDL, PDH, BDU Tactical)",
  "Trousers & Tactical Cap (Cargo Pants, Aksesoris)",
  "Custom Apparel / Prototyping Khusus",
];

const QUANTITY_PRESETS = [
  "Sample / Prototipe (< 24 pcs)",
  "24 – 50 pcs (Batch Kecil)",
  "50 – 200 pcs (Batch Standar)",
  "200 – 1.000 pcs (Batch Besar)",
  "> 1.000 pcs (Kebutuhan Institusi / Tender)",
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
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"form" | "ready">("form");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor WhatsApp wajib diisi.";
    } else if (!/^[0-9+()-\s]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Format nomor WhatsApp minimal 8 digit.";
    }

    if (!formData.category) {
      newErrors.category = "Pilih kategori kebutuhan seragam / apparel.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Deskripsi spesifikasi kebutuhan wajib diisi.";
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

  const handleSelectPreset = (val: string) => {
    setFormData((prev) => ({ ...prev, quantity: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setMode("ready");
    }
  };

  const generateWhatsAppMessage = (): string => {
    return [
      `Halo Tim OZRA Tactical, saya ingin mengajukan konsultasi & permintaan penawaran harga:`,
      ``,
      `*DATA PEMESAN:*`,
      `• Nama: ${formData.fullName}`,
      `• Instansi/Perusahaan: ${formData.companyName || "-"}`,
      `• Nomor WhatsApp: ${formData.phone}`,
      `• Email: ${formData.email}`,
      ``,
      `*DETAIL KEBUTUHAN:*`,
      `• Kategori: ${formData.category}`,
      `• Estimasi Jumlah: ${formData.quantity || "Akan didiskusikan"}`,
      ``,
      `*SPESIFIKASI / KETERANGAN:*`,
      formData.description,
      ``,
      `Mohon informasikan estimasi biaya, ketersediaan bahan, serta jadwal sampling. Terima kasih.`,
    ].join("\n");
  };

  const generateEmailSubject = (): string => {
    const instansi = formData.companyName ? ` [${formData.companyName}]` : "";
    return `Permintaan Penawaran — ${formData.category}${instansi}`;
  };

  const generateEmailBody = (): string => {
    return generateWhatsAppMessage().replace(/\*/g, "");
  };

  const handleWhatsAppSend = () => {
    const msg = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${msg}`, "_blank");
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateEmailBody());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const text = generateWhatsAppMessage().replace(/\*/g, "");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
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
    setMode("form");
  };

  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
      }}
      className="p-6 sm:p-8 lg:p-10"
    >
      {mode === "ready" ? (
        /* Summary & Direct Dispatch Screen */
        <div className="space-y-6">
          <div
            style={{
              backgroundColor: "rgba(126,139,82,0.12)",
              border: "1px solid rgba(126,139,82,0.35)",
              borderRadius: "12px",
            }}
            className="p-5 flex items-start gap-3.5"
          >
            <CheckCircle2 className="w-5 h-5 text-[var(--olive-light)] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-condensed text-base font-bold text-white uppercase tracking-wider">
                Spesifikasi Siap Dikirim
              </h4>
              <p className="text-xs text-[var(--cream)]/75 mt-1 leading-relaxed font-sans">
                Pilih jalur komunikasi yang paling nyaman bagi Anda di bawah ini. Tim representatif Ozra Tactical akan menindaklanjuti permintaan spesifikasi dan estimasi harga Anda.
              </p>
            </div>
          </div>

          {/* Formatted summary review card */}
          <div
            style={{
              backgroundColor: "var(--surface-mid)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
            }}
            className="p-5 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--olive-light)] font-bold">
                Ringkasan Permintaan
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--tan-light)] hover:text-white transition-colors"
                title="Salin teks ke clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Tersalin!" : "Salin Teks"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div>
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Nama Pengirim:</span>
                <span className="text-white font-medium">{formData.fullName}</span>
              </div>
              <div>
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Instansi / Perusahaan:</span>
                <span className="text-white font-medium">{formData.companyName || "-"}</span>
              </div>
              <div>
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Nomor WhatsApp:</span>
                <span className="text-[var(--olive-light)] font-semibold">{formData.phone}</span>
              </div>
              <div>
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Kategori:</span>
                <span className="text-[var(--tan-light)] font-medium">{formData.category}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[var(--grey-mid)] block text-[11px] font-mono">Estimasi Kuantitas:</span>
                <span className="text-white font-medium">{formData.quantity || "Akan didiskusikan"}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border)]">
              <span className="text-[var(--grey-mid)] block text-[11px] mb-1.5 font-mono">
                Spesifikasi &amp; Detail Kebutuhan:
              </span>
              <p
                style={{
                  backgroundColor: "var(--black)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                className="text-xs text-[var(--cream)] p-3.5 whitespace-pre-wrap leading-relaxed font-sans"
              >
                {formData.description}
              </p>
            </div>
          </div>

          {/* Action dispatch buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              style={{
                backgroundColor: "var(--olive)",
                color: "#09090a",
              }}
              className="w-full py-3.5 px-4 rounded-xl font-condensed font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Kirim via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSend}
              style={{
                backgroundColor: "var(--surface-mid)",
                border: "1px solid var(--border)",
                color: "var(--cream)",
              }}
              className="w-full py-3.5 px-4 rounded-xl font-condensed font-bold text-sm uppercase tracking-wider hover:border-[var(--tan-light)] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 shrink-0 text-[var(--tan-light)]" />
              <span>Kirim via Email</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setMode("form")}
              className="inline-flex items-center gap-2 text-xs text-[var(--grey-mid)] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ubah rincian formulir</span>
            </button>
            <span className="text-[var(--border)]">•</span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[var(--grey-mid)] hover:text-[var(--tan-light)] transition-colors underline cursor-pointer"
            >
              Buat permintaan baru
            </button>
          </div>
        </div>
      ) : (
        /* Fill-in Form Screen */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="pb-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[var(--olive)]" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--olive-light)] font-bold">
                Formulir Resmi
              </span>
            </div>
            <h3 className="font-condensed text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider">
              Permintaan Penawaran &amp; Konsultasi
            </h3>
            <p className="text-xs text-[var(--grey-mid)] mt-1.5 leading-relaxed font-sans">
              Silakan isi spesifikasi kebutuhan Anda. Tim spesialis Ozra Tactical siap memberikan saran pemilihan material, akurasi pola, dan estimasi waktu terbaik.
            </p>
          </div>

          {/* Full Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
              >
                Nama Lengkap <span className="text-[var(--olive-light)]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="cth. Mayor Hendra / Rian Pratama"
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: errors.fullName ? "#ef4444" : "var(--border)",
                  color: "var(--cream)",
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans"
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
              >
                Instansi / Perusahaan{" "}
                <span className="text-[var(--grey-mid)] font-normal text-[11px] lowercase">(opsional)</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="cth. Kemenhub RI / Divisi Logistik"
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: "var(--border)",
                  color: "var(--cream)",
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans"
              />
            </div>
          </div>

          {/* WhatsApp & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
              >
                Nomor WhatsApp <span className="text-[var(--olive-light)]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0812-3456-7890"
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: errors.phone ? "#ef4444" : "var(--border)",
                  color: "var(--cream)",
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans"
              />
              {errors.phone && (
                <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
              >
                Email Aktif <span className="text-[var(--olive-light)]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@instansi.go.id"
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: errors.email ? "#ef4444" : "var(--border)",
                  color: "var(--cream)",
                }}
                className="w-full px-4 py-3 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans"
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Category Dropdown with custom arrow */}
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
            >
              Kategori Kebutuhan <span className="text-[var(--olive-light)]">*</span>
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: errors.category ? "#ef4444" : "var(--border)",
                  color: formData.category ? "var(--cream)" : "var(--grey-mid)",
                  appearance: "none",
                }}
                className="w-full px-4 py-3.5 pr-10 rounded-xl border text-sm focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans cursor-pointer"
              >
                <option value="" disabled>
                  Pilih Kategori Kebutuhan Seragam / Apparel
                </option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#161614] text-white py-2">
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[var(--grey-mid)] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
            {errors.category && (
              <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.category}
              </p>
            )}
          </div>

          {/* Quantity Preset Chips */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="quantity"
                className="text-xs font-sans font-semibold text-[var(--cream)] uppercase tracking-wide"
              >
                Perkiraan Jumlah Pesanan
              </label>
              <span className="text-[11px] text-[var(--grey-mid)] font-sans">
                Pilih preset atau ketik manual
              </span>
            </div>

            {/* Quick chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {QUANTITY_PRESETS.map((preset) => {
                const isSelected = formData.quantity === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    style={{
                      backgroundColor: isSelected ? "var(--olive)" : "var(--surface-mid)",
                      color: isSelected ? "#09090a" : "var(--cream)",
                      borderColor: isSelected ? "var(--olive)" : "var(--border)",
                    }}
                    className="px-3 py-2 rounded-lg border text-xs font-medium transition-all text-left truncate cursor-pointer hover:border-[var(--olive)]"
                  >
                    {preset}
                  </button>
                );
              })}
            </div>

            <input
              id="quantity"
              name="quantity"
              type="text"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Atau ketik kuantitas spesifik (cth: 75 set kemeja + celana)"
              style={{
                backgroundColor: "var(--surface-mid)",
                borderColor: "var(--border)",
                color: "var(--cream)",
              }}
              className="w-full px-4 py-2.5 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-sans font-semibold text-[var(--cream)] mb-2 uppercase tracking-wide"
            >
              Deskripsi Spesifikasi &amp; Detail Kebutuhan{" "}
              <span className="text-[var(--olive-light)]">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Contoh: Kemeja PDL bahan Ripstop tebal warna Navy, bordir timbul kesatuan di dada dan lengan, saku taktis 4 titik, target selesai akhir bulan depan..."
              style={{
                backgroundColor: "var(--surface-mid)",
                borderColor: errors.description ? "#ef4444" : "var(--border)",
                color: "var(--cream)",
              }}
              className="w-full px-4 py-3 rounded-xl border text-sm placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)] focus:ring-1 focus:ring-[var(--olive)] transition-colors font-sans leading-relaxed"
            />
            {errors.description && (
              <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.description}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              style={{
                backgroundColor: "var(--olive)",
                color: "#09090a",
              }}
              className="w-full py-4 px-6 rounded-xl font-condensed font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Verifikasi &amp; Siapkan Penawaran</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-[var(--grey-mid)] mt-3 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--olive-light)]" />
                Data aman &amp; rahasia institusi
              </span>
              <span>Respon rata-rata &lt; 30 menit</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
