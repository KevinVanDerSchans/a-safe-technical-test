import postsReducer from '@redux/slices/posts/postsSlice'
import usersReducer from '@redux/slices/users/usersSlice'
import customersReducer from '@redux/slices/customers/customersSlice'

export const rootReducer = {
  posts: postsReducer,
  users: usersReducer,
  customers: customersReducer,
}
