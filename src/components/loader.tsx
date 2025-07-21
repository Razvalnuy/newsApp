"use client"

interface LoaderProps {
	isLoading: boolean
	className?: string
}
import styles from "./newsFeed/newsFeed.module.scss"

export function Loader({ isLoading }: LoaderProps) {
	if (!isLoading) return null
	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.loader}></div>
		</div>
	)
}
