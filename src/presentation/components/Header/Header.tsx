import Link from 'next/link'
import Image from 'next/image'

import SVGS from '@shared/constants/svgs'

const Header = () => {
  return (
    <header className='fixed z-10 flex items-center w-full h-16 p-1 px-8 m-0 bg-primary'>
      <div className='flex justify-between w-full'>
        <Link
          href='/'
          className='flex items-center'
        >
          <figure className='flex items-center primary-hover-color-transition gap-x-4 hover:brightness-75'>
            <Image
              src={SVGS.LOGO}
              alt='A-SAFE company logo'
              className='w-16 h-16'
            />
            <h2 className='w-24 py-0 my-0 leading-none text-secondary'>A-SAFE TECHNICAL TEST</h2>
          </figure>
        </Link>
      </div>

      <nav className='flex gap-x-6'></nav>
    </header>
  )
}

export default Header