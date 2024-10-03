interface SubmitButtonProps {
  label: string
  isSubmitting: boolean
}

const SubmitButton = ({ label, isSubmitting }: SubmitButtonProps) => (
  <button
    type='submit'
    role='button'
    aria-label={label}
    disabled={isSubmitting}
    className='w-full py-2 mt-4 text-sm uppercase cursor-pointer hover:font-bold focus:bg-[var(--primary)] primary-hover-button-transition'
  >
    <span>{isSubmitting ? <span>Loading...</span> : label}</span>
  </button>
)

export default SubmitButton
