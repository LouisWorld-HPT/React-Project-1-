import styled from "styled-components";

export const StyledLog = styled.div`
    width: 25%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    background-color: cyan;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    
    button{
        background-color: green;
    }

    @media screen and (max-width: 920px){
        flex-direction: row;
        width: 100%;
        height: 8vh;
    }
`