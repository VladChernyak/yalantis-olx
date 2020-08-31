import React, { useState } from 'react';
import { Container, ProductList, Loader, AddToCartPopUp, ErrorMessage } from '../../components';
import { useProductList } from '../../hooks';
import './Products.scss';

const Products = () => {
  const { productList, pages, changePages, options } = useProductList();

  const [popUp, changePopUp] = useState(null);

  let content;

  if (options.error) {
    content = <ErrorMessage />;
  } else if (options.loading) {
    content = <Loader />;
  } else {
    content = (
      <ProductList
        changePopUp={changePopUp}
        products={productList}
        pages={pages}
        changePages={changePages}
      />
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
