import React from 'react';

import { useStore } from '../hooks-store/store';
import './Counter.css';

const Counter = props => {
  const [state, dispatch] = useStore();
  console.log('Counter component::');
  async function asyncFetch(p) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(p);
      }, 3000);
    });
  }
  return (
    <div className="counter">
      <p>Only there to proof, that you can have multiple state slices.</p>
      { state.loading && <p>Loading...</p> }
      <p>Counter: { state.counter }</p>
      <button onClick={ () => dispatch('ADD', 1) }>Add 1</button>
      <button onClick={ () => dispatch('ADD', 5) }>Add 5</button>
      <button onClick={ () => dispatch('SUB', 1) }>Subtract 1</button>
      <button onClick={ () => dispatch('SUB', 5) }>Subtract 5</button>
      <button onClick={ async () => {
        const res = await dispatch('PROMISE', asyncFetch(100));
        console.log('res:::', res);
      } }>Promise</button>
    </div>
  );
};

export default Counter;
