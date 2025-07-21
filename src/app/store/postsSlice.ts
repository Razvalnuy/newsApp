import type { NewsItem } from "@/components/newsFeed/types"
import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit"
import axios from "axios"
import type { RootState } from "./index"

interface PostsState {
	posts: NewsItem[]
	status: "idle" | "loading" | "failed" | "succeeded"
	error: string | null
	page: number
	limit: number
	hasMore: boolean
}

const initialState: PostsState = {
	posts: [],
	status: "idle",
	error: null,
	page: 1,
	limit: 10,
	hasMore: true,
}

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { getState }) => {
		const state = getState() as RootState
		const { page, limit } = state.posts
		const response = await axios.get(
			`https://dummyjson.com/posts?limit=${limit}&skip=${(page - 1) * limit}`
		)
		return response.data.posts as NewsItem[]
	}
)

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(
				fetchPosts.fulfilled,
				(state, action: PayloadAction<NewsItem[]>) => {
					state.status = "succeeded"
					action.payload.forEach((post) => {
						if (!state.posts.some((p) => p.id === post.id)) {
							state.posts.push(post)
						}
					})
					state.page += 1
					state.hasMore = action.payload.length === state.limit
				}
			)
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message || "Ошибка загрузки"
			})
	},
})

export const selectAllPosts = (state: RootState) => state.posts.posts
export const selectPostsStatus = (state: RootState) => state.posts.status
export const selectPostsError = (state: RootState) => state.posts.error
export const selectPostsHasMore = (state: RootState) => state.posts.hasMore
export const selectPostsLimit = (state: RootState) => state.posts.limit

export default postsSlice.reducer
