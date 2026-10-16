"use client";

import { useState } from "react";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ChevronDown,
  AlertCircle,
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
  "> 1.000 pcs (Institusi / Tender)",
];

// ── Shared style helpers ──────────────────────────────────────────────────────

const LABEL: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontFamily: "'Barlow', sans-serif",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#f0ead8",         // full cream — clearly readable
  marginBottom: "6px",
};

const field = (hasError: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "11px 16px",
  background: "#1a1a18",   // slightly lighter than surface-mid for contrast
  border: `1px solid ${hasError ? "#ef4444" : "rgba(255,255,255,0.12)"}`,
  borderRadius: "10px",
  color: "#f0ead8",
  fontSize: "14px",
  fontFamily: "'Barlow', sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
});

// placeholder colour injected via CSS (inline style can't target ::placeholder)
const PLACEHOLDER_CSS = `
  .ozra-input::placeholder,
  .ozra-textarea::placeholder {
    color: rgba(240, 234, 216, 0.38);
    font-style: italic;
  }
  .ozra-input:focus,
  .ozra-textarea:focus,
  .ozra-select:focus {
    border-color: rgba(126,139,82,0.75) !important;
    box-shadow: 0 0 0 2px rgba(126,139,82,0.15);
  }
  .ozra-select option {
    background: #161614;
    color: #f0ead8;
  }
`;

// ── Error message helper ──────────────────────────────────────────────────────
function Err({ msg }: { msg: string }) {
  return (
    <p style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "5px", fontSize: "11px", color: "#f87171", fontFamily: "'Barlow', sans-serif" }}>
      <AlertCircle style={{ width: "13px", height: "13px", flexShrink: 0 }} />
      {msg}
    </p>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "", companyName: "", email: "", phone: "",
    category: "", quantity: "", description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"form" | "ready">("form");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = "Nama lengkap wajib diisi.";
    if (!formData.email.trim()) e.email = "Alamat email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Format email tidak valid.";
    if (!formData.phone.trim()) e.phone = "Nomor WhatsApp wajib diisi.";
    else if (!/^[0-9+()\-\s]{8,20}$/.test(formData.phone)) e.phone = "Minimal 8 digit.";
    if (!formData.category) e.category = "Pilih kategori kebutuhan.";
    if (!formData.description.trim()) e.description = "Deskripsi spesifikasi wajib diisi.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const generateWhatsAppMessage = () => [
    `Halo Tim OZRA Tactical, saya ingin konsultasi & permintaan penawaran:`,
    ``,
    `*DATA PEMESAN:*`,
    `• Nama: ${formData.fullName}`,
    `• Instansi: ${formData.companyName || "-"}`,
    `• WA: ${formData.phone}`,
    `• Email: ${formData.email}`,
    ``,
    `*DETAIL KEBUTUHAN:*`,
    `• Kategori: ${formData.category}`,
    `• Jumlah: ${formData.quantity || "Akan didiskusikan"}`,
    ``,
    `*SPESIFIKASI:*`,
    formData.description,
    ``,
    `Mohon informasikan estimasi biaya & jadwal sampling. Terima kasih.`,
  ].join("\n");

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (validate()) setMode("ready"); };
  const handleWhatsAppSend = () => window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(generateWhatsAppMessage())}`, "_blank");
  const handleEmailSend = () => {
    const subj = encodeURIComponent(`Permintaan Penawaran — ${formData.category}${formData.companyName ? ` [${formData.companyName}]` : ""}`);
    const body = encodeURIComponent(generateWhatsAppMessage().replace(/\*/g, ""));
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subj}&body=${body}`;
  };
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generateWhatsAppMessage().replace(/\*/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  const handleReset = () => {
    setFormData({ fullName: "", companyName: "", email: "", phone: "", category: "", quantity: "", description: "" });
    setErrors({});
    setMode("form");
  };

  // card wrapper
  const cardStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
    padding: "clamp(20px, 3vw, 36px)",
  };

  return (
    <div style={cardStyle}>
      {/* inject placeholder colour */}
      <style dangerouslySetInnerHTML={{ __html: PLACEHOLDER_CSS }} />

      {mode === "ready" ? (
        /* ── READY STATE ─────────────────────────────────────── */
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* success banner */}
          <div style={{ background: "rgba(126,139,82,0.12)", border: "1px solid rgba(126,139,82,0.35)", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <CheckCircle2 style={{ width: "20px", height: "20px", color: "var(--olive-light)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>
                Spesifikasi Siap Dikirim
              </h4>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "rgba(240,234,216,0.7)", lineHeight: 1.6 }}>
                Pilih jalur komunikasi di bawah — tim Ozra Tactical akan segera menindaklanjuti.
              </p>
            </div>
          </div>

          {/* summary card */}
          <div style={{ background: "var(--surface-mid)", border: "1px solid var(--border)", borderRadius: "12px", padding: "16px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid var(--border)", marginBottom: "12px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--olive-light)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>
                Ringkasan
              </span>
              <button type="button" onClick={handleCopy} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "var(--tan-light)", background: "none", border: "none", cursor: "pointer" }}>
                {copied ? <Check style={{ width: "13px", height: "13px", color: "#4ade80" }} /> : <Copy style={{ width: "13px", height: "13px" }} />}
                {copied ? "Tersalin!" : "Salin"}
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", fontSize: "12px", fontFamily: "'Barlow', sans-serif" }}>
              {[
                ["Nama", formData.fullName],
                ["Instansi", formData.companyName || "—"],
                ["WA", formData.phone],
                ["Email", formData.email],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <span style={{ color: "rgba(240,234,216,0.4)", display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>{lbl}</span>
                  <span style={{ color: "#fff", fontWeight: 500 }}>{val}</span>
                </div>
              ))}
              <div style={{ gridColumn: "1 / -1" }}>
                <span style={{ color: "rgba(240,234,216,0.4)", display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>Kategori</span>
                <span style={{ color: "var(--tan-light)", fontWeight: 500 }}>{formData.category}</span>
              </div>
            </div>
          </div>

          {/* dispatch buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button type="button" onClick={handleWhatsAppSend} style={{ padding: "13px 16px", background: "var(--olive)", color: "#09090a", border: "none", borderRadius: "10px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <MessageSquare style={{ width: "15px", height: "15px" }} />
              WhatsApp
            </button>
            <button type="button" onClick={handleEmailSend} style={{ padding: "13px 16px", background: "var(--surface-mid)", color: "var(--cream)", border: "1px solid var(--border)", borderRadius: "10px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <Mail style={{ width: "15px", height: "15px", color: "var(--tan-light)" }} />
              Email
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <button type="button" onClick={() => setMode("form")} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(240,234,216,0.5)", background: "none", border: "none", cursor: "pointer" }}>
              <RotateCcw style={{ width: "13px", height: "13px" }} /> Ubah rincian
            </button>
            <span style={{ color: "var(--border)" }}>•</span>
            <button type="button" onClick={handleReset} style={{ fontSize: "12px", color: "rgba(240,234,216,0.5)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
              Buat permintaan baru
            </button>
          </div>
        </div>
      ) : (
        /* ── FORM STATE ──────────────────────────────────────── */
        <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* header */}
          <div style={{ paddingBottom: "14px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--olive)", display: "inline-block" }} />
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--olive-light)", textTransform: "uppercase", letterSpacing: "3px", fontWeight: 700 }}>
                Formulir Resmi
              </span>
            </div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 28px)", color: "#fff", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "6px" }}>
              Permintaan Penawaran &amp; Konsultasi
            </h3>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "rgba(240,234,216,0.55)", lineHeight: 1.6 }}>
              Isi form di bawah — tim spesialis Ozra Tactical siap bantu pilih material, pola, dan estimasi waktu terbaik.
            </p>
          </div>

          {/* Name + Company */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={LABEL}>Nama Lengkap <span style={{ color: "var(--olive-light)" }}>*</span></label>
              <input className="ozra-input" name="fullName" type="text" value={formData.fullName} onChange={handleChange}
                placeholder="Nama / jabatan" style={field(!!errors.fullName)} />
              {errors.fullName && <Err msg={errors.fullName} />}
            </div>
            <div>
              <label style={LABEL}>Instansi <span style={{ color: "rgba(240,234,216,0.35)", fontWeight: 400, letterSpacing: 0, textTransform: "none", fontSize: "10px" }}>(opsional)</span></label>
              <input className="ozra-input" name="companyName" type="text" value={formData.companyName} onChange={handleChange}
                placeholder="Kemenhub / PT. Nama" style={field(false)} />
            </div>
          </div>

          {/* Phone + Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={LABEL}>WhatsApp <span style={{ color: "var(--olive-light)" }}>*</span></label>
              <input className="ozra-input" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                placeholder="0812-3456-7890" style={field(!!errors.phone)} />
              {errors.phone && <Err msg={errors.phone} />}
            </div>
            <div>
              <label style={LABEL}>Email Aktif <span style={{ color: "var(--olive-light)" }}>*</span></label>
              <input className="ozra-input" name="email" type="email" value={formData.email} onChange={handleChange}
                placeholder="nama@instansi.go.id" style={field(!!errors.email)} />
              {errors.email && <Err msg={errors.email} />}
            </div>
          </div>

          {/* Category */}
          <div>
            <label style={LABEL}>Kategori Kebutuhan <span style={{ color: "var(--olive-light)" }}>*</span></label>
            <div style={{ position: "relative" }}>
              <select className="ozra-select" name="category" value={formData.category} onChange={handleChange}
                style={{
                  ...field(!!errors.category),
                  appearance: "none",
                  WebkitAppearance: "none",
                  paddingRight: "40px",
                  cursor: "pointer",
                  color: formData.category ? "#f0ead8" : "rgba(240,234,216,0.38)",
                }}
              >
                <option value="" disabled>— Pilih Kategori —</option>
                {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "rgba(240,234,216,0.4)", pointerEvents: "none" }} />
            </div>
            {errors.category && <Err msg={errors.category} />}
          </div>

          {/* Quantity */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ ...LABEL, marginBottom: 0 }}>Perkiraan Jumlah</label>
              <span style={{ fontSize: "10px", color: "rgba(240,234,216,0.35)", fontFamily: "'Barlow', sans-serif" }}>pilih atau ketik</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
              {QUANTITY_PRESETS.map((p) => (
                <button key={p} type="button" onClick={() => setFormData((prev) => ({ ...prev, quantity: p }))}
                  style={{
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: `1px solid ${formData.quantity === p ? "var(--olive)" : "rgba(255,255,255,0.1)"}`,
                    background: formData.quantity === p ? "var(--olive)" : "#1a1a18",
                    color: formData.quantity === p ? "#09090a" : "#f0ead8",
                    fontSize: "11px",
                    fontFamily: "'Barlow', sans-serif",
                    textAlign: "left",
                    cursor: "pointer",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    transition: "all 0.15s",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
            <input className="ozra-input" name="quantity" type="text" value={formData.quantity} onChange={handleChange}
              placeholder="Atau ketik jumlah spesifik…" style={field(false)} />
          </div>

          {/* Description */}
          <div>
            <label style={LABEL}>Spesifikasi &amp; Detail <span style={{ color: "var(--olive-light)" }}>*</span></label>
            <textarea className="ozra-textarea" name="description" rows={4} value={formData.description} onChange={handleChange}
              placeholder="Contoh: Kemeja PDL Ripstop Navy, bordir timbul di dada &amp; lengan, saku taktis, target selesai akhir bulan depan…"
              style={{ ...field(!!errors.description), resize: "vertical" }}
            />
            {errors.description && <Err msg={errors.description} />}
          </div>

          {/* Submit */}
          <div style={{ paddingTop: "4px" }}>
            <button type="submit" style={{ width: "100%", padding: "14px", background: "var(--olive)", color: "#09090a", border: "none", borderRadius: "10px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.2s", boxShadow: "0 4px 20px rgba(126,139,82,0.25)" }}>
              Verifikasi &amp; Siapkan Penawaran →
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", fontSize: "11px", color: "rgba(240,234,216,0.35)", fontFamily: "'Barlow', sans-serif" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShieldCheck style={{ width: "12px", height: "12px", color: "var(--olive-light)" }} />
                Data aman &amp; rahasia
              </span>
              <span>Respon &lt; 30 menit</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
