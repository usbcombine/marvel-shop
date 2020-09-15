export const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.comic],
      };
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter(
        (comic) => comic.id !== action.comic.id
      );
      return {
        cart: newCart,
      };
    default:
      return state;
  }
}

export default reducer;
