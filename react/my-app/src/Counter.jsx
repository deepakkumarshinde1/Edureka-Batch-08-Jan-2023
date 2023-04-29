const Counter = () => {
  // add event
  let incCount = () => {
    console.log("click");
  };
  let decCount = () => {
    console.log("dec count");
  };
  return (
    <>
      <h1>Count</h1>
      <button onClick={incCount}>Inc Counter</button>
      <button onClick={decCount}>DEC Count</button>
    </>
  );
};

export default Counter;
