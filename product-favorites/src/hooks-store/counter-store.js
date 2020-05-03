import { initStore } from './store';

const configureStore = () => {
    const initialState = {
        counter: 0,
        loading: false
    };
    const actions = {
        ADD: (state, amount) => ({ counter: state.counter + amount }),
        SUB: (state, amount) => ({ counter: state.counter - amount }),
        PROMISE_PENDING: (state, data) => ({ counter: data, loading: true }),
        PROMISE_FULFILLED: (state, data) => ({ counter: data, loading: false }),
        PROMISE_REJECTED: (state, data) => ({ counter: data, loading: false }),
    };

    initStore(actions, initialState);
};

export default configureStore;