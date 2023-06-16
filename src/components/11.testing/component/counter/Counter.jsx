import { useState } from "react";
import { increment } from "./increment";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    const value = increment(count);
    setCount(value);
  };
  return (
    <div data-testid="counter">
      <h2>Counter: {props.name} </h2>
      <p>
        Count: <span data-testid="count-value">{count}</span>
      </p>
      <button data-testid="button-increment" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

function isAlphabet(prop, propName, componentName) {
  if (typeof prop[propName] !== "string") {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. Expected a string`
    );
  }
  const regex = /^[a-zA-Z ]+$/;
  if (!regex.test(prop[propName])) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. Expected an alphabet`
    );
  }
}
