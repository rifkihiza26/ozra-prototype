"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  item: {
    id: string;
    title: string;
    category: string;
    image: string;
  };
  price?: number;
}

const SIZES = ["S", "M", "L", "XL", "XXL", "Custom"];

export default function AddToCartButton({ item, price = 250000 }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("L");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(
      {
        id: `${item.id}-${selectedSize}`,
        title: item.title,
        category: item.category,
        image: item.image,
        unitPrice: price,
        selectedSize: selectedSize,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-mid)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-[var(--tan-light)] uppercase tracking-wider font-bold">
          Pemesanan / Ready Spec
        </span>
        <span className="text-sm font-bold text-white font-mono">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(price)}
        </span>
      </div>

      <div>
        <span className="block text-[11px] text-[var(--grey-mid)] mb-1.5 font-sans">
          Pilih Ukuran Fitting:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {SIZES.map((sz) => (
            <button
              key={sz}
              type="button"
              onClick={() => setSelectedSize(sz)}
              style={{
                backgroundColor: selectedSize === sz ? "var(--olive)" : "var(--surface)",
                color: selectedSize === sz ? "#09090a" : "var(--cream)",
                borderColor: selectedSize === sz ? "var(--olive)" : "var(--border)",
              }}
              className="px-2.5 py-1 rounded border text-xs font-mono font-bold transition-all cursor-pointer"
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        style={{
          backgroundColor: added ? "var(--olive-light)" : "var(--olive)",
          color: "#09090a",
        }}
        className="w-full py-3.5 px-4 rounded-lg font-condensed font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
      >
        {added ? (
          <>
            <Check className="w-4 h-4" />
            <span>Ditambahkan ke Keranjang</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>+ Masukkan ke Keranjang Belanja</span>
          </>
        )}
      </button>
    </div>
  );
}
