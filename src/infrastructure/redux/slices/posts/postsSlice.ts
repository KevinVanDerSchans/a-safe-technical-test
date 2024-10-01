import { createSlice } from '@reduxjs/toolkit'
import { getPostsAsync } from '@redux/slices/posts/postsThunks'

import { Post } from '@entities/Post'
import { PostsFetchStatus } from '@mainTypes/PostsFetchStatus'
import { initialPostsManagementState } from '@mainTypes/PostsManagementState'

const postsSlice = createSlice({
  initialState: initialPostsManagementState,
  name: 'posts',
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getPostsAsync.fulfilled, (state, { payload }: { payload: Post[] }) => {
      state.status = PostsFetchStatus.Loaded
      state.posts = payload
    })
    builder.addCase(getPostsAsync.pending, state => {
      state.status = PostsFetchStatus.Idle
    })
    builder.addCase(getPostsAsync.rejected, state => {
      state.status = PostsFetchStatus.Error
    })
  },
})

export const postsActions = postsSlice.actions
export default postsSlice.reducer
