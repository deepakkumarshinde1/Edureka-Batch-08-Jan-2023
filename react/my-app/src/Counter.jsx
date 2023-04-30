import React, { useEffect } from "react";

// function  don't state
const Counter = (props) => {
  let { start } = props;
  let [count, setCount] = React.useState(start); // [value,updateValueFunction]
  let incCount = () => {
    count += 2;
    setCount(count); // update state
  };

  let decCount = () => {
    count -= 2;
    setCount(count); // update state
  };

  // onload
  useEffect(() => {
    console.log("mounting -- get data from server");
  }, []); // only once

  // onupdate
  useEffect(() => {
    console.log("updating -- send data to server");
  }); // again and again

  // onunload
  useEffect(() => {
    return () => {
      console.log("unmounting");
    };
  }, []); // run once
  return (
    <>
      <center>
        <h1>Count {count}</h1>
        <button onClick={incCount}>Inc</button>
        <button onClick={decCount}>Dec</button>
      </center>
      <hr />
    </>
  );
};

export default Counter;
