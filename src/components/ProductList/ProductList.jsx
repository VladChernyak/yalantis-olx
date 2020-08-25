import React from 'react';
import { ProductCard, Pagination } from '../';
import PropTypes from 'prop-types';
import './ProductList.scss';

const ProductList = ({ products, pages, changePages, changePopUp }) => {
  return (
    <div className="product-list">
      <div className="product-list__inner">
        {products ? (
          products.map(({ name, id, price, origin }) => (
            <ProductCard
              key={id}
              name={name}
              price={price}
              origin={origin}
              id={id}
              changePopUp={changePopUp}
            />
          ))
        ) : (
          <div className="product-list__no-products">No products</div>
        )}
      </div>
      <Pagination pagesOptions={pages} changePages={changePages} />
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
