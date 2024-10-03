'use client'
import useLoginForm from '@features/auth/hooks/useLoginForm'
import EmailInput from '@features/auth/LoginForm/EmailInput'
import PasswordInput from '@features/auth/LoginForm/PasswordInput'
import SubmitButton from '@features/auth/LoginForm/SubmitButton'
import ForgotCredentials from '@features/auth/LoginForm/ForgotCredentials'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, isSubmitting, handleSubmit } = useLoginForm()

  return (
    <main className='absolute inset-0 flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='p-12 bg-[var(--muted)] w-80'
      >
        <fieldset>
          <legend className='sr-only'>Login Information</legend>
          <EmailInput
            email={email}
            setEmail={setEmail}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
          />
        </fieldset>
        <SubmitButton
          label='Sign in'
          isSubmitting={isSubmitting}
          aria-busy={isSubmitting}
        />
      </form>

      <ForgotCredentials />
    </main>
  )
}

export default LoginForm
