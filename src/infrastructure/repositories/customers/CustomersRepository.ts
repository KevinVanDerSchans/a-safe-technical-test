/* eslint-disable no-unused-vars */
import { Customer } from '@entities/Customer'
import { CustomersAPIResponse } from '@interfaces/CustomersAPIResponse'

export class CustomersRepository implements Repository<Customer> {
  constructor(public url: string) {
    this.url = `${this.url}`
  }

  async getAll(page = 1, resultsPerPage = 10): Promise<Customer[]> {
    const response = await fetch(`${this.url}?page=${page}&results=${resultsPerPage}`)

    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`
      throw new Error(message)
    }

    const data = (await response.json()) as CustomersAPIResponse
    return data.results
  }
}

export interface Repository<X extends { email: string | number }> {
  getAll(): Promise<X[]>
}
