import React, { useEffect } from 'react'

import { useFetchUsers } from '@users/hooks/useFetchUsers'
import { UserCard } from '@users/components/UserCard'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export default function UsersList() {
  const { loadUsers, users, status } = useFetchUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <div
      aria-live='polite'
      className='flex-grow flex flex-col pt-8 py-12'
    >
      {status === RequestStatus.Error && (
        <div
          aria-live='polite'
          className='flex items-center justify-center min-h-screen'
        >
          <ErrorFeedback
            message='Users are not available at this time.'
            onRetry={loadUsers}
          />
        </div>
      )}

      {status === RequestStatus.Idle && (
        <div
          aria-busy='true'
          className='flex items-center justify-center min-h-screen'
        >
          <MainSpinner aria-label='Loading users...' />
        </div>
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
    </div>
  )
}
