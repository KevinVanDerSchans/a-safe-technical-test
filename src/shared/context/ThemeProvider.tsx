/* eslint-disable no-unused-vars */
import { createContext, useContext, ReactNode } from 'react'
import { useThemeSelector } from '@features/theme/hooks/useThemeSelector'
import { errorService } from '@app/services/errors/ErrorService'
import ThemeErrors from '@customErrors/ThemeErrors'

interface ThemeContextType {
  theme: string
  changeTheme: (newTheme: string) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, changeTheme } = useThemeSelector()

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    errorService.handleError(new ThemeErrors.ThemeError())
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}
