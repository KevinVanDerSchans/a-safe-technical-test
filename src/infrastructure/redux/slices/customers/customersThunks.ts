/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCustomersAsync = createAsyncThunk<any[], { repoUrl: string; page: number; resultsPerPage: number }>(
  'customers/load',
  async ({ repoUrl, page, resultsPerPage }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${repoUrl}?page=${page}&results=${resultsPerPage}`)

      if (!response.ok) {
        throw new Error('Failed to fetch customers')
      }

      const data = await response.json()
      return data.results
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
