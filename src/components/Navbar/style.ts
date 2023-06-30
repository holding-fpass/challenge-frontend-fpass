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

  > div{
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 600px){
      justify-content: space-between;
    } 
  }

  nav.active-nav{
    transform: translateY(72px);
    background-color: #000;
    opacity: 1;
  }
  .active-toggle-icon span{
    position: relative;
    &:nth-child(1){
      transform: rotate(45deg); 
      top: 7px;
    }
    &:nth-child(2){
      opacity: 0;
    }
    &:nth-child(3){
      transform: rotate(-45deg);
      top: -9px;
    }
  }

`;

export const NavbarBrand = styled.div`
  width: 130px;
  margin-right: 30px;
  z-index: 99;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;

  @media only screen and (max-width: 600px){
    transform: translateY(-75px);
    transition: .3s;
    opacity: 0;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 1;
    display: block;
  } 
`;

export const NavItems = styled.div`
  margin: 10px;

  a{
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;

    &:hover{
      color: #e62429;
    }
  }
`;


export const ToggleNav = styled.div`
  display: none;

  @media only screen and (max-width: 600px){
   display: block;
  } 
`;


export const ToggleIcon = styled.span`
  width: 25px;
  margin: 5px 0;
  height: 3px;
  background-color: #fff;
  display: block;
  cursor: pointer;
  transition: .3s;
`;
