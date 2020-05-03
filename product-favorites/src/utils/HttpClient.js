import axios from 'axios';
// import { AuthHelper } from './';
// import * as sessionKey from './../constants/sessionStoragekey';

// axios.interceptors.response.use(response => response, (error) => {
//   if (error.response) {
//     const { config } = error.response || {};
//     const { url } = config || {};
//     const isLogged = !!AuthHelper.getToken();
//     if (error.response.status === 500) {
//       const urlError500 = isLogged ? '/error500' : '/error500-500';
//       window.location.hash = urlError500;
//     } else if (error.response.status === 404 && !url.includes('/configuration')) {
//       const urlError404 = isLogged ? '/error404' : '/error404-404';
//       window.location.hash = urlError404;
//     }
//   }
//   return Promise.reject(error);
// });

const getHeaders = () => ({
  // Authorization: `Bearer ${sessionStorage.getItem(`${sessionKey.BEARER_TOKEN}`)}`
});

const api = axios.create({
  baseURL: 'http://localhost:3004'
})

export default class HttpClient {

  static get(dispatch, type, url) {
    return dispatch({
      type,
      payload: api.get(`${ url }`, { headers: getHeaders(), data: {} })
    });
  }

  static delete(dispatch, type, url) {
    return dispatch({
      type,
      payload: axios.delete(`${ url }`, { headers: getHeaders() })
    });
  }

  static post(data, dispatch, type, url, setLastUse = true) {
    if (setLastUse) {

    }
    return dispatch({
      type,
      payload: axios.post(`${ url }`, data, { headers: getHeaders() })
    });
  }

  static put(data, dispatch, type, url) {
    return dispatch({
      type,
      payload: axios.put(`${ url }`, data, { headers: getHeaders() })
    });
  }
}
