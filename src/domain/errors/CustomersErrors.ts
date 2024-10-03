import { CustomError } from '@errors/CustomError'

class CustomersErrorNotFound extends CustomError {
  constructor(message: string = 'Customers have not been found') {
    super(message)
    this.name = 'CustomersErrorNotFound'
  }
}

const CustomersErrors = {
  CustomersErrorNotFound,
}

export default CustomersErrors
