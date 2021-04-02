const items_key = "items";

export const getItems = () => {
  let items = localStorage.getItem(items_key);
  if (items === undefined) {
    return [];
  }
  let itemsArray = [];
  try {
    itemsArray = JSON.parse(items);
  } catch (err) {
    console.error(err);
  }
  return Array.isArray(itemsArray) ? itemsArray : [];
};

export const saveItems = (items) => {
  localStorage.setItem(
    items_key,
    JSON.stringify(Array.isArray(items) ? items : [])
  );
};

export const clearItems = () => {
  localStorage.removeItem(items_key);
};
