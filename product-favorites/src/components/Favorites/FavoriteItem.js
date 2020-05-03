import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './FavoriteItem.css';

const FavoriteItem = React.memo(props => {
  console.log('FavoriteItem Component');
  const dispatch = useStore(false)[1];
  function toggleFavHandler() {
    dispatch('TOGGLE_FAV', props.id);
  };
  return (
    <Card style={ { marginBottom: '1rem' } }>
      <div className="favorite-item">
        <h2>{ props.title }</h2>
        <p>{ props.description }</p>
        <button
          className={ !props.isFav ? 'button-outline' : '' }
          onClick={ toggleFavHandler.bind(this) }
        >
          { 'Un-Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default FavoriteItem;
