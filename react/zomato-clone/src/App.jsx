import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function App() {
  let getUserDetails = () => {
    // #1 get data from localStorage
    let token = localStorage.getItem("zc_auth_token");
    if (token === null) {
      return null;
    } else {
      try {
        let data = jwt_decode(token);
        return data;
      } catch (error) {
        return null;
      }
    }
  };

  let [user, setUser] = useState(getUserDetails());
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
    console.log(user);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home locationList={locationList} user={user} />}
        />
        <Route
          path="/search/:id/:name"
          element={<Search locationList={locationList} user={user} />}
        />
        <Route path="/restaurant/:id" element={<Restaurant user={user} />} />
      </Routes>
    </>
  );
}

export default App;
