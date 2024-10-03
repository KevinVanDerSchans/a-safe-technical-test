/* eslint-disable no-unused-vars */
import { createContext, useContext, ReactNode } from 'react'
import { useTheme } from '@features/theme/hooks/useTheme'
import { errorService } from '@app/services/errors/ErrorService'
import ThemeErrors from '@customErrors/ThemeErrors'

interface ThemeContextType {
  theme: string
  changeTheme: (newTheme: string) => void
  handleThemeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, changeTheme, handleThemeChange } = useTheme()

  return <ThemeContext.Provider value={{ theme, changeTheme, handleThemeChange }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    errorService.handleError(new ThemeErrors.ThemeError())
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}
