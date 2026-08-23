import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../../i18n/routing";
import DocsArticle from "../../../components/docs/DocsArticle";
import { Rocket, Cpu, Laptop, Smartphone, Cable, ArrowRight } from "lucide-react";

const CARDS = [
  { href: "/docs/getting-started", icon: Rocket, tint: "#2e6df6", key: "gettingStarted" },
  { href: "/docs/host-macos", icon: Laptop, tint: "#0ea5e9", key: "hostMac" },
  { href: "/docs/receiver-ios", icon: Smartphone, tint: "#10b981", key: "receiverIOS" },
  { href: "/docs/usb-link", icon: Cable, tint: "#f59e0b", key: "usbLink" },
  { href: "/docs/technical-spec", icon: Cpu, tint: "#a855f7", key: "technicalSpec" },
];

export default async function DocsHomePage(
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");
  const tc = await getTranslations("docsNav");

  return (
    <DocsArticle path="/docs">
      <h1>{t("intro.title")}</h1>
      <p className="text-lg text-[var(--fg-muted)]">{t("intro.lead")}</p>
      <p>{t("intro.body")}</p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ href, icon: Icon, tint, key }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-3 rounded-card border p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
            style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
          >
            <span
              className="grid size-10 shrink-0 place-items-center rounded-xl text-white"
              style={{ backgroundImage: `linear-gradient(135deg, ${tint}, ${tint}cc)` }}
            >
              <Icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{tc(key)}</p>
            </div>
            <ArrowRight className="size-4 text-[var(--fg-muted)] transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </DocsArticle>
  );
}
