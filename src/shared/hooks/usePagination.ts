import { useState, useCallback } from 'react'
import { CUSTOMERS_PAGINATION_RESULTS_PER_PAGE } from '@config/env'
import { errorService } from '@errors/services/ErrorService'
import PaginationErrors from '@errors/errors/PaginationErrors'

export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage)
  const resultsPerPage = CUSTOMERS_PAGINATION_RESULTS_PER_PAGE

  const handleNextPage = useCallback(() => {
    try {
      setPage(prevPage => prevPage + 1)
    } catch (error) {
      errorService.handleError(new PaginationErrors.PaginationError())
      throw error
    }
  }, [])

  const handlePrevPage = useCallback(() => {
    try {
      setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1))
    } catch (error) {
      errorService.handleError(new PaginationErrors.PaginationError())
      throw error
    }
  }, [])

  return {
    page,
    resultsPerPage,
    handleNextPage,
    handlePrevPage,
  }
}
