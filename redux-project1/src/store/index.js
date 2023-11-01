import { legacy_createStore } from "redux";

const countReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }

  return state;
};

const store = legacy_createStore(countReducer);

export default store;
