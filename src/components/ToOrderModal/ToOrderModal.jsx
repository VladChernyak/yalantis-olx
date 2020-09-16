import React from 'react';
import { Modal, Button, ModalSubmitting, ModalSuccess, ModalError } from '../';
import PropTypes from 'prop-types';
import './ToOrderModal.scss';

const ToOrderModal = ({ sending, success, error, onCloseClick, sendOrder }) => (
  <Modal title="Send an order ?" onCloseClick={onCloseClick}>
    <div className="to-order-modal">
      <Button onClick={sendOrder}>Send</Button>
      <Button className="to-order-modal__cancel" onClick={onCloseClick}>
        Cancel
      </Button>
      {sending ? <ModalSubmitting /> : null}
      {success ? (
        <ModalSuccess title="Order was created !" path={'orders/' + success.orderId} />
      ) : null}
      {error ? <ModalError error={error} /> : null}
    </div>
  </Modal>
);

ToOrderModal.propTypes = {
  sending: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired,
};

export default ToOrderModal;
