import { useEffect, useMemo } from 'react'
import { useFetchUsers } from '@users/hooks/useFetchUsers'
import { getWebExtensionChartData } from '@charts/components/WebExtensionChart/webExtensionChartConfig'

export const useWebExtensionChart = () => {
  const { loadUsers, users, status } = useFetchUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const chartData = useMemo(() => getWebExtensionChartData(users), [users])

  return { status, chartData, loadUsers }
}
