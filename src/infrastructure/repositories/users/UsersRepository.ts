/* eslint-disable no-unused-vars */
import { User } from '@entities/User'
import { errorService } from '@app/services/errors/ErrorService'
import UsersErrors from 'src/domain/errors/UsersErrors'

export class UsersRepository implements Repository<User> {
  constructor(public url: string) {
    this.url += 'users'
  }

  async getAll(): Promise<User[]> {
    const response = await fetch(this.url)

    if (!response.ok) {
      errorService.handleError(new UsersErrors.UsersErrorNotFound())
    }

    const answer = (await response.json()) as User[]
    return answer
  }
}

export interface Repository<X extends { id: string | number }> {
  getAll(): Promise<X[]>
}
