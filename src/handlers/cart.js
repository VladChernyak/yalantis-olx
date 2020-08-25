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

const getTotalSum = (products) => {
  let result = 0;

  Object.values(products).forEach((item) => (result += item.price * item.count));

  return result;
};

const getProductsCount = (products) => {
  let result = 0;

  Object.values(products).forEach((item) => (result += item.count));

  return result;
};
