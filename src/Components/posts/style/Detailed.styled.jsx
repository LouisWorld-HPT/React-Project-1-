import styled from "styled-components";

export const DetailedPost = styled.div`
    width: 50%;
    height: fit-content;
    background-color: cyan;
    display: flex;
    flex-direction: column;
    align-items: center;


    .Detailed_post_intro{
        box-sizing: border-box;
        width: 70%;
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        padding: 10px;
    }

    @media screen and (max-width: 950px){
        width: 100%;
        .Detailed_post_intro{
            width: 100%;
        }
        img{
            width: 90%;
        }
    }
    @media screen and (min-width: 950px){
        width: 50%;
        .Detailed_post_intro{
        width: 80%;
        }
        img{
        width: 80%;
        }
    }

`