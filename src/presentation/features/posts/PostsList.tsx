import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store/store'
import { useEffect } from 'react'

import { usePosts } from '@features/posts/hooks/usePosts'
import { useUsers } from '@features/users/hooks/useUsers'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import { PostCard } from '@features/posts/PostCard'

export default function PostsList() {
  const { posts, loadPosts } = usePosts()
  const { loadUsers, users } = useUsers()
  const { status } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    loadPosts()
    loadUsers()
  }, [loadPosts, loadUsers])

  return (
    <>
      {status === 'idle' && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === 'loaded' && (
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
              <li className='text-center'>There are no results that match your search.</li>
            )}
          </ul>
        </main>
      )}
    </>
  )
}
