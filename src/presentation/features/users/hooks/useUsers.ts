import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { UsersRepository } from '@repositories/users/UsersRepository'
import { RootState, AppDispatch } from '@redux/store/store'
import { getUsersAsync } from '@redux/slices/users/usersThunks'

export function useUsers() {
  const repo = useMemo(() => new UsersRepository(NEXT_PUBLIC_API_URL), [])

  const { users, status, currentUser, token } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  const loadUsers = useCallback(async () => {
    await dispatch(getUsersAsync(repo))
  }, [repo, dispatch])

  return {
    loadUsers,
    users,
    status,
    currentUser,
    token,
  }
}
