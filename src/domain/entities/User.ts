export interface UserAddress {
  city: string
  zipcode: string
}

export interface UserCompany {
  name: string
}

export type User = Readonly<{
  id: number
  name: string
  username: string
  email: string
  address: UserAddress
  company: UserCompany
  phone: string
  website: string
}>
