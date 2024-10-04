/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Customer } from '@entities/Customer'

export class CustomersRepository implements Repository<Customer> {
  constructor(public url: string) {
    this.url = `${this.url}`
  }

  async getAll(page = 1, resultsPerPage = 9, seed = 'default-seed'): Promise<Customer[]> {
    try {
      const response = await fetch(`${this.url}?page=${page}&results=${resultsPerPage}&seed=${seed}`)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      const data = await response.json()

      const sanitizedResults = data.results.map((customer: any) => {
        delete customer.login
        return customer
      })

      return sanitizedResults
    } catch (error) {
      throw error
    }
  }
}

export interface Repository<X extends { email: string | number }> {
  getAll(): Promise<X[]>
}
