export const getDateTimeString = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return date.toLocaleDateString() + ' ' + hours + ':' + minutes;
};

export const setOriginName = (options, product) => {
  const option = options.find((el) => el.value === product.origin);

  return { ...product, originName: option.displayName };
};
