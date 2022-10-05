import { useState } from 'react'
import Post from '../models/Post'
import PostForm from './PostForm'
import PostInList from './PostInList'
import './SocialPosts.css'

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool.',
    },
    {
      title: 'React',
      thought: 'React give me power!',
    },
    {
      title: 'Beatriz',
      thought:
        "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!",
    },
  ])
  return (
    <div className='SocialPosts'>
      <button className='PostFormBtn'>
        <p>New Thought</p>
      </button>
      <PostForm />
      <div className='postList'>
        <ul>
          {posts.map((post) => {
            return <PostInList post={post} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default SocialPosts
