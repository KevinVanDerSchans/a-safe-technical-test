import { Post } from '@entities/Post'
import { PostsFetchStatus } from './PostsFetchStatus'

export type PostsState = {
  posts: Post[]
  status: PostsFetchStatus
}

export const initialPostsManagementState: PostsState = {
  posts: [],
  status: PostsFetchStatus.Idle,
}
