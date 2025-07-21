import { Space, Tag } from "antd"
import styles from "./newsFeed.module.scss"

export function NewsFeedItemTags({ tags }: { tags: string[] }) {
	return (
		<div className={styles.newsFeedTags}>
			<Space wrap>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</Space>
		</div>
	)
}
