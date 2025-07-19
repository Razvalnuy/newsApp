"use client"

import {
	BookOutlined,
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Space, Typography } from "antd"
import { useState } from "react"
import NewsFeed from "../components/newsFeed/newsFeed"

const { Header, Sider, Content, Footer } = Layout
const { Title } = Typography

const mockNews = [
	{
		id: 1,
		title: "Новые возможности React",
		summary:
			"Вышел React 18.8. Знакомимся с нововведениями в стеке веб-разработки.",
		date: "Сегодня, 10:45",
		author: "Влад",
		tags: ["технологии", "разработка"],
		reaction: { likes: 120, dislikes: 2 },
		views: 1500,
	},
	{
		id: 2,
		title: "He was an expert but not in a discipline",
		summary:
			"Один из самых обсуждаемых постов англоязычного комьюнити: история о мастерстве, которое никто не замечает, но которое делает жизнь чуть лучше — в каждом шарике мороженого.",
		date: "Вчера, 17:32",
		author: "Гость",
		tags: ["english", "fiction"],
		reaction: { likes: 859, dislikes: 32 },
		views: 4884,
	},
	{
		id: 3,
		title: "Париж: открытие Нотр-Дам и новые рестораны",
		summary:
			"После долгих лет реставрации Нотр-Дам де Пари готовится к торжественному открытию. В городе также появляются новые модные рестораны и культурные пространства — Париж вновь становится магнитом для гурманов и любителей искусства.",
		date: "Сегодня, 09:15",
		author: "Мария",
		tags: ["франция", "культура", "гастрономия"],
		reaction: { likes: 210, dislikes: 5 },
		views: 3200,
	},
	{
		id: 4,
		title: "Франция 2025: баланс между традицией и инновациями",
		summary:
			"Экологический переход, «зелёные коридоры» и жёсткий пограничный контроль — главные тренды Франции. Партия Марин Ле Пен набирает силу, а молодёжь смешивает берберские ритмы с климатическим рэпом в TikTok.",
		date: "Вчера, 14:20",
		author: "Артём",
		tags: ["политика", "экология", "культура"],
		reaction: { likes: 180, dislikes: 7 },
		views: 2600,
	},
]

export default function Home() {
	const [collapsed, setCollapsed] = useState(false)
	const [selectedMenu, setSelectedMenu] = useState("1")

	return (
		<Layout style={{ minHeight: "100vh", background: "#fff" }}>
			<Sider
				width={256}
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
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
					selectedKeys={[selectedMenu]}
					onSelect={({ key }) => setSelectedMenu(key)}
					style={{ borderRight: 0 }}
				>
					<Menu.Item key="1" icon={<HomeOutlined />}>
						Главная
					</Menu.Item>
					<Menu.Item key="4" icon={<BookOutlined />}>
						Новости
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header
					style={{
						background: "#fff",
						padding: 0,
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
							<MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
						) : (
							<MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
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
					<NewsFeed news={mockNews} />
				</Content>
				<Footer
					style={{
						background: "#fff",
						textAlign: "center",
						borderTop: "1px solid #f0f0f0",
					}}
				>
					<p>
						Сделал Гаджибутаев Марат{" "}
						<a target="_b" href="https:/t.me/razvalnuy">
							@razvalnuy
						</a>
					</p>
				</Footer>
			</Layout>
		</Layout>
	)
}
