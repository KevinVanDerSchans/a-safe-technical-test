import React, { useEffect } from 'react'

import { useFetchPosts } from '@features/posts/hooks/useFetchPosts'
import { useFetchUsers } from '@features/users/hooks/useFetchUsers'
import { PostCard } from '@features/posts/PostCard'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import ErrorFeedback from '@sharedComponents/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export default function PostsList() {
  const { loadPosts, posts, status } = useFetchPosts()
  const { loadUsers, users } = useFetchUsers()

  useEffect(() => {
    loadPosts()
    loadUsers()
  }, [loadPosts, loadUsers])

  return (
    <>
      {status === RequestStatus.Error && (
        <main className='flex items-center justify-center min-h-screen'>
          <ErrorFeedback
            message='Posts are not available at this time.'
            onRetry={loadPosts}
          />
        </main>
      )}

      {status === RequestStatus.Idle && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === RequestStatus.Loaded && (
        <main className='flex-grow py-20'>
          <ul
            role='list'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 list-none px-12 py-12 pb-28 justify-center items-center'
          >
            {posts.length !== 0 ? (
              posts.map(item => (
                <PostCard
                  key={item.id}
                  item={item}
                  userName={users.find(user => user.id === item.userId)?.username || 'Unknown'}
                />
              ))
            ) : (
              <p className='text-center'>There are no results that match your search.</p>
            )}
          </ul>
        </main>
      )}
    </>
  )
}
