import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_API_URL } from '@config/env'
import { PostsRepository } from '@repositories/posts/PostsRepository'
import { AppDispatch, RootState } from '@redux/store/store'
import { getPostsAsync } from '@redux/slices/posts/postsThunks'
import { errorService } from '@app/services/errors/ErrorService'
import PostsErrors from '@customErrors/PostsErrors'

export function useFetchPosts() {
  const repo = useMemo(() => new PostsRepository(NEXT_PUBLIC_API_URL), [])

  const { posts, status, error } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch<AppDispatch>()

  const loadPosts = useCallback(async () => {
    try {
      await dispatch(getPostsAsync({ repo }))
    } catch (error) {
      errorService.handleError(new PostsErrors.PostsErrorFetching())
      throw error
    }
  }, [repo, dispatch])

  return {
    loadPosts,
    posts,
    status,
    error,
  }
}
