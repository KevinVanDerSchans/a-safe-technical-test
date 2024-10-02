import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEXT_PUBLIC_CUSTOMERS_API_URL } from '@config/env'
import { CustomersRepository } from '@repositories/customers/CustomersRepository'
import { RootState, AppDispatch } from '@redux/store/store'
import { getCustomersAsync } from '@redux/slices/customers/customersThunks'

export function useCustomers() {
  const repo = useMemo(() => new CustomersRepository(NEXT_PUBLIC_CUSTOMERS_API_URL ?? ''), [])

  const { customers, status } = useSelector((state: RootState) => state.customers)
  const dispatch = useDispatch<AppDispatch>()

  const loadCustomers = useCallback(async () => {
    await dispatch(getCustomersAsync(repo))
  }, [repo, dispatch])

  return {
    loadCustomers,
    customers,
    status,
  }
}
