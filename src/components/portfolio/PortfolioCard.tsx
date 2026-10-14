import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/types";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", background: "var(--surface)", overflow: "hidden" }}
    >
      {/* Image */}
      <div style={{ aspectRatio: "1", background: "#1a1a16", position: "relative", overflow: "hidden" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Category tag */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "4px 10px",
            background: "var(--olive)",
            color: "#fff",
            zIndex: 1,
          }}
        >
          {item.category.split(" ")[0]}
        </div>
      </div>

      {/* Info panel */}
      <div style={{ padding: "18px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--olive)",
            marginBottom: "5px",
          }}
        >
          {item.category}
        </div>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "5px",
          }}
        >
          {item.title}
        </div>
        {item.client && (
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "11px",
              color: "var(--grey-mid)",
              marginBottom: "12px",
              flex: 1,
            }}
          >
            {item.client}
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "12px" }}>
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  border: "1px solid var(--border)",
                  color: "var(--tan-light)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA button */}
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#fff",
            padding: "11px",
            background: "var(--olive)",
            display: "block",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          View Detail →
        </div>
      </div>
    </Link>
  );
}
