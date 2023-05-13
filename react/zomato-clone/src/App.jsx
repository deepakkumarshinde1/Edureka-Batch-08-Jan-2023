import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [locationList, setLocationList] = useState([]); // state hook
  let getLocationList = async () => {
    try {
      let url = "http://localhost:3001/api/get-location-list";
      let { data } = await axios.get(url);
      setLocationList(data.locationList); // updating locationList
    } catch (error) {
      alert("server error");
    }
  };
  useEffect(() => {
    getLocationList();
    // console.log("mounting");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home locationList={locationList} />} />
        <Route
          path="/search/:id/:name"
          element={<Search locationList={locationList} />}
        />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
