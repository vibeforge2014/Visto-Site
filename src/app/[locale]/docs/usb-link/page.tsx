import { getTranslations } from "next-intl/server";
import DocsArticle from "../../../../components/docs/DocsArticle";
import { Callout, KeyValueTable } from "../../../../components/docs/DocContent";
import { enableStaticLocale } from "../../lib";

export default async function UsbLinkPage(
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  enableStaticLocale(locale);
  const t = await getTranslations("docs.usbLink");

  return (
    <DocsArticle path="/docs/usb-link">
      <h1>{t("title")}</h1>
      <p className="text-lg text-[var(--fg-muted)]">{t("lead")}</p>

      <h2>{t("how.title")}</h2>
      <p>{t("how.body")}</p>

      <h2>{t("measurements.title")}</h2>
      <p>{t("measurements.body")}</p>
      <KeyValueTable
        rows={[
          { k: t("measurements.rows.plain.k"), v: t("measurements.rows.plain.v") },
          { k: t("measurements.rows.tls.k"), v: t("measurements.rows.tls.v") },
          { k: t("measurements.rows.e2e.k"), v: t("measurements.rows.e2e.v") },
        ]}
      />

      <h2>{t("status.title")}</h2>
      <p>{t("status.body")}</p>

      <Callout variant="warning" title={t("gate.title")}>
        <p>{t("gate.body")}</p>
      </Callout>
    </DocsArticle>
  );
}
