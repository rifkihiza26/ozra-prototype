"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext?: () => void;
  onPrev?: () => void;
  title?: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
  title,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext && images.length > 1) onNext();
      if (e.key === "ArrowLeft" && onPrev && images.length > 1) onPrev();
    },
    [onClose, onNext, onPrev, images.length]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#F3F3ED] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {title && (
            <span className="text-sm font-semibold tracking-wide text-[#F3F3ED] hidden sm:inline">
              {title}
            </span>
          )}
          {images.length > 1 && (
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#222820] border border-[#353B32] text-[#A4B66A]">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2 rounded-full bg-[#222820]/80 hover:bg-[#A4B66A] hover:text-[#101310] text-[#F3F3ED] border border-[#353B32] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A4B66A]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] max-h-[80vh] rounded-lg overflow-hidden border border-[#353B32] bg-[#141813] shadow-2xl">
          <Image
            src={currentImage}
            alt={title || "Preview Gambar"}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Prev / Next Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#222820]/90 text-[#F3F3ED] hover:bg-[#A4B66A] hover:text-[#101310] border border-[#353B32] transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#222820]/90 text-[#F3F3ED] hover:bg-[#A4B66A] hover:text-[#101310] border border-[#353B32] transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
