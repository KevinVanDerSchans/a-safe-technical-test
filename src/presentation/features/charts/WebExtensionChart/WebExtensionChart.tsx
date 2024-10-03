import React from 'react'
import { Bar } from 'react-chartjs-2'

import { useWebExtensionChart } from '@features/charts/hooks/useWebExtensionChart'
import { MainSpinner } from '@sharedComponents/MainSpinner'
import ErrorFeedback from '@sharedComponents/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

const WebExtensionChart: React.FC = () => {
  const { loadUsers, chartData, status } = useWebExtensionChart()

  return (
    <div className='flex items-center justify-center lg:mt-40 sm:mt-40'>
      {status === RequestStatus.Error && (
        <main className='flex items-center justify-center'>
          <ErrorFeedback
            message='Posts are not available at this time.'
            onRetry={loadUsers}
          />
        </main>
      )}

      {status === RequestStatus.Idle && (
        <main className='flex items-center justify-center'>
          <MainSpinner />
        </main>
      )}

      {status === RequestStatus.Loaded && (
        <div className='w-full max-w-4xl flex items-center justify-center'>
          <div className='h-auto md:w-2/3 md:h-96 mx-auto'>
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default WebExtensionChart
