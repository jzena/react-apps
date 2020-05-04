import React, { useEffect } from 'react';

import ProductItem from '../components/Products/ProductItem';
import Spinner from './../components/UI/Spinner/Spinner'
import { useStore } from '../hooks-store/store';
import { fetchProducts } from './../hooks-store/actions/products-action';
import './Products.css';

const Products = props => {
  const [state, dispatch] = useStore();
  useEffect(() => {
    fetchProducts({ type: 'FETCH_PRODUCTS' })(dispatch)
  }, [])
  return (
    <ul className="products-list">
      { state.loadingProducts ? <Spinner /> :
        state.products.map(prod => (
          <ProductItem
            key={ prod.id }
            id={ prod.id }
            title={ prod.title }
            description={ prod.description }
            isFav={ prod.isFavorite }
          />
        )) }
    </ul>
  );
};

export default Products;
