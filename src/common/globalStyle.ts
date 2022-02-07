import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../App';

export default createGlobalStyle<{ theme: ThemeType; }>`
  html, body, #root {
    height: 100vh;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.palette.text.primary};
    justify-content: space-between;

    *::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #000;
    }

    
    *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: #F5F5F5;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #D8D8D8;
    }

  }
  body {
    margin: 0;
    padding: 0
  }
  #root {
    display: flex;
    flex-direction: column;
    overflowY: scroll;
    height: 100vh;
    user-select: none;
  }
`;
