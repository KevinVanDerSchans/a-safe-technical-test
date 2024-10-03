import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

import { useFetchUsers } from '@features/users/hooks/useFetchUsers'
import { getWebExtensionChartData } from '@features/charts/WebExtensionChart/webExtensionChartConfig'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import ErrorFeedback from '@sharedComponents/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

const WebExtensionChart: React.FC = () => {
  const { loadUsers, users, status } = useFetchUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const chartData = React.useMemo(() => getWebExtensionChartData(users), [users])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {status === RequestStatus.Error && (
        <main className='flex items-center justify-center min-h-screen'>
          <ErrorFeedback
            message='Posts are not available at this time.'
            onRetry={loadUsers}
          />
        </main>
      )}

      {status === RequestStatus.Idle && (
        <main className='flex items-center justify-center min-h-screen'>
          <MainSpinner />
        </main>
      )}

      {status === RequestStatus.Loaded && (
        <div className='w-full max-w-4xl flex items-center justify-center h-screen '>
          <div className='h-auto md:w-2/3 md:h-96 mx-auto'>
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default WebExtensionChart
