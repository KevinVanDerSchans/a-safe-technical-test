import { CustomError } from '@errors/services/CustomError'

class CustomersErrorNotFound extends CustomError {
  constructor(message: string = 'Customers have not been found') {
    super(message)
    this.name = 'CustomersErrorNotFound'
  }
}

class CustomersErrorFetching extends CustomError {
  constructor(message: string = 'Error when fetching Clients') {
    super(message)
    this.name = 'CustomersErrorFetching'
  }
}

const CustomersErrors = {
  CustomersErrorNotFound,
  CustomersErrorFetching,
}

export default CustomersErrors
