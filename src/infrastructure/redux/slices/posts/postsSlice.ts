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
    })
    builder.addCase(getPostsAsync.pending, state => {
      state.status = RequestStatus.Idle
    })
    builder.addCase(getPostsAsync.rejected, state => {
      state.status = RequestStatus.Error
    })
  },
})

export const postsActions = postsSlice.actions
export default postsSlice.reducer
