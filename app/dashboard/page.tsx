import { getServerSession } from 'next-auth'
import { authOptions } from '@api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return <div>Welcome to DASHBOARD</div>
}

export default DashboardPage
