
// import Create GlobalStyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Css  Rest, font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&family=Roboto:wght@100&display=swap');
    body {
        font-family: 'Poppins', sans-serif;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    /* CSS Reset */
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`;

export default GlobalStyle;