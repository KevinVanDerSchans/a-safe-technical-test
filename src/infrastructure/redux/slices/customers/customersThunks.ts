import { createAsyncThunk } from '@reduxjs/toolkit'

import { Customer } from '@entities/Customer'
import { CustomersRepository } from '@repositories/customers/CustomersRepository'

export const getCustomersAsync = createAsyncThunk<Customer[], CustomersRepository>(
  'customers/load',

  async repo => {
    const customers = await repo.getAll()
    return customers
  }
)
