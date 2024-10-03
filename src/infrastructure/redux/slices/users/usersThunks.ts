import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '@entities/User'
import { UsersRepository } from '@repositories/users/UsersRepository'

export const getUsersAsync = createAsyncThunk<User[], { repo: UsersRepository }>(
  'users/load',
  async ({ repo }, { rejectWithValue }) => {
    try {
      const users = await repo.getAll()
      return users
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
