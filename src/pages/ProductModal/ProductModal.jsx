import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductForm, Modal, ModalSuccess, ModalError, ModalSubmitting } from '../../components';
import { productModalReset, productModalToggle } from './actions';
import { selectProductModal } from './selectors';
import './ProductModal.scss';

const ProductModal = () => {
  const dispatch = useDispatch();
  const { error, submitting, success, productData } = useSelector(selectProductModal);

  const onCloseClick = () => dispatch(productModalToggle());
  const resetModal = () => dispatch(productModalReset());

  const title = productData ? productData.name : 'Create new product';
  const successTitle = productData ? 'Changes saved' : 'Product created !';

  // eslint-disable-next-line
  useEffect(() => resetModal, []);

  return (
    <Modal title={title} onCloseClick={onCloseClick}>
      <div className="product-modal">
        <ProductForm {...productData} />
        {submitting ? <ModalSubmitting /> : null}
        {success ? (
          <ModalSuccess
            title={successTitle}
            path={success.id}
            onClick={() => {
              onCloseClick();
              resetModal();
            }}
          />
        ) : null}
        {error ? <ModalError error={error} onClick={resetModal} /> : null}
      </div>
    </Modal>
  );
};

export default ProductModal;
