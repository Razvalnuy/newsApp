export type NewsFeedItemType = {
	id: string
	title: string
	author: string
	date: string
	views: number
	summary: string
	tags: string[]
	reaction: { likes: number; dislikes: number }
}
