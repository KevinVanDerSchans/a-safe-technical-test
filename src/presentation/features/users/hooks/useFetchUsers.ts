import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { RootState, AppDispatch } from '@redux/store/store'
import { getUsersAsync } from '@users/redux/usersThunks'
import { errorService } from '@errors/services/ErrorService'
import UsersErrors from '@users/errors/UsersErrors'

export function useFetchUsers() {
  const repo = useMemo(() => new UsersRepository(NEXT_PUBLIC_API_URL), [])

  const { users, status, error } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  const loadUsers = useCallback(async () => {
    try {
      await dispatch(getUsersAsync({ repo }))
    } catch (error) {
      errorService.handleError(new UsersErrors.UsersErrorFetching())
      throw error
    }
  }, [repo, dispatch])

  return {
    loadUsers,
    users,
    status,
    error,
  }
}
