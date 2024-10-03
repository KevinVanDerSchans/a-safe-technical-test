import usersReducer from '@redux/slices/users/usersSlice'
import postsReducer from '@redux/slices/posts/postsSlice'
import customersReducer from '@redux/slices/customers/customersSlice'

export const rootReducer = {
  users: usersReducer,
  posts: postsReducer,
  customers: customersReducer,
}
