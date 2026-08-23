export type DocNavItem = {
	href: string
	labelKey: string
}

export type DocNavGroup = {
	groupKey: string
	items: DocNavItem[]
}

export const DOC_NAV: DocNavGroup[] = [
	{
		groupKey: 'gettingStarted',
		items: [
			{ href: '/docs', labelKey: 'docsNav.intro' },
			{ href: '/docs/getting-started', labelKey: 'docsNav.gettingStarted' },
			{ href: '/docs/technical-spec', labelKey: 'docsNav.technicalSpec' },
		],
	},
	{
		groupKey: 'guide',
		items: [
			{ href: '/docs/host-macos', labelKey: 'docsNav.hostMac' },
			{ href: '/docs/receiver-ios', labelKey: 'docsNav.receiverIOS' },
			{ href: '/docs/usb-link', labelKey: 'docsNav.usbLink' },
		],
	},
]

export const DOC_NAV_FLAT: DocNavItem[] = DOC_NAV.flatMap((g) => g.items)

export function findDocMeta(href: string) {
	const flat = DOC_NAV_FLAT
	const idx = flat.findIndex((i) => i.href === href)
	return {
		prev: idx > 0 ? flat[idx - 1] : undefined,
		next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined,
		current: idx >= 0 ? flat[idx] : undefined,
	}
}
