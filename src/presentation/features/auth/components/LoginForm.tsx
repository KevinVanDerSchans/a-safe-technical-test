'use client'
import useLoginForm from '@auth/hooks/useLoginForm'
import EmailInput from '@auth/components/EmailInput'
import PasswordInput from '@auth/components/PasswordInput'
import SubmitButton from '@auth/components/SubmitButton'
import ForgotCredentials from '@auth/components/ForgotCredentials'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, isSubmitting, handleSubmit } = useLoginForm()

  return (
    <main className='absolute inset-0 flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='p-12 bg-[var(--secondary)] w-80'
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
