export class CustomError extends Error {
  constructor(message: string = 'An error has occurred!') {
    super(message)
    this.name = 'CustomError'
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = 'Resource not found!') {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class ValidationError extends CustomError {
  constructor(message: string = 'Invalid input!') {
    super(message)
    this.name = 'ValidationError'
  }
}
