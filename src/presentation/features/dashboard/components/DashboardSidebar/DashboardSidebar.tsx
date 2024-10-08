import React from 'react'
import ICONS from '@constants/icons'
import useToggleSidebar from '@dashboard/hooks/useToggleSidebar'
import DashboardNavigation from '@dashboard/components/DashboardNavigation/DashboardNavigation'

const DashboardSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useToggleSidebar()

  return (
    <>
      <section className='pt-16'>
        <div className='bg-[var(--secondary)] text-[var(--secondary)] md:hidden flex justify-between items-center p-4'>
          <h2 className='text-lg font-bold text-[var(--primary)]'>DASHBOARD</h2>

          <button
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={isSidebarOpen}
            className='text-[var(--primary)]'
          >
            {isSidebarOpen ? <ICONS.CrossCloseMenu size={28} /> : <ICONS.MobileHamburgerMenu size={28} />}
          </button>
        </div>
      </section>

      <aside
        className={`w-56 bg-[var(--secondary)] text-[var(--secondary)] flex flex-col p-4 py-24 absolute md:relative transform transition-transform duration-300 md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:w-56 h-screen md:flex-shrink-0`}
      >
        <div className='mb-4 hidden md:block'>
          <h2 className='text-lg font-bold text-center text-[var(--primary)]'>DASHBOARD</h2>

          <div className='flex justify-center'>
            <div className='w-10 bg-[var(--primary)] h-[1px] my-4'></div>
          </div>
        </div>

        <nav
          aria-label='Dashboard navigation'
          className='flex flex-col space-y-2'
        >
          <DashboardNavigation />
        </nav>
      </aside>
    </>
  )
}

export default DashboardSidebar
