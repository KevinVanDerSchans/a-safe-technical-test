/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@entities/User'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { errorService } from '@errors/services/ErrorService'
import UsersErrors from '@users/errors/UsersErrors'

export const getUsersAsync = createAsyncThunk<User[], { repo: UsersRepository }>('users/load', async ({ repo }) => {
  try {
    const users = await repo.getAll()
    return users
  } catch (error) {
    errorService.handleError(new UsersErrors.UsersErrorFetching())
    throw error
  }
})
