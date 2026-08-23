import { getTranslations, setRequestLocale } from 'next-intl/server'
import { enableStaticLocale } from '../lib'

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params
	enableStaticLocale(locale)
	const t = await getTranslations('privacy')

	return (
		<article className="prose-doc container-page max-w-3xl py-12 md:py-16">
			<p className="text-sm text-[var(--fg-subtle)]">{t('lastUpdated')}</p>
			<h1>{t('title')}</h1>
			<p className="text-lg text-[var(--fg-muted)]">{t('intro')}</p>

			<h2>{t('noCollection.title')}</h2>
			<p>{t('noCollection.body')}</p>
			<ul>
				<li>{t('noCollection.p1')}</li>
				<li>{t('noCollection.p2')}</li>
				<li>{t('noCollection.p3')}</li>
			</ul>

			<h2>{t('localFirst.title')}</h2>
			<p>{t('localFirst.body')}</p>
			<ul>
				<li>{t('localFirst.p1')}</li>
				<li>{t('localFirst.p2')}</li>
				<li>{t('localFirst.p3')}</li>
			</ul>

			<h2>{t('transport.title')}</h2>
			<p>{t('transport.body')}</p>

			<h2>{t('permissions.title')}</h2>
			<p>{t('permissions.body')}</p>
			<ul>
				<li>{t('permissions.screenRecording')}</li>
				<li>{t('permissions.accessibility')}</li>
				<li>{t('permissions.localNetwork')}</li>
			</ul>

			<h2>{t('entitlement.title')}</h2>
			<p>{t('entitlement.body')}</p>

			<h2>{t('children.title')}</h2>
			<p>{t('children.body')}</p>

			<h2>{t('rights.title')}</h2>
			<p>{t('rights.body')}</p>

			<h2>{t('changes.title')}</h2>
			<p>{t('changes.body')}</p>

			<h2>{t('contact.title')}</h2>
			<p>
				{t('contact.body')} <a href="mailto:xhdp123@126.com">xhdp123@126.com</a>
			</p>
		</article>
	)
}
