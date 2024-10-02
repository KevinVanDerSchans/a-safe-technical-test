import { Post } from '@entities/Post'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export type PostsState = {
  posts: Post[]
  status: RequestStatus
}

export const initialPostsManagementState: PostsState = {
  posts: [],
  status: RequestStatus.Idle,
}
