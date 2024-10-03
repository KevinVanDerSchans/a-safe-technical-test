import { useState, useEffect, useMemo } from 'react'
import { availableThemes } from '@features/theme/availableThemes'
import { ThemeRepository } from '@repositories/themes/ThemeRepository'
import { errorService } from '@app/services/errors/ErrorService'
import ThemeErrors from '@customErrors/ThemeErrors'

export const useThemeSelector = () => {
  const [theme, setTheme] = useState<string>('light')
  const [isOpen, setIsOpen] = useState(false)
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
      setIsOpen(false)
    } catch (error) {
      errorService.handleError(new ThemeErrors.SaveThemeError())
      throw error
    }
  }

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }

  const handleThemeSelection = (themeName: string) => {
    changeTheme(themeName)
  }

  return {
    theme,
    changeTheme,
    handleThemeChange,
    toggleDropdown,
    handleThemeSelection,
    isOpen,
    availableThemes,
  }
}
