import { globalState } from './../hooks-store/store'
export const logger = (dispatch) => {
  const dispatchWithLogger = (type, payload) => {
    console.group(`Action ${type}`);
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", globalState);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", { type, payload });
    const responseDispatch = dispatch(type, payload)
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", responseDispatch);
    console.groupEnd();
    return responseDispatch;
  };
  return dispatchWithLogger;
}


export function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

export function wrapperDispatch(dispatch) {
  const PROMISE_TYPE_DELIMITER = '_';
  const ACTION_TYPE = {
    Pending: 'PENDING',
    Fulfilled: 'FULFILLED',
    Rejected: 'REJECTED',
  };

  return function (type, payload) {
    let TYPE;
    if (isPromise(payload)) {
      TYPE = [type, ACTION_TYPE.Pending].join(PROMISE_TYPE_DELIMITER);
      dispatch(TYPE);

      return payload.then(v => {
        TYPE = [type, ACTION_TYPE.Fulfilled].join(PROMISE_TYPE_DELIMITER);
        return dispatch(TYPE, v);
      }).catch(error => {
        TYPE = [type, ACTION_TYPE.Rejected].join(PROMISE_TYPE_DELIMITER);
        return dispatch(TYPE, error)
      });
    } else {
      dispatch(type, payload);
    }
  };
}