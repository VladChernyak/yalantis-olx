import React from 'react';
import { useDispatch } from 'react-redux';
import { resetProductListQueries } from '../../pages/Products/actions';
import { productModalToggle } from '../../pages/ProductModal/actions';
import { Container, Logo, CartWidget } from '../';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const resetQueries = () => dispatch(resetProductListQueries());
  const toggleModal = () => dispatch(productModalToggle());
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__left-side">
            <Link to="/" onClick={resetQueries}>
              <Logo className="header__logo" />
            </Link>
            <nav className="header__nav">
              <Link to="/orders">Orders</Link>
              <Link to="/my-products">My products</Link>
            </nav>
            <button className="header__add-product" onClick={toggleModal}>
              Add product
            </button>
          </div>
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

export default Header;
