
export const addToCartLocalStorage = (name, tail, price) => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	const item = {
		name,
		tail,
		quantity: 1,
		price,
	};
	const itemExist = cart.find((item) => item.tail === tail);
	if (!itemExist) {
		cart.push(item);
		localStorage.setItem("cart", JSON.stringify(cart));
	} else {
		itemExist.quantity++;
		localStorage.setItem("cart", JSON.stringify(cart));
	}
};

export const addProductCart = (id) => {
  let cartLS = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const itemExist = cartLS.find((item) => item.tail === id);
  if (!itemExist) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    return cartLS;
  } else {
    itemExist.quantity++;
    localStorage.setItem("cart", JSON.stringify(cartLS));
    return cartLS;
  }
};

export const deleteOneProductCart = (id) => {
  let cartLS = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const itemExist = cartLS.find((item) => item.tail === id);
  if (itemExist.quantity === 1) {
    cartLS = cartLS.filter((item) => item.tail !== id);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    return cartLS;
  } else {
    itemExist.quantity--;
    localStorage.setItem("cart", JSON.stringify(cartLS));
    return cartLS;
  }
};

export const deleteProductCart = (id) => {
  let cartLS = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  cartLS = cartLS.filter((item) => item.tail !== id);
  localStorage.setItem("cart", JSON.stringify(cartLS));
  return cartLS;
}