"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";
import { ChevronRight, MonitorSmartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import DownloadBadge from "../site/DownloadBadge";
import Reveal from "./Reveal";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden">
      {/* Animated brand aurora */}
      <div className="aurora" aria-hidden />
      <div className="container-page flex flex-col items-center py-20 text-center md:py-28">
        <Reveal>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {t.rich("headline", {
              accent: (chunks) => (
                <span className="text-shimmer">{chunks}</span>
              ),
            })}
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--fg-muted)] md:text-xl">
            {t("subhead")}
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <DownloadBadge fallbackHref="/docs/getting-started" fallbackLabel={t("ctaPrimary")} />
          <Link href="/features" className="btn-ghost">
            {t("ctaSecondary")}
            <ChevronRight className="size-4" />
          </Link>
        </Reveal>

        {/* Floating phone with animated glow halo — placeholder frame until
            real product screenshots exist (drop them into public/screenshots). */}
        <Reveal delay={240} className="relative mt-16 w-full max-w-xs">
          <div className="relative float-slow">
            <span className="glow-halo" aria-hidden />
            <PhoneMockup alt={t("phoneLabel")} label={t("phoneLabel")}>
              <MonitorSmartphone className="size-9" strokeWidth={1.5} />
            </PhoneMockup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
