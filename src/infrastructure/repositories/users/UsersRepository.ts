/* eslint-disable no-unused-vars */
import { User } from '@entities/User'

export class UsersRepository implements Repository<User> {
  constructor(public url: string) {
    this.url += 'users'
  }

  async getAll(): Promise<User[]> {
    try {
      const response = await fetch(this.url)

      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`
        throw new Error(message)
      }

      const answer = (await response.json()) as User[]
      return answer
    } catch (error) {
      throw error
    }
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
}
