import Swal from 'sweetalert2'

export const showLoginSuccessAlert = () => {
  return Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    text: 'You are successfully logged in',
    showConfirmButton: false,
    timer: 2000,
  })
}

export const showLoginErrorAlert = () => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Incorrect credentials',
    footer: 'Please try again',
  })
}
