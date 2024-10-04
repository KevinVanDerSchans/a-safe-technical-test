import { CustomError } from '@errors/services/CustomError'

class UsersErrorNotFound extends CustomError {
  constructor(message: string = 'Users have not been found') {
    super(message)
    this.name = 'UsersErrorNotFound'
  }
}

class UsersErrorFetching extends CustomError {
  constructor(message: string = 'Error when fetching Users') {
    super(message)
    this.name = 'UsersErrorFetching'
  }
}

const UsersErrors = {
  UsersErrorNotFound,
  UsersErrorFetching,
}

export default UsersErrors
