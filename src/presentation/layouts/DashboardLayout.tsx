import React from 'react'
import DashboardSidebar from '@features/dashboard/DashboardSidebar'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col md:flex-row'>
      <DashboardSidebar />

      <div className='flex-1 p-8 overflow-auto'>{children}</div>
    </div>
  )
}

export default DashboardLayout
