import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRequestOptions } from './';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../assets/apiLinks';
import { setOriginName } from '../handlers/product';

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [pages, changePages] = useState({ current: 1, total: 0 });
  const { options, setOptions } = useRequestOptions();

  useEffect(() => {
    const fetchProductList = async () => {
      setOptions({ ...options, loading: true });

      try {
        const productList = await axios.get(`${PRODUCTS_LINK}?page=${pages.current}`);
        const origins = await axios.get(PRODUCTS_ORIGINS_LINK);

        const productsWithOrigin = productList.data.items.map((product) =>
          setOriginName(origins.data.items, product),
        );
        const totalPages = Math.ceil(productList.data.totalItems / productList.data.perPage);

        setProductList(productsWithOrigin);
        changePages({ ...pages, total: totalPages });
        setOptions({ ...options, loading: false });
      } catch (e) {
        setOptions({ ...options, loading: false, error: true });
      }
    };

    fetchProductList();

    // eslint-disable-next-line
  }, [pages.current]);

  return {
    productList,
    pages,
    changePages,
    options,
  };
};

export default useProductList;
