import { getTranslations } from "next-intl/server";
import DocsArticle from "../../../../components/docs/DocsArticle";
import { Callout, KeyValueTable } from "../../../../components/docs/DocContent";
import { enableStaticLocale } from "../../lib";

export default async function TechnicalSpecPage(
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  enableStaticLocale(locale);
  const t = await getTranslations("docs.technical");

  return (
    <DocsArticle path="/docs/technical-spec">
      <h1>{t("title")}</h1>
      <p className="text-lg text-[var(--fg-muted)]">{t("lead")}</p>

      <h2>{t("current.title")}</h2>
      <p>{t("current.body")}</p>

      <h2>{t("transport.title")}</h2>
      <KeyValueTable
        rows={[
          { k: t("transport.rows.wireless.k"), v: t("transport.rows.wireless.v") },
          { k: t("transport.rows.usb.k"), v: t("transport.rows.usb.v") },
          { k: t("transport.rows.pairing.k"), v: t("transport.rows.pairing.v") },
          { k: t("transport.rows.replay.k"), v: t("transport.rows.replay.v") },
        ]}
      />

      <h2>{t("frames.title")}</h2>
      <p>{t("frames.body")}</p>
      <pre className="code-block"><code>{`{
  "protocolVersion": 1,
  "type": "hello",
  "sessionID": "F6653DDF-709D-4A02-9E33-83D89412B4FA",
  "sequence": 1,
  "timestampNanos": 123456789,
  "payload": "base64-encoded-json"
}`}</code></pre>
      <p>{t("frames.notes")}</p>

      <h2>{t("messages.title")}</h2>
      <ul>
        <li><strong>Hello / Capabilities</strong> — {t("messages.hello")}</li>
        <li><strong>PairRequest / PairResult</strong> — {t("messages.pair")}</li>
        <li><strong>SessionConfig</strong> — {t("messages.sessionConfig")}</li>
        <li><strong>VideoChunk</strong> — {t("messages.videoChunk")}</li>
        <li><strong>InputEvent</strong> — {t("messages.inputEvent")}</li>
        <li><strong>DisplayChanged</strong> — {t("messages.displayChanged")}</li>
        <li><strong>Stats</strong> — {t("messages.stats")}</li>
        <li><strong>KeyframeRequest</strong> — {t("messages.keyframeRequest")}</li>
        <li><strong>Disconnect</strong> — {t("messages.disconnect")}</li>
      </ul>

      <h2>{t("input.title")}</h2>
      <p>{t("input.body")}</p>

      <h2>{t("architecture.title")}</h2>
      <p>{t("architecture.body")}</p>
      <ul>
        <li>{t("architecture.ios")}</li>
        <li>{t("architecture.macos")}</li>
        <li>{t("architecture.windows")}</li>
        <li>{t("architecture.cloud")}</li>
      </ul>

      <h2>{t("limits.title")}</h2>
      <p>{t("limits.body")}</p>

      <Callout variant="info" title={t("failClosed.title")}>
        <p>{t("failClosed.body")}</p>
      </Callout>
    </DocsArticle>
  );
}
