import styled from "styled-components";

export const StyledPost = styled.div`
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 20px;

    &:hover{
        cursor: pointer;
        color: white;
        background-color: darkblue;
    }
    .post_intro{
        width: 80%;
        background-color: gray;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 20px;
    }
    @media screen and (min-width: 50px){
        width: 100%;
    }
    @media screen and (min-width: 500px){
        width: 40%;
    }
    @media screen and (min-width: 800px){
        width: 30%;
    }
`