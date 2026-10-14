"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TacticalLoader = dynamic(() => import("@/components/ui/TacticalLoader"), {
  ssr: false,
});

export default function IntroProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  // Selalu tampilkan loader setiap kali halaman di-load / refresh
  useEffect(() => {
    setDone(false);
  }, []);

  function handleDone() {
    setDone(true);
  }

  return (
    <>
      {!done && <TacticalLoader onDone={handleDone} />}
      <div
        style={{
          opacity: done ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: done ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
