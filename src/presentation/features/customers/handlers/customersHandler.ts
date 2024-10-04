import type { NextApiRequest, NextApiResponse } from 'next'
import { NEXT_PUBLIC_CUSTOMERS_API_URL } from '@config/env'
import { errorService } from '@errors/services/ErrorService'
import CustomersErrors from '@customers/errors/CustomersErrors'
import { sanitizeCustomerLogin } from '@customers/services/sanitizeCustomerLogin'

export const customersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page = 1, resultsPerPage = 9, seed = 'default-seed' } = req.query

  try {
    const response = await fetch(`${NEXT_PUBLIC_CUSTOMERS_API_URL}?page=${page}&results=${resultsPerPage}&seed=${seed}`)
    const data = await response.json()

    const sanitizedResults = data.results.map(sanitizeCustomerLogin)

    res.status(200).json({ results: sanitizedResults })
  } catch (error) {
    errorService.handleError(new CustomersErrors.CustomersErrorNotFound())
    throw error
  }
}
