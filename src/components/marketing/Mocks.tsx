import type { ReactNode } from "react";

/**
 * Compact CSS illustrations rendered inside PhoneMockup placeholder frames,
 * until real product screenshots are dropped into public/screenshots/.
 */

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[88%] overflow-hidden rounded-xl border bg-[var(--bg-elevated)] shadow-card"
         style={{ borderColor: "var(--border)" }}>
      {children}
    </div>
  );
}

function Titlebar() {
  return (
    <div className="flex items-center gap-1.5 border-b px-2.5 py-1.5" style={{ borderColor: "var(--border)" }}>
      <span className="size-1.5 rounded-full bg-[#ff5f57]" />
      <span className="size-1.5 rounded-full bg-[#febc2e]" />
      <span className="size-1.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function Line({ w = "100%", h = 4 }: { w?: string; h?: number }) {
  return <span className="block rounded-full bg-[var(--fg-subtle)]/40" style={{ width: w, height: h }} />;
}

/** Mac window whose canvas extends toward the phone screen. */
export function MockDesktop() {
  return (
    <Frame>
      <Titlebar />
      <div className="relative flex gap-1.5 p-2">
        <div className="flex w-1/4 flex-col gap-1 pt-0.5">
          <Line w="80%" />
          <Line w="60%" />
          <Line w="70%" />
        </div>
        <div className="relative flex-1 space-y-1 rounded-md p-1.5"
             style={{ background: "var(--bg-subtle)" }}>
          <Line w="90%" />
          <Line w="75%" />
          <Line w="82%" />
          {/* touch point with ripple, echoing touch-back input */}
          <span className="absolute right-2 bottom-1.5 grid size-3 place-items-center">
            <span className="absolute size-3 animate-ping rounded-full bg-[var(--brand)]/50" />
            <span className="size-2 rounded-full" style={{ background: "var(--brand)" }} />
          </span>
        </div>
      </div>
    </Frame>
  );
}

/** Live FPS / bitrate / RTT readouts. */
export function MockStats() {
  const items = [
    { k: "FPS", v: "60" },
    { k: "Mbps", v: "24.5" },
    { k: "RTT", v: "9ms" },
  ];
  return (
    <Frame>
      <div className="grid grid-cols-3 divide-x" style={{ borderColor: "var(--border)" }}>
        {items.map((it) => (
          <div key={it.k} className="flex flex-col items-center gap-1 px-1 py-2.5">
            <span className="font-mono text-sm font-semibold" style={{ color: "var(--brand)" }}>{it.v}</span>
            <span className="text-[9px] uppercase tracking-wider text-[var(--fg-subtle)]">{it.k}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** Six-digit pairing code chips. */
export function MockPairCode() {
  return (
    <div className="flex items-center gap-1.5">
      {["4", "8", "2", "9", "1", "7"].map((d, i) => (
        <span
          key={i}
          className="grid size-6 place-items-center rounded-md border font-mono text-xs font-semibold"
          style={{
            borderColor: "var(--border)",
            background: i < 3 ? "var(--brand-soft-2)" : "var(--bg-elevated)",
            color: i < 3 ? "var(--brand)" : "var(--fg-muted)",
          }}
        >
          {d}
        </span>
      ))}
    </div>
  );
}
