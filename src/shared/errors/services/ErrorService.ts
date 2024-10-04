import { CustomError } from '@errors/services/CustomError'

class ErrorService {
  private logError(error: Error): void {
    console.error(`CustomError: ${error.name}`, { message: error.message, stack: error.stack })
  }

  handleError(error: Error): void {
    if (error instanceof CustomError) {
      this.logError(error)
    } else {
      this.logError(new Error('Unexpected error occurred'))
    }
  }
}

export const errorService = new ErrorService()
