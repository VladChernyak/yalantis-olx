import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendRequest } from '../api/request';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../api/apiLinks';
import { setOriginName } from '../handlers/product';
import { selectProductList } from '../store/selectors';
import {
  getProductListSuccess,
  getProductListError,
  setProductOrigins,
  productListReset,
} from '../store/actions/productList';

const useProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, totalPages, origins, queries } = useSelector(selectProductList);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productList = await sendRequest(`${PRODUCTS_LINK}`, queries);
        const origins = await sendRequest(PRODUCTS_ORIGINS_LINK);

        dispatch(setProductOrigins(origins.data.items));

        const productsWithOrigin = productList.data.items.map((product) =>
          setOriginName(origins.data.items, product),
        );
        const totalPages = Math.ceil(productList.data.totalItems / productList.data.perPage);

        dispatch(getProductListSuccess(productsWithOrigin, totalPages));
      } catch (e) {
        dispatch(getProductListError());
      }
    };

    fetchProductList();

    return () => dispatch(productListReset());

    // eslint-disable-next-line
  }, [queries]);

  return {
    products,
    loading,
    error,
    totalPages,
    origins,
    queries,
  };
};

export default useProductList;
