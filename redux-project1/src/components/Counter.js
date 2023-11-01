import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //-->usedispatch hook returns a refrence to the dispatch function from the redux store and can use it as dispatch actions as needed...
  const dispatch = useDispatch();

  //-> useSelector hook allows us to extract data from the redux store state for use in component...
  /*and if there is any change between the prevState and current state then it will re-render the component else 
  it stays the same */

  const counter = useSelector((state) => state.count);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
