import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
  setCounterValue,
  setCounterName,
} from "../redux/actions/counterActions";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const counter = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const setCounter = (value) => {
    dispatch(setCounterValue(value));
    setValue(0);
  };
  const setNameCounter = () => {
    dispatch(setCounterName(name));
    setName("");
  };
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>{counter.name}</h2>
      <h3>{counter.counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Set Counter Value"
      />
      <button onClick={() => setCounter(value)}>start value</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Set Counter Name"
      />
      <button onClick={() => setNameCounter()}>Counter Name</button>
    </div>
  );
};

export default Counter;