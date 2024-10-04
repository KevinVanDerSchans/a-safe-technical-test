import { createSlice } from '@reduxjs/toolkit'
import { getUsersAsync } from '@users/redux/usersThunks'

import { User } from '@entities/User'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialUsersManagementState } from '@users/types/UserManagementState'

const usersSlice = createSlice({
  initialState: initialUsersManagementState,
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersAsync.fulfilled, (state, { payload }: { payload: User[] }) => {
      state.status = RequestStatus.Loaded
      state.users = payload
      state.error = null
    })
    builder.addCase(getUsersAsync.pending, state => {
      state.status = RequestStatus.Idle
      state.error = null
    })
    builder.addCase(getUsersAsync.rejected, (state, action) => {
      state.status = RequestStatus.Error
      state.error = action.error.message || 'Error loading Users'
    })
  },
})

export const usersActions = usersSlice.actions
export default usersSlice.reducer
