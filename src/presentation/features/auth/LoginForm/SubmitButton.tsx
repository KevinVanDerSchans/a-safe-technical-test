interface SubmitButtonProps {
  label: string
}

const SubmitButton = ({ label }: SubmitButtonProps) => (
  <button
    type='submit'
    role='button'
    aria-label={label}
    className='w-full py-2 mt-4 text-sm uppercase cursor-pointer focus:bg-[var(--primary)] primary-hover-button-transition'
  >
    <span>{label}</span>
  </button>
)

export default SubmitButton
