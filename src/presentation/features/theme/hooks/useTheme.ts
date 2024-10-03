import { useState, useEffect, useMemo } from 'react'
import { ThemeRepository } from '@repositories/themes/ThemeRepository'
import { errorService } from '@app/services/errors/ErrorService'
import ThemeErrors from '@customErrors/ThemeErrors'

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light')
  const themeRepo = useMemo(() => new ThemeRepository(), [])

  useEffect(() => {
    try {
      const savedTheme = themeRepo.getTheme()

      if (savedTheme) {
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    } catch (error) {
      errorService.handleError(new ThemeErrors.GetThemeError())
      throw error
    }
  }, [themeRepo])

  const changeTheme = (newTheme: string) => {
    try {
      setTheme(newTheme)
      themeRepo.saveTheme(newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    } catch (error) {
      errorService.handleError(new ThemeErrors.SaveThemeError())
      throw error
    }
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }

  return { theme, changeTheme, handleThemeChange }
}
