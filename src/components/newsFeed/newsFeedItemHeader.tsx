"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Typography } from "antd"
import styles from "./newsFeed.module.scss"

const { Text } = Typography

export function NewsFeedItemHeader({
	author,
	date,
	views,
}: {
	author: string
	date: string
	views: number
}) {
	return (
		<div className={styles.newsFeedHeader}>
			<Avatar
				size="small"
				icon={<UserOutlined />}
				className={styles.newsFeedAvatar}
			/>
			<Text type="secondary">{author}</Text>
			<Text type="secondary" className={styles.newsFeedDate}>
				{date}
			</Text>
			<Text type="secondary" className={styles.newsFeedViews}>
				👁️‍🗨️ {views}
			</Text>
		</div>
	)
}
