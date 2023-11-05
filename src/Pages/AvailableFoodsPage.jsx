import { useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { Link } from "react-router-dom";

const AvailableFoodsPage = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetchFoodData().then((data) => setFoodData(data));
  }, []);
  return (
    <div>
      {/* banner */}
      <div>
        <div
          className="slider-1 h-[80vh] flex relative"
          style={{
            backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1574351079295.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-content flex justify-center items-center flex-col z-10 space-y-5 bg-[#282828]/[.50] w-full h-full top-0 absolute">
            <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
              It&apos;s not just a CAR!
            </h3>
            <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-[#ff2d37] font-bold">
              It&apos;s a DREAM!!
            </h1>
            <div className="cta"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
        {/* Filter Manure */}
        <div className="flex items-center mt-10 justify-between pb-4 bg-white dark:bg-gray-900">
          <div>
            <select
            name="filter"
              className="flex w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
          <label className="sr-only">Search</label>
          <div className="">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
          </div>
         
        </div>
        <div className="grid lg:grid-cols-3 gap-5 my-[5%]">
          {foodData.map((food) => (
            <div key={food._id}>
              <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {food?.foodName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology
                  </p>
                </div>
                <div className="flex items-center flex-col justify-between gap-5 mb-4">
                  <div className="">
                    <img src={food?.foodImage} alt="" />
                  </div>
                  <div>
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Expire Date
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Pickup Location
                    </p>
                  </div>
                </div>
                <div className="flow-root">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li className="pt-3 pb-0 sm:pt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={food.donarImage}
                            alt="Thomas image"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {food.donarName}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <Link to={`/food/${food._id}`}>
                            {" "}
                            <button>Details</button>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodsPage;
