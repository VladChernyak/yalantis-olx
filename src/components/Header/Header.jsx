import React from 'react';
import { Container, Logo, CartWidget } from '../';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ location: { pathname } }) => (
  <header className="header">
    <Container>
      <div className="header__content">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        {pathname.includes('/cart') ? null : (
          <Link to="/cart">
            <CartWidget />
          </Link>
        )}
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Header;
