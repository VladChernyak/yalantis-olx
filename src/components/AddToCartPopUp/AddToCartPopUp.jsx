import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCart } from '../../pages/Cart/actions';
import { PopUp, Button, Counter } from '../';
import PropTypes from 'prop-types';
import './AddToCartPopUp.scss';

const AddToCartPopUp = ({ name, price, id, count, changePopUp }) => {
  const dispatch = useDispatch();
  const changeProduct = (productData) => dispatch(changeCart(productData));

  return (
    <PopUp onCloseClick={() => changePopUp(null)}>
      <div className="products__pop-up">
        <h2>{name}</h2>
        <p>{price * count} $</p>
        <Counter
          value={count}
          setCounter={(value) => changePopUp({ name, price, id, count: value })}
        />
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
