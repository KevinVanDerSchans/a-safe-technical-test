import { useState, useCallback } from 'react'
import { CUSTOMERS_PAGINATION_RESULTS_PER_PAGE } from '@config/env'

export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage)
  const resultsPerPage = CUSTOMERS_PAGINATION_RESULTS_PER_PAGE

  const handleNextPage = useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, [])

  const handlePrevPage = useCallback(() => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1))
  }, [])

  return {
    page,
    resultsPerPage,
    handleNextPage,
    handlePrevPage,
  }
}
