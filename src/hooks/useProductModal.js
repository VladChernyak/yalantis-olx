import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productModalReset, productModalToggle } from '../pages/ProductModal/actions';
import { selectProductModal } from '../pages/ProductModal/selectors';

const useProductModal = () => {
  const dispatch = useDispatch();
  const { error, submitting, success, productData } = useSelector(selectProductModal);

  const onCloseClick = () => dispatch(productModalToggle());
  const resetModal = () => dispatch(productModalReset());

  const title = productData ? productData.name : 'Create new product';
  const successTitle = productData ? 'Changes saved' : 'Product created !';

  // eslint-disable-next-line
  useEffect(() => resetModal, []);

  return {
    productData,
    error,
    submitting,
    success,
    title,
    successTitle,
    onCloseClick,
    resetModal,
  };
};

export default useProductModal;
