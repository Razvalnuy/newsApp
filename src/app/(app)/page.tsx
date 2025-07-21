"use client"
import { Button, Card, Layout, Typography } from "antd"
import Link from "next/link"
import { useRouter } from "next/navigation"
import styles from "./page.module.scss"

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function Home() {
	const router = useRouter()

	return (
		<Content className={styles.homePage}>
			<div className={styles.space}>
				<Title level={2}>Новостной портал</Title>
				<Card hoverable className={styles.card}>
					<Title level={3} className={styles.title}>
						Добро пожаловать на главную страницу!
					</Title>
					<Paragraph>
						Здесь вы найдёте последние новости и важные объявления.
					</Paragraph>
					<div style={{ textAlign: "center", marginTop: "24px" }}>
						<Button type="primary" onClick={() => router.push("/news")}>
							Перейти к новостям
						</Button>
					</div>
				</Card>
			</div>
			<div className={styles.footer}>
				<div className={styles.links}>
					<Link
						className={styles.link}
						href="https://t.me/razvalnuy"
						target="_blank"
						rel="noopener noreferrer"
					>
						Telegram: @razvalnuy
					</Link>
					<span> | </span>
					<Link
						className={styles.link}
						href="mailto:razvalnuy@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						razvalnuy@example.com
					</Link>
					<span> | </span>
					<Link
						className={styles.link}
						href="https://github.com/razvalnuy"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub: razvalnuy
					</Link>
				</div>
			</div>
		</Content>
	)
}
