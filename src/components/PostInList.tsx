import Post from '../models/Post'
import './PostInList.css'

interface Props {
  post: Post
}

const PostInList = ({ post }: Props) => {
  return (
    <li className='PostInList'>
      <h2>{post.title}</h2>
      <p>{post.thought}</p>
    </li>
  )
}

export default PostInList
