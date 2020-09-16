import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Loader, ErrorMessage, OrderProduct } from '../../components';
import { getDateTimeString } from '../../handlers/product';
import { useOrderPage } from '../../hooks';
import { getOrderTotalPrice } from '../../handlers/order';
import './OrderPage.scss';

const OrderPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useOrderPage(id);

  let content = (
    <Container>
      <div className="order__title">
        <h1>Order</h1>
        <span className="order__id">({data.id})</span>
      </div>
      <div className="order__date">
        <time dateTime={new Date(data.createdAt)}>
          <span>Date:</span>
          {getDateTimeString(data.createdAt)}
        </time>
      </div>
      <ul className="order__product-list">
        {data.pieces?.map(({ id, count, product }) => (
          <OrderProduct key={id} count={count} {...product} />
        ))}
      </ul>
      <div className="order__total-price">
        <span>Total payable: </span>
        {getOrderTotalPrice(data.pieces)} $
      </div>
    </Container>
  );

  if (loading) content = <Loader />;
  if (error) content = <ErrorMessage />;

  return <main className="order">{content}</main>;
};

export default OrderPage;
