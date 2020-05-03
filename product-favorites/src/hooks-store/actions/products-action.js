import HttpClient from './../../utils/HttpClient';

export const fetchProducts = (payload) => dispatch => {
  const { type } = payload;
  return HttpClient.get(dispatch, type, '/products')
};