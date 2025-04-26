import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
 
  font-family: "Audiowide", sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
}

body{
  background-color: black;
}

.section-title {
    font-size: 2.5em;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 60%;
    height: 4px;
    background-color: #FFD700; /* Amarelo dourado */
    transform: translateX(-50%);
  }


`