import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'

Chart.register(CategoryScale)

const countWebsiteExtensions = (users: Array<{ website: string }>) => {
  return users.reduce((acc: Record<string, number>, user) => {
    const extension = user.website.split('.').pop()

    if (extension) {
      acc[extension] = (acc[extension] || 0) + 1
    }

    return acc
  }, {})
}

const generateColors = (count: number): string[] => {
  const baseColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
  return Array.from({ length: count }, (_, index) => baseColors[index % baseColors.length])
}

export const getWebExtensionChartData = (users: Array<{ website: string }>) => {
  const extensionCount = countWebsiteExtensions(users)
  const labels = Object.keys(extensionCount)
  const dataCounts = Object.values(extensionCount)

  return {
    labels,
    datasets: [
      {
        label: 'Users by Web Extension',
        data: dataCounts,
        backgroundColor: generateColors(labels.length),
      },
    ],
  }
}
