"use client"
import {
	BookOutlined,
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Space, Typography, type MenuProps } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import styles from "./shellLayout.module.scss"

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

export function ShellLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const [collapsed, setCollapsed] = useState(false)

	const items: MenuProps["items"] = [
		{
			key: "1",
			icon: <HomeOutlined />,
			label: <Link href="/">Главная</Link>,
		},
		{
			key: "4",
			icon: <BookOutlined />,
			label: <Link href="/news">Новости</Link>,
		},
	]

	const selectedKey =
		pathname === "/" ? "1" : pathname?.startsWith("/news") ? "4" : ""

	return (
		<Layout className={styles.appLayout}>
			<Sider
				width={256}
				collapsed={collapsed}
				onCollapse={(val) => setCollapsed(val)}
				className={styles.sider}
			>
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
				<Header className={styles.header}>
					<Space className={styles.headerSpace}>
						{collapsed ? (
							<MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
						) : (
							<MenuFoldOutlined onClick={() => setCollapsed(true)} />
						)}
					</Space>
				</Header>
				<Content className={styles.content}>{children}</Content>
				<Footer className={styles.footer}>
					Сделал Гаджибутаев Марат{" "}
					<a
						target="_blank"
						href="https://t.me/razvalnuy"
						rel="noopener noreferrer"
					>
						@razvalnuy
					</a>
				</Footer>
			</Layout>
		</Layout>
	)
}
