import {useSelector, useDispatch} from 'react-redux';
import {counterActions} from '../store/redux-store';
import classes from './Counter.module.css';

const Counter = () => {
  const [counter, show] = useSelector(state=>{return[state?.counter, state?.showCounter]});
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  }
  
  const incrementBy5Handler = () => {
    dispatch(counterActions.increment(5));
  }
  
  const decrementBy5Handler = () => {
    dispatch(counterActions.decrement(5));
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementBy5Handler}>Increment By 5</button>
      <button onClick={decrementBy5Handler}>Decrement By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
