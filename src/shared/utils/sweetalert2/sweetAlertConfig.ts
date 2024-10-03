export const showLoginSuccessAlert = async () => {
  const Swal = (await import('sweetalert2')).default
  return Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    text: 'You are successfully logged in',
    showConfirmButton: false,
    timer: 2000,
  })
}

export const showLoginErrorAlert = async () => {
  const Swal = (await import('sweetalert2')).default
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Incorrect credentials',
    footer: 'Please try again',
  })
}
