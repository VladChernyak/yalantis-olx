import React, { useState, useEffect } from 'react';
import { Container, ProductList, Loader, AddToCartPopUp, ErrorMessage } from '../../components';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../../assets/apiLinks';
import { setOriginName } from '../../handlers/product';
import './Products.scss';

export default () => {
  const [productList, setProductList] = useState([]);
  const [pages, changePages] = useState({ current: 1, total: 0 });
  const [options, setOptions] = useState({ loading: true, error: false });
  const [popUp, changePopUp] = useState(null);

  useEffect(() => {
    setOptions({ ...options, loading: true });

    fetch(`${PRODUCTS_LINK}?page=${pages.current}`)
      .then((response) => response.json())
      .then((data) => {
        return fetch(PRODUCTS_ORIGINS_LINK)
          .then((response) => response.json())
          .then(({ items }) => {
            const products = data.items.map((product) => setOriginName(items, product));

            return { ...data, items: products };
          });
      })
      .then(({ perPage, totalItems, items }) => {
        const totalPages = Math.ceil(totalItems / perPage);

        setProductList(items);
        changePages({ ...pages, total: totalPages });
        setOptions({ ...options, loading: false });
      })
      .catch(() => setOptions({ ...options, loading: false, error: true }));

    // eslint-disable-next-line
  }, [pages.current]);

  return (
    <main className="products">
      <Container>
        <h1>All products</h1>
        {options.error ? (
          <ErrorMessage />
        ) : options.loading ? (
          <Loader />
        ) : (
          <ProductList
            changePopUp={changePopUp}
            products={productList}
            pages={pages}
            changePages={changePages}
          />
        )}
      </Container>
      {popUp ? <AddToCartPopUp {...popUp} changePopUp={changePopUp} /> : null}
    </main>
  );
};
