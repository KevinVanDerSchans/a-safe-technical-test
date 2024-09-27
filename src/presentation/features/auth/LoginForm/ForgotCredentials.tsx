import Link from 'next/link'

const ForgotCredentials = () => {
  return (
    <div className='flex flex-col py-4'>
      <span className='text-black'>Have you forgotten your credentials?</span>

      <Link
        href={'mailto:kevinvdsd@hotmail.com'}
        role='link'
        aria-label='Reach out to management for assistance'
        className='underline text-tertiary hover:text-primary'
      >
        Please reach out to management for assistance
      </Link>
    </div>
  )
}

export default ForgotCredentials
