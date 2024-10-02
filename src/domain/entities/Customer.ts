export type Customer = Readonly<{
  gender: string
  name: {
    first: string
    last: string
  }
  location: {
    city: string
    country: string
  }
  email: string
  phone: string
  picture: {
    large: string
  }
  login?: {
    uuid: string
    username: string
  }
}>
