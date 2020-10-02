import React, { useState } from 'react';
import {
  Container,
  ProductList,
  SortBar,
  Loader,
  AddToCartModal,
  ErrorMessage,
} from '../../components';
import { useProductList, useInjectSaga } from '../../hooks';
import saga from './sagas';
import './Products.scss';

const Products = () => {
  useInjectSaga('products', saga);

  const { products, loading, error, queries, origins, totalPages, isMyProducts } = useProductList();
  const [modal, changeModal] = useState(null);

  let content;

  if (error) {
    content = <ErrorMessage />;
  } else {
    content = (
      <>
        <SortBar origins={origins} queries={queries} />
        {loading ? (
          <Loader />
        ) : (
          <ProductList
            changeModal={changeModal}
            products={products}
            queries={queries}
            totalPages={totalPages}
            origins={origins}
          />
        )}
      </>
    );
  }

  return (
    <main className="products">
      <Container>
        <h1>{isMyProducts ? 'My products' : 'All products'}</h1>
        {content}
      </Container>
      {modal ? <AddToCartModal {...modal} changeModal={changeModal} /> : null}
    </main>
  );
};

export default Products;
