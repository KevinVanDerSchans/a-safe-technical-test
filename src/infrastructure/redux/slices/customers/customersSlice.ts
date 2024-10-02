import { createSlice } from '@reduxjs/toolkit'
import { getCustomersAsync } from '@redux/slices/customers/customersThunks'

import { Customer } from '@entities/Customer'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialCustomersManagementState } from '@mainTypes/CustomersManagementState'

const customersSlice = createSlice({
  initialState: initialCustomersManagementState,
  name: 'customers',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomersAsync.fulfilled, (state, { payload }: { payload: Customer[] }) => {
      state.status = RequestStatus.Loaded
      state.customers = payload
    })
    builder.addCase(getCustomersAsync.pending, state => {
      state.status = RequestStatus.Idle
    })
    builder.addCase(getCustomersAsync.rejected, state => {
      state.status = RequestStatus.Error
    })
  },
})

export const customersActions = customersSlice.actions
export default customersSlice.reducer
