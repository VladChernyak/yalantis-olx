import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productModalToggle } from '../../pages/ProductModal/actions';
import { Container, Logo, CartWidget } from '../';
import { Link, useLocation } from 'react-router-dom';
import { CART_PATH, MY_PRODUCTS_PATH, ORDERS_PATH, PRODUCT_LIST_PATH } from '../../constants/paths';
import classNames from 'classnames';
import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => dispatch(productModalToggle());
  const toggleNav = () => setNavIsOpen(!navIsOpen);

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__left-side">
            <Link to={PRODUCT_LIST_PATH} className="header__logo">
              <Logo className="header__logo" />
            </Link>
            <nav className={classNames('header__nav', { opened: navIsOpen })}>
              <Link to={ORDERS_PATH}>Orders</Link>
              <Link to={MY_PRODUCTS_PATH}>My products</Link>
              <button className="header__add-product" onClick={toggleModal}>
                Add product
              </button>
            </nav>
          </div>
          <button
            className={classNames('header__burger', { opened: navIsOpen })}
            onClick={toggleNav}>
            <div></div>
            <div></div>
          </button>
          {pathname.includes(CART_PATH) ? null : (
            <Link to={CART_PATH} className="header__cart">
              <CartWidget />
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
