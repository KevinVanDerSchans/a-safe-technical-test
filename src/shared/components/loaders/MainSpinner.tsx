import { CircleLoader } from 'react-spinners'

export function MainSpinner() {
  return (
    <CircleLoader
      size={60}
      speedMultiplier={0.5}
      data-testid='spinner'
      role='status'
      color='var(--primary)'
      aria-label='Loading'
    />
  )
}
