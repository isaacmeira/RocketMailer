import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  form {
    display: flex;
    -webkit-flex-direction: column;
    max-width: 500px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 20px;
    box-shadow: 0 0 20px rgba(2, 2, 2, 0.1);
    align-content: center;

    button {
      cursor: pointer;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-size: 14px;
      border: 0;
      color: #fff;
      background: rgb(113, 89, 193) none repeat scroll 0% 0%;
      margin-top: 5px;
    }
  }

  #main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 150px;
  }

  #main form input:not([type="checkbox"]) {
    height: 40px;
    padding: 0 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #444;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  }

  #message {
    padding: 0 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #444;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    min-height: 100px;
    max-height: 200px;
    min-width: 100%;
    max-width: 100%;
  }

  img {
    width: 300px;
    padding-top: 80px;
    align-content: center;
    position: absolute;
  }
`;
