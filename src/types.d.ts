declare module '*.{svg,png,jpg}' {
  const content: string
  export default content
}

export type Route = Record<string, string>

export interface ProtectedRouteProps {
  redirectTo?: string
}
