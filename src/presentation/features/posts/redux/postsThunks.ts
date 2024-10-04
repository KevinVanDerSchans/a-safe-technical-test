/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '@entities/Post'
import { PostsRepository } from '@posts/repositories/PostsRepository'
import { errorService } from '@errors/services/ErrorService'
import PostsErrors from '@posts/errors/PostsErrors'

export const getPostsAsync = createAsyncThunk<Post[], { repo: PostsRepository }>('posts/load', async ({ repo }) => {
  try {
    const posts = await repo.getAll()
    return posts
  } catch (error) {
    errorService.handleError(new PostsErrors.PostsErrorFetching())
    throw error
  }
})
