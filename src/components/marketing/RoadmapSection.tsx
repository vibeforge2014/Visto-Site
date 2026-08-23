"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, Loader, CalendarClock } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { key: "item1", status: "done" },
  { key: "item2", status: "done" },
  { key: "item3", status: "done" },
  { key: "item4", status: "done" },
  { key: "item5", status: "progress" },
  { key: "item6", status: "planned" },
] as const;

type Status = (typeof ITEMS)[number]["status"];

const STATUS_STYLES: Record<Status, { tint: string; icon: typeof CheckCircle2 }> = {
  done: { tint: "#10b981", icon: CheckCircle2 },
  progress: { tint: "#f59e0b", icon: Loader },
  planned: { tint: "#64748b", icon: CalendarClock },
};

/** Development-status cards: what ships today, what is in flight, what is next. */
export default function RoadmapSection() {
  const t = useTranslations("home");
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">{t("roadmapEyebrow")}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t("roadmapTitle")}</h2>
        <p className="mt-4 text-lg text-[var(--fg-muted)]">{t("roadmapSubtitle")}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ key, status }, i) => {
          const { tint, icon: StatusIcon } = STATUS_STYLES[status];
          return (
            <Reveal key={key} delay={i * 60}>
              <article className="surface-card lift-on-hover flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ color: tint, background: `${tint}18` }}
                  >
                    <StatusIcon className={`size-3.5 ${status === "progress" ? "animate-spin [animation-duration:3s]" : ""}`} />
                    {t(`status.${status}`)}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(`roadmap.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {t(`roadmap.${key}.text`)}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
