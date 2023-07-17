import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    font-size: 14px;
    outline: none;


}

body {
	overflow-x: hidden;
    color: rgb (29, 29, 31);
    letter-spacing: -0.05em;
    background-color: rgb(45, 207, 53);
    margin: 0;

}

p{
    line-height:1.6;
}


`;

export default GlobalStyle;
