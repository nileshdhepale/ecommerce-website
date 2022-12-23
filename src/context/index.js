import { useReducer, createContext } from "react";

const initialState = {
  cart: {},
};

const Context = createContext({});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart[action.payload.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: item
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      };
    case "INCREMENT_IN_CART":
      const Item = state.cart[action.payload.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: Item
            ? {
                ...Item,
                qty: Item.qty + 1,
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      };
    case "DECREMENT_IN_CART":
      const value = state.cart[action.payload.id];
      if (value.qty > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: value
              ? {
                  ...value,
                  qty: value.qty - 1,
                }
              : {
                  ...action.payload,
                  qty: 1,
                },
          },
        };
      }
    case "REMOVE_FROM_CART":
      let newCart = { ...state.cart };
      delete newCart[action.payload.id];
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
