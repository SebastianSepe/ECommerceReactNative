import { applyMiddleware, combineReducers, createStore } from "redux";

import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/catregory.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import ProductReducer from "./reducers/products.reducer";
import AuthReduer from "./reducers/auth.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: CartReducer,
  orders: OrdersReducer,
  auth: AuthReduer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
