/* eslint-disable no-unused-vars */
export interface ErrorContextProps {
  handleError: (error: Error) => void
}

export interface ErrorProviderProps {
  children: React.ReactNode
}
