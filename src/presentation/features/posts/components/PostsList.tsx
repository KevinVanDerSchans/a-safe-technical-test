import React, { useEffect } from 'react'

import { useFetchPosts } from '@posts/hooks/useFetchPosts'
import { useFetchUsers } from '@users/hooks/useFetchUsers'
import { PostCard } from '@posts/components/PostCard'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from 'src/shared/errors/components/ErrorFeedback'
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
        <div
          aria-live='polite'
          className='flex items-center justify-center min-h-screen'
        >
          <ErrorFeedback
            message='Posts are not available at this time.'
            onRetry={loadPosts}
          />
        </div>
      )}

      {status === RequestStatus.Idle && (
        <div
          aria-busy='true'
          className='flex items-center justify-center min-h-screen'
        >
          <MainSpinner />
        </div>
      )}

      {status === RequestStatus.Loaded && (
        <section className='flex-grow py-20'>
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
        </section>
      )}
    </>
  )
}
