/* eslint-disable no-unused-vars */
import { Post } from '@entities/Post'

export class PostsRepository implements Repository<Post> {
  constructor(public url: string) {
    this.url += 'posts'
  }

  async getAll(filter?: string): Promise<Post[]> {
    let filteredUrl = this.url

    if (filter) {
      filteredUrl = this.url + `?userId=${filter}`
    }

    const response = await fetch(filteredUrl)
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`
      throw new Error(message)
    }

    const answer = (await response.json()) as Post[]
    return answer
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
}
