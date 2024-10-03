import { useThemeSelector } from '@features/theme/hooks/useThemeSelector'

const ThemeSelector = () => {
  const { theme, availableThemes, toggleDropdown, isOpen, handleThemeSelection } = useThemeSelector()

  return (
    <div className='relative inline-block text-left items-center pt-2'>
      <div>
        <button
          type='button'
          className='primary-hover-button-transition rounded-sm focus:outline-none flex items-center'
          onClick={toggleDropdown}
        >
          <div
            className='w-6 h-6 rounded-full mr-2'
            style={{
              backgroundColor: availableThemes.find(t => t.name === theme)?.color,
            }}
          />
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      </div>

      {isOpen && (
        <div className='origin-bottom-right absolute bottom-full mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div className='py-1'>
            {availableThemes.map(t => (
              <button
                key={t.name}
                onClick={() => handleThemeSelection(t.name)}
                className='flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              >
                <div
                  className='w-6 h-6 rounded-full mr-2'
                  style={{ backgroundColor: t.color }}
                />
                {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeSelector
