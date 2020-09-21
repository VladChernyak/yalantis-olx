import React, { useState } from 'react';
import {
  Container,
  ProductList,
  SortBar,
  Loader,
  AddToCartModal,
  ErrorMessage,
} from '../../components';
import { useProductList } from '../../hooks';
import { PAGE } from '../../constants/queries';
import './Products.scss';

const Products = () => {
  const { products, loading, error, queries, origins, totalPages, isMyProducts } = useProductList();

  const [modal, changeModal] = useState(null);

  let content;

  if (error) {
    content = <ErrorMessage />;
  } else if (loading) {
    content = <Loader />;
  } else {
    content = (
      <>
        <SortBar origins={origins} queries={queries} />
        <ProductList
          changeModal={changeModal}
          products={products}
          currentPage={queries[PAGE]}
          totalPages={totalPages}
          origins={origins}
        />
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
