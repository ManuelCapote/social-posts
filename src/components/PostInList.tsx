import Post from '../models/Post'
import './PostInList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  post: Post
  deletePost: () => void
}

const PostInList = ({ post, deletePost }: Props) => {
  return (
    <li className='PostInList'>
      <div>
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <button className='delete' onClick={deletePost}>
        ⌫
      </button>
    </li>
  )
}

export default PostInList
