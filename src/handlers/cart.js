export const addProducts = (cart, product) => {
  const cartCopy = { ...cart };
  const productInCart = cartCopy.products[product.id];

  if (productInCart) {
    productInCart.count = product.count;
  } else {
    cartCopy.products[product.id] = { ...product };
  }

  cartCopy.total = getTotalSum(cartCopy.products);
  cartCopy.productsCount = getProductsCount(cartCopy.products);

  return cartCopy;
};

export const deleteProduct = (cart, id) => {
  const cartCopy = { ...cart };

  delete cartCopy.products[id];

  cartCopy.total = getTotalSum(cartCopy.products);
  cartCopy.productsCount = getProductsCount(cartCopy.products);

  return cartCopy;
};

const getTotalSum = (products) =>
  Object.values(products).reduce((sum, item) => {
    return (sum += item.price * item.count);
  }, 0);

const getProductsCount = (products) =>
  Object.values(products).reduce((sum, item) => {
    return (sum += item.count);
  }, 0);

export const createOrderData = (products) => {
  const pieces = Object.values(products).map(({ id, count }) => ({ productId: id, count }));

  return {
    order: { pieces },
  };
};
