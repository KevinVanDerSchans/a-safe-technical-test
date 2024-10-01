import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

import { useUsers } from '@features/users/hooks/useUsers'
import { getWebExtensionChartData } from '@features/charts/WebExtensionChart/webExtensionChartConfig'
import { MainSpinner } from '@sharedComponents/MainSpinner'

const WebExtensionChart: React.FC = () => {
  const { loadUsers, users, status } = useUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const chartData = React.useMemo(() => getWebExtensionChartData(users), [users])

  return (
    <div className='flex items-center justify-center pt-20'>
      {status === 'idle' && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === 'loaded' && (
        <div className='w-full max-w-4xl flex flex-col items-center'>
          <h2 className='text-xl my-8 text-center'>Statistics</h2>

          <div className='h-auto md:w-2/3 md:h-96 mx-auto'>
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default WebExtensionChart
