import { useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { BiMapPin } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

const AvailableFoodsPage = () => {
  const [foodData, setFoodData] = useState([]);
  const [allFoodData, setAllFoodData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false)
  const [searchString, setSearchString] = useState("");
  const [buttonShortValue, setButtonShortValue] = useState("");
  useEffect(() => {
    fetchFoodData().then((data) => {
      setFoodData(data);
      setAllFoodData(data);
      setSearchString("");
      setButtonShortValue("");
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchData = form.search.value;
    setSearchString(searchData);
    if (searchData) {
      let updatedFoodData = allFoodData.filter((oneData) =>
        oneData.foodName.toLowerCase().includes(searchData.toLowerCase())
      );
      setFoodData(updatedFoodData);
      setIsFiltered(true)
    }

    form.reset();
  };

  const handleSort = () => {
    const sortedData = [...foodData];
    sortedData.sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
    setFoodData(sortedData);
    setButtonShortValue("Sort By Date");
    setIsFiltered(true)
  };

  return (
    <div>
      {/* banner */}
      <div>
        <div
          className="slider-1 h-[80vh] flex relative"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/top-view-elegant-plates-with-fork-knife-dark-background-femininity-grace-diner-hunger-colourful_140725-156739.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-content flex justify-center items-center flex-col z-10 space-y-5 bg-[#282828]/[.50] w-full h-full top-0 absolute">
            <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
              Join Us in the Fight
            </h3>
            <h1 className="drop-shadow-xl text-center text-4xl lg:text-9xl font-rubik text-[#ff2d37] font-bold">
              Against Hunger
            </h1>
            <div className="cta"></div>
          </div>
        </div>
      </div>
      <div>
        {/* Filter Manure */}
        <div className="mt-12  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex justify-between">
            <div className="flex gap-5 items-center">
              <button
                onClick={() => {
                  handleSort();
                }}
                type="button"
                className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              >
                Sort By Date
              </button>
              {
                isFiltered && (
                  <button
                    onClick={() => {
                      setButtonShortValue("");
                      setSearchString("");
                      setFoodData(allFoodData);
                      setIsFiltered(false)
                    }}
                    type="button"
                    className="flex justify-center items-center text-blue-700 border border-blue-600 bg-white focus:outline-none rounded-full text-xl font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                  >
                    <span className="text-base uppercase">Remove Filters</span>
                    <CiCircleRemove className="text-base ml-3"></CiCircleRemove>
                  </button>
                )}
            </div>
            {/* Search Input */}
            <form name="searchForm" onSubmit={handleSearch} className="w-1/2">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  name="search"
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Filter Data */}
        <div
          className={`my-5  w-full gap-5 flex justify-center items-center bg-white ${
            searchString || buttonShortValue ? "border" : ""
          } border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
        >
          <div>
            {searchString && (
              <button
                type="button"
                className="flex mt-3 justify-center items-center text-blue-700 border border-blue-600 bg-white focus:outline-none rounded-full text-xl font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              >
                <span className="text-xl uppercase">{searchString}</span>
              </button>
            )}
          </div>
          <div>
            {buttonShortValue && (
              <button
                type="button"
                className="flex mt-3 justify-center items-center text-blue-700 border border-blue-600 bg-white focus:outline-none rounded-full text-xl font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              >
                <span className="text-xl uppercase">{buttonShortValue}</span>
              </button>
            )}
          </div>
        </div>
        <div className="grid mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {foodData.map((food) => (
            <div key={food._id}>
              <div className="w-full  md:h-[450px] lg:h-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {food?.foodName}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span>Available For </span>
                    {food?.foodQuantity} <span> People</span>
                  </p>
                </div>
                <div className="flex items-center flex-col justify-between gap-5 mb-4">
                  <div className="max-h-[200px] overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={food?.foodImage}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
                    <CiCalendarDate className="text-xl text-black dark:text-white"></CiCalendarDate>
                    <span>{food.expireDate}</span>
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
                    <BiMapPin className="text-gray-700 dark:text-white"></BiMapPin>

                    <span>{food?.pickupLocation}</span>
                  </p>
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
                            className="w-8 h-8 rounded-full object-cover"
                            src={food?.donarImage}
                            alt={food?.donarName}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {food?.donarName}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <Link to={`/food/${food._id}`}>
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Details
                              <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </button>
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
