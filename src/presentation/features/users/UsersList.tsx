import React, { useEffect } from 'react'

import { useUsers } from '@features/users/hooks/useUsers'
import { UserCard } from '@features/users/UserCard'
import { MainSpinner } from '@sharedComponents/MainSpinner'

export default function UsersList() {
  const { loadUsers, users, status } = useUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <>
      {status === 'idle' && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === 'loaded' && (
        <ul
          role='list'
          className='list-none flex flex-col flex-grow items-center justify-center w-full py-20'
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
