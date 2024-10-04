import { createContext, useContext, ReactElement, useCallback } from 'react'
import { errorService } from '@errors/services/ErrorService'
import { ErrorContextProps, ErrorProviderProps } from '@errors/types/ErrorTypes'

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined)

export const ErrorProvider = ({ children }: ErrorProviderProps): ReactElement => {
  const handleError = useCallback((error: Error) => {
    errorService.handleError(error)
  }, [])

  return <ErrorContext.Provider value={{ handleError }}>{children}</ErrorContext.Provider>
}

export const useError = (): ErrorContextProps => {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider')
  }
  return context
}
