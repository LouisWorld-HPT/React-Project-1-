import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import PostList from "./PostList";
export default function PostRenderPage(){
    const navigate = useNavigate()
    let [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:4001/posts"); // URL or file path
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts(); // Call the function to initiate fetching data
    }, []);
    return (
        <div>
            <h1>Post Render Page</h1>
            <PostList posts={posts}/>
            <button onClick={() => navigate('/')}>Home</button>
            
        </div>
        
    )
}