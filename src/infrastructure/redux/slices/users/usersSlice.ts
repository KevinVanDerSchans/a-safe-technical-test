import { createSlice } from '@reduxjs/toolkit'
import { getUsersAsync } from '@redux/slices/users/usersThunks'

import { User } from '@entities/User'
import { UsersFetchStatus } from '@mainTypes/UsersFetchStatus'
import { initialUsersManagementState } from '@mainTypes/UserManagementState'

const usersSlice = createSlice({
  initialState: initialUsersManagementState,
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersAsync.fulfilled, (state, { payload }: { payload: User[] }) => {
      state.status = UsersFetchStatus.Loaded
      state.users = payload
    })
    builder.addCase(getUsersAsync.pending, state => {
      state.status = UsersFetchStatus.Idle
    })
    builder.addCase(getUsersAsync.rejected, state => {
      state.status = UsersFetchStatus.Error
    })
  },
})

export const usersActions = usersSlice.actions
export default usersSlice.reducer
