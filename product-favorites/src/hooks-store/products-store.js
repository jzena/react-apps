import { initStore } from './store';

const configureStore = () => {
  const initialState = {
    products: [],
    loadingProducts: false
  };
  const actions = {
    FETCH_PRODUCTS_PENDING: (state, payload) => ({ loadingProducts: true }),
    FETCH_PRODUCTS_REJECTED: (state, payload) => ({ loadingProducts: false }),
    FETCH_PRODUCTS_FULFILLED: (state, payload) => {
      return {
        ...state,
        products: payload.data,
        loadingProducts: false
      }
    },
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts };
    }
  };

  initStore(actions, initialState);
};

export default configureStore;