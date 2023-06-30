import styled from 'styled-components'

interface GridProps {
  grid: number
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

`;

export const Columns = styled.div<GridProps>`
  padding: 1rem .6rem;
  box-sizing: border-box; 
  flex: 0 0 ${props => (props.grid ? props.grid / 12 * 100 : '8.33333')}%;
  max-width: ${props => (props.grid ? props.grid / 12 * 100 : '8.33333')}%; 


  @media only screen and (max-width: 900px){
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

