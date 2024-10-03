import { User } from '@entities/User'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export type UserManagementState = {
  currentUser: User | null
  token: string | null
  users: User[]
  status: RequestStatus
  hasLoginError: boolean
  loginErrorMessage: string | null
  error: string | null
}

export const initialUsersManagementState: UserManagementState = {
  currentUser: null,
  token: null,
  users: [],
  status: RequestStatus.Idle,
  hasLoginError: false,
  loginErrorMessage: null,
  error: null,
}
