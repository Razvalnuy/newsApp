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

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
		<Layout style={{ minHeight: "100vh", background: "#fff" }}>
			<Sider
				width={256}
				collapsed={collapsed}
				onCollapse={(val) => setCollapsed(val)}
				style={{ background: "#fff", borderRight: "1px solid #f0f0f0" }}
			>
				<div
					style={{
						height: 64,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Title level={5} style={{ margin: 0 }}>
						News
					</Title>
				</div>
				<Menu
					mode="inline"
					selectedKeys={selectedKey ? [selectedKey] : undefined}
					items={items}
					style={{ borderRight: 0 }}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: "#fff",
						borderBottom: "1px solid #f0f0f0",
					}}
				>
					<Space
						style={{
							padding: "0 24px",
							height: 64,
							display: "flex",
							alignItems: "center",
						}}
					>
						{collapsed ? (
							<MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
						) : (
							<MenuFoldOutlined onClick={() => setCollapsed(true)} />
						)}
					</Space>
				</Header>
				<Content
					style={{
						background: "#fff",
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
				<Footer
					style={{
						background: "#fff",
						textAlign: "center",
						borderTop: "1px solid #f0f0f0",
					}}
				>
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
