import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Card } from "flowbite-react";

const TopDonar = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/users`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.slice(0, 3));
      });
  }, []);
  // /

  return (
    <div className="my-[5%]">
      <SectionTitle
        subtitle="WHO LOVE TO SHARE"
        title="TOP DONORS"
      ></SectionTitle>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 justify-center lg:justify-between">
        {userData.map((singleUser) => (
          <div key={singleUser?._id}>
            <Card className="w-full">
              <div className="flex flex-col items-center pb-10">
              <img
                  alt={singleUser?.name}
                  height="96"
                  src={singleUser?.imageUrl}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {singleUser?.name}
                </h5>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {singleUser?.email}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                
                  <button
                   
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Details
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonar;
