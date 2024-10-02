// import Image from 'next/image'
import { Customer } from '@entities/Customer'

type PropsType = {
  item: Customer
}

export function CustomerCard({ item }: PropsType) {
  const { name, email, phone } = item

  return (
    <li data-testid='user-card'>
      <section className='flex-col flex bg-[var(--muted)] p-2 rounded-lg'>
        <span>{name.first}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </section>
    </li>
  )
}
