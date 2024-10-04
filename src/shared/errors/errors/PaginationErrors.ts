import { CustomError } from '@errors/services/CustomError'

class PaginationError extends CustomError {
  constructor(message: string = 'An error has occurred in the pagination') {
    super(message)
    this.name = 'PaginationError'
  }
}

const PaginationErrors = {
  PaginationError,
}

export default PaginationErrors
