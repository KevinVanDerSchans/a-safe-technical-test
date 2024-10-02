import { createSlice } from '@reduxjs/toolkit'
import { getUsersAsync } from '@redux/slices/users/usersThunks'

import { User } from '@entities/User'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialUsersManagementState } from '@mainTypes/UserManagementState'

const usersSlice = createSlice({
  initialState: initialUsersManagementState,
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersAsync.fulfilled, (state, { payload }: { payload: User[] }) => {
      state.status = RequestStatus.Loaded
      state.users = payload
    })
    builder.addCase(getUsersAsync.pending, state => {
      state.status = RequestStatus.Idle
    })
    builder.addCase(getUsersAsync.rejected, state => {
      state.status = RequestStatus.Error
    })
  },
})

export const usersActions = usersSlice.actions
export default usersSlice.reducer
