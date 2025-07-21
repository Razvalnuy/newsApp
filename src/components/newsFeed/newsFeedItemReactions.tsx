import { Space, Typography } from "antd"
import styles from "./newsFeed.module.scss"

export function NewsFeedItemReactions({
	likes,
	dislikes,
}: {
	likes: number
	dislikes: number
}) {
	return (
		<Space className={styles.newsFeedReactions}>
			<Typography.Text type="success">👍 {likes}</Typography.Text>
			<Typography.Text type="danger">👎 {dislikes}</Typography.Text>
		</Space>
	)
}
