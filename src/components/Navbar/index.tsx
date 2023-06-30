import { useState } from 'react';
import Container from '../../pages/style';
import {
  NavBar,
  NavbarBrand,
  NavItems,
  ToggleNav,
  Nav,
  ToggleIcon
} from './style';

import { Link } from 'react-router-dom';

const MainNavBar = () => {

  const [isActiveNav, setActiveNav] = useState(false);

  const handleToggle = () => {
    setActiveNav(!isActiveNav);
  };

  const handleHideActiveNav = () => {
    setActiveNav(false);
  }

  return (
    <NavBar>
      <Container>
        <NavbarBrand>
          <a href="/">
            <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
          </a>
        </NavbarBrand>
        <Nav className={`${isActiveNav ? "active-nav" : null}`}>
          <NavItems>
            <Link to={`/`} onClick={handleHideActiveNav}>
              Personagens
            </Link>
          </NavItems>
          <NavItems>
            <Link to={`/buscar-personagem`} onClick={handleHideActiveNav}>
              Buscar personagens
            </Link>
          </NavItems>
        </Nav>

        <ToggleNav 
          onClick={handleToggle} 
          className={`${isActiveNav ? "active-toggle-icon" : null}`}>
          <ToggleIcon />
          <ToggleIcon />
          <ToggleIcon />
        </ToggleNav>
      </Container>
    </NavBar>
  );
};

export default MainNavBar;
