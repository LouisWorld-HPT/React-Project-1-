import React, { useEffect , useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { DetailedPost } from './style/Detailed.styled';
export default function PostDetails() {
  const {id} = useParams();  // Using the included id from the URL
  const [postDetailed, setPostDetailed] = useState({})
  useEffect(()=>{
    // Ok you bitch it is on 
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4001/posts?id=${id}`)
      const data = await res.json();
      console.log(data[0].userId  + data[0].title)
      setPostDetailed(data[0])
    }
    fetchData()
  },[id])
  return (
    <DetailedPost> 
        <div className='Detailed_post_intro'>
          <b>Pid: {postDetailed.id}</b>
          <b>CreatedBy: {postDetailed.userId}</b>
        </div>
        <img src={postDetailed.url} alt="thumbnail" />
        <p>{postDetailed.title}</p>
    </DetailedPost>
  )
}
