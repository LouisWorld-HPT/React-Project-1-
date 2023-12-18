import React from 'react'
import { StyledPost } from './style/Post.styled'
import { useNavigate } from 'react-router-dom'
export default function Post({props}) {
  const navigate = useNavigate();
  return (
    <StyledPost onClick={() => navigate(`/postDetails/${props.id}`)}> 
        <span className='post_intro'>
          <b>Pid: {props.id}</b>
          <b>CreatedBy: {props.userId}</b>
        </span>
        <img src={props.thumbnailUrl} alt="thumbnail" />
        <p>{props.title}</p>
    </StyledPost>
  )
}
