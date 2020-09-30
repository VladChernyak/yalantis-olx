import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductPage } from '../pages/ProductPage/selectors';
import { selectProductModal } from '../pages/ProductModal/selectors';
import { productPageReset, getProductById } from '../pages/ProductPage/actions';

const useProductPage = () => {
  const dispatch = useDispatch();
  const { productInfo, loading, error, updated } = useSelector(selectProductPage);
  const { success } = useSelector(selectProductModal);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));

    return () => dispatch(productPageReset());
  }, [id, success, dispatch]);

  return {
    productInfo,
    loading,
    error,
    updated,
  };
};

export default useProductPage;
