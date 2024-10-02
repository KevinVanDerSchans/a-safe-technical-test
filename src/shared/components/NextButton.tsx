import React from 'react'

interface NextButtonProps {
  onClick: () => void
  className?: string
}

export const NextButton: React.FC<NextButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      Next
    </button>
  )
}
