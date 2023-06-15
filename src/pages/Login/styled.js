import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  #login-button,
  #signup-button {
    align-self: center;
    margin: 5px;
    border: 10px;
  }

  button:hover {
    background: #616161;
    transition-duration: 500ms;
  }
  button:not(:hover) {
    transition-duration: 500ms;
  }
`;
