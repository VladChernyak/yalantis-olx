import React from 'react';
import { useDispatch } from 'react-redux';
import { resetProductListQueries } from '../../store/actions/productList';
import { Container, Logo, CartWidget } from '../';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ location: { pathname } }) => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Link to="/" onClick={() => dispatch(resetProductListQueries())}>
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
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Header;
