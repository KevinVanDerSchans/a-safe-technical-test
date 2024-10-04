import { Customer } from '@entities/Customer'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export type CustomerManagementState = {
  customers: Customer[]
  status: RequestStatus
  hasFetchError: boolean
  fetchErrorMessage: string | null
  error: string | null
}

export const initialCustomersManagementState: CustomerManagementState = {
  customers: [],
  status: RequestStatus.Idle,
  hasFetchError: false,
  fetchErrorMessage: null,
  error: null,
}
