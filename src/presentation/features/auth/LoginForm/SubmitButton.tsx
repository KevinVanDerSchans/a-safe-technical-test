interface SubmitButtonProps {
  label: string
}

const SubmitButton = ({ label }: SubmitButtonProps) => (
  <button
    type='submit'
    role='button'
    aria-label={label}
    className='bg-[var(--dark)] w-full py-2 mt-4 text-sm uppercase cursor-pointer primary-hover-button-transition'
  >
    <span className='text-[var(--light)]'>{label}</span>
  </button>
)

export default SubmitButton
