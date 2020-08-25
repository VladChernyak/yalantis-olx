export const getDateTimeString = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString() + ' ' + date.getHours() + ':' + date.getMinutes();
};

export const setOriginName = (options, product) => {
  const option = options.find((el) => el.value === product.origin);

  return { ...product, origin: option.displayName };
};
