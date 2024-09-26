export interface UserAddress {
  readonly city: string
  readonly zipcode: string
}

export interface UserCompany {
  readonly name: string
}

export interface User {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly address: UserAddress
  readonly company: UserCompany
  readonly phone: string
  readonly website: string
}
