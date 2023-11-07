import { useEffect, useState } from "react";
import { fetchFoodData } from "../../Hooks/fetchData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { GrMapLocation } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineArrowRight} from 'react-icons/hi';
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const FeatureFood = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchFoodData().then((data) => {
      setProductData(data.slice(-6));
    });
  }, []);

  return (
    <div className="my-[8%]">
      <SectionTitle
        subtitle="MORE QUANTITY MORE HAPPINESS"
        title="FEATURE FOODS"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {productData.map((food) => (
          <div key={food._id}>
            <div className="w-full md:h-[450px] lg:h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {food?.foodName}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {food?.additionalNote}
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
                  <CiCalendarDate className="text-xl text-black"></CiCalendarDate>
                  <span>{food.expireDate}</span>
                </p>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2 items-center">
                  <GrMapLocation className="text-gray-700 dark:text-gray-400"></GrMapLocation>

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
      <Link className="mt-8 text-xl flex w-full justify-center items-center text-center" to="/foods">
      <Button>
        View More
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      </Link>
    </div>
  );
};

export default FeatureFood;
