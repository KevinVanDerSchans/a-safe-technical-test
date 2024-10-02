import React, { useEffect } from 'react'

import { useCustomers } from '@features/customers/hooks/useCustomers'
import { CustomerCard } from '@features/customers/CustomerCard'
import { MainSpinner } from '@sharedComponents/MainSpinner'

export default function CustomersList() {
  const { loadCustomers, customers, status } = useCustomers()

  useEffect(() => {
    loadCustomers()
  }, [loadCustomers])

  return (
    <>
      {status === 'idle' && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === 'loaded' && (
        <ul
          role='list'
          className='list-none flex flex-col flex-grow items-center justify-center w-full py-20'
        >
          {customers.map(item => (
            <CustomerCard
              key={item.email}
              item={item}
            />
          ))}
        </ul>
      )}
    </>
  )
}
