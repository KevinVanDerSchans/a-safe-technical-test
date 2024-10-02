/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCustomersAsync = createAsyncThunk<any[], { repoUrl: string; page: number; resultsPerPage: number }>(
  'customers/load',

  async ({ repoUrl, page, resultsPerPage }) => {
    const response = await fetch(`${repoUrl}?page=${page}&resultsPerPage=${resultsPerPage}`)
    const data = await response.json()

    return data.results
  }
)
