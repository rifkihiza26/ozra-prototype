"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyAddressButtonProps {
  address: string;
}

export default function CopyAddressButton({ address }: CopyAddressButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--tan-light)] hover:text-white transition-colors"
      title="Salin alamat kantor"
    >
      {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? "Alamat Tersalin" : "Salin Alamat"}</span>
    </button>
  );
}
