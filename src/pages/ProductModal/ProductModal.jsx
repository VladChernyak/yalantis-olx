import React from 'react';
import { ProductForm, Modal, ModalSuccess, ModalError, ModalSubmitting } from '../../components';
import { useProductModal } from '../../hooks';
import './ProductModal.scss';

const ProductModal = () => {
  const {
    productData,
    submitting,
    success,
    error,
    title,
    successTitle,
    onCloseClick,
    resetModal,
  } = useProductModal();

  return (
    <Modal title={title} onCloseClick={onCloseClick}>
      <div className="product-modal">
        <ProductForm {...productData} />
        {submitting && <ModalSubmitting />}
        {success && (
          <ModalSuccess
            title={successTitle}
            path={success.id}
            onClick={() => {
              onCloseClick();
              resetModal();
            }}
          />
        )}
        {error && <ModalError error={error} onClick={resetModal} />}
      </div>
    </Modal>
  );
};

export default ProductModal;
