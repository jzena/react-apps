import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(props => {
  console.log('ProductItem component');
  const dispatch = useStore(false)[1];

  function toggleFavHandler() {
    dispatch({ type: 'TOGGLE_FAV', payload: props.id });
  };

  return (
    <Card style={ { marginBottom: '1rem' } }>
      <div className="product-item">
        <h2 className={ props.isFav ? 'is-fav' : '' }>{ props.title }</h2>
        <p>{ props.description }</p>
        <button
          className={ !props.isFav ? 'button-outline' : '' }
          onClick={ toggleFavHandler.bind(this) }
        >
          { props.isFav ? 'Un-Favorite' : 'Favorite' }
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
