import  { styled } from 'styled-components';

export const StyledNavi = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: 12vh;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: darkblue;

    .NaviLink{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 15%;
        height: 100%;
        background-color: yellow;
        text-decoration: none;
        border-radius: 15px;
    }
`