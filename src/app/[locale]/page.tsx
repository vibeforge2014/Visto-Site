import { getTranslations, setRequestLocale } from "next-intl/server";
import { Wifi, Cable, Gauge, Pointer, ShieldCheck } from "lucide-react";
import Hero from "../../components/marketing/Hero";
import IntroSection from "../../components/marketing/IntroSection";
import FeatureRow from "../../components/marketing/FeatureRow";
import FeatureGrid from "../../components/marketing/FeatureGrid";
import RoadmapSection from "../../components/marketing/RoadmapSection";
import DownloadSection from "../../components/marketing/DownloadSection";
import CTASection from "../../components/marketing/CTASection";
import { MockDesktop, MockStats, MockPairCode } from "../../components/marketing/Mocks";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const f = await getTranslations("features");

  return (
    <>
      <Hero />
      <IntroSection />

      <div className="hr-soft mx-auto max-w-5xl" />

      <FeatureRow
        eyebrow={f("connect.title")}
        title={f("connect.featureTitle")}
        description={f("connect.featureDesc")}
        bullets={[f("connect.featureB1"), f("connect.featureB2"), f("connect.featureB3"), f("connect.featureB4")]}
        screenshotLabel={f("connect.screenshot")}
        mock={<MockPairCode />}
        icon={Wifi}
      />
      <FeatureRow
        eyebrow={f("usb.title")}
        title={f("usb.featureTitle")}
        description={f("usb.featureDesc")}
        bullets={[f("usb.featureB1"), f("usb.featureB2"), f("usb.featureB3"), f("usb.featureB4")]}
        screenshotLabel={f("usb.screenshot")}
        mock={<MockDesktop />}
        icon={Cable}
        reverse
      />
      <FeatureRow
        eyebrow={f("performance.title")}
        title={f("performance.featureTitle")}
        description={f("performance.featureDesc")}
        bullets={[f("performance.featureB1"), f("performance.featureB2"), f("performance.featureB3"), f("performance.featureB4")]}
        screenshotLabel={f("performance.screenshot")}
        mock={<MockStats />}
        icon={Gauge}
      />
      <FeatureRow
        eyebrow={f("touch.title")}
        title={f("touch.featureTitle")}
        description={f("touch.featureDesc")}
        bullets={[f("touch.featureB1"), f("touch.featureB2"), f("touch.featureB3"), f("touch.featureB4")]}
        screenshotLabel={f("touch.screenshot")}
        mock={<MockDesktop />}
        icon={Pointer}
        reverse
      />
      <FeatureRow
        eyebrow={f("security.title")}
        title={f("security.featureTitle")}
        description={f("security.featureDesc")}
        bullets={[f("security.featureB1"), f("security.featureB2"), f("security.featureB3"), f("security.featureB4")]}
        screenshotLabel={f("security.screenshot")}
        mock={<MockDesktop />}
        icon={ShieldCheck}
      />

      <div className="hr-soft mx-auto max-w-5xl" />

      <FeatureGrid />
      <RoadmapSection />
      <DownloadSection />
      <CTASection />
    </>
  );
}
