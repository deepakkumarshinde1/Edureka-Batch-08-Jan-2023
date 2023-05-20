import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const Search = (props) => {
  let { locationList } = props;
  let { id, name } = useParams();
  let navigate = useNavigate();

  let [filterData, setFilterData] = useState({
    mealType: id,
    sort: 1,
  });

  let [restaurants, setRestaurants] = useState([]);

  // mealType (mandatory), loca_id, lCost, hCost, sort (mandatory)

  let getFilterData = async () => {
    let url = "http://localhost:3001/api/filter";
    let { data } = await axios.post(url, filterData);
    console.log(data.RestaurantList);
    setRestaurants(data.RestaurantList);
  };

  let setFilterForPage = (event) => {
    let { value, name } = event.target;

    switch (name) {
      case "location":
        if (value === "") {
          delete filterData.loca_id;
          setFilterData({ ...filterData });
        } else {
          setFilterData({ ...filterData, loca_id: Number(value) });
        }

        break;
      case "sort":
        // {} are stored by reference
        // state we need recreate the object
        setFilterData({ ...filterData, sort: Number(value) });
        break;

      case "min_price":
        let array = value.split("-"); //0-5000 ==> [ 0 , 500]
        setFilterData({
          ...filterData,
          lCost: Number(array[0]),
          hCost: Number(array[1]),
        });
        break;
    }
  };

  useEffect(() => {
    getFilterData();
    // on mounting + on update
  }, [filterData]);

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-danger justify-content-center">
          <Header user={props.user} />
        </div>
        {/* <!-- section --> */}
        <div className="row">
          <div className="col-12 px-5 pt-4">
            <p className="h3">Breakfast Places In Mumbai</p>
          </div>
          {/* <!-- food item --> */}
          <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
            <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
              <div className="d-flex justify-content-between">
                <p className="fw-bold m-0">Filter</p>
                <button
                  className="d-lg-none d-md-none btn"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-controls="collapseFilter"
                >
                  <span className="fa fa-eye"></span>
                </button>
              </div>
              {/* <!-- Collapse start  --> */}
              <div className="collapse show" id="collapseFilter">
                <div>
                  <label htmlFor="" className="form-label">
                    Select Location
                  </label>
                  <select
                    className="form-select form-select-sm"
                    name="location"
                    onChange={setFilterForPage}
                  >
                    <option value="">--- Select Location ---</option>
                    {locationList.map((location, index) => {
                      return (
                        <option key={index} value={location.location_id}>
                          {location.name} , {location.city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <p className="mt-4 mb-2 fw-bold d-none">Cuisine</p>
                <div className="d-none">
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                </div>
                <p className="mt-4 mb-2 fw-bold">Min Price</p>
                <div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="min_price"
                      value="0-500"
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      less then 500
                    </label>
                  </div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="min_price"
                      value="500-1000"
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      500 to 1000
                    </label>
                  </div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="min_price"
                      value="1000-1500"
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      1000 to 1500
                    </label>
                  </div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="min_price"
                      value="1500-2000"
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      1500 to 2000
                    </label>
                  </div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="min_price"
                      value="2000-99999"
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      2000+
                    </label>
                  </div>
                </div>
                <p className="mt-4 mb-2 fw-bold">Sort</p>
                <div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      value="1"
                      name="sort"
                      checked={filterData.sort == 1 ? true : false}
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      Price low to high
                    </label>
                  </div>
                  <div className="ms-1">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sort"
                      value="-1"
                      checked={filterData.sort == -1 ? true : false}
                      onChange={setFilterForPage}
                    />
                    <label htmlFor="" className="form-check-label ms-1">
                      Price high to low
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- Collapse end --> */}
            </div>
            {/* <!-- search result --> */}
            <div className="col-12 col-lg-8 col-md-7">
              {restaurants.length == 0 ? (
                <>
                  <p className="text-center h3 text-danger">No Result Found</p>
                </>
              ) : (
                restaurants.map((restaurant, index) => {
                  return (
                    <div
                      onClick={() => navigate("/restaurant/" + restaurant._id)}
                      key={index}
                      className="col-12 food-shadow p-4 mb-4"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="/images/food-item.png"
                          className="food-item"
                        />
                        <div className="ms-5">
                          <p className="h4 fw-bold">{restaurant.name}</p>
                          <span className="fw-bold text-muted">FORT</span>
                          <p className="m-0 text-muted">
                            <i
                              className="fa fa-map-marker fa-2x text-danger"
                              aria-hidden="true"
                            ></i>
                            {restaurant.locality}, {restaurant.city}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex">
                        <div>
                          <p className="m-0">CUISINES:</p>
                          <p className="m-0">MIN PRICE:</p>
                        </div>
                        <div className="ms-5">
                          <p className="m-0 fw-bold">
                            {restaurant.cuisine
                              .map((value) => {
                                return value.name;
                              })
                              .join(", ")}
                          </p>
                          <p className="m-0 fw-bold">
                            <i
                              className="fa fa-inr mx-2"
                              aria-hidden="true"
                            ></i>
                            {restaurant.min_price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              <div className="col-12 pagination d-flex justify-content-center">
                <ul className="pages">
                  <li>&lt;</li>
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>&gt;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
