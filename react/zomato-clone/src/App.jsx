import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
