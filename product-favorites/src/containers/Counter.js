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

  // const runAnotherPromise = data => dispatch => {
  const runAnotherPromise = data => {
    console.log('dispatch', data);
    return {
      withDispatch: (dispatch) => dispatch({
        type: 'PROMISE',
        payload: asyncFetch(data)
      })
    }
  }

  return (
    <div className="counter">
      <p>Only there to proof, that you can have multiple state slices.</p>
      { state.loading && <p>Loading...</p> }
      <p>Counter: { state.counter }</p>
      <button onClick={ () => dispatch({ type: 'ADD', payload: 1 }) }>Add 1</button>
      <button onClick={ () => dispatch({ type: 'ADD', payload: 5 }) }>Add 5</button>
      <button onClick={ () => dispatch({ type: 'SUB', payload: 1 }) }>Subtract 1</button>
      <button onClick={ () => dispatch({ type: 'SUB', payload: 5 }) }>Subtract 5</button>
      <button onClick={ async () => {
        const res = await dispatch({
          type: 'PROMISE',
          payload: asyncFetch(100)
        });
        console.log('res:::', res);
      } }>Promise</button>
      <button onClick={ async () => {
        const res = await runAnotherPromise(200).withDispatch(dispatch);
        console.log('res:::', console.log(res));
      } }>Promise 2</button>
    </div>
  );
};

export default Counter;
