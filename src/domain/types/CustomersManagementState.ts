import { Customer } from '@entities/Customer'
import { CustomersFetchStatus } from './CustomersFetchStatus'

export type CustomerManagementState = {
  customers: Customer[]
  status: CustomersFetchStatus
  hasFetchError: boolean
  fetchErrorMessage: string | null
}

export const initialCustomersManagementState: CustomerManagementState = {
  customers: [],
  status: CustomersFetchStatus.Idle,
  hasFetchError: false,
  fetchErrorMessage: null,
}
