import styled from 'styled-components'

interface GridProps {
  grid: number
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  > div{
    padding: 2.4rem;
  } 
`;

export const Columns = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  margin-right: -15px;
  margin-left: -15px;
  padding: 2.4rem;
  flex: 0 0 ${props => (props.grid ? props.grid / 12 * 100 : '8.33333')}%;
  max-width: ${props => (props.grid ? props.grid / 12 * 100 : '8.33333')}%; 

  @media only screen and (max-width: 600px){
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

