import React from 'react'

interface PaginationButtonProps {
  onClick: () => void
  disabled?: boolean
  direction: 'previous' | 'next'
  className?: string
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({ onClick, disabled, direction, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {direction === 'previous' ? 'Previous' : 'Next'}
    </button>
  )
}
