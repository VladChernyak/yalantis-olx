import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductList } from '../pages/Products/selectors';
import { MY_PRODUCTS_PATH } from '../constants/paths';
import { getMyProductsQueries, getQueriesObject } from '../handlers/requests';
import { productListReset, productListRequest } from '../pages/Products/actions';

const useProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, totalPages, origins } = useSelector(selectProductList);

  const { pathname, search } = useLocation();
  const isMyProducts = pathname === MY_PRODUCTS_PATH;
  const queriesString = isMyProducts ? getMyProductsQueries(search) : search;

  useEffect(() => () => dispatch(productListReset()), [pathname, dispatch]);

  useEffect(() => {
    dispatch(productListRequest(queriesString));
  }, [pathname, search, dispatch, queriesString]);

  return {
    products,
    loading,
    error,
    totalPages,
    origins,
    isMyProducts,
    queries: getQueriesObject(search),
  };
};

export default useProductList;
