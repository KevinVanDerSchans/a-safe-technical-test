/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const sanitizeCustomerLogin = (customer: any) => {
  if (customer.login) {
    const { md5, password, salt, sha1, sha256, uuid, ...sanitizedLogin } = customer.login
    return { ...customer, login: sanitizedLogin }
  }
  return customer
}
