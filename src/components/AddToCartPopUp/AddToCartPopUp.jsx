import React, { useContext } from 'react';
import { PopUp, Button, Counter } from '../';
import CartContext from '../../context/CartContext';
import PropTypes from 'prop-types';
import './AddToCartPopUp.scss';

const AddToCartPopUp = ({ name, price, id, count, changePopUp }) => {
  const { changeProduct } = useContext(CartContext);

  return (
    <PopUp onCloseClick={() => changePopUp(null)}>
      <div className="products__pop-up">
        <h2>{name}</h2>
        <p>{price * count} $</p>
        <Counter value={count} setCounter={(v) => changePopUp({ name, price, id, count: v })} />
        <Button
          onClick={() => {
            changeProduct({
              name,
              price,
              id,
              count,
            });
            changePopUp(null);
          }}>
          Add to cart
        </Button>
      </div>
    </PopUp>
  );
};

AddToCartPopUp.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  changePopUp: PropTypes.func.isRequired,
};

export default AddToCartPopUp;
