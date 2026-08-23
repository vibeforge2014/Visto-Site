import { getTranslations } from "next-intl/server";
import DocsArticle from "../../../../components/docs/DocsArticle";
import { Callout } from "../../../../components/docs/DocContent";
import { enableStaticLocale } from "../../lib";

export default async function HostMacPage(
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  enableStaticLocale(locale);
  const t = await getTranslations("docs.hostMac");

  return (
    <DocsArticle path="/docs/host-macos">
      <h1>{t("title")}</h1>
      <p className="text-lg text-[var(--fg-muted)]">{t("lead")}</p>

      <h2>{t("overview.title")}</h2>
      <p>{t("overview.body")}</p>

      <h2>{t("menubar.title")}</h2>
      <p>{t("menubar.body")}</p>

      <h2>{t("permissions.title")}</h2>
      <p>{t("permissions.body")}</p>
      <ul>
        <li>{t("permissions.screenRecording")}</li>
        <li>{t("permissions.accessibility")}</li>
      </ul>

      <h2>{t("diagnostics.title")}</h2>
      <p>{t("diagnostics.body")}</p>

      <h2>{t("telemetry.title")}</h2>
      <p>{t("telemetry.body")}</p>

      <Callout variant="warning" title={t("gate.title")}>
        <p>{t("gate.body")}</p>
      </Callout>
    </DocsArticle>
  );
}
