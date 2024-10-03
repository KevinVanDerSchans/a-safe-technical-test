import { CustomError } from '@errors/CustomError'

class UsersErrorNotFound extends CustomError {
  constructor(message: string = 'Users have not been found') {
    super(message)
    this.name = 'UsersErrorNotFound'
  }
}

const UsersErrors = {
  UsersErrorNotFound,
}

export default UsersErrors
