import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '@entities/User'
import { UsersRepository } from '@repositories/users/UsersRepository'

export const getUsersAsync = createAsyncThunk<User[], UsersRepository>(
  'users/load',

  async repo => {
    const users = await repo.getAll()
    return users
  }
)
