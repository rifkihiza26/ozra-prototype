# Ozra Tactical — Prototype Website Company Profile

Prototype website company profile modern, responsif, dan siap presentasi untuk **Ozra Tactical** (PT. Ozra Mega Perkasa Indonesia), dibangun berdasarkan panduan spesifikasi di `PRD.md` dan menggunakan **foto produk asli yang diekstrak dari file company profile PDF klien**.

---

## 1. Teknologi & Arsitektur

- **Framework**: Next.js 16 (App Router) + Static Site Generation (SSG)
- **UI**: React 19, TypeScript strict
- **Styling**: Tailwind CSS v4 — Tema *Premium Tactical Corporate*
  - Background primer: `#101310`, sekunder: `#191D18`, surface: `#222820`
  - Aksen: `#A4B66A`, teks: `#F3F3ED` / `#A5ACA1`
- **Icons**: Lucide React + Custom SVG component (Instagram)
- **Data**: Static / mock data terstruktur di `src/data/` — terpisah total dari UI
- **Backend**: **Tidak ada** (sesuai batasan prototype PRD)

---

## 2. Cara Menjalankan Project

### Prasyarat
- Node.js 18+ (disarankan 20+)
- npm

```bash
# Development server
cd /Users/mac/ozra-prototype
npm run dev
# → http://localhost:3000

# Production build + start
npm run build
npm run start
```

---

## 3. Struktur Folder Utama

```
src/
├── app/
│   ├── page.tsx                     # Homepage (Hero foto asli, Profil, Layanan, Keunggulan, Workflow, Portfolio, Klien, CTA)
│   ├── about/page.tsx               # About Us (Foto kantor, Visi, Misi, Profil PT, Nilai Brand)
│   ├── services/page.tsx            # Services (3 layanan + foto produk asli, cakupan, subkategori)
│   ├── portfolio/page.tsx           # Portfolio (Grid + Filter kategori interaktif)
│   ├── portfolio/[slug]/page.tsx    # Portfolio Detail (foto produk, spesifikasi, WhatsApp CTA)
│   ├── contact/page.tsx             # Contact (foto kantor, kontak resmi, Google Maps, formulir)
│   ├── not-found.tsx                # Halaman 404
│   ├── layout.tsx                   # Root layout (Navbar + Footer + SEO metadata)
│   └── globals.css                  # CSS variables + tema taktis
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Navbar responsif, logo OZRA, mobile drawer, active states
│   │   └── Footer.tsx               # Footer lengkap + kontak resmi + navigasi
│   ├── portfolio/
│   │   ├── PortfolioCard.tsx        # Card produk dengan hover zoom + quick preview button
│   │   └── PortfolioList.tsx        # Filter tab kategori + lightbox integration
│   ├── contact/
│   │   └── ContactForm.tsx          # Form 7 field + validasi frontend + WhatsApp/Email redirect
│   └── ui/
│       ├── Lightbox.tsx             # Lightbox foto (Esc, arrow, close, backdrop click)
│       └── InstagramIcon.tsx        # SVG icon Instagram standalone
│
├── data/
│   ├── services.ts                  # 3 layanan, 5 keunggulan, 5 workflow steps
│   ├── portfolio.ts                 # 24 item portofolio dengan foto asli dari PDF klien
│   └── clients.ts                  # 18 instansi/klien resmi dari dokumen PDF
│
├── lib/
│   └── constants.ts                 # Info perusahaan, kontak, URL WhatsApp, alamat
│
└── types/
    └── index.ts                     # PortfolioItem, ServiceItem, ClientItem, dll.

public/
├── images/
│   ├── client_pdf/                  # Foto kantor asli dari PDF klien
│   │   ├── office-building.jpg      # → Digunakan di hero About & Contact
│   │   └── office-interior.jpg      # → Digunakan di hero Homepage
│   ├── factory/                     # Foto proses produksi dari PDF klien
│   │   ├── cutting-qc.jpg           # Quality Control
│   │   ├── embroidery-sublimation.jpg
│   │   ├── custom-pattern.jpg
│   │   ├── production-management.jpg
│   │   └── after-sales-warranty.jpg
│   └── products/                    # Foto 24 produk asli dari PDF klien
│       ├── full-set-pdl.jpg
│       ├── bdu-tactical.jpg
│       ├── workshirt-kemenhub.jpg
│       ├── workshirt-brimob.jpg
│       ├── jersey-pomad.jpg
│       ├── jacket-taruna-aal.jpg
│       └── ... (19 foto produk lainnya)
└── images/pdf_extracted/            # Source asli 64 JPEG diekstrak dari PDF (referensi)
```

---

## 4. Fitur yang Diimplementasikan

| Fitur | Status |
|---|---|
| 7 Halaman scope PRD (`/`, `/about`, `/services`, `/portfolio`, `/portfolio/[slug]`, `/contact`, `404`) | ✅ |
| 32 halaman SSG pre-rendered | ✅ |
| Navbar responsif + mobile drawer | ✅ |
| Footer global dengan kontak resmi | ✅ |
| Foto asli diekstrak dari PDF klien | ✅ |
| Filter kategori portfolio (6 kategori) | ✅ |
| Lightbox foto (Esc, arrow prev/next, backdrop) | ✅ |
| 24 item portofolio dengan foto produk nyata | ✅ |
| Formulir kontak 7 field + validasi frontend | ✅ |
| WhatsApp CTA dengan pesan awal terstruktur | ✅ |
| Email CTA `mailto:` resmi | ✅ |
| Google Maps link alamat kantor | ✅ |
| SEO metadata per halaman | ✅ |
| Desain responsif mobile-tablet-desktop | ✅ |
| Zero backend / zero database | ✅ |

---

## 5. Cara Mengganti Konten

| Yang Ingin Diubah | File Target |
|---|---|
| Nomor WA, email, alamat, tagline | [`src/lib/constants.ts`](src/lib/constants.ts) |
| Layanan + keunggulan + workflow | [`src/data/services.ts`](src/data/services.ts) |
| Portofolio (judul, deskripsi, foto) | [`src/data/portfolio.ts`](src/data/portfolio.ts) |
| Daftar klien/instansi | [`src/data/clients.ts`](src/data/clients.ts) |
| Foto produk | Ganti file di `public/images/products/` dengan nama yang sama |
| Foto kantor/fasilitas | Ganti file di `public/images/client_pdf/` atau `public/images/factory/` |

---

## 6. Aset Tambahan yang Perlu Dikonfirmasi Klien

> Untuk tahap **go-live / produksi**, aset berikut masih perlu disiapkan:

1. **Logo vektor resolusi tinggi** (`.svg` atau `.ai`) — untuk mengganti logo teks saat ini
2. **Foto produk resolusi asli** yang lebih tinggi dari yang tertanam di PDF
3. **Persetujuan penggunaan logo institusi klien** (jika ingin menampilkan logo vs nama teks)
4. **Verifikasi link Google Maps** (titik Google Business resmi)
5. **Konfirmasi URL Instagram resmi** (@ozratactical)
6. **Bahasa website** — Indonesia, Inggris, atau bilingual?
7. **Warna brand resmi** (hex) — saat ini menggunakan palet rekomendasi PRD

---

## 7. Keterbatasan Prototype

- Formulir tidak menyimpan data ke server/database (sesuai scope PRD fase 1)
- Setelah validasi berhasil, pengguna diarahkan secara eksplisit ke WhatsApp atau Email resmi
- Backend, Supabase, authentication, dan CMS tidak diimplementasikan pada fase ini
