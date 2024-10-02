import { createSlice } from '@reduxjs/toolkit'
import { getCustomersAsync } from '@redux/slices/customers/customersThunks'

import { Customer } from '@entities/Customer'
import { CustomersFetchStatus } from '@mainTypes/CustomersFetchStatus'
import { initialCustomersManagementState } from '@mainTypes/CustomersManagementState'

const customersSlice = createSlice({
  initialState: initialCustomersManagementState,
  name: 'customers',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCustomersAsync.fulfilled, (state, { payload }: { payload: Customer[] }) => {
      state.status = CustomersFetchStatus.Loaded
      state.customers = payload
    })
    builder.addCase(getCustomersAsync.pending, state => {
      state.status = CustomersFetchStatus.Idle
    })
    builder.addCase(getCustomersAsync.rejected, state => {
      state.status = CustomersFetchStatus.Error
    })
  },
})

export const customersActions = customersSlice.actions
export default customersSlice.reducer
