/* eslint-disable no-unused-vars */
import ICONS from '@constants/icons'

interface EmailInputProps {
  email: string
  setEmail: (email: string) => void
}

const EmailInput = ({ email, setEmail }: EmailInputProps) => (
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
      className='w-full p-2 my-2 text-center focus:outline-none text-[var(--accent)]'
    />
  </div>
)

export default EmailInput
