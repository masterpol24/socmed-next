'use client'

import { useState } from 'react'

import CreatePost from './_components/create-post'
import Feed from './_components/feed'
import { CurrentUser, PostList } from '@/lib/constants'

export default function Home() {
  const [posts, setPosts] = useState(PostList)

  const handleCreatePosts = (new_post) => {
    setPosts([new_post, ...posts])
  }

  return (
    <div className='flex flex-col py-10 gap-10 h-full'>
      <CreatePost user={CurrentUser} onCreatePost={handleCreatePosts} />
      <Feed posts={posts} />
    </div>
  )
}
