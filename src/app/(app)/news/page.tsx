import NewsFeed from "@/components/newsFeed/newsFeed"
import { mockNews } from "./variables"

export default function NewsPage() {
	return <NewsFeed news={mockNews} />
}
