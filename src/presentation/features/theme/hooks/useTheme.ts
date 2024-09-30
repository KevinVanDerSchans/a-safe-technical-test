import { useState, useEffect, useMemo } from 'react'
import { ThemeRepository } from '@repositories/ThemeRepository'

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light')
  const themeRepo = useMemo(() => new ThemeRepository(), [])

  useEffect(() => {
    const savedTheme = themeRepo.getTheme()

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [themeRepo])

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    themeRepo.saveTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }

  return { theme, changeTheme, handleThemeChange }
}
