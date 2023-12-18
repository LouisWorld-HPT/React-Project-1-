import React, { useEffect, useState } from 'react'
import { StyledPostList } from './style/PostList.styled';
import Post from './Post';
export default function PostList({posts}) {
    let [currentpage,setCurrentPage] = useState(1); // Default page (1)
    let [currentPagePostsRender, setCurrentPagePostsRender] = useState([]);
    const RenderPost = (postPage ) => {
        console.log("Rendering...")
        let postnum = 40;
        const startindex = (postPage - 1) * postnum;
        const endindex = postPage * postnum
        const currentPagePostsRender = posts.slice(startindex,endindex)
        setCurrentPagePostsRender(currentPagePostsRender);
        console.log("Ended Rendering")
        console.log(currentPagePostsRender)
    }

    useEffect(()=>{
        RenderPost(currentpage)
    }, [currentpage,posts])


    const pageNavigate = (e) => {
        console.log("Page => " + e.target.value)
        setCurrentPage(e.target.value)
    }
    const nextPage = () => {
        setCurrentPage(currentpage++);
    }
    const previousPage = () => {
        if(currentpage >= 1){
            setCurrentPage(currentpage--);
        }
        else{
            console.log("Nope")
        }
        
    }

  return (
    <StyledPostList>
        {
        currentPagePostsRender.map((post) => {
            return <Post className="post-div" key={post.id} props={post}></Post>
        })  
        }
        <div className='post-pagination-div'>
            Current Page = {currentpage}
            {/* pagination */}
            <ul className='post-pagination'>
                <li onClick={previousPage}>&laquo;</li>
                {
                    currentpage > 1 ?
                        <li value={currentpage-1} onClick={pageNavigate}>{currentpage-1}</li>:
                     ''
                }
                <li value={currentpage} onClick={pageNavigate} className='current'>{currentpage}</li>
                <li value={currentpage+1} onClick={pageNavigate}>{currentpage+1}</li>
                <li onClick={nextPage}>&raquo;</li>
            </ul>
        </div>
    </StyledPostList>
  )
}
