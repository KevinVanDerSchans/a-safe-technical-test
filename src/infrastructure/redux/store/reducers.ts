import postsReducer from '@redux/slices/posts/postsSlice'
import usersReducer from '@redux/slices/users/usersSlice'

export const rootReducer = {
  posts: postsReducer,
  users: usersReducer,
}
