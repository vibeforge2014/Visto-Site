type Props = {
  /** Square edge length in pixels. */
  size?: number;
  /** Show the "Visto" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
};

/** Visto mark: a Mac display extended by an iPhone — inline SVG, theme-aware. */
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
        <linearGradient id="visto-logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2e6df6" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#visto-logo-bg)" />
      {/* Mac screen */}
      <rect
        x="26"
        y="34"
        width="56"
        height="42"
        rx="6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        opacity="0.95"
      />
      <rect x="26" y="34" width="56" height="42" rx="6" fill="#ffffff" opacity="0.12" />
      {/* iPhone extending the desktop to the bottom-right */}
      <rect x="62" y="62" width="34" height="46" rx="8" fill="#ffffff" opacity="0.96" />
      <rect x="72" y="100.5" width="14" height="3.5" rx="1.75" fill="#2e6df6" />
      {/* connector beam */}
      <rect
        x="50"
        y="56"
        width="16"
        height="7"
        rx="3.5"
        fill="#ffffff"
        opacity="0.55"
        transform="rotate(45 58 59.5)"
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
