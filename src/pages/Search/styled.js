import styled from 'styled-components';

export const Searchbar = styled.p`
  input {
    margin-top: 15px;
    margin-bottom: 20px;
    height: 40px;
    width: 350px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  button {
    text-align: left;
    border: 10px;
    margin: 12px;
    height: 35px;
    width: 50px;
  }

  button:hover {
    background: #616161;
    transition-duration: 500ms;
  }
  button:not(:hover) {
    transition-duration: 500ms;
  }
`;
