"use client"

import { List } from "antd"
import styles from "./newsFeed.module.scss"
import { NewsFeedItem } from "./newsFeedItem"
import { NewsFeedItemType } from "./types"

export default function NewsFeed({ news }: { news: NewsFeedItemType[] }) {
	return (
		<List
			itemLayout="vertical"
			dataSource={news}
			renderItem={(item) => (
				<List.Item className={styles.newsFeedItem}>
					<NewsFeedItem news={item} />
				</List.Item>
			)}
		/>
	)
}
