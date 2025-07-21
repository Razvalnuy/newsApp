"use client"

import type { AppDispatch } from "@/app/store"
import {
	fetchPosts,
	selectAllPosts,
	selectPostsError,
	selectPostsHasMore,
	selectPostsStatus,
} from "@/app/store/postsSlice"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"

export default function useLoadNewsOnScroll() {
	const [ref, inView] = useInView({ threshold: 0.1 })
	const dispatch = useDispatch<AppDispatch>()
	const news = useSelector(selectAllPosts)
	const status = useSelector(selectPostsStatus)
	const error = useSelector(selectPostsError)
	const hasMore = useSelector(selectPostsHasMore)

	const isFirstLoad = useRef(true)
	const isFetching = useRef(false)

	useEffect(() => {
		if (isFirstLoad.current && news.length === 0 && status !== "loading") {
			isFirstLoad.current = false
			isFetching.current = true
			dispatch(fetchPosts()).finally(() => {
				isFetching.current = false
			})
		}
	}, [dispatch, news.length, status])

	useEffect(() => {
		if (
			!isFirstLoad.current &&
			!isFetching.current &&
			inView &&
			hasMore &&
			status !== "loading"
		) {
			isFetching.current = true
			dispatch(fetchPosts()).finally(() => {
				isFetching.current = false
			})
		}
	}, [inView, hasMore, status, dispatch])

	return { ref, news, status, error, hasMore }
}
