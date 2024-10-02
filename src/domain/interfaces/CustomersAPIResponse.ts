import { Customer } from '@entities/Customer'

export interface CustomersAPIResponse {
  results: Customer[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}
