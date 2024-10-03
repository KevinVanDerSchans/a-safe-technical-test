/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@entities/User'
import { UsersRepository } from '@repositories/users/UsersRepository'
import { errorService } from '@app/services/errors/ErrorService'
import UsersErrors from '@customErrors/UsersErrors'

export const getUsersAsync = createAsyncThunk<User[], { repo: UsersRepository }>('users/load', async ({ repo }) => {
  try {
    const users = await repo.getAll()
    return users
  } catch (error) {
    errorService.handleError(new UsersErrors.UsersErrorFetching())
    throw error
  }
})
