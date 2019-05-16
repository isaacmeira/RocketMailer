import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 20px;
    box-shadow: 0 0 20px rgba(2, 2, 2, 0.1);

    button {
      cursor: pointer;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      border: 0;
      color: #fff;
      background: #7159c1;
      margin-top: 5px;
    }
  }
  label {
    padding: 10px;
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
    font-size: 14px;
    color: #444;
  }

  #message {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 150px;
  }
`;
