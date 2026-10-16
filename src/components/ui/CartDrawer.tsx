"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/lib/constants";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  if (!isOpen) return null;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const itemsSummary = items
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.title} (${it.selectedSize || "Standard"}) x${it.quantity} = ${formatRupiah(
            it.unitPrice * it.quantity
          )}`
      )
      .join("\n");

    const message = [
      `*PESANAN CHECKOUT — OZRA TACTICAL E-COMMERCE*`,
      `------------------------------------------`,
      `*DATA PEMESAN:*`,
      `• Nama: ${customerName}`,
      `• No. WhatsApp: ${customerPhone}`,
      customerNote ? `• Catatan: ${customerNote}` : null,
      ``,
      `*ITEM PESANAN:*`,
      itemsSummary,
      ``,
      `*TOTAL PEMBAYARAN:* ${formatRupiah(totalPrice)} (${totalItems} item)`,
      `------------------------------------------`,
      `Mohon info ketersediaan stok & nomor rekening untuk pembayaran/invoice. Terima kasih.`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          style={{
            background: "#0f0f0d",
            borderLeft: "1px solid var(--border)",
          }}
          className="w-screen max-w-md flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--surface-mid)] border border-[var(--border)] flex items-center justify-center text-[var(--olive-light)]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-condensed text-xl font-bold uppercase tracking-wider text-white">
                  Keranjang Belanja
                </h3>
                <p className="text-xs text-[var(--grey-mid)]">
                  {totalItems} unit item siap dipesan
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[var(--grey-mid)] hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--surface-mid)] border border-[var(--border)] flex items-center justify-center text-[var(--grey-mid)] mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="font-condensed text-lg font-bold text-white uppercase tracking-wider">
                  Keranjang Kosong
                </h4>
                <p className="text-xs text-[var(--grey-mid)] mt-1 max-w-xs font-sans">
                  Jelajahi portofolio &amp; katalog apparel taktis kami untuk menambahkan pesanan.
                </p>
                <Link
                  href="/portfolio"
                  onClick={closeCart}
                  className="mt-6 px-6 py-2.5 rounded-lg border border-[var(--tan)] text-[var(--cream)] hover:bg-[var(--tan)] hover:text-black font-condensed text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Lihat Katalog Produk
                </Link>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handleCheckoutWhatsApp} className="space-y-4">
                <div className="p-3.5 rounded-lg bg-[var(--surface-mid)] border border-[var(--border)] mb-4">
                  <span className="text-xs font-mono text-[var(--olive-light)] uppercase tracking-wider block font-bold mb-1">
                    Ringkasan Checkout
                  </span>
                  <div className="flex justify-between text-xs text-[var(--cream)]">
                    <span>Total Produk:</span>
                    <span className="font-semibold">{totalItems} item</span>
                  </div>
                  <div className="flex justify-between text-xs text-white font-bold mt-1 pt-1 border-t border-[var(--border)]">
                    <span>Total Harga:</span>
                    <span className="text-[var(--tan-light)]">{formatRupiah(totalPrice)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[var(--cream)] mb-1.5 uppercase tracking-wide">
                    Nama Lengkap <span className="text-[var(--olive-light)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nama Anda atau Divisi Kesatuan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-mid)] text-sm text-[var(--cream)] placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[var(--cream)] mb-1.5 uppercase tracking-wide">
                    Nomor WhatsApp <span className="text-[var(--olive-light)]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-mid)] text-sm text-[var(--cream)] placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[var(--cream)] mb-1.5 uppercase tracking-wide">
                    Catatan Pesanan / Ukuran Custom
                  </label>
                  <textarea
                    rows={3}
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Contoh: Rincian ukuran L: 20 pcs, XL: 10 pcs, bordir logo Kemenhub di dada..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-mid)] text-sm text-[var(--cream)] placeholder-[var(--grey-mid)]/60 focus:outline-none focus:border-[var(--olive)]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-1/3 py-3 rounded-lg border border-[var(--border)] text-xs text-[var(--grey-mid)] hover:text-white uppercase font-condensed tracking-wider"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-lg bg-[var(--olive)] text-black font-condensed font-bold text-xs uppercase tracking-wider hover:opacity-90 flex items-center justify-center gap-1.5"
                  >
                    <span>Lanjut ke WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              /* Item list */
              items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                  className="p-3.5 rounded-xl flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-[var(--border)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-condensed text-sm font-bold text-white uppercase truncate">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-[var(--tan-light)] mt-0.5">
                      {formatRupiah(item.unitPrice)}
                    </p>

                    {/* Quantity controller */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[var(--border)] rounded-md bg-[var(--surface-mid)]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[var(--olive-light)] text-[var(--grey-mid)] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[var(--olive-light)] text-[var(--grey-mid)] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-[var(--grey-mid)] hover:text-red-400 p-1 transition-colors ml-auto"
                        title="Hapus item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout Button */}
          {items.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-[var(--border)] bg-[var(--surface-mid)]/60 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[var(--grey-mid)] font-sans">
                  <span>Subtotal:</span>
                  <span className="text-[var(--cream)] font-mono">{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-xs text-[var(--grey-mid)] font-sans">
                  <span>Pajak &amp; Penyesuaian:</span>
                  <span className="text-[var(--olive-light)] font-mono">Dihitung saat konfirmasi</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[var(--border)]">
                  <span>Total Estimasi:</span>
                  <span className="text-[var(--tan-light)] font-mono">{formatRupiah(totalPrice)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 rounded-xl bg-[var(--olive)] text-black font-condensed font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Proses Checkout Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[var(--grey-mid)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--olive-light)]" />
                <span>Transaksi Langsung Terhubung ke WhatsApp Resmi PT. Ozra</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
