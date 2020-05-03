import { useState, useEffect } from 'react';
import { wrapperDispatch, logger } from './../utils';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (type, payload) => {
    const fnAction = actions[type];
    if (!fnAction) {
      return globalState;
    }
    const newState = fnAction(globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }

    return globalState;
  };

  const mainDispatch = (process.env.NODE_ENV === 'production' ? wrapperDispatch(dispatch) : wrapperDispatch(logger(dispatch)));

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, mainDispatch];
};

const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};


export {
  useStore,
  initStore,
  globalState
}
