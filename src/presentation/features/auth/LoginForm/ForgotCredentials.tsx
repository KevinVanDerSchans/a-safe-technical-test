import Link from 'next/link'

const ForgotCredentials = () => {
  return (
    <div className='flex flex-col py-4'>
      <p>Have you forgotten your credentials?</p>

      <Link
        href={'mailto:kevinvdsd@hotmail.com'}
        role='link'
        aria-label='Reach out to management for assistance'
        className='underline text-tertiary text-[var(--accent)]'
      >
        Please reach out to management for assistance
      </Link>
    </div>
  )
}

export default ForgotCredentials
