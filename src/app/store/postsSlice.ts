import { NewsItem } from "@/components/newsFeed/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "./index"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(
		"https://dummyjson.com/posts?limit=10&skip=0"
	)
	return response.data.posts
})

interface PostsState {
	posts: NewsItem[]
	status: "idle" | "loading" | "failed" | "succeeded"
	error: string | null
}

const initialState: PostsState = {
	posts: [],
	status: "idle",
	error: null,
}

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
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.posts = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message || "Ошибка загрузки"
			})
	},
})

export const selectAllPosts = (state: RootState) => state.posts.posts
export const selectPostsStatus = (state: RootState) => state.posts.status
export const selectPostsError = (state: RootState) => state.posts.error

export default postsSlice.reducer
