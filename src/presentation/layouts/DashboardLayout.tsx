import React from 'react'
import DashboardSidebar from '@features/dashboard/DashboardSidebar'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className='h-screen flex flex-col md:flex-row w-full'>
      <DashboardSidebar />

      <div className='flex-1 p-8 overflow-auto'>{children}</div>
    </main>
  )
}

export default DashboardLayout
