import styled, { keyframes } from 'styled-components'

export const ContainerLoadin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const InfiniteRotate = styled.div`
  animation: ${rotate} 4s linear infinite;
`