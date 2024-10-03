import { useThemeSelector } from '@features/theme/hooks/useThemeSelector'

const ThemeSelector = () => {
  const { theme, availableThemes, toggleDropdown, isOpen, handleThemeSelection } = useThemeSelector()

  return (
    <div className='relative inline-block text-left items-center pt-2'>
      <div>
        <button
          onClick={toggleDropdown}
          type='button'
          aria-expanded={isOpen}
          aria-controls='theme-menu'
          className='primary-hover-button-transition rounded-sm focus:outline-none flex items-center'
        >
          <div
            className='w-6 h-6 rounded-full mr-2'
            style={{
              backgroundColor: availableThemes.find(t => t.name === theme)?.color,
            }}
          />
          <span aria-live='polite'>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
        </button>
      </div>

      {isOpen && (
        <div
          id='theme-menu'
          role='menu'
          className='origin-bottom-right absolute bottom-full mb-2 w-56 rounded-md shadow-lg bg-[var(--secondary)]'
        >
          <div className='py-1'>
            {availableThemes.map(t => (
              <button
                key={t.name}
                onClick={() => handleThemeSelection(t.name)}
                role='menuitem'
                className='flex items-center w-full px-4 py-2 text-sm text-[var(--primary)] hover:bg-[var(--accentLight)] hover:text-[var(--secondary)]'
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
