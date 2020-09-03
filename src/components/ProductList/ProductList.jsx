import React from 'react';
import { ProductCard, Pagination } from '../';
import PropTypes from 'prop-types';
import './ProductList.scss';

const ProductList = ({ products, currentPage, totalPages, changePopUp }) => {
  return (
    <div className="product-list">
      <div className="product-list__inner">
        {products.length ? (
          <>
            <div className="product-list__items">
              {products.map(({ name, id, price, origin }) => (
                <ProductCard
                  key={id}
                  name={name}
                  price={price}
                  origin={origin}
                  id={id}
                  changePopUp={changePopUp}
                />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </>
        ) : (
          <div className="product-list__no-products">No products</div>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  pages: PropTypes.object,
  changePages: PropTypes.func,
  changePopUp: PropTypes.func,
};

export default ProductList;
