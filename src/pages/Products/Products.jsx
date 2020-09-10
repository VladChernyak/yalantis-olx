import React, { useState } from 'react';
import {
  Container,
  ProductList,
  SortBar,
  Loader,
  AddToCartPopUp,
  ErrorMessage,
} from '../../components';
import { useProductList } from '../../hooks';
import { PAGE } from '../../constants/queries';
import './Products.scss';

const Products = () => {
  const { products, loading, error, queries, origins, totalPages } = useProductList();

  const [popUp, changePopUp] = useState(null);

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
          changePopUp={changePopUp}
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
        <h1>All products</h1>
        {content}
      </Container>
      {popUp ? <AddToCartPopUp {...popUp} changePopUp={changePopUp} /> : null}
    </main>
  );
};

export default Products;
