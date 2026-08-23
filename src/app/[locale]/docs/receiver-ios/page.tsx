import { getTranslations } from "next-intl/server";
import DocsArticle from "../../../../components/docs/DocsArticle";
import { Callout } from "../../../../components/docs/DocContent";
import { enableStaticLocale } from "../../lib";

export default async function ReceiverIOSPage(
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  enableStaticLocale(locale);
  const t = await getTranslations("docs.receiverIOS");

  return (
    <DocsArticle path="/docs/receiver-ios">
      <h1>{t("title")}</h1>
      <p className="text-lg text-[var(--fg-muted)]">{t("lead")}</p>

      <h2>{t("discover.title")}</h2>
      <p>{t("discover.body")}</p>

      <h2>{t("pairing.title")}</h2>
      <p>{t("pairing.body")}</p>

      <h2>{t("session.title")}</h2>
      <p>{t("session.body")}</p>

      <h2>{t("touch.title")}</h2>
      <p>{t("touch.body")}</p>

      <h2>{t("stats.title")}</h2>
      <p>{t("stats.body")}</p>

      <Callout variant="tip" title={t("keepAwake.title")}>
        <p>{t("keepAwake.body")}</p>
      </Callout>
    </DocsArticle>
  );
}
