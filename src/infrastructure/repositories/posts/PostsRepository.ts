/* eslint-disable no-unused-vars */
import { Post } from '@entities/Post'

export class PostsRepository implements Repository<Post> {
  constructor(public url: string) {
    this.url += 'posts'
  }

  async getAll(): Promise<Post[]> {
    const url = this.url

    try {
      const response = await fetch(url)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      const answer = (await response.json()) as Post[]
      return answer
    } catch (error) {
      throw error
    }
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
}
