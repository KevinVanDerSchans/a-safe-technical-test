import { CustomError } from '@errors/CustomError'

class ThemeError extends CustomError {
  constructor(message: string = 'An error has occurred in Theme functionality') {
    super(message)
    this.name = 'ThemeError'
  }
}

class GetThemeError extends CustomError {
  constructor(message: string = 'An error occurred while receiving the theme') {
    super(message)
    this.name = 'GetThemeError'
  }
}

class SaveThemeError extends CustomError {
  constructor(message: string = 'An error occurred while updating the theme') {
    super(message)
    this.name = 'SaveThemeError'
  }
}

const ThemeErrors = {
  ThemeError,
  GetThemeError,
  SaveThemeError,
}

export default ThemeErrors
