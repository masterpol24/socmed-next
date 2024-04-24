import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const Header = () => {
  const { userId } = auth()

  return (
    <>
      <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={40} height={40} />
          </Link>
          {userId && (
            <div>
              <Input placeholder='Search' className='ml-4' />
            </div>
          )}
        </div>
        <div className='text-white flex items-center'>
          {!userId && (
            <>
              <Link href='/sign-in' className='text-gray-300 hover:text-white mr-4'>
                Sign in
              </Link>
              <Link href='/sign-up' className='text-gray-300 hover:text-white mr-4'>
                Sign up
              </Link>
            </>
          )}
          <div className='ml-auto'>
            <UserButton afterSignOutUrl='/sign-in' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
