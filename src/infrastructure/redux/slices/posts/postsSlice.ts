import { createSlice } from '@reduxjs/toolkit'
import { getPostsAsync } from '@redux/slices/posts/postsThunks'

import { Post } from '@entities/Post'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialPostsManagementState } from '@mainTypes/PostsManagementState'

const postsSlice = createSlice({
  initialState: initialPostsManagementState,
  name: 'posts',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostsAsync.fulfilled, (state, { payload }: { payload: Post[] }) => {
      state.status = RequestStatus.Loaded
      state.posts = payload
      state.error = null
    })
    builder.addCase(getPostsAsync.pending, state => {
      state.status = RequestStatus.Idle
      state.error = null
    })
    builder.addCase(getPostsAsync.rejected, (state, action) => {
      state.status = RequestStatus.Error
      state.error = action.error.message || 'Error loading Posts'
    })
  },
})

export const postsActions = postsSlice.actions
export default postsSlice.reducer
