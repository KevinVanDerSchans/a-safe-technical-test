import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store/store'
import { getCustomersAsync } from '@redux/slices/customers/customersThunks'
import { usePagination } from '@sharedHooks/usePagination'
import { errorService } from '@app/services/errors/ErrorService'
import CustomersErrors from '@customErrors/CustomersErrors'

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
