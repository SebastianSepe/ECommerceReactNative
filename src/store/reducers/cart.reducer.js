import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const initial_state = {
  items: [],
  total: 0,
};

const sumTotal = list => {
  return list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);
};

const CartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(item => item.id !== action.itemId);
      alert("Se ha quitado el artículo de su carrito");
      return { ...state, items: cleanCart, total: sumTotal(cleanCart) };

    case ADD_ITEM:
      const indexItem = state.items.findIndex(item => item.id === action.item.id);
      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];
        alert("Se ha añadido un nuevo artículo a su carrito");
        return { ...state, items: updateCart, total: sumTotal(updateCart) };
      }
      const items = [...state.items].map(item => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      });
      alert("Se ha incrementado la cantidad del artículo en su carrito");
      return { ...state, items, total: sumTotal(items) };

    case CONFIRM_CART:
      alert("Se ha confirmado su carrito");
      return state;

    default:
      return state;
  }
};

export default CartReducer;
