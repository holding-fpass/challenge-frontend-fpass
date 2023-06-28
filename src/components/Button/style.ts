import styled from 'styled-components'


export const StyledButton = styled.button<{
    colorBackGround: string;
    colorFont: string;
  }>`
    padding: 0.9375rem 1.75rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(p) => (p.colorBackGround)} !important;
    color: ${(p) => (p.colorFont)};
    border: none;
  
    :disabled{
      opacity: .7;
    }
    
  `;
  