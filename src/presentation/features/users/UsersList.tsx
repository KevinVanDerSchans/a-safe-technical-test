import React, { useEffect } from 'react'

import { useFetchUsers } from '@features/users/hooks/useFetchUsers'
import { UserCard } from '@features/users/UserCard'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import ErrorFeedback from '@sharedComponents/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export default function UsersList() {
  const { loadUsers, users, status } = useFetchUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <>
      {status === RequestStatus.Error && (
        <main className='flex items-center justify-center min-h-screen'>
          <ErrorFeedback
            message='Users are not available at this time.'
            onRetry={loadUsers}
          />
        </main>
      )}

      {status === RequestStatus.Idle && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === RequestStatus.Loaded && (
        <ul
          role='list'
          className='list-none flex flex-col flex-grow items-center justify-center w-full xs:py-0'
        >
          {users.map(item => (
            <UserCard
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      )}
    </>
  )
}
