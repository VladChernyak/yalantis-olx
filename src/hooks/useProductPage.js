import { useState, useEffect } from 'react';
import axios from 'axios';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../assets/apiLinks';
import { setOriginName } from '../handlers/product';
import { useRequestOptions } from './';

const useProductPage = (productId) => {
  const [productInfo, setInfo] = useState(null);
  const { options, setOptions } = useRequestOptions();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await axios.get(`${PRODUCTS_LINK}/${productId}`);
        const origins = await axios.get(PRODUCTS_ORIGINS_LINK);

        const productWithOrigin = setOriginName(origins.data.items, product.data);

        setInfo(productWithOrigin);
        setOptions({ ...options, loading: false });
      } catch (e) {
        setOptions({ ...options, loading: false, error: true });
      }
    };

    fetchProduct();

    // eslint-disable-next-line
  }, []);

  return {
    productInfo,
    options,
  };
};

export default useProductPage;
