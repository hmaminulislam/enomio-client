import { toast } from "react-hot-toast";

const addToCartDb = (product, quantity) => {
  const {img, name, price, _id} = product;

  let shoppingCart = [];
  const cart = { _id, name, img, quantity: quantity, price };

  const getCartDb = JSON.parse(localStorage.getItem("enomio-cart"));

  if(!getCartDb) {
    shoppingCart.push(cart)
    toast.success("added Add to Cart")
  } else {
    shoppingCart = getCartDb
    const stored = shoppingCart.find(pro => pro._id === _id);
    if(stored) {
      stored.quantity = stored.quantity + quantity
    } else {
      shoppingCart.push(cart)
      toast.success("added Add to Cart");
    }
  }
  
  localStorage.setItem("enomio-cart", JSON.stringify(shoppingCart));
  return shoppingCart;
};


const removeAddToCartDb = (id) => {
  const getCartDb = JSON.parse(localStorage.getItem("enomio-cart"));
  const shoppingCart = getCartDb.filter((pro) => pro._id !== id);
  if(shoppingCart.length === 0) {
    localStorage.removeItem("enomio-cart")
  }
  else {
    localStorage.setItem("enomio-cart", JSON.stringify(shoppingCart));
  }
  return shoppingCart;
};


const addWishlistDb = (product) => {
  const { img, name, price, _id } = product;

  let wishList = [];
  const wishlist = { _id, name, img, price };

  const getCartDb = JSON.parse(localStorage.getItem("enomio-wishlist"));

  if (!getCartDb) {
    wishList.push(wishlist);
    toast.success('added wishlist')
  } else {
    wishList = getCartDb;
    const stored = wishList.find((pro) => pro._id === _id);
    if (stored) {
      toast.error('Alreadery added')
    } else {
      wishList.push(wishlist);
      toast.success("added wishlist");
    }
  }

  localStorage.setItem("enomio-wishlist", JSON.stringify(wishList));
  return wishList;
};


const removeWishListDb = (id) => {
  const getWishlistDb = JSON.parse(localStorage.getItem("enomio-wishlist"));
  const wishList = getWishlistDb.filter((pro) => pro._id !== id);
  if(wishList.length === 0) {
    localStorage.removeItem("enomio-wishlist")
    toast.error("Remove wishlist");
  }
  else {
    toast.error("Remove wishlist");
    localStorage.setItem("enomio-wishlist", JSON.stringify(wishList));
  }
  return wishList;
};

export { addToCartDb, removeAddToCartDb, addWishlistDb, removeWishListDb };