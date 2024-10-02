import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { showLoginSuccessAlert, showLoginErrorAlert } from '@utils/sweetalert2/sweetAlertConfig'

const useLoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (credentials: { email?: string; password?: string }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    })

    if (result?.ok) {
      showLoginSuccessAlert()
      router.push('/')
    } else {
      setEmail('')
      setPassword('')
      showLoginErrorAlert()
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
    handleSubmit,
  }
}

export default useLoginForm
