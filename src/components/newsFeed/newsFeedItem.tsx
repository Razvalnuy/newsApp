import { Card, Space, Typography } from "antd"
import styles from "./newsFeed.module.scss"
import { NewsFeedItemHeader } from "./newsFeedItemHeader"
import { NewsFeedItemReactions } from "./newsFeedItemReactions"
import { NewsFeedItemTags } from "./newsFeedItemTags"
import { NewsItem } from "./types"

export function NewsFeedItem({ news }: { news: NewsItem }) {
	const { Title, Text } = Typography

	return (
		<Card hoverable className={styles.newsFeedCard}>
			<Space direction="vertical" className={styles.newsFeedCardBody}>
				<Title level={4} style={{ marginBottom: 4 }}>
					{news.title}
				</Title>

				<NewsFeedItemHeader
					author={`User #${news.userId}`}
					views={news.views}
				/>

				<Text className={styles.newsFeedSummary}>{news.body}</Text>

				<NewsFeedItemTags tags={news.tags} />

				<NewsFeedItemReactions
					likes={news.reactions?.likes ?? 0}
					dislikes={news.reactions?.dislikes ?? 0}
				/>
			</Space>
		</Card>
	)
}
