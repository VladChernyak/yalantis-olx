import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendRequest } from '../api/request';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../api/apiLinks';
import { setOriginName } from '../handlers/product';
import { selectProductPage } from '../pages/ProductPage/selectors';
import {
  getProductByIdSuccsess,
  getProductByIdError,
  productPageReset,
} from '../pages/ProductPage/actions';

const useProductPage = (productId) => {
  const dispatch = useDispatch();
  const { productInfo, loading, error } = useSelector(selectProductPage);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await sendRequest(`${PRODUCTS_LINK}/${productId}`);
        const origins = await sendRequest(PRODUCTS_ORIGINS_LINK);

        const productWithOrigin = setOriginName(origins.data.items, product.data);

        dispatch(getProductByIdSuccsess(productWithOrigin));
      } catch (e) {
        dispatch(getProductByIdError());
      }
    };

    fetchProduct();

    return () => dispatch(productPageReset());

    // eslint-disable-next-line
  }, []);

  return {
    productInfo,
    loading,
    error,
  };
};

export default useProductPage;
