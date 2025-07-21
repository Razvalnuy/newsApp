"use client"

import type { AppDispatch } from "@/app/store"
import {
	fetchPosts,
	selectAllPosts,
	selectPostsError,
	selectPostsStatus,
} from "@/app/store/postsSlice"
import { List } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./newsFeed.module.scss"
import { NewsFeedItem } from "./newsFeedItem"
import type { NewsItem } from "./types"

export default function NewsFeed() {
	const dispatch: AppDispatch = useDispatch()
	const news: NewsItem[] = useSelector(selectAllPosts)
	const status: "idle" | "loading" | "succeeded" | "failed" =
		useSelector(selectPostsStatus)
	const error: string | null = useSelector(selectPostsError)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	if (status === "loading") {
		return (
			<div className={styles.loaderWrapper}>
				<div className={styles.loader}></div>
			</div>
		)
	}

	if (status === "failed") {
		return (
			<div className={styles.error}>
				Ошибка: {error || "Не удалось загрузить новости"}
			</div>
		)
	}

	if (!Array.isArray(news)) {
		return <div className={styles.error}>Ошибка формата данных</div>
	}

	return (
		<List
			itemLayout="vertical"
			dataSource={news}
			renderItem={(item: NewsItem) => (
				<List.Item className={styles.newsFeedItem}>
					<NewsFeedItem news={item} />
				</List.Item>
			)}
		/>
	)
}
