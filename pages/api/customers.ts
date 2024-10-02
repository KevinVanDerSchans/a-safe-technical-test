/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import { NEXT_PUBLIC_CUSTOMERS_API_URL } from '@config/env'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, resultsPerPage = 9, seed = 'default-seed' } = req.query

  try {
    const response = await fetch(`${NEXT_PUBLIC_CUSTOMERS_API_URL}?page=${page}&results=${resultsPerPage}&seed=${seed}`)
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data from API' })
    }

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
    res.status(500).json({ error: 'Something went wrong while fetching the data' })
  }
}
