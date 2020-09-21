import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCart } from '../../pages/Cart/actions';
import { Modal, Button, Counter } from '../';
import PropTypes from 'prop-types';
import './AddToCartModal.scss';

const AddToCartModal = ({ name, price, id, count, changeModal }) => {
  const dispatch = useDispatch();
  const changeProduct = (productData) => dispatch(changeCart(productData));

  return (
    <Modal title={name} onCloseClick={() => changeModal(null)}>
      <div className="add-to-cart-modal">
        <p className="add-to-cart-modal__price">Total price: {price * count} $</p>
        <Counter
          value={count}
          setCounter={(value) => changeModal({ name, price, id, count: value })}
        />
        <Button
          onClick={() => {
            changeProduct({
              name,
              price,
              id,
              count,
            });
            changeModal(null);
          }}>
          Add to cart
        </Button>
      </div>
    </Modal>
  );
};

AddToCartModal.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  changeModal: PropTypes.func.isRequired,
};

export default AddToCartModal;
