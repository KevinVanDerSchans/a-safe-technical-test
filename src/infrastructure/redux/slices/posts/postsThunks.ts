import { createAsyncThunk } from '@reduxjs/toolkit'

import { Post } from '@entities/Post'
import { PostsRepository } from '@repositories/posts/PostsRepository'

export const getPostsAsync = createAsyncThunk<Post[], { repo: PostsRepository; filter?: string }>(
  'posts/load',
  async ({ repo, filter }) => {
    const posts = await repo.getAll(filter)
    return posts
  }
)
