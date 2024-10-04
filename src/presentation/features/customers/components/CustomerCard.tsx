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
      aria-label='Customer profile'
      className='bg-[var(--secondary)] rounded-lg shadow-lg p-4 flex flex-col text-center sm:items-center sm:text-center md:flex-row md:items-start gap-4 hover:shadow-xl transition-shadow duration-200 ease-in-out'
    >
      <div className='text-center flex items-center justify-center'>
        <Image
          width={80}
          height={80}
          loading='lazy'
          src={picture.large}
          alt={`${name.first} ${name.last} profile picture`}
          className='rounded-full object-cover '
        />
      </div>

      <div className='flex flex-col sm:flex sm:items-center sm:text-center space-y-2 md:space-y-4'>
        <h3 className='text-lg font-semibold text-[var(--primary)]'>
          {name.first} {name.last}
        </h3>

        <p className='text-sm'>
          {location.city}, {location.country}
        </p>

        <a
          href={`tel:${phone}`}
          className='text-sm text-[var(--primary)] underline'
        >
          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className='text-xs text-[var(--primary)] underline'
        >
          {email}
        </a>
      </div>
    </li>
  )
}
