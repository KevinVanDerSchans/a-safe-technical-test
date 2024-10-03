import { createAsyncThunk } from '@reduxjs/toolkit'

import { Post } from '@entities/Post'
import { PostsRepository } from '@repositories/posts/PostsRepository'

export const getPostsAsync = createAsyncThunk<Post[], { repo: PostsRepository }>(
  'posts/load',
  async ({ repo }, { rejectWithValue }) => {
    try {
      const posts = await repo.getAll()
      return posts
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
