/* eslint-disable no-unused-vars */
import { Post } from '@entities/Post'
import { errorService } from '@app/services/errors/ErrorService'
import PostsErrors from 'src/domain/errors/PostsErrors'

export class PostsRepository implements Repository<Post> {
  constructor(public url: string) {
    this.url += 'posts'
  }

  async getAll(): Promise<Post[]> {
    const url = this.url
    const response = await fetch(url)

    if (!response.ok) {
      errorService.handleError(new PostsErrors.PostErrorNotFound())
    }

    const answer = (await response.json()) as Post[]
    return answer
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
}
