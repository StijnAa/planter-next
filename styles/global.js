import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
        font-size: large;
        font-weight: 500;
    }
    body{
        margin: 0;
        background-color: #eee;
    }
    img{
        max-width: 100%;
    }
    li{
        list-style-type: none;
    }
    ul{
        list-style-type: disc;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
    }
    a {
        color: blue;
        text-decoration: none; 
    }
    /* button, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
} */
`;

export default GlobalStyles;
