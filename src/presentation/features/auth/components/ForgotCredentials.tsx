import Link from 'next/link'

const ForgotCredentials = () => {
  return (
    <div className='flex flex-col py-4'>
      <p className='text-[var(--primary)]'>Have you forgotten your credentials?</p>

      <Link
        href={'mailto:kevinvdsd@hotmail.com'}
        aria-label='Reach out to management for assistance'
        className='underline text-tertiary focus:text-[var(--primary)] text-[var(--accentLight)]'
      >
        Please reach out to management for assistance
      </Link>
    </div>
  )
}

export default ForgotCredentials
