/* eslint-disable no-unused-vars */
import ICONS from '@constants/icons'

interface PasswordInputProps {
  password: string
  setPassword: (password: string) => void
}

const PasswordInput = ({ password, setPassword }: PasswordInputProps) => (
  <div className='gap-y-2'>
    <label
      htmlFor='password'
      className='flex justify-center text-xl'
    >
      <ICONS.PasswordIcon
        data-testid='password'
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
      className='w-full py-2 my-2 text-center focus:outline-none text-[var(--accent)]'
    />
  </div>
)

export default PasswordInput
