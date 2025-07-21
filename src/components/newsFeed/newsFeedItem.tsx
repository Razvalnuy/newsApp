import { Card, Space, Typography } from "antd"
import styles from "./newsFeed.module.scss"
import { NewsFeedItemHeader } from "./newsFeedItemHeader"
import { NewsFeedItemReactions } from "./newsFeedItemReactions"
import { NewsFeedItemTags } from "./newsFeedItemTags"
import { NewsFeedItemType } from "./types"

export function NewsFeedItem({ news }: { news: NewsFeedItemType }) {
	const { Title, Text } = Typography
	return (
		<Card hoverable className={styles.newsFeedCard}>
			<Space direction="vertical" className={styles.newsFeedCardBody}>
				<Title level={4} style={{ marginBottom: 4 }}>
					{news.title}
				</Title>
				<NewsFeedItemHeader
					author={news.author}
					date={news.date}
					views={news.views}
				/>
				<Text className={styles.newsFeedSummary}>{news.summary}</Text>
				<NewsFeedItemTags tags={news.tags} />
				<NewsFeedItemReactions
					likes={news.reaction.likes}
					dislikes={news.reaction.dislikes}
				/>
			</Space>
		</Card>
	)
}
