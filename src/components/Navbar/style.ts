import styled from 'styled-components';

export const NavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 10px 0;
  display: flex;
  background: #000;
  box-shadow: 0 -2px 6px #00000080;
  margin-bottom: 40px;

  div{
    display: flex;
    align-items: center;
  }

`;

export const NavbarBrand = styled.div`
  width: 130px;
  margin-right: 30px;
`;

export const NavItems = styled.div`
  margin: 0 10px;


  a{
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;

    &:hover{
      color: #e62429;
    }
  }
`;
