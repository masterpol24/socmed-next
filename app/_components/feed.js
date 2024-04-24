import { PostText, PostImage } from './post'

export default function Feed({ posts }) {
  return posts.map((post, index) => (
    <div key={index}>{post.type === 'text' ? <PostText {...post} /> : <PostImage {...post} />}</div>
  ))
}
