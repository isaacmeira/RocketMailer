import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  transition: all 0.3s;
  font-family: 'Roboto', sans-serif;
}

form span{
  color:red;
  border:1px solid ;
  padding : 10px;
  border-radius: 4px;
  background : rgba(255,0,0,0.7);
  color:white;
}


html,
body {
  height: 100%;
}

body {
  background: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
 
}


button.swal2-confirm.swal2-styled {

      cursor: pointer;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-size: 14px;
      border: 0;
      color: #fff;
      background: #7159c1;
      margin-top: 5px;
}




`;
export default GlobalStyle;
