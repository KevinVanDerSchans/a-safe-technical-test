/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorService } from '@errors/services/ErrorService'
import CustomersErrors from '@customers/errors/CustomersErrors'

export const getCustomersAsync = createAsyncThunk<any[], { repoUrl: string; page: number; resultsPerPage: number }>(
  'customers/load',
  async ({ repoUrl, page, resultsPerPage }) => {
    try {
      const response = await fetch(`${repoUrl}?page=${page}&results=${resultsPerPage}`)
      const data = await response.json()
      return data.results
    } catch (error) {
      errorService.handleError(new CustomersErrors.CustomersErrorFetching())
      throw error
    }
  }
)
