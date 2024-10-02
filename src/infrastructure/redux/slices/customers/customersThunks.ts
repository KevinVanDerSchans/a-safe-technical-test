import { createAsyncThunk } from '@reduxjs/toolkit'

import { Customer } from '@entities/Customer'
import { CustomersRepository } from '@repositories/customers/CustomersRepository'

export const getCustomersAsync = createAsyncThunk<
  Customer[],
  { repo: CustomersRepository; page: number; resultsPerPage: number }
>(
  'customers/load',

  async ({ repo, page, resultsPerPage }) => {
    const customers = await repo.getAll(page, resultsPerPage)
    return customers
  }
)
