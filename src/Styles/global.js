import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        min-height: 100vh;
        height: 100%;
        background: #222;
        font-size: 18px;
    }
`;
