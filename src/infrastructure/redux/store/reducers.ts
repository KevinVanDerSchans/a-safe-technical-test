import usersReducer from '@users/redux/usersSlice'
import postsReducer from '@posts/redux/postsSlice'
import customersReducer from '@customers/redux/customersSlice'

export const rootReducer = {
  users: usersReducer,
  posts: postsReducer,
  customers: customersReducer,
}
