/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

const themes = ['light', 'dark', 'solarized']

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState('light')

  const themeStyles: Record<string, { '--background': string; '--foreground': string }> = {
    light: {
      '--background': '#ffffff',
      '--foreground': '#000000',
    },
    dark: {
      '--background': '#000000',
      '--foreground': '#ffffff',
    },
    solarized: {
      '--background': '#3df6e3',
      '--foreground': '#657b83',
    },
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'
    setThemeState(storedTheme)
    document.body.style.setProperty('--background', themeStyles[storedTheme]['--background'])
    document.body.style.setProperty('--foreground', themeStyles[storedTheme]['--foreground'])
  }, [])

  useEffect(() => {
    document.body.style.setProperty('--background', themeStyles[theme]['--background'])
    document.body.style.setProperty('--foreground', themeStyles[theme]['--foreground'])
    localStorage.setItem('theme', theme)
  }, [theme])

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider')
  }
  return context
}
