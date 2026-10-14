# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Company Profile — Ozra Tactical

**Versi:** 1.0  
**Tanggal:** 13 Oktober 2026  
**Status:** Draft untuk pembuatan prototype  
**Sumber utama:** `FINAL DRAFT COMPRO embed.pdf` dari klien  
**Nama perusahaan:** PT. Ozra Mega Perkasa Indonesia  
**Brand:** Ozra Tactical

---

## 1. Ringkasan Proyek

PT. Ozra Mega Perkasa Indonesia adalah perusahaan manufaktur yang didirikan pada 2025 dan berfokus pada produksi serta penyediaan seragam taktis dan apparel olahraga di Indonesia.

Website ini akan mengubah company profile PDF menjadi website company profile yang profesional, modern, responsif, dan membantu calon klien menghubungi perusahaan untuk konsultasi atau permintaan penawaran.

### Visi produk
Menjadikan website Ozra Tactical sebagai media digital resmi untuk memperkenalkan perusahaan, layanan manufaktur, portofolio, dan proses produksi kepada calon klien.

### Tujuan bisnis
- Meningkatkan kredibilitas brand di ranah digital.
- Memperkenalkan kemampuan produksi dan layanan Ozra Tactical.
- Menampilkan portofolio berdasarkan kategori.
- Menjelaskan alur produksi secara ringkas.
- Memudahkan calon klien menghubungi perusahaan melalui WhatsApp atau email.

### Tujuan fase prototype
Membangun frontend yang dapat dijalankan dan dipresentasikan kepada klien menggunakan **Antigravity**. Prototype berfokus pada UI/UX, halaman, navigasi, interaksi frontend, dan data lokal. **Jangan membuat backend pada fase ini.**

---

## 2. Sumber Kebenaran dan Batasan Konten

PDF company profile dari klien adalah sumber utama informasi perusahaan. Pertahankan nama, istilah, visi, misi, layanan, kategori produk, nama klien, kontak, dan alamat sesuai sumber tersebut.

Jangan mengarang:
- Sertifikasi, penghargaan, atau pencapaian.
- Kapasitas produksi, MOQ, harga, dan estimasi waktu pengerjaan.
- Spesifikasi material atau teknis yang tidak tersedia.
- Klien tambahan atau klaim kemitraan baru.
- Kebijakan garansi terperinci yang belum diberikan.

Copywriting tambahan untuk kebutuhan UI boleh diusulkan, tetapi jangan menyajikannya sebagai kutipan resmi dari PDF.

Jika foto asli tidak tersedia, gunakan placeholder yang jelas dan mudah diganti. Jangan menyamarkan foto stok atau gambar AI sebagai dokumentasi produksi asli Ozra.

---

## 3. Ruang Lingkup

### Termasuk dalam prototype
- Homepage.
- Halaman About Us.
- Halaman Services.
- Halaman Portfolio.
- Halaman Portfolio Detail atau tampilan detail yang dapat dibagikan melalui URL.
- Halaman Contact.
- Halaman 404.
- Navbar desktop dan menu mobile.
- Footer global.
- Filter kategori portfolio.
- Lightbox atau image preview.
- Formulir kontak dengan validasi frontend.
- CTA WhatsApp dan email.
- Responsive layout.
- SEO metadata dasar.
- Data lokal/mock data yang terpisah dari komponen UI.
- README berisi cara menjalankan dan mengubah konten.

### Tidak termasuk dalam prototype
- Supabase atau database.
- Authentication.
- Admin dashboard/CMS.
- Upload gambar ke cloud.
- API/backend.
- Penyimpanan formulir ke server.
- Email otomatis.
- CRM, tracking pesanan, inventaris, checkout, atau pembayaran.
- Fitur yang membutuhkan kredensial layanan eksternal.

Formulir tidak boleh berpura-pura mengirim atau menyimpan data. Setelah validasi, tampilkan ringkasan atau berikan opsi untuk melanjutkan ke WhatsApp dengan tindakan eksplisit pengguna.

---

## 4. Target Pengunjung

### Corporate dan institutional clients
Perusahaan, BUMN, instansi pemerintah, dan institusi pendidikan yang mencari vendor seragam.

### Tactical dan workwear buyers
Organisasi yang membutuhkan tactical wear, workshirt, seragam lapangan, atau apparel operasional.

### Sports teams dan communities
Tim olahraga, komunitas, dan panitia event yang membutuhkan jersey atau sportswear custom.

Kebutuhan umum pengunjung: memahami layanan, menilai portofolio, memahami proses produksi, dan menghubungi perusahaan untuk konsultasi.

---

## 5. Brand dan Positioning

### Informasi dari PDF
- Brand: Ozra Tactical.
- Perusahaan: PT. Ozra Mega Perkasa Indonesia.
- Descriptor: “Tactical Gear Specialist & Apparel”.
- Tagline: “Where Professionalism Meets Uncompromising Quality.”

### Karakter visual yang direkomendasikan
- Professional.
- Tactical.
- Modern.
- Reliable.
- Premium.
- Precise.
- Functional.

### Arah desain
Gunakan gaya **Premium Tactical Corporate**. Website harus terasa profesional dan berkarakter tactical, tetapi tetap cocok untuk calon klien korporat dan institusi.

Hindari tampilan seperti template generik, efek gaming/sci-fi, neon glow berlebihan, animasi yang mengganggu, atau motif kamuflase yang memenuhi seluruh halaman.

### Palet awal (usulan, bukan warna resmi yang terkonfirmasi)
- Primary background: `#101310`
- Secondary background: `#191D18`
- Surface: `#222820`
- Accent: `#A4B66A`
- Primary text: `#F3F3ED`
- Secondary text: `#A5ACA1`
- Border: `#353B32`
- Light section: `#F3F2EC`

Warna dapat disesuaikan bila aset brand resmi tersedia. Gunakan latar gelap dan terang secara seimbang untuk membangun ritme visual.

### Typography
Rekomendasi: Manrope atau Space Grotesk untuk heading dan Inter untuk body. Maksimal dua keluarga font utama. Prioritaskan keterbacaan dan hierarki yang jelas.

### Fotografi
Urutan prioritas:
1. Aset asli yang diberikan klien.
2. Gambar yang diekstrak dari PDF jika kualitasnya layak.
3. Placeholder sementara yang mudah diganti.

Jangan menggunakan gambar placeholder seolah-olah merupakan hasil produksi asli Ozra.

---

## 6. Sitemap dan Navigasi

Routes:
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/portfolio` — Portfolio
- `/portfolio/[slug]` — Portfolio Detail
- `/contact` — Contact
- `not-found` — 404

Privacy Policy hanya dibuat jika memang diperlukan untuk peluncuran dan kontennya sudah disepakati.

Navbar:
- Logo Ozra Tactical.
- Home.
- About.
- Services.
- Portfolio.
- Contact.
- CTA “Request a Quote”.

Desktop menggunakan navigasi horizontal. Mobile menggunakan menu hamburger/drawer yang mudah diakses. Navbar boleh sticky selama tidak menghalangi konten.

Footer:
- Logo/nama brand.
- Tagline.
- Ringkasan perusahaan.
- Quick links.
- Layanan utama.
- Email, telepon/WhatsApp, Instagram, alamat.
- Copyright.

---

## 7. Persyaratan Detail Halaman

### 7.1 Homepage (`/`)

Urutan section yang direkomendasikan:

#### A. Navbar
Logo, menu utama, CTA Request a Quote, dan menu mobile.

#### B. Hero
- Eyebrow: “TACTICAL GEAR SPECIALIST & APPAREL”.
- Headline usulan: “Precision in Every Stitch. Confidence in Every Move.”
- Deskripsi: Ozra Tactical memproduksi seragam taktis, corporate uniform, dan sportswear custom dengan perhatian pada kualitas, fungsionalitas, serta detail produksi.
- Primary CTA: “Request a Quote”.
- Secondary CTA: “Explore Our Portfolio”.
- Visual hero berupa foto editorial apparel/proses produksi yang berkualitas dan tidak mengorbankan keterbacaan teks.

Headline dan deskripsi di atas adalah copywriting usulan, bukan kutipan resmi dari PDF.

#### C. Company Introduction
Judul usulan: “Built for Performance. Crafted with Precision.”

Gunakan substansi PDF: perusahaan didirikan pada 2025 dan berfokus pada produksi seragam taktis serta apparel olahraga di Indonesia. Perusahaan menggabungkan desain modern, material premium, dan teknologi produksi untuk menghasilkan apparel yang fungsional, nyaman, dan profesional.

CTA: “Discover Ozra”.

#### D. Core Services
Tampilkan tiga service cards utama:

1. **Tactical & Workshirt Manufacturing**  
   Produksi pakaian kerja, seragam lapangan, dan tactical apparel dengan spesifikasi material serta pola yang disesuaikan dengan kebutuhan klien.

2. **Corporate & Institutional Uniform**  
   Solusi seragam korporat dan institusional dengan perhatian pada material, bordir logo, detail jahitan, dan identitas organisasi.

3. **Sportswear & Jersey Sublimasi**  
   Produksi jersey dan sportswear custom menggunakan sublimasi untuk menghadirkan visual tajam, warna solid, dan kenyamanan bahan.

Setiap card memiliki gambar, nama, deskripsi singkat, dan link ke detail layanan.

#### E. Why Choose Ozra
Tampilkan lima keunggulan dari PDF:
1. **Quality Control yang Ketat** — inspeksi berlapis dari pemotongan kain hingga finishing.
2. **Teknologi Bordir & Sublimasi Presisi** — dukungan mesin bordir komputer dan sistem sublimasi presisi.
3. **Fleksibilitas Custom Size & Pattern** — penyesuaian ukuran dan pola sesuai kebutuhan.
4. **Ketepatan Waktu Produksi** — pengelolaan produksi terstruktur untuk menjaga tenggat waktu.
5. **Jaminan Garansi Purna Jual** — layanan purna jual sebagai bentuk tanggung jawab atas kualitas.

Gunakan ikon konsisten, judul ringkas, dan deskripsi yang mudah dipindai.

#### F. Production Workflow
Judul usulan: “From Consultation to Delivery”.

Tampilkan lima tahapan:
1. Konsultasi & Kebutuhan.
2. Desain & Sampling.
3. Approval & Persiapan Produksi.
4. Produksi & Quality Control.
5. Pengemasan & Pengiriman.

Gunakan timeline/stepper yang responsif. Jangan menambahkan durasi per tahap karena belum tersedia.

#### G. Featured Portfolio
Tampilkan pilihan portfolio dari kategori:
- Tactical & Workwear.
- Corporate & Institutional Uniform.
- Sportswear & Jersey.

Setiap item berisi foto, kategori, judul jika tersedia, dan link detail. Gunakan aset asli jika tersedia; selain itu gunakan placeholder yang jelas dan mudah diganti.

#### H. Client Trust
PDF mencantumkan nama/identitas klien berikut:
- Kementerian Perhubungan Republik Indonesia.
- Korps Brimob.
- POLRI Bali.
- TNI-AL.
- Kejaksaan Agung Republik Indonesia.
- Fakultas Hukum Universitas Kristen Indonesia.
- Imigrasi.
- TNI-AU.
- Sate Taichan SUI.
- Kementerian Hukum dan HAM.
- Polisi Militer Angkatan Darat (POMAD).
- Polisi Militer Angkatan Laut (POMAL).
- Landasan Udara Anang Busra.
- Taruna AAL.
- SMA Presiden.
- Institut Pemerintahan Dalam Negeri (IPDN).
- Sekolah Tinggi Intelijen Negara (STIN).
- MTI – UI.

Daftar ini bukan klaim bahwa seluruhnya merupakan daftar lengkap. Tampilkan logo hanya jika aset yang sesuai tersedia dan penggunaannya layak. Jangan menggambar ulang logo secara tidak akurat. Alternatifnya, gunakan nama dalam bentuk teks.

#### I. Final CTA
Headline usulan: “Let’s Build Your Next Apparel Project.”

Ajak calon klien mendiskusikan kebutuhan seragam institusi, tactical wear, atau jersey olahraga custom.

CTA:
- “Discuss Your Project”
- “Contact Us”

#### J. Footer
Gunakan spesifikasi footer global.

### 7.2 About Us (`/about`)

Bagian:
1. Page hero.
2. Company introduction.
3. Vision.
4. Mission.
5. Brand values.
6. CTA konsultasi.

Gunakan isi profil dari PDF:

**Company introduction:** PT. Ozra Mega Perkasa Indonesia, didirikan pada tahun 2025, adalah perusahaan manufaktur yang berfokus pada produksi dan penyediaan seragam taktis serta apparel olahraga di Indonesia. Perusahaan melayani kebutuhan instansi, komunitas, dan pelaku bisnis melalui produk yang fungsional, nyaman, dan profesional.

**Vision:**  
“Merancang identitas berpakaian yang memadukan ketangguhan militer dengan keanggunan modern, memberdayakan setiap individu untuk merepresentasikan kepercayaan diri, disiplin, dan kekuatan dalam aktivitas sehari-hari.”

**Mission:**
1. Mengutamakan material dan konstruksi premium dalam setiap produk yang dihasilkan.
2. Berinovasi dengan desain kontemporer tanpa mengesampingkan identitas dan karakter khas Ozra.
3. Menginspirasi pola pikir ketangguhan dan kepercayaan diri, menjadikan pakaian lebih dari sekadar fesyen, melainkan simbol karakter.

Nilai Quality, Precision, Adaptability, Professionalism, dan Reliability boleh dipakai sebagai ringkasan tematik, bukan sebagai daftar nilai resmi yang dinyatakan eksplisit dalam PDF.

### 7.3 Services (`/services`)

Tampilkan detail tiga layanan utama:

**Tactical & Workshirt Manufacturing**
- Tactical shirt.
- Workshirt.
- Seragam lapangan.
- Tactical apparel.
- Penyesuaian material dan pola.

**Corporate & Institutional Uniform**
- Seragam operasional.
- Institutional uniform.
- Bordir logo.
- Pemilihan bahan.
- Detail konstruksi dan jahitan.

**Sportswear & Jersey Sublimasi**
- Custom jersey.
- Sportswear.
- Sublimasi.
- Desain visual custom.
- Kebutuhan komunitas dan tim.

Kategori tambahan dari PDF:
- Full Set-PDL.
- PDH.
- BDU Tactical.
- Cargo Tactical Pants.
- Tactical Cap.

Kategori tambahan dapat muncul sebagai subkategori atau item portfolio. Jangan menganggap semuanya sebagai layanan terpisah sebelum dikonfirmasi.

Setiap detail layanan menampilkan deskripsi, gambar representatif, cakupan, portfolio terkait, dan CTA konsultasi. Jangan menambahkan harga, MOQ, material spesifik, atau durasi produksi yang belum dikonfirmasi.

### 7.4 Portfolio (`/portfolio`)

Kategori:
1. Pakaian Dinas.
2. Tactical & Workshirt.
3. Sportswear & Jersey Sublimasi.
4. Corporate & Institutional Uniform.
5. Trousers & Accessories.

Gunakan grid visual dengan foto sebagai fokus utama. Setiap card menampilkan thumbnail, kategori, judul jika tersedia, dan link detail.

Filter:
- All.
- Pakaian Dinas.
- Tactical & Workshirt.
- Sportswear & Jersey.
- Corporate & Institutional.
- Trousers & Accessories.

Filter bekerja sepenuhnya di frontend menggunakan data lokal.

Detail portfolio menampilkan foto utama, galeri, nama item, kategori, deskripsi jika tersedia, dan CTA untuk konsultasi produk serupa. Jangan mengarang detail proyek.

Lightbox:
- Gambar dapat dibuka dalam ukuran besar.
- Tombol close.
- Navigasi prev/next jika ada beberapa foto.
- Tombol Escape untuk menutup.
- Tetap nyaman digunakan di mobile.
- Klik area luar dapat menutup jika perilakunya tidak mengganggu.

### 7.5 Contact (`/contact`)

Informasi kontak dari PDF:
- Email: `ozratactical@gmail.com`
- Telepon/WhatsApp: `+62 877-2289-7073`
- Instagram handle: `@ozratactical`
- Alamat: `Jl. Bango 3 No.3, RT.7/RW.3, Pd. Labu, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12450`

URL Instagram lengkap dan tautan Google Maps harus diverifikasi sebelum peluncuran.

Form fields:
1. Nama lengkap — wajib.
2. Nama perusahaan/organisasi — opsional.
3. Email — wajib.
4. Nomor WhatsApp — wajib.
5. Kategori kebutuhan — wajib.
6. Perkiraan jumlah pesanan — opsional.
7. Deskripsi kebutuhan — wajib.

Pilihan kategori:
- Tactical & Workshirt.
- Corporate & Institutional Uniform.
- Sportswear & Jersey.
- Pakaian Dinas.
- Trousers & Accessories.
- Other.

Validasi frontend:
- Validasi field wajib.
- Validasi format email.
- Validasi dasar nomor telepon.
- Pesan error jelas di dekat field.
- Tombol submit tidak aktif jika input wajib tidak valid.
- Setelah validasi berhasil, tampilkan ringkasan atau opsi untuk melanjutkan ke WhatsApp.
- Jangan mengklaim data tersimpan atau terkirim ke server.

CTA WhatsApp membuka nomor tujuan yang benar dengan pesan awal:
“Halo Ozra Tactical, saya ingin berkonsultasi mengenai kebutuhan produksi apparel custom. Mohon informasi lebih lanjut mengenai layanan dan proses pemesanannya.”

Jika formulir dilanjutkan ke WhatsApp, sertakan data yang relevan dalam pesan hanya setelah pengguna menekan tombol untuk melanjutkan.

CTA email menggunakan `mailto:`. Map dapat berupa tautan ke Google Maps setelah lokasi diverifikasi.

---

## 8. Design System

### Visual direction
Premium Tactical Corporate, editorial, tegas, rapi, modern, dan profesional.

### Layout
- Gunakan whitespace yang cukup.
- Hero memiliki visual kuat dan CTA jelas.
- Variasikan section gelap dan terang.
- Gunakan grid yang konsisten.
- Jangan membuat semua section terlihat seperti kumpulan card seragam.

### Components
Buat komponen reusable untuk:
- Navbar.
- Mobile navigation.
- Footer.
- Buttons.
- Section headings.
- Service cards.
- Portfolio cards.
- Client list/logos.
- Workflow steps.
- Contact form.
- Lightbox.
- CTA section.

### Motion
Animasi sederhana dan fungsional: hover, reveal ringan, transisi navbar, dan lightbox. Hormati `prefers-reduced-motion`. Jangan gunakan animasi berat.

---

## 9. Technical Requirements

### Stack
- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Lucide React untuk ikon.
- Data statis dalam TypeScript atau JSON.

Gunakan versi package stabil yang kompatibel saat implementasi. Jangan menambahkan dependensi besar tanpa kebutuhan.

### Struktur project yang disarankan

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── portfolio/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── home/
│   ├── services/
│   ├── portfolio/
│   ├── contact/
│   └── ui/
├── data/
│   ├── services.ts
│   ├── portfolio.ts
│   └── clients.ts
├── lib/
│   └── constants.ts
└── types/
    └── index.ts
```

Struktur boleh disesuaikan selama modular dan mudah dirawat. Jangan menumpuk seluruh website dalam satu file.

### Data model portfolio

```ts
type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
};
```

Pisahkan data layanan, portfolio, klien, navigasi, dan kontak dari komponen presentasi.

### Backend
Tidak ada backend pada fase ini. Jangan:
- Membuat project Supabase.
- Menambahkan Supabase credentials.
- Membuat database schema.
- Membuat authentication.
- Membuat API backend yang tidak diperlukan.
- Mengirim data formulir ke layanan eksternal.

### Image handling
- Gunakan optimasi gambar Next.js jika sesuai.
- Tentukan rasio/ukuran agar layout stabil.
- Gunakan thumbnail untuk grid dan gambar besar untuk detail.
- Pastikan semua path gambar valid.
- Prioritaskan aset lokal.
- Jangan membiarkan URL gambar placeholder yang mudah rusak jika dapat dihindari.

### SEO
Setiap halaman mempunyai title dan meta description unik, heading semantik, alt text, Open Graph metadata dasar, dan URL yang mudah dibaca. Gunakan canonical URL hanya setelah domain resmi diketahui.

---

## 10. Responsive Design

Uji minimal pada:
- Mobile: 320–767px.
- Tablet: 768–1023px.
- Laptop: 1024–1439px.
- Desktop: 1440px ke atas.

Kriteria:
- Tidak ada horizontal overflow.
- Navbar beradaptasi.
- Hero dan CTA tidak terpotong.
- Grid portfolio menyesuaikan kolom.
- Form nyaman di mobile.
- Teks mudah dibaca.
- Area sentuh tombol memadai.
- Footer tetap rapi.
- Gambar mempertahankan komposisi penting.

---

## 11. Accessibility dan Performance

Accessibility:
- Navigasi keyboard.
- Focus state terlihat.
- Form mempunyai label.
- Kontras memadai.
- Alt text yang relevan.
- Heading semantik.
- Error tidak hanya diindikasikan dengan warna.
- Lightbox dapat ditutup dengan keyboard.
- Hormati `prefers-reduced-motion`.

Performance:
- Optimalkan gambar.
- Hindari dependensi yang tidak diperlukan.
- Gunakan komponen server untuk konten statis bila sesuai.
- Gunakan client components hanya untuk interaksi.
- Hindari hydration errors dan console errors.

Target Lighthouse awal:
- Performance: 85+.
- Accessibility: 90+.
- Best Practices: 90+.
- SEO: 90+.

Angka ini merupakan target pengujian, bukan jaminan sebelum audit.

---

## 12. Functional Requirements

| ID | Requirement | Prioritas |
|---|---|---|
| FR-01 | Homepage menampilkan identitas dan CTA utama | Must Have |
| FR-02 | Navbar dan semua link berfungsi | Must Have |
| FR-03 | Halaman About tersedia | Must Have |
| FR-04 | Tiga layanan utama ditampilkan | Must Have |
| FR-05 | Portfolio memiliki kategori dan gambar | Must Have |
| FR-06 | Filter portfolio berfungsi di frontend | Must Have |
| FR-07 | Gambar dapat dibuka lebih besar | Must Have |
| FR-08 | Contact menampilkan informasi resmi | Must Have |
| FR-09 | Form mempunyai validasi frontend | Must Have |
| FR-10 | WhatsApp CTA membuka pesan yang disiapkan | Must Have |
| FR-11 | Email CTA memakai alamat resmi | Must Have |
| FR-12 | Layout responsif | Must Have |
| FR-13 | Metadata SEO dasar tersedia | Must Have |
| FR-14 | Halaman 404 tersedia | Must Have |
| FR-15 | Data konten terpisah dari UI | Must Have |
| FR-16 | Animasi/transisi halus | Should Have |
| FR-17 | Detail portfolio memiliki URL tersendiri | Should Have |
| FR-18 | Link peta lokasi | Should Have |
| FR-19 | Backend dan penyimpanan form | Out of Scope |
| FR-20 | Admin dashboard/CMS | Out of Scope |

---

## 13. User Journeys

### Corporate client
1. Membuka homepage.
2. Membaca profil singkat.
3. Membuka Corporate & Institutional Uniform.
4. Melihat portfolio.
5. Meninjau keunggulan dan workflow.
6. Memilih Request a Quote.
7. Mengisi form atau melanjutkan ke WhatsApp.

### Sports team
1. Membuka homepage.
2. Memilih Sportswear & Jersey.
3. Menjelajahi portfolio jersey.
4. Membuka gambar produk.
5. Memilih Discuss Your Design.
6. Melanjutkan konsultasi melalui WhatsApp.

### Institutional buyer
1. Membuka About.
2. Meninjau profil perusahaan.
3. Melihat daftar klien/portfolio yang tersedia.
4. Membaca quality control dan production workflow.
5. Membuka Contact.
6. Menghubungi perusahaan.

---

## 14. Konten dan Aset yang Masih Dibutuhkan

Dari PDF sudah tersedia:
- Nama perusahaan dan brand.
- Tagline.
- Profil perusahaan.
- Visi dan misi.
- Tiga layanan utama.
- Lima keunggulan.
- Lima tahap workflow.
- Nama klien yang tercantum.
- Kategori portfolio.
- Kontak dan alamat.
- Gambar yang tertanam dalam PDF.

Perlu diminta atau dikonfirmasi:
- Logo resmi resolusi tinggi.
- Foto produk dalam resolusi asli.
- Logo klien yang boleh ditampilkan.
- Foto proses produksi jika ada.
- URL Instagram resmi.
- Link Google Maps.
- Bahasa website (Indonesia, Inggris, atau bilingual).
- Warna brand resmi.
- MOQ, harga, waktu produksi, kebijakan garansi, dan kapasitas jika ingin ditampilkan.

Jangan menunda prototype karena aset tambahan belum tersedia. Gunakan placeholder yang mudah diganti dan catat semua aset yang masih dibutuhkan.

---

## 15. Acceptance Criteria

### Konten
- [ ] Nama perusahaan dan brand benar.
- [ ] Tagline sesuai PDF.
- [ ] Visi dan misi sesuai sumber.
- [ ] Tiga layanan utama tersedia.
- [ ] Lima keunggulan dan lima tahap workflow tersedia.
- [ ] Kategori portfolio benar.
- [ ] Kontak dan alamat benar.
- [ ] Tidak ada klaim yang dibuat-buat.

### UI/UX
- [ ] Desain profesional dan konsisten.
- [ ] Visual premium tactical corporate.
- [ ] Navigasi mudah digunakan.
- [ ] CTA jelas.
- [ ] Portfolio menjadi fokus visual.
- [ ] Layout tidak terasa seperti template generik.
- [ ] Tidak ada placeholder yang tidak sengaja tertinggal tanpa penanda.

### Fungsionalitas
- [ ] Semua route dan link berfungsi.
- [ ] Filter portfolio berfungsi.
- [ ] Lightbox bisa dibuka dan ditutup.
- [ ] Form mempunyai validasi.
- [ ] WhatsApp menuju nomor yang benar.
- [ ] Email menuju alamat yang benar.
- [ ] Halaman 404 tersedia.
- [ ] Tidak ada tombol utama yang hanya dekoratif.

### Teknis
- [ ] Project berjalan lokal.
- [ ] Build berhasil.
- [ ] Tidak ada runtime error yang mengganggu.
- [ ] Tidak ada setup Supabase/backend.
- [ ] Data dan komponen terorganisasi.
- [ ] Layout diuji pada desktop dan mobile.
- [ ] Gambar memiliki path/sumber valid.
- [ ] README tersedia.

---

## 16. Rencana Implementasi

### Phase 1 — Foundation
- Periksa project yang tersedia.
- Setup Next.js, TypeScript, dan styling jika belum ada.
- Buat design tokens.
- Buat layout global, navbar, footer, dan data statis.

### Phase 2 — Pages
- Implementasi Home.
- Implementasi About.
- Implementasi Services.
- Implementasi Portfolio dan detail.
- Implementasi Contact dan 404.

### Phase 3 — Interaction
- Mobile navigation.
- Filter portfolio.
- Lightbox.
- Form validation.
- WhatsApp dan email CTA.

### Phase 4 — Polish
- Responsive adjustments.
- Motion.
- SEO metadata.
- Accessibility review.
- Image optimization.

### Phase 5 — QA and Handover
- Tes semua halaman dan link.
- Tes desktop/mobile.
- Periksa konten berdasarkan PRD.
- Periksa build dan console.
- Buat README dan checklist acceptance criteria.
- Catat aset dan informasi yang perlu diminta dari klien.

---

## 17. Risiko dan Mitigasi

1. **Kualitas gambar dari PDF terbatas:** minta file asli atau gunakan placeholder yang mudah diganti.
2. **Informasi teknis belum lengkap:** tampilkan informasi yang tersedia dan arahkan pertanyaan ke konsultasi.
3. **Logo institusi tidak tersedia:** jangan merekonstruksi sembarangan; gunakan nama teks jika perlu.
4. **Form prototype disangka benar-benar mengirim data:** jelaskan statusnya dan arahkan ke WhatsApp dengan tindakan eksplisit.
5. **Visual terlalu tactical:** seimbangkan dengan profesionalitas corporate dan keterbacaan.
6. **Konten sulit diperbarui:** pisahkan data dari komponen UI.

---

## 18. Prinsip Akhir

1. PDF klien adalah sumber utama fakta.
2. Jangan mengarang informasi perusahaan.
3. Utamakan kualitas visual dan keterbacaan.
4. Buat tujuan bisnis dan CTA jelas.
5. Gunakan data dummy hanya jika diperlukan dan mudah diganti.
6. Jangan membuat backend pada fase prototype.
7. Semua interaksi harus bekerja.
8. Prioritaskan pengalaman mobile dan desktop.
9. Bangun kode yang mudah dipelihara.
10. Jangan mengklaim pekerjaan selesai jika belum diuji.

**Definition of Done:** Prototype selesai ketika seluruh halaman dalam scope tersedia, konten utama PDF terwakili, interaksi frontend berfungsi, layout responsif telah diperiksa, project dapat dijalankan tanpa backend, dan hasil siap direview oleh klien.

---

# Lampiran A — Instruksi untuk Antigravity

Gunakan prompt ini setelah file PRD disimpan di root folder project.

> Kamu bertindak sebagai Senior Frontend Engineer, UI/UX Designer, dan Product Designer. Baca dan pahami seluruh isi `PRD_OZRA_TACTICAL.md` sebelum mengimplementasikan website.
>
> Bangun prototype company profile Ozra Tactical menggunakan Next.js App Router, React, TypeScript, dan Tailwind CSS. Ikuti scope, halaman, konten, design direction, functional requirements, dan acceptance criteria pada PRD.
>
> **Fokus hanya pada frontend. Jangan setup Supabase, database, authentication, API backend, atau penyimpanan form ke layanan eksternal.**
>
> ## Workflow
>
> 1. Periksa file dan struktur project yang sudah tersedia. Jangan menghapus pekerjaan yang masih relevan.
> 2. Buat checklist requirements berdasarkan PRD.
> 3. Implementasikan design system, layout, navbar, footer, dan data statis.
> 4. Implementasikan seluruh halaman: Home, About, Services, Portfolio, Portfolio Detail, Contact, dan 404.
> 5. Implementasikan filter portfolio, lightbox, mobile navigation, validasi form, WhatsApp CTA, dan email CTA.
> 6. Gunakan gambar asli klien jika tersedia. Jika tidak, gunakan placeholder yang mudah diganti dan jangan menyebutnya sebagai hasil produksi asli.
> 7. Jalankan project dan uji seluruh route, link, interaksi, build, serta tampilan desktop dan mobile.
> 8. Perbaiki error yang ditemukan.
> 9. Buat README berisi cara menjalankan project dan cara mengganti konten/aset.
> 10. Laporkan fitur selesai, keterbatasan, dan aset yang masih dibutuhkan.
>
> ## Quality bar
>
> Website harus terasa premium, modern, editorial, profesional, dan memiliki karakter tactical corporate. Hindari template generik, neon, efek gaming, animasi berlebihan, dan card yang monoton. Gunakan whitespace, typography yang tegas, visual produk yang kuat, dan CTA yang jelas.
>
> Jangan berhenti setelah membuat homepage. Selesaikan semua halaman yang ada dalam PRD. Jangan mengarang klaim bisnis. Jangan mengklaim fitur selesai sebelum diuji. Jika detail tidak ditentukan oleh PRD, ambil keputusan desain yang wajar, dokumentasikan asumsi penting, dan lanjutkan tanpa menambahkan scope backend.
>
> Mulai dengan membaca PRD dan memeriksa project, lalu implementasikan secara sistematis sampai prototype dapat dijalankan dan siap dipresentasikan.

---

**END OF DOCUMENT**
