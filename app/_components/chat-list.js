import { UserList } from '@/lib/constants'
import Avatar from './avatar'

export default function ChatList() {
  return (
    <div className='flex flex-col justify-end border-e h-full bg-white shadow-sm fixed top-16 right-0'>
      <div className='w-56'>
        <ul className='mt-6 space-y-1'>
          {UserList.map(({ name, pfp_fallback, pfp }) => (
            <li key={name}>
              <a href='#' className='bg-gray-100 flex flex-row items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700'>
                <Avatar pfp={pfp} pfp_fallback={pfp_fallback} />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
