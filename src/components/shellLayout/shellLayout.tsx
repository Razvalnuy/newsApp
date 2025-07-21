"use client"
import { BookOutlined, HomeOutlined } from "@ant-design/icons"
import { Layout, Menu, Typography } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./shellLayout.module.scss"

const { Content, Footer, Sider } = Layout
const { Title } = Typography

export function ShellLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()

	const items = [
		{
			key: "1",
			icon: <HomeOutlined />,
			label: <Link href="/">Главная</Link>,
		},
		{
			key: "2",
			icon: <BookOutlined />,
			label: <Link href="/news">Новости</Link>,
		},
	]

	const selectedKey =
		pathname === "/" ? "1" : pathname?.startsWith("/news") ? "2" : ""

	return (
		<Layout className={styles.appLayout}>
			<Sider breakpoint="lg" collapsedWidth={0} className={styles.sider}>
				<div className={styles.siderHeader}>
					<Title level={5} style={{ margin: 0 }}>
						News
					</Title>
				</div>
				<Menu
					mode="inline"
					selectedKeys={selectedKey ? [selectedKey] : undefined}
					items={items}
					className={styles.menu}
				/>
			</Sider>
			<Layout className={styles.layoutContent}>
				<Content className={styles.content}>{children}</Content>
				<Footer className={styles.footer}>
					© Сделал Гаджибутаев Марат @razvalnuy
				</Footer>
			</Layout>
		</Layout>
	)
}
