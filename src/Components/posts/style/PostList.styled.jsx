import {styled} from "styled-components";

export const StyledPostList = styled.div`
    width: 100%;
    background-color: lightblue;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .post-pagination-div{
        width: 100%;
        background-color: gold;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }

    .post-pagination{
        cursor: pointer; // finger cursor
        font-size: larger;
        width: 35%;
        padding: 0px;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .current{
        font-size: x-large;
    }

`