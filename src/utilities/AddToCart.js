const addToCartDb = (product, quantity) => {
  const {img, name, price, _id} = product;

  let shoppingCart = [];
  const cart = { _id, name, img, quantity: quantity, price };

  const getCartDb = JSON.parse(localStorage.getItem("enomio-cart"));

  if(!getCartDb) {
    shoppingCart.push(cart)
  } else {
    shoppingCart = getCartDb
    const stored = shoppingCart.find(pro => pro._id === _id);
    if(stored) {
      stored.quantity = stored.quantity + quantity
    } else {
      shoppingCart.push(cart)
    }
  }
  
  localStorage.setItem("enomio-cart", JSON.stringify(shoppingCart));
  return shoppingCart;
};

const getAddToCartDb = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart['data'] = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeAddToCartDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
export { addToCartDb, getAddToCartDb, removeAddToCartDb };