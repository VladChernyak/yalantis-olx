import React from 'react';
import { ProductCard, Pagination } from '../';
import PropTypes from 'prop-types';
import './ProductList.scss';

const ProductList = ({ products, currentPage, totalPages, changeModal }) => (
  <div className="product-list">
    <div className="product-list__inner">
      {products.length ? (
        <>
          <div className="product-list__items">
            {products.map(({ name, id, price, originName, origin, isEditable }) => (
              <ProductCard
                key={id}
                name={name}
                price={price}
                origin={origin}
                originName={originName}
                id={id}
                isEditable={isEditable}
                changeModal={changeModal}
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  pages: PropTypes.object,
  changePages: PropTypes.func,
  changeModal: PropTypes.func,
};

export default ProductList;
