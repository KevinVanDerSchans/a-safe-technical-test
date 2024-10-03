import Image from 'next/image'
import { User } from '@entities/User'
import { NEXT_PUBLIC_AVATARS_URL } from '@config/env'

type PropsType = {
  item: User
}

export function UserCard({ item }: PropsType) {
  const { username, name, address, company, website, phone, email } = item

  return (
    <li
      data-testid='user-card'
      className='border-b-2 border-[var(--accent)] pb-4 px-4 flex flex-col md:flex-row md:items-center md:gap-4 md:pt-14'
    >
      <Image
        width={150}
        height={150}
        loading='lazy'
        src={`${NEXT_PUBLIC_AVATARS_URL}/${username}`}
        alt={`${username} profile picture`}
        className='md:mr-8 object-cover'
        layout='fixed'
      />
      <section className='w-full md:w-80'>
        <span className='block text-[var(--accent)] text-2xl mb-2 text-center md:text-left'>@{username}</span>

        <ul className='flex flex-col gap-y-2'>
          <li className=''>
            <span className='text-xs font-semibold text-[var(--accent)]'>FULL NAME: </span>
            <span className='text-[var(--primary)]'>{name}</span>
          </li>

          <li className='text-sm'>
            <span className='text-xs font-semibold text-[var(--accent)]'>CITY: </span>
            <span className='text-[var(--primary)]'>
              {address.city} ({address.zipcode})
            </span>
          </li>

          <li className='text-sm'>
            <span className='text-xs font-semibold text-[var(--accent)]'>COMPANY: </span>
            <span className='text-[var(--primary)]'>{company.name}</span>
          </li>

          <li className='text-sm'>
            <span className='text-xs font-semibold text-[var(--accent)]'>WEBSITE: </span>
            <span className='text-[var(--primary)]'>{website}</span>
          </li>

          <li className='text-sm'>
            <span className='text-xs font-semibold text-[var(--accent)]'>PHONE: </span>
            <span className='text-[var(--primary)]'>{phone}</span>
          </li>

          <li className='text-sm'>
            <span className='text-xs font-semibold text-[var(--accent)]'>EMAIL: </span>
            <span className='text-[var(--primary)]'>{email}</span>
          </li>
        </ul>
      </section>
    </li>
  )
}
