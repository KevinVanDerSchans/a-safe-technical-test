import Image from 'next/image'
import { Customer } from '@entities/Customer'

type PropsType = {
  item: Customer
}

export function CustomerCard({ item }: PropsType) {
  const { picture, name, location, email, phone } = item

  return (
    <li
      data-testid='user-card'
      className='bg-[var(--secondary)] rounded-lg shadow-lg p-6 flex flex-col sm:items-center sm:text-center md:flex-row md:items-start gap-4 hover:shadow-xl transition-shadow duration-200 ease-in-out'
    >
      <Image
        width={80}
        height={80}
        src={picture.large}
        alt={`${name.first} ${name.last} profile picture`}
        className='rounded-full object-cover'
      />

      <section className='flex-1 sm:flex sm:flex-col sm:items-center sm:text-center'>
        <h3 className='text-lg font-semibold text-[var(--primary)]'>
          {name.first} {name.last}
        </h3>
        <p className='text-sm'>
          {location.city}, {location.country}
        </p>
        <p className='text-sm'>{phone}</p>
        <p className='text-sm'>{email}</p>
      </section>
    </li>
  )
}
