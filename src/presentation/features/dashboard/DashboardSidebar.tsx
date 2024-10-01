import React from 'react'
import ICONS from '@constants/icons'
import useToggleSidebar from './useToggleSidebar'
import DashboardNavigation from '@components/DashboardNavigation/DashboardNavigation'

const DashboardSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useToggleSidebar()

  return (
    <>
      <section className='pt-16'>
        <div className='bg-[var(--foreground)] text-[var(--secondary)] md:hidden flex justify-between items-center p-4'>
          <h1 className='text-lg font-bold'>DASHBOARD</h1>

          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <ICONS.HiX size={28} /> : <ICONS.HiMenu size={28} />}
          </button>
        </div>
      </section>

      <aside
        className={`w-56 bg-[var(--foreground)] text-[var(--secondary)] flex flex-col p-4 py-24 absolute md:relative transform transition-transform duration-300 md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:w-56 h-screen md:flex-shrink-0`}
      >
        <div className='mb-8 hidden md:block'>
          <h1 className='text-lg font-bold'>DASHBOARD</h1>
        </div>

        <nav className='flex flex-col space-y-2'>
          <DashboardNavigation />
        </nav>
      </aside>
    </>
  )
}

export default DashboardSidebar
