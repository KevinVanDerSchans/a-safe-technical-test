import Link from 'next/link'
import Image from 'next/image'

import SVGS from '@constants/svgs'
import MainNavigation from '@components/MainNavigation/MainNavigation'

const Header = () => {
  return (
    <header className='bg-[var(--primary)] fixed z-10 flex items-center w-full h-16 p-1 px-8 m-0'>
      <div className='flex justify-between w-full'>
        <Link
          href='/'
          aria-label='Home'
          className='flex items-center'
        >
          <figure className='flex items-center primary-hover-color-transition gap-x-4 hover:brightness-75'>
            <Image
              src={SVGS.LOGO}
              loading='lazy'
              alt='A-SAFE DIGITAL company logo'
              className='w-16 h-16'
            />
            <h1 className='w-24 py-0 my-0 leading-none text-[var(--secondary)]'>A-SAFE TECHNICAL TEST</h1>
          </figure>
        </Link>
      </div>

      <nav
        className='flex gap-x-6'
        aria-label='Main navigation'
      >
        <MainNavigation />
      </nav>
    </header>
  )
}

export default Header
