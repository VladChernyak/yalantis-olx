import React from 'react';
import { Container, Loader, ErrorMessage, OrderItem } from '../../components';
import { useOrders, useInjectSaga } from '../../hooks';
import saga from './sagas';
import './Orders.scss';

const Orders = () => {
  useInjectSaga('orders', saga);

  const { loading, error, orders } = useOrders();

  let content = (
    <Container>
      <h1>Orders</h1>
      <ul className="orders__list">
        {orders.map((data) => (
          <OrderItem key={data.id} {...data} />
        ))}
      </ul>
    </Container>
  );

  if (loading) content = <Loader />;
  if (error) content = <ErrorMessage />;

  return <main className="orders">{content}</main>;
};

export default Orders;
