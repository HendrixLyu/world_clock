
import React from "react";
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const Global_Styled = createGlobalStyle`
    body {
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        background-image: linear-gradient( to bottom right, #69c0ff 0%, #b7eb8f 100%)
    }

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`

ReactDOM.createRoot(document.getElementById('root1')).render(
    <>
    <Global_Styled />
    <App />
    </>
);