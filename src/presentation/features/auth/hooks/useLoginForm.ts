/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { showLoginSuccessAlert, showLoginErrorAlert } from '@utils/sweetalert2/sweetAlertConfig'
import { errorService } from '@app/services/errors/ErrorService'
import AuthErrors from '@customErrors/AuthErrors'

const useLoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleLogin = async (credentials: { email?: string; password?: string }) => {
    setIsSubmitting(true)
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      })

      if (result?.ok) {
        showLoginSuccessAlert()
        router.push('/')
      } else {
        errorService.handleError(new AuthErrors.CredentialsError())
        showLoginErrorAlert()
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      errorService.handleError(new AuthErrors.CredentialsError())
      showLoginErrorAlert()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await handleLogin({ email, password })
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
    handleSubmit,
  }
}

export default useLoginForm
