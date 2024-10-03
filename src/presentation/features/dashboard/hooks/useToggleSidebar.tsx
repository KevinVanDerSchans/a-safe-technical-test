import { useState } from 'react'

const useToggleSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return {
    isSidebarOpen,
    toggleSidebar,
  }
}

export default useToggleSidebar
