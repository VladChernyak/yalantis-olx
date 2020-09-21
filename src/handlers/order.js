export const getOrderTotalPrice = (pieces) => {
  if (!pieces) return 0;

  return pieces.reduce((sum, { count, product }) => (sum += product.price * count), 0);
};
