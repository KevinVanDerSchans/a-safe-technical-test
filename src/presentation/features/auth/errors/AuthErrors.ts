import { CustomError } from '@errors/services/CustomError'

class CredentialsError extends CustomError {
  constructor(message: string = 'Error with credentials. Please try again.') {
    super(message)
    this.name = 'CredentialsError'
  }
}

const AuthErrors = {
  CredentialsError,
}

export default AuthErrors
