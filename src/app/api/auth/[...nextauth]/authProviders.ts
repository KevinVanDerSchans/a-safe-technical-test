import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authProviders = [
  GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  }),
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: {
        label: 'Email:',
        type: 'text',
      },
      password: {
        label: 'Password:',
        type: 'password',
      },
    },
    async authorize(credentials) {
      const user = {
        id: process.env.AUTH_USER_ID as string,
        email: process.env.AUTH_USER_EMAIL as string,
        password: process.env.AUTH_USER_PASSWORD as string,
      }
      if (credentials?.email === user.email && credentials?.password === user.password) {
        return user
      } else {
        return null
      }
    },
  }),
]
