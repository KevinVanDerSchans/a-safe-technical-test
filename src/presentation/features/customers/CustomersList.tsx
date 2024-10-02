import React, { useEffect } from 'react'

import { useCustomers } from '@features/customers/hooks/useCustomers'
import { CustomerCard } from '@features/customers/CustomerCard'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import { PaginationButton } from '@sharedComponents/PaginationButton'

export default function CustomersList() {
  const { loadCustomers, customers, status, page, handleNextPage, handlePrevPage } = useCustomers()

  useEffect(() => {
    loadCustomers()
  }, [loadCustomers])

  return (
    <main className='flex-grow flex flex-col pt-8'>
      {status === 'idle' && (
        <div className='h-screen flex items-center justify-center flex-grow'>
          <MainSpinner />
        </div>
      )}

      {status === 'loaded' && (
        <>
          <ul
            role='list'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 list-none lg:p-8 xl:p-8'
          >
            {customers.map(item => (
              <CustomerCard
                key={item.email}
                item={item}
              />
            ))}
          </ul>

          <div className='flex justify-center space-x-4 mt-auto'>
            <PaginationButton
              onClick={handlePrevPage}
              direction='previous'
              disabled={page === 1}
              className='px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] disabled:bg-[var(--muted)] hover:bg-[var(--accent)] rounded-3xl'
            />

            <PaginationButton
              onClick={handleNextPage}
              direction='next'
              className='px-4 py-2 bg-[var(--primary)] text-[var(--secondary)] disabled:bg-[var(--muted)] hover:bg-[var(--accent)] rounded-3xl'
            />
          </div>
        </>
      )}
    </main>
  )
}
