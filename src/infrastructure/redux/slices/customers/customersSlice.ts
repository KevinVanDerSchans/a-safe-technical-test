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
      state.error = null
    })
    builder.addCase(getCustomersAsync.pending, state => {
      state.status = RequestStatus.Idle
      state.error = null
    })
    builder.addCase(getCustomersAsync.rejected, (state, action) => {
      state.status = RequestStatus.Error
      state.error = action.error.message || 'Error loading Customers'
    })
  },
})

export const customersActions = customersSlice.actions
export default customersSlice.reducer
