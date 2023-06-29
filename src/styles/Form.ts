import styled from 'styled-components'


export const Input = styled.input`
  font-size: 16px;
  font-weight: 900;
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 16px;
  transition: .3s;

  &:focus{
    border-color: $color-primary;
    outline: 0;
  }
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

