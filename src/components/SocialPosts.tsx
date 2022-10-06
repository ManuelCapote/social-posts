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
  const [showForm, setShowForm] = useState(false)

  const addPost = (post: Post) => {
    setPosts((prev) => [...prev, post])
    setShowForm(() => false)
  }

  const deletePost = (index: number) => {
    setPosts((prevPost) => [
      ...prevPost.slice(0, index),
      ...prevPost.slice(index + 1),
    ])
  }

  const createNewThought = () => {}

  return (
    <div className='SocialPosts'>
      <button className='PostFormBtn' onClick={() => setShowForm(true)}>
        <p>New Thought</p>
      </button>
      {showForm && (
        <PostForm onSubmitForm={addPost} closeForm={() => setShowForm(false)} />
      )}
      <div className='postList'>
        <ul>
          {posts.map((post, index) => {
            return (
              <PostInList post={post} deletePost={() => deletePost(index)} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SocialPosts
