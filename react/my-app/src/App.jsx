// import (optional)

import Counter from "./Counter";
import { useState } from "react";

// component code
const App = () => {
  let [toggle, setToggle] = useState(true);
  let changeToggleMode = () => {
    toggle = !toggle;
    setToggle(toggle);
  };

  return (
    <>
      <center>
        <button onClick={changeToggleMode}>Toggle</button>
        <hr />
        {toggle === true ? <Counter start="1" /> : null}
      </center>
    </>
  );
};

// export
export default App;
