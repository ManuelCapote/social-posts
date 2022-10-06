import './PostForm.css'
import { FormEvent, useState } from 'react'
import Post from '../models/Post'

interface Props {
  onSubmitForm: (post: Post) => void
  closeForm: () => void
}

const PostForm = ({ onSubmitForm, closeForm }: Props) => {
  const [title, setTitle] = useState('')
  const [thought, setThought] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmitForm({ title, thought })
  }

  return (
    <div className='PostForm'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button className='closeButton' onClick={closeForm}>
          ✖
        </button>
        <label htmlFor='title'>Title</label>
        <input
          required
          type='text'
          id='title'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='thought'>Thought</label>
        <textarea
          required
          id='thought'
          name='thought'
          onChange={(e) => setThought(e.target.value)}
        />
        <button type='submit' className='submitForm'>
          Add Post
        </button>
      </form>
    </div>
  )
}

export default PostForm
