import React from 'react'
import { useEffect } from 'react'

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
      {status === 'idle' && <MainSpinner />}

      {status === 'loaded' && (
        <ul
          role='list'
          className='list-none flex flex-col flex-grow items-center justify-center w-full py-12'
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
