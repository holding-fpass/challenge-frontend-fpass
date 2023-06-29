import styled from 'styled-components'


export const StyledButton = styled.button<{
    colorbackground?: string;
    colorfont: string;
  }>`
    padding: 0.7rem 1.75rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(p) => (p.colorbackground)} !important;
    color: ${(p) => (p.colorfont)};
    border: none;
  
    :disabled{
      opacity: .7;
    }
    
  `;
  