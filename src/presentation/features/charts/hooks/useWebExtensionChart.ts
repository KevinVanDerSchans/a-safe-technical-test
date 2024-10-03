import { useEffect, useMemo } from 'react'
import { useFetchUsers } from '@features/users/hooks/useFetchUsers'
import { getWebExtensionChartData } from '@features/charts/WebExtensionChart/webExtensionChartConfig'

export const useWebExtensionChart = () => {
  const { loadUsers, users, status } = useFetchUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const chartData = useMemo(() => getWebExtensionChartData(users), [users])

  return { status, chartData, loadUsers }
}
