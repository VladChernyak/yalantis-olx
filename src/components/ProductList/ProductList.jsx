import React from 'react';
import { ProductCard, Pagination } from '../';
import { IS_EDITABLE, MAX_PRICE, MIN_PRICE, ORIGINS, PAGE } from '../../constants/queries';
import PropTypes from 'prop-types';
import './ProductList.scss';

const ProductList = ({ products, totalPages, changeModal, queries }) => (
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
          <Pagination queries={queries} totalPages={totalPages} />
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
  changeModal: PropTypes.func,
  queries: PropTypes.shape({
    [PAGE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    [MIN_PRICE]: PropTypes.string,
    [MAX_PRICE]: PropTypes.string,
    [IS_EDITABLE]: PropTypes.string,
    [ORIGINS]: PropTypes.string,
  }),
};

export default ProductList;
