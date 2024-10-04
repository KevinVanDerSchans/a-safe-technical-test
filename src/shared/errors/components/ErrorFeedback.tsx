import React from 'react'
import ICONS from '@constants/icons'

interface ErrorFeedbackProps {
  message: string
  onRetry?: () => void
}

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ message, onRetry }) => {
  return (
    <div
      role='alert'
      aria-live='assertive'
      className='flex items-center justify-between p-4 mb-4 bg-[var(--errorLight)] border border-[var(--errorText)] text-[var(--errorText)] rounded-lg shadow-lg animate-fade-in'
    >
      <div className='flex items-center'>
        <ICONS.ExclamationErrorIcon className='h-6 w-6 text-[var(--error)] mr-2' />
        <div>
          <h3 className='text-lg font-bold'>Oops! Something went wrong.</h3>
          <p className='text-sm'>{message}</p>
        </div>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          aria-label='Try again to reload the content'
          className='ml-4 bg-[var(--error)] text-[var(--secondary)] px-4 py-2 rounded-lg hover:bg-[var(--errorText)] focus:ring-4 focus:ring-[var(--errorLight)] transition ease-in-out duration-200'
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorFeedback
