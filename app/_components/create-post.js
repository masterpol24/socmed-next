import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Avatar from './avatar'

import { useEffect, useRef, useState } from 'react'

import { IoVideocamOutline } from 'react-icons/io5'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'

export default function CreatePost({ user, onCreatePost }) {
  return (
    <Card className='w-[700px] pt-6 shadow-lg'>
      <div className='px-4 mb-4 flex flex-row items-center gap-3'>
        <Avatar pfp={user.pfp} pfp_fallback={user.pfp_fallback} />
        <UploadTextPost user={user} onCreatePost={onCreatePost} />
      </div>
      <Separator className='mx-4 w-auto' />
      <div className='px-4 py-2 flex flex-row justify-center'>
        <UploadVideoPost user={user} onCreatePost={onCreatePost} />
        <UploadImagePost user={user} onCreatePost={onCreatePost} />
      </div>
    </Card>
  )
}

function UploadTextPost({ user, onCreatePost }) {
  const [content, setContent] = useState('')

  const onTextSubmit = (e) => {
    e.preventDefault()
    const type = 'text'
    const created_at = new Date()
    onCreatePost({ user, type, created_at, content })
    setContent('')
  }

  const onTextTyping = (e) => {
    setContent(e.target.value)
  }

  return (
    <form className='w-full' onSubmit={onTextSubmit}>
      <Input placeholder={`What's on your mind ${user.name}?`} name='text_content' value={content} onChange={onTextTyping} />
    </form>
  )
}

function UploadVideoPost() {
  return (
    <form className='flex flex-row justify-center w-full'>
      <Button variant='ghost' className='gap-3 rounded w-full'>
        <IoVideocamOutline color='red' className='w-[32px] h-[32px]' />
        <span className='text-lg'>Video</span>
      </Button>
    </form>
  )
}

function UploadImagePost({ user, onCreatePost }) {
  const [image, setImage] = useState(null)
  const ImageUploadRef = useRef(null)

  useEffect(() => {
    if (image) {
      const type = 'image'
      const created_at = new Date()
      const content = URL.createObjectURL(image)
      onCreatePost({ user, type, created_at, content })
      setImage(null)
    }
  }, [image, user, onCreatePost])

  const onImageSubmit = (e) => {
    e.preventDefault()
    ImageUploadRef.current && ImageUploadRef.current.click()
  }

  const onImageSelected = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <form className='flex flex-row justify-center w-full' onSubmit={onImageSubmit}>
      <Input type='file' ref={ImageUploadRef} name='image' accept='image/*' className='hidden' onChange={onImageSelected} />
      <Button type='submit' variant='ghost' className='gap-3 rounded w-full'>
        <MdOutlinePhotoSizeSelectActual color='green' className='w-[32px] h-[32px]' />
        <span className='text-lg'>Photo</span>
      </Button>
    </form>
  )
}
