import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendRequest } from '../api/requests';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../api/apiLinks';
import { setOriginName } from '../handlers/product';
import { selectProductList } from '../pages/Products/selectors';
import { IS_EDITABLE } from '../constants/queries';
import {
  getProductListSuccess,
  getProductListError,
  setProductOrigins,
  productListReset,
  resetProductListQueries,
} from '../pages/Products/actions';

const useProductList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const queriesReset = () => dispatch(resetProductListQueries());

  const { products, loading, error, totalPages, origins, queries } = useSelector(selectProductList);
  const isMyProducts = pathname === '/my-products';

  const queriesWithEditable = isMyProducts ? { ...queries, [IS_EDITABLE]: true } : queries;

  // eslint-disable-next-line
  useEffect(() => queriesReset, [pathname]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productList = await sendRequest(PRODUCTS_LINK, queriesWithEditable);
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
    isMyProducts,
  };
};

export default useProductList;
