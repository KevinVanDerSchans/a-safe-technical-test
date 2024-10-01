import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { PostsRepository } from '@repositories/posts/PostsRepository'
import { AppDispatch, RootState } from '@redux/store/store'
import { getPostsAsync } from '@redux/slices/posts/postsThunks'

export function usePosts() {
  const repo = useMemo(() => new PostsRepository(NEXT_PUBLIC_API_URL), [])

  const { posts, status } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch<AppDispatch>()

  const loadPosts = useCallback(async () => {
    await dispatch(getPostsAsync({ repo }))
  }, [repo, dispatch])

  return {
    loadPosts,
    posts,
    status,
  }
}
