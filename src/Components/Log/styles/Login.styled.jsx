import styled from "styled-components";

export const StyledLogin = styled.div`
    /* Container of Login pannel */
    display: flex;
    position: fixed;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    z-index: 100;

        /* Display_Over => Login_pannel */
    .Login_pannel {
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        min-width: 38%;
        height: clamp(60%, 50%, 70%);
        margin-top: 100px;
        border-radius: 10px;
        border: 3px solid black;
        box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.5);
    }

    /* LoginPannel => Logo */
    .Login_pannel_logo {
        position: absolute;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        top: -65px;
        box-shadow: 0px 0px 8px 0px greenyellow;
        
    }

    /* LoginPannel => Login Form */
    .Login_form {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 90%;
        height: 100%;
    }

    /* Form container divs */
    .input_credential {
        box-sizing: border-box;
        width: 100%;
        height: 25%;
        display: flex;
        align-items: center;
    }

    .input_credential>label {
        width: 30%;
        height: 45%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .input_credential>input {
        width: 70%;
        height: 45%;
    }

    .input_credential>button {
        width: 100%;
        height: 50%;
    }

    @media screen and (max-width: 720px ){
        .Login_pannel{
            min-width: 80%;
        }
        img{
            width: 25%;
        }
        .input_credential {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        }
        .input_credential input{
            width: 100%;
        }

    }

`