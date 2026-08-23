import { getTranslations, setRequestLocale } from "next-intl/server";
import { Wifi, Cable, Gauge, Pointer, ShieldCheck } from "lucide-react";
import FeatureRow from "../../../components/marketing/FeatureRow";
import DownloadSection from "../../../components/marketing/DownloadSection";
import CTASection from "../../../components/marketing/CTASection";
import { MockDesktop, MockStats, MockPairCode } from "../../../components/marketing/Mocks";

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");

  return (
    <>
      <section className="container-narrow py-16 text-center md:py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t("pageTitle")}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--fg-muted)]">{t("subtitle")}</p>
      </section>

      <FeatureRow
        eyebrow={t("connect.title")} title={t("connect.featureTitle")} description={t("connect.featureDesc")}
        bullets={[t("connect.featureB1"), t("connect.featureB2"), t("connect.featureB3"), t("connect.featureB4")]}
        screenshotLabel={t("connect.screenshot")} mock={<MockPairCode />} icon={Wifi}
      />
      <FeatureRow
        eyebrow={t("usb.title")} title={t("usb.featureTitle")} description={t("usb.featureDesc")}
        bullets={[t("usb.featureB1"), t("usb.featureB2"), t("usb.featureB3"), t("usb.featureB4")]}
        screenshotLabel={t("usb.screenshot")} mock={<MockDesktop />} icon={Cable} reverse
      />
      <FeatureRow
        eyebrow={t("performance.title")} title={t("performance.featureTitle")} description={t("performance.featureDesc")}
        bullets={[t("performance.featureB1"), t("performance.featureB2"), t("performance.featureB3"), t("performance.featureB4")]}
        screenshotLabel={t("performance.screenshot")} mock={<MockStats />} icon={Gauge}
      />
      <FeatureRow
        eyebrow={t("touch.title")} title={t("touch.featureTitle")} description={t("touch.featureDesc")}
        bullets={[t("touch.featureB1"), t("touch.featureB2"), t("touch.featureB3"), t("touch.featureB4")]}
        screenshotLabel={t("touch.screenshot")} mock={<MockDesktop />} icon={Pointer} reverse
      />
      <FeatureRow
        eyebrow={t("security.title")} title={t("security.featureTitle")} description={t("security.featureDesc")}
        bullets={[t("security.featureB1"), t("security.featureB2"), t("security.featureB3"), t("security.featureB4")]}
        screenshotLabel={t("security.screenshot")} mock={<MockDesktop />} icon={ShieldCheck}
      />
      <DownloadSection />
      <CTASection />
    </>
  );
}
