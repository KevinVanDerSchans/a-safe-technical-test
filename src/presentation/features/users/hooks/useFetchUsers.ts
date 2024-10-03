import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { UsersRepository } from '@repositories/users/UsersRepository'
import { RootState, AppDispatch } from '@redux/store/store'
import { getUsersAsync } from '@redux/slices/users/usersThunks'
import { errorService } from '@app/services/errors/ErrorService'

export function useFetchUsers() {
  const repo = useMemo(() => new UsersRepository(NEXT_PUBLIC_API_URL), [])

  const { users, status, error } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  const loadUsers = useCallback(async () => {
    try {
      await dispatch(getUsersAsync({ repo }))
    } catch (error) {
      errorService.handleError(error as Error)
    }
  }, [repo, dispatch])

  return {
    loadUsers,
    users,
    status,
    error,
  }
}
