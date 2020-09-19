import React from 'react';
import { useDispatch } from 'react-redux';
import { resetProductListQueries } from '../../pages/Products/actions';
import { productModalToggle } from '../../pages/ProductModal/actions';
import { Container, Logo, CartWidget } from '../';
import { Link, useLocation } from 'react-router-dom';
import { CART_PATH, MY_PRODUCTS_PATH, ORDERS_PATH, PRODUCT_LIST_PATH } from '../../constants/paths';
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
            <Link to={PRODUCT_LIST_PATH} onClick={resetQueries}>
              <Logo className="header__logo" />
            </Link>
            <nav className="header__nav">
              <Link to={ORDERS_PATH}>Orders</Link>
              <Link to={MY_PRODUCTS_PATH}>My products</Link>
            </nav>
            <button className="header__add-product" onClick={toggleModal}>
              Add product
            </button>
          </div>
          {pathname.includes(CART_PATH) ? null : (
            <Link to={CART_PATH}>
              <CartWidget />
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
