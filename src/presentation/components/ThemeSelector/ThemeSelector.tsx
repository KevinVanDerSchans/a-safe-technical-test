import { useTheme } from '@context/ThemeProvider'

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value)
  }

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className='primary-hover-button-transition'
    >
      <option value='light'>Claro</option>
      <option value='dark'>Oscuro</option>
      <option value='solarized'>Solarizado</option>
    </select>
  )
}

export default ThemeSelector
