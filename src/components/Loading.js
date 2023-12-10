import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  to {
    transform : rotate(360deg);
  }
`


const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  border: 8px solid #ccc;
  border-radius: 50%;
  border-top-color: #133b8c;
  animation: ${spinner} 0.6s linear infinite;
`
export default Loading;