import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store/store'
import { getCustomersAsync } from '@customers/redux/customersThunks'
import { usePagination } from '@sharedHooks/usePagination'
import { errorService } from '@errors/services/ErrorService'
import CustomersErrors from '@customers/errors/CustomersErrors'

export function useFetchCustomers() {
  const repoUrl = useMemo(() => `/api/customers`, [])

  const { customers, status, error } = useSelector((state: RootState) => state.customers)
  const dispatch = useDispatch<AppDispatch>()

  const { page, resultsPerPage, handleNextPage, handlePrevPage } = usePagination()

  const loadCustomers = useCallback(async () => {
    try {
      await dispatch(getCustomersAsync({ repoUrl, page, resultsPerPage })).unwrap()
    } catch (error) {
      errorService.handleError(new CustomersErrors.CustomersErrorFetching())
      throw error
    }
  }, [repoUrl, page, resultsPerPage, dispatch])

  return {
    loadCustomers,
    customers,
    status,
    page,
    handleNextPage,
    handlePrevPage,
    error,
  }
}
