"use client"

import useLoadNewsOnScroll from "@/hooks/useLoadNewsOnScroll"
import { List } from "antd"
import { ErrorFallback } from "../errorFallback"
import { Loader } from "../loader"
import { ScrollAnchor } from "../scrollAnchor"
import styles from "./newsFeed.module.scss"
import { NewsFeedItem } from "./newsFeedItem"
import type { NewsItem } from "./types"

export default function NewsFeed() {
	const { ref, news, status, error } = useLoadNewsOnScroll()

	if (status === "loading" && news.length === 0) {
		return <Loader isLoading={true} className={styles.loaderWrapper} />
	}

	if (status === "failed") {
		return (
			<ErrorFallback
				error={error}
				message="Не удалось загрузить новости"
				className={styles.error}
			/>
		)
	}

	if (!Array.isArray(news)) {
		return (
			<ErrorFallback message="Ошибка формата данных" className={styles.error} />
		)
	}

	return (
		<>
			<List
				itemLayout="vertical"
				dataSource={news}
				renderItem={(item: NewsItem) => (
					<List.Item>
						<NewsFeedItem news={item} />
					</List.Item>
				)}
			/>
			<ScrollAnchor
				ref={ref}
				isLoading={status === "loading" && news.length > 0}
				className={styles.anchor}
			/>
		</>
	)
}
