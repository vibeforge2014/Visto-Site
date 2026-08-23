/**
 * Central place for external links (download / store).
 *
 * Visto 尚未公开发布：所有下载入口保持 null，网站会自动渲染为
 * “开发中 / 敬请期待” 占位卡片。发布时替换为真实 URL 即可：
 *
 *   - ios:   App Store / TestFlight 链接（iPhone/iPad 接收端）
 *   - macos: 主机端下载（dmg 或 TestFlight）
 *   - windows: Windows 主机端（IddCx 驱动 + 服务 + WinUI 安装包）
 */
export const DOWNLOAD_LINKS = {
	ios: null,
	macos: null,
	windows: null,
} as const

export type Platform = keyof typeof DOWNLOAD_LINKS

export function downloadUrl(platform: Platform): string | null {
	return DOWNLOAD_LINKS[platform]
}
