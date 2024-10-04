import React, { useEffect } from 'react'

import { useFetchCustomers } from '@customers/hooks/useFetchCustomers'
import { CustomerCard } from '@customers/components/CustomerCard'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import { PaginationButton } from '@sharedComponents/pagination/PaginationButton'
import ErrorFeedback from '@errors/components/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export default function CustomersList() {
  const { loadCustomers, customers, status, page, handleNextPage, handlePrevPage } = useFetchCustomers()

  useEffect(() => {
    loadCustomers()
  }, [loadCustomers])

  return (
    <div
      aria-live='polite'
      className='flex-grow flex flex-col pt-8 py-12'
    >
      {status === RequestStatus.Error && (
        <div className='flex items-center justify-center min-h-screen'>
          <ErrorFeedback
            message='Customers are not available at this time.'
            onRetry={loadCustomers}
          />
        </div>
      )}

      {status === RequestStatus.Idle && (
        <div
          className='h-screen flex items-center justify-center flex-grow'
          aria-busy='true'
        >
          <MainSpinner aria-label='Loading customers...' />
        </div>
      )}

      {status === RequestStatus.Loaded && (
        <>
          <ul
            role='list'
            className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 list-none lg:py-6 md:py-6'
          >
            {customers.map(item => (
              <CustomerCard
                key={item.email}
                item={item}
              />
            ))}
          </ul>

          <div className='flex justify-center space-x-4 py-6'>
            <PaginationButton
              onClick={handlePrevPage}
              direction='previous'
              disabled={page === 1}
              aria-label='Previous page'
              className='px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] disabled:bg-[var(--muted)] hover:bg-[var(--accent)] rounded-3xl'
            />
            <PaginationButton
              onClick={handleNextPage}
              direction='next'
              aria-label='Next page'
              className='px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] disabled:bg-[var(--muted)] hover:bg-[var(--accent)] rounded-3xl'
            />
          </div>
        </>
      )}
    </div>
  )
}
