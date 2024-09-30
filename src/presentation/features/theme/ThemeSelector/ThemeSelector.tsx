import { useThemeContext } from '@context/ThemeProvider'

const ThemeSelector = () => {
  const { theme, handleThemeChange } = useThemeContext()

  return (
    <div className='flex'>
      <label
        htmlFor='theme-select'
        className='sr-only'
      >
        Select a theme
      </label>
      <select
        id='theme-select'
        value={theme}
        onChange={handleThemeChange}
        aria-label='Select a theme'
        className='primary-hover-button-transition rounded-sm focus:outline-none'
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='solarized'>Solarized</option>
      </select>
    </div>
  )
}

export default ThemeSelector
