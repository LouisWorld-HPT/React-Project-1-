import React from 'react'
import { NavLink } from 'react-router-dom'
import Log from '../Log/Log';
import { StyledNavi } from './styles/Navi.style';
export default function Navi() {
  return (
    <StyledNavi>
        <NavLink to="/" className="NaviLink">Home</NavLink>
        <NavLink to="/posts" className="NaviLink">Posts</NavLink>
        <NavLink to="/profile" className="NaviLink">Profile</NavLink>
        <NavLink to="/aboutUs" className="NaviLink">AboutUs</NavLink>
    </StyledNavi>
  )
}
