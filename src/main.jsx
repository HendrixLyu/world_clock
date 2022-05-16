import React from "react"; //imr
import ReactDOM from 'react-dom/client'; //imrd
import { createGlobalStyle } from 'styled-components'; //imsc

import App from './App';

//设定全局CSS
const My_Global_Styled = createGlobalStyle`
    body {
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100%;
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
`;

 //找到ID='root_123'的元素 并在下面创建一个新Root，并渲染返回render()内部的内容
const new_root = ReactDOM.createRoot(document.getElementById('root_123'))
new_root.render(
    <>
    <My_Global_Styled />
    <App />
    </>
);