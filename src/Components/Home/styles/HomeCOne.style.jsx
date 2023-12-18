import styled from "styled-components";

export const StyledLineContainer = styled.div`

    /* Gallery holder line [content_div_line_container] */
    width: 100%;
    height: 5px;
    display: flex;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    margin-bottom: calc(60vh - 30vh);
    background-color: yellow;
    margin-top: calc(60vh - 30vh);
    
    /* Entire Gallery container */
    .content_div_gallery{
        top: -30vh;
        width: 80%;
        height: 60vh;
        background-color: black;
        background-image: url('Pics/Starting.gif');
        position: absolute;
        border: 5px solid white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        transition: background-image 0.5s;
        
    }

    .content_div{
    /* For the Main Container [No need RN] */
    width: 100%;
    height: fit-content;
    background-color: #9EB384;
    display: flex;
    flex-direction: column;
    align-items: center;
    }


    /* For header Cover [No need RN] */
    .content_div_header_cover{
        width: 100%;
        height: 70vh;
        background-image: url(Pics/foodCover2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-color: aquamarine;
    }
    /* Dark color display over */
    .content_div_dark{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: background-image 2s ease-in-out 0.2s;
    }

    /* Gallery inside text */
    .Text_header{
        font-family: "Brush Script MT";
        color: white;
        letter-spacing: 3px;
        font-size: 50px;
        text-align: center;
        width: 80%;
        height: 30%;
        margin: 5px;
    }
    .Text_paragraph{
        box-sizing: border-box;
        padding: 5px;
        width: 70%;
        height: 35%;
        font-family: "Brush Script MT";
        color: white;
        background-color: rgba(255, 255, 255, 0.4);
        font-size: 1.8rem;
        text-align: center;
        margin: 0px;
        border-radius: 5px;
        text-shadow: 0px 0px 2px black;
    }
    /*  */
    .content_div_gallery_navi{
        width: 100%;
        display: none;
        justify-content: center;
        position: absolute;
        top: 90%;
        opacity: 0;
    }

    /* Gallery navigators */
    .gallery_buttons{
        opacity: 50%;
        width: 10%;
        height: 1px;
    }
    /* Ends of Gallery */
`