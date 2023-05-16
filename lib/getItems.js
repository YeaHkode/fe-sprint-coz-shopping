export const getItems = async (count = 4) => {
  const response = await fetch(
    `http://cozshopping.codestates-seb.link/api/v1/products?count=${count}`
  );
  if (response.ok) {
    const items = await response.json();
    return items;
  }
  return [];
};
