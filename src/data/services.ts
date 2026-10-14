import { ServiceItem, AdvantageItem, WorkflowStep } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "tactical-workshirt",
    slug: "tactical-workshirt",
    title: "Tactical & Workshirt Manufacturing",
    shortDesc:
      "Produksi pakaian kerja dan tactical wear yang dirancang untuk menunjang aktivitas lapangan dengan tingkat presisi tinggi.",
    description:
      "Kami menangani kebutuhan workshirt, seragam lapangan, hingga tactical apparel dengan spesifikasi material dan pola yang disesuaikan dengan kondisi kerja klien, memastikan setiap produk siap menghadapi tuntutan operasional yang sesungguhnya.",
    scope: [
      "Tactical Shirt & BDU Tactical",
      "Workshirt Lapangan & Operasional",
      "Seragam Lapangan Taktis",
      "Pola Ergonomis & Saku Fungsional",
      "Spesifikasi Material Khusus Lapangan",
    ],
    image: "/images/products/workshirt-kemenhub.jpg",
  },
  {
    id: "corporate-institutional",
    slug: "corporate-institutional",
    title: "Corporate & Institutional Uniform",
    shortDesc:
      "Solusi seragam korporat dan institusional yang menonjolkan citra profesional perusahaan atau instansi.",
    description:
      "Dari seragam operasional harian hingga seragam identitas khusus, kami memastikan setiap detail—mulai dari bordir logo, pemilihan bahan, hingga kerapian jahitan—merepresentasikan standar dan reputasi organisasi klien.",
    scope: [
      "Jaket Institusi & Korporat",
      "Pakaian Dinas Harian (PDH)",
      "Bordir Komputer High-Density",
      "Pemilihan Bahan Sejuk & Tahan Kusut",
      "Kerapian Jahitan Berstandar Reputasi",
    ],
    image: "/images/products/jacket-taruna-aal.jpg",
  },
  {
    id: "sportswear-jersey",
    slug: "sportswear-jersey",
    title: "Sportswear & Jersey Sublimasi",
    shortDesc:
      "Layanan produksi jersey dan sportswear berbasis teknologi sublimasi presisi, menghadirkan hasil cetak yang tajam, warna tahan lama, dan kenyamanan bahan.",
    description:
      "Bahan berkualitas yang mendukung performa. Cocok untuk kebutuhan tim olahraga, panitia event, komunitas, hingga pasar pre-order B2C yang menginginkan desain custom tanpa mengorbankan kualitas.",
    scope: [
      "Setelan Jersey Olahraga Kesatuan",
      "Sportswear Polo Training",
      "Teknologi Sublimasi Presisi Penuh",
      "Warna Solid Tahan Cuci",
      "Bahan Dry-fit Bernafas",
    ],
    image: "/images/products/jersey-pomad.jpg",
  },
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    title: "Pengawasan Quality Control yang Ketat",
    description:
      "Setiap tahapan produksi, dari pemotongan kain hingga finishing, melalui proses inspeksi berlapis untuk memastikan konsistensi kualitas pada setiap unit yang dihasilkan, tanpa kompromi.",
    iconName: "ShieldCheck",
  },
  {
    title: "Teknologi Bordir & Sublimasi Presisi",
    description:
      "Didukung mesin bordir komputer high-density dan sistem sublimasi presisi, kami mampu menghadirkan detail visual yang tajam, warna yang solid, dan hasil akhir yang tahan lama.",
    iconName: "Cpu",
  },
  {
    title: "Fleksibilitas Custom Size & Pattern",
    description:
      "Kami memahami bahwa setiap tubuh dan kebutuhan berbeda. Karena itu, kami menyediakan fleksibilitas penuh dalam penyesuaian ukuran dan pola, baik untuk pemesanan individu maupun massal.",
    iconName: "Scissors",
  },
  {
    title: "Ketepatan Waktu Produksi",
    description:
      "Manajemen produksi yang terstruktur memungkinkan kami menjaga komitmen tenggat waktu, sehingga klien dapat merencanakan kebutuhan seragam atau apparel mereka dengan kepastian.",
    iconName: "Clock",
  },
  {
    title: "Jaminan Garansi Purna Jual",
    description:
      "Kepercayaan klien tidak berhenti pada saat produk dikirim. Kami menyediakan layanan garansi purna jual sebagai bentuk tanggung jawab atas kualitas produk yang kami hasilkan.",
    iconName: "BadgeCheck",
  },
];

export const WORKFLOW_DATA: WorkflowStep[] = [
  {
    step: 1,
    title: "Tahap 1 - Konsultasi & Kebutuhan",
    description:
      "Diskusi mendalam mengenai kebutuhan seragam, identitas kesatuan, pemilihan material kain, serta spesifikasi operasional di lapangan.",
  },
  {
    step: 2,
    title: "Tahap 2 - Desain & Sampling",
    description:
      "Pembuatan mockup desain teknis dan sample fisik untuk validasi pola, kerapian bordir/sublimasi, serta kesesuaian fitting sebelum produksi.",
  },
  {
    step: 3,
    title: "Tahap 3 - Approval & Persiapan Produksi",
    description:
      "Persetujuan resmi sample oleh klien dan persiapan rantai pasok material berkualitas tinggi serta penjadwalan antrean mesin.",
  },
  {
    step: 4,
    title: "Tahap 4 - Produksi & Quality Control",
    description:
      "Proses cutting, bordir berkerapatan tinggi, penjahitan presisi, dan inspeksi bertingkat di setiap tahapan pengerjaan.",
  },
  {
    step: 5,
    title: "Tahap 5 - Pengemasan & Pengiriman",
    description:
      "Finishing uap rapi, penataan per ukuran, dan pengiriman tepat waktu ke alamat instansi pemesan di seluruh Indonesia.",
  },
];
