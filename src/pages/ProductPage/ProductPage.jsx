import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader, Container, Counter, Button, ErrorMessage } from '../../components';
import { CheckIcon } from '../../components/Icons';
import { getDateTimeString } from '../../handlers/product';
import { useProductPage, useCounter, useInjectSaga } from '../../hooks';
import { selectCart } from '../Cart/selectors';
import { changeCart } from '../Cart/actions';
import { productModalChangeProduct } from '../ProductModal/actions';
import saga from './sagas';
import './ProductPage.scss';

const ProductPage = () => {
  useInjectSaga('product-page', saga);

  const { productInfo, loading, error } = useProductPage();
  const { counter, setCounter } = useCounter();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = productInfo ? cart.products[productInfo.id] : false;

  const editProduct = (data) => dispatch(productModalChangeProduct(data));

  const addProductToCart = () => {
    dispatch(
      changeCart({
        name: productInfo.name,
        id: productInfo.id,
        count: counter,
        price: productInfo.price,
      }),
    );
  };

  const productPanel = productInfo.isEditable ? (
    <div className="product__edit">
      <div className="product__price">
        Price: <span>{productInfo.price} $</span>
      </div>
      <Button onClick={() => editProduct(productInfo)}>Edit</Button>
    </div>
  ) : (
    <>
      <div className="product__price">
        Price for one: <span>{productInfo.price} $</span>
      </div>
      <div className="product__total-price">
        (total: <span>{productInfo.price * counter} $</span>)
      </div>
      <Counter value={counter} setCounter={setCounter} />
      <Button onClick={addProductToCart}>Add to cart</Button>
    </>
  );

  let content;

  if (error) {
    content = <ErrorMessage />;
  } else if (loading) {
    content = <Loader />;
  } else {
    content = (
      <Container>
        <div className="product__content">
          <h1 className="product__name">{productInfo.name}</h1>
          <div className="product__add-to-cart">
            {isInCart ? (
              <div className="product__added">
                <CheckIcon />
                In cart !
              </div>
            ) : (
              productPanel
            )}
          </div>
          <div className="product__info">
            <h2>About this product:</h2>
            <ul className="product__options-list">
              <li>
                Product origin: <span>{productInfo.originName}</span>
              </li>
              <li>
                Product was created in: <span>{getDateTimeString(productInfo.createdAt)}</span>
              </li>
              <li>
                Last change in: <span>{getDateTimeString(productInfo.updatedAt)}</span>
              </li>
              <li>
                Product id: <span>{productInfo.id}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }

  return <main className="product">{content}</main>;
};

export default ProductPage;
