import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import theme from "./theme";
import { fontBody, fontH1, fontH2, fontH3, fontH4 } from "./cssHelper";

const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
        font-size: large;
    }
    body{
        margin: 0;
        background-color: ${theme.colors.grey};
        font-weight: 300;
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
    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    h1{
        font-weight: 500;
    }
    h2 {
        font-weight: 500;
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h3{
        font-weight: 500;
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h4 {
            display: block;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
    p {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    input[type="radio" i] {
        margin: 0;
    }
    legend{
        font-weight: 500;
    }
    h1 {
        ${fontH1}
    }
    h2 {
        ${fontH2}
    }
    h3,i {
        ${fontH3}
    }
    h4{
        ${fontBody}
    }
    p,a,button,label,span,select,legend{
        ${fontBody}
    }

`;

export default GlobalStyles;
