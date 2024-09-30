import { User } from '@entities/User'
import { UsersFetchStatus } from '@mainTypes/UsersFetchStatus'

export type UserManagementState = {
  currentUser: User | null
  token: string | null
  users: User[]
  status: UsersFetchStatus
  hasLoginError: boolean
  loginErrorMessage: string | null
}

export const initialUsersManagementState: UserManagementState = {
  currentUser: null,
  token: null,
  users: [],
  status: UsersFetchStatus.Idle,
  hasLoginError: false,
  loginErrorMessage: null,
}
