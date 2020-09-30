import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productFormGetOrigins, productModalRequest } from '../pages/ProductModal/actions';
import { selectProductModal } from '../pages/ProductModal/selectors';

const useProductForm = () => {
  const dispatch = useDispatch();
  const { origins, loading } = useSelector(selectProductModal);

  useEffect(() => {
    dispatch(productFormGetOrigins());
  }, [dispatch]);

  const submitForm = (data, productId) => dispatch(productModalRequest(data, productId));

  return {
    origins,
    loading,
    submitForm,
  };
};

export default useProductForm;
