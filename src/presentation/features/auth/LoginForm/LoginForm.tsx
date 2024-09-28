'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import ICONS from '@constants/icons'
import ForgotCredentials from '@features/auth/LoginForm/ForgotCredentials'

const LoginForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError('Error, try it again please')
    } else {
      router.push('/')
    }
  }

  return (
    <main className='absolute inset-0 flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        role='form'
        className='p-12 bg-greyBackground w-80'
      >
        <div className='gap-y-2'>
          <label
            htmlFor='email'
            className='flex justify-center text-xl'
          >
            <ICONS.EmailIcon
              data-testid='login-email'
              className='inline-block w-6 h-6'
            />
            <span className='sr-only'>Email Address</span>
          </label>

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            name='email'
            id='email'
            required
            autoComplete='email'
            placeholder='E-mail address'
            aria-label='Corporate email address input'
            className='w-full p-2 my-2 text-center bg-light focus:outline-none'
          />
        </div>

        <div className='gap-y-2'>
          <label
            htmlFor='password'
            className='flex justify-center text-xl'
          >
            <ICONS.PasswordIcon
              data-testid='username'
              className='inline-block w-6 h-6'
            />
            <span className='sr-only'>Password</span>
          </label>

          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
            required
            placeholder='Enter your given password'
            aria-label='Password input'
            className='w-full py-2 my-2 text-center bg-light focus:outline-none'
          />
        </div>

        <button
          type='submit'
          role='button'
          aria-label='Sign in to your account'
          className='w-full py-2 mt-4 text-sm uppercase cursor-pointer primary-hover-button-transition'
        >
          Sign in
        </button>

        {error && <p className='text-center text-errorMessage'>{error}</p>}
      </form>

      <ForgotCredentials />
    </main>
  )
}

export default LoginForm
