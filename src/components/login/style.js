import styled from "styled-components";
import photo from './photo.jpg'

const Wrapper = styled.div`
  background-color: pink;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  font-size: 16px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 1.2rem;
    text-align: center;
    padding: 0 0 10px;
    margin: 10px 0;
  }

  form {
    font-size: 14px;
    font-family: Arial, sans-serif;
    padding: 6px 8px;
  }

  .logo {
    width: 100px;
    height: 100px;
    background-image: url(${photo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
  }
`;

export default Wrapper;
