import { useEffect, useState } from "react";
import { fetchFoodData } from "../../Hooks/fetchData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
const ProductSection = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchFoodData().then((data) => {
      setProductData(data.slice(-6));
    });
  }, []);

  return (
    <div className="my-[8%]">
      <SectionTitle
        subtitle="TOP NEW ON THIS WEEK"
        title="NEW ARRIVALS"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {productData.map((food) => (
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
            <img  src={food?.foodImage} alt="" />
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
                <Link to={`/food/${food._id}`}> <button>Details</button></Link> 
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>


           
          </div>
        ))}
      </div>
          <Link className="mt-5 text-xl text-center" to="/foods">Show All</Link>
    </div>
  );
};

export default ProductSection;
