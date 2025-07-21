"use client"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Card, List, Space, Tag, Typography } from "antd"
import styles from "./newsFeed.module.scss"

const { Title, Text } = Typography

export default function NewsFeed({ news }) {
	return (
		<List
			itemLayout="vertical"
			dataSource={news}
			renderItem={(item) => (
				<List.Item className={styles.newsFeedItem}>
					<Card hoverable className={styles.newsFeedCard}>
						<Space direction="vertical" className={styles.newsFeedCardBody}>
							<Title level={4} style={{ marginBottom: 4 }}>
								{item.title}
							</Title>
							<div className={styles.newsFeedHeader}>
								<Avatar
									size="small"
									icon={<UserOutlined />}
									className={styles.newsFeedAvatar}
								/>
								<Text type="secondary">{item.author}</Text>
								<Text type="secondary" className={styles.newsFeedDate}>
									{item.date}
								</Text>
								<Text type="secondary" className={styles.newsFeedViews}>
									👁️‍🗨️ {item.views}
								</Text>
							</div>
							<Text className={styles.newsFeedSummary}>{item.summary}</Text>
							<div className={styles.newsFeedTags}>
								<Space wrap>
									{item.tags.map((tag) => (
										<Tag key={tag}>{tag}</Tag>
									))}
								</Space>
							</div>
							<Space className={styles.newsFeedReactions}>
								<Text type="success">👍 {item.reaction.likes}</Text>
								<Text type="danger">👎 {item.reaction.dislikes}</Text>
							</Space>
						</Space>
					</Card>
				</List.Item>
			)}
		/>
	)
}
