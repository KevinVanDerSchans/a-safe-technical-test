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
      aria-labelledby={`post-title-${item.id}`}
      className='relative p-8 min-h-[20rem] border-2 text-[var(--primary)] bg-[var(--accent)] rounded-xl flex flex-col items-center primary-hover-card-transition'
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
        <p className='text-xs font-semibold italic text-[var(--secondary)] px-4'>
          posted by <span className='font-bold text-sm text-[var(--secondary)]'>@{userName}</span>
        </p>
      </div>

      <div className='h-20 mt-4 flex justify-center items-center'>
        <h2 className='text-center text-[var(--secondary)] text-lg line-clamp-3'>{title.toUpperCase()}</h2>
      </div>

      <div className='w-10 bg-[var(--primary)] h-[1px] my-4'></div>

      <p className='text-xs leading-5 line-clamp-4 my-4 text-[var(--secondary)]'>{body.toUpperCase()}</p>
    </li>
  )
}
