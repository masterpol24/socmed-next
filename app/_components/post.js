import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

import { getHumanReadableDate } from '@/lib/utils'
import { SlLike } from 'react-icons/sl'
import { GoComment } from 'react-icons/go'
import { PiShareFatLight } from 'react-icons/pi'

import Avatar from './avatar'

export function PostText({ user, content, created_at }) {
  return (
    <Card className='w-[700px] pt-6'>
      <PostHeader user={user} created_at={created_at} />
      <CardContent>
        <Label className='text-base font-normal'>{content}</Label>
      </CardContent>
      <Separator className='mx-4 w-auto' />
      <PostFooter />
    </Card>
  )
}

export function PostImage({ user, content, created_at }) {
  return (
    <Card className='w-[700px] pt-6'>
      <PostHeader user={user} created_at={created_at} />
      <CardContent className='px-0'>
        <Image src={content} alt={`${user.name}'s Posted Image`} width={700} height={700} />
      </CardContent>
      <Separator className='mx-4 w-auto' />
      <PostFooter />
    </Card>
  )
}

function PostHeader({ user, created_at }) {
  return (
    <div className='px-4 mb-4 flex flex-row items-center gap-3'>
      <Avatar pfp={user.pfp} pfp_fallback={user.pfp_fallback} />
      <div className='flex flex-col'>
        <Label className='font-bold text-base'>{user.name}</Label>
        <Label className='font-normal text-xs'>{getHumanReadableDate(created_at)}</Label>
      </div>
    </div>
  )
}

function PostFooter() {
  return (
    <div className='px-4 py-2 flex flex-row justify-center'>
      <Button variant='ghost' className='flex flex-row justify-center gap-3 rounded w-full'>
        <SlLike className='w-[24px] h-[24px]' />
        <span className='text-lg'>Like</span>
      </Button>
      <Button variant='ghost' className='flex flex-row justify-center gap-3 rounded w-full'>
        <GoComment className='w-[24px] h-[24px]' />
        <span className='text-lg'>Comment</span>
      </Button>
      <Button variant='ghost' className='flex flex-row justify-center gap-3 rounded w-full'>
        <PiShareFatLight className='w-[28px] h-[28px] font-li' />
        <span className='text-lg'>Share</span>
      </Button>
    </div>
  )
}
