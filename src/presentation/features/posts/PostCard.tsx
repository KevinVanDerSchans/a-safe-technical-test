import Image from 'next/image'
import { Post } from '@entities/Post'
import { User } from '@entities/User'
import { NEXT_PUBLIC_AVATARS_URL } from '@config/env'

type PropsType = {
  item: Post
  userName: User['name']
}

export function PostCard({ item, userName }: PropsType) {
  const { title, body } = item

  return (
    <li
      data-testid='post-card'
      className='relative p-8 min-h-[20rem] border-2 text-[var(--primary)] bg-[var(--accentLight)] rounded-lg flex flex-col items-center primary-hover-card-transition'
    >
      <div className='w-full border-b border-[var(--primary)] pb-4 flex items-center relative'>
        <Image
          width={50}
          height={50}
          loading='lazy'
          src={`${NEXT_PUBLIC_AVATARS_URL}/${userName}`}
          alt={`${userName} profile picture`}
          className='h-10 w-10 rounded-full border-2 border-[var(--secondary)] bg-[var(--primary)]'
        />
        <span className='text-xs italic text-[var(--primary)] px-4'>posted by @{userName}</span>
      </div>

      <div className='h-20 mt-4 flex justify-center items-center'>
        <h2 className='text-center text-lg line-clamp-3'>{title.toUpperCase()}</h2>
      </div>

      <div className='w-10 bg-[var(--primary)] h-[1px] my-4'></div>

      <p className='text-xs leading-5 line-clamp-3 my-4'>{body.toUpperCase()}</p>
    </li>
  )
}
