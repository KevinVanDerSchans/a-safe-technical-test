import React from 'react'
import { Bar } from 'react-chartjs-2'

import { useWebExtensionChart } from '@charts/hooks/useWebExtensionChart'
import { MainSpinner } from '@sharedComponents/loaders/MainSpinner'
import ErrorFeedback from '@errors/components/ErrorFeedback'
import { RequestStatus } from '@sharedTypes/RequestStatus'

const WebExtensionChart: React.FC = () => {
  const { loadUsers, chartData, status } = useWebExtensionChart()

  return (
    <div
      aria-live='polite'
      className='flex items-center justify-center lg:mt-40 sm:mt-40'
    >
      {status === RequestStatus.Error && (
        <div className='flex items-center justify-center'>
          <ErrorFeedback
            message='Statistics are not available at this time.'
            onRetry={loadUsers}
          />
        </div>
      )}

      {status === RequestStatus.Idle && (
        <div
          className='flex items-center justify-center'
          aria-busy='true'
        >
          <MainSpinner aria-label='Loading statistics...' />
        </div>
      )}

      {status === RequestStatus.Loaded && (
        <div className='w-full max-w-4xl flex items-center justify-center'>
          <div
            className='h-auto md:w-2/3 md:h-96 mx-auto'
            aria-label='User data chart'
          >
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  )
}

export default WebExtensionChart
