import type { NextAuthOptions } from 'next-auth'
import { authProviders } from '@app/api/auth/[...nextauth]/authProviders'

export const options: NextAuthOptions = {
  providers: authProviders,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
}
