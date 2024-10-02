import { User } from '@entities/User'

export type Post = Readonly<{
  id: number
  userId: User['id']
  title: string
  body: string
}>
