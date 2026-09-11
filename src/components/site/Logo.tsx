type Props = {
  /** Square edge length in pixels. */
  size?: number;
  /** Show the "Visto" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
};

/** Visto mark: two overlapping glass screens (teal behind, blue in front) —
 * inline SVG matching the app icon, theme-aware. */
function VistoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      aria-hidden
      className="shrink-0"
      style={{ borderRadius: Math.round(size * 0.24) }}
    >
      <defs>
        <radialGradient id="visto-logo-bg" cx="50%" cy="42%" r="75%">
          <stop offset="0" stopColor="#0A4356" />
          <stop offset=".6" stopColor="#04293B" />
          <stop offset="1" stopColor="#020F1A" />
        </radialGradient>
        <linearGradient id="visto-logo-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8FF8E5" />
          <stop offset=".5" stopColor="#2BD4D4" />
          <stop offset="1" stopColor="#058F98" />
        </linearGradient>
        <linearGradient id="visto-logo-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#66C9FB" />
          <stop offset=".5" stopColor="#1CA3EF" />
          <stop offset="1" stopColor="#0A6CC3" />
        </linearGradient>
        <linearGradient id="visto-logo-seam" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#CFF6FF" stopOpacity=".8" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity=".2" />
        </linearGradient>
        <filter id="visto-logo-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#visto-logo-bg)" />
      <g filter="url(#visto-logo-glow)" opacity=".5">
        <rect x="17" y="28" width="72" height="51" rx="13" fill="#2BD4D4" />
        <rect x="40" y="49" width="72" height="51" rx="13" fill="#1CA3EF" />
      </g>
      {/* back glass screen (teal) */}
      <rect x="17" y="28" width="72" height="51" rx="13" fill="url(#visto-logo-teal)" />
      {/* front glass screen (blue), translucent over the teal, glowing rim */}
      <rect
        x="40"
        y="49"
        width="72"
        height="51"
        rx="13"
        fill="url(#visto-logo-blue)"
        fillOpacity=".9"
      />
      <rect
        x="41.5"
        y="50.5"
        width="69"
        height="48"
        rx="11.5"
        fill="none"
        stroke="url(#visto-logo-seam)"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function Logo({
  size = 32,
  withWordmark = true,
  className = "",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative inline-block shrink-0 ring-1 ring-black/5 dark:ring-white/10"
        style={{ width: size, height: size }}
      >
        <VistoMark size={size} />
      </span>
      {withWordmark && (
        <span className="text-base font-semibold tracking-tight">Visto</span>
      )}
    </span>
  );
}
