import type { NextApiRequest, NextApiResponse } from 'next'
import { customersHandler } from '@customers/handlers/customersHandler'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return customersHandler(req, res)
}
