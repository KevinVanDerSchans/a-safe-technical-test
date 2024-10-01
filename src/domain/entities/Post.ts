import { User } from '@entities/User'

export type Post = {
  id: number
  userId: User['id']
  title: string
  body: string
}
