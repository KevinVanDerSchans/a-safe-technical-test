interface SubmitButtonProps {
  label: string
  isSubmitting: boolean
}

const SubmitButton = ({ label, isSubmitting }: SubmitButtonProps) => (
  <button
    type='submit'
    disabled={isSubmitting}
    aria-busy={isSubmitting}
    aria-label={label}
    className={`w-full py-2 mt-4 text-sm uppercase ${
      isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
    } hover:font-bold focus:bg-[var(--primary)] primary-hover-button-transition`}
  >
    <span>{isSubmitting ? <span>Loading...</span> : label}</span>
  </button>
)

export default SubmitButton
