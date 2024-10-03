/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import { NEXT_PUBLIC_CUSTOMERS_API_URL } from '@config/env'
import { errorService } from '@app/services/errors/ErrorService'
import CustomersErrors from '@customErrors/CustomersErrors'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, resultsPerPage = 9, seed = 'default-seed' } = req.query

  try {
    const response = await fetch(`${NEXT_PUBLIC_CUSTOMERS_API_URL}?page=${page}&results=${resultsPerPage}&seed=${seed}`)
    const data = await response.json()

    const sanitizedResults = data.results.map((customer: any) => {
      if (customer.login) {
        const { md5, password, salt, sha1, sha256, uuid, ...sanitizedLogin } = customer.login
        return { ...customer, login: sanitizedLogin }
      }
      return customer
    })

    res.status(200).json({ results: sanitizedResults })
  } catch (error) {
    errorService.handleError(new CustomersErrors.CustomersErrorNotFound())
    throw error
  }
}
