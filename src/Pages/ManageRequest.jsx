import { useState } from "react";

import { useContext, useEffect } from "react";

import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { useLoaderData } from "react-router-dom";

const ManageRequest = () => {
  const { activeUser } = useContext(GlobalDataContext);
  const [requestedFood, setRequestedFood] = useState(null);
  const userEmail = activeUser?.email;
  const requestData = useLoaderData();
  const [donationCount, setDonationCount] = useState([]);

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  useEffect(() => {
    console.log(requestData);
    fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/food/${
        requestData?.foodId
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequestedFood(data);
      });
  }, [requestData]);

  //   const handleFoodRequest = async () => {
  //     if (foodData?.donarEmail == activeUser?.email) {
  //       toast.error("You Can Not Request Your Own Food", {
  //         position: "top-center",
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //       // return
  //     }

  // const requestFoodData = {
  //   foodId: foodData._id,
  //   foodImage: foodData.foodImage,
  //   donarImage: foodData.donarImage,
  //   requesterName: activeUser.displayName,
  //   requesterImage: activeUser.photoURL,
  //   donarName: foodData.donarName,
  //   requesterEmail: activeUser.email,
  //   donarEmail: foodData.donarEmail,
  //   requestDate: new Date().toISOString().split("T")[0],
  //   requestTime: new Date().toISOString().split("T")[1].split(".")[0],
  //   requestStatus: "Pending",
  // };

  // await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/food/request/add`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(requestFoodData),
  // }).then(() => {
  //   toast.success("Request Added", {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // });
  //   };

  return (
    <div>
      {requestData ? (
        <div className="flex gap-5 justify-between">
          {/* Food Details */}
          <div className="flex gap-5 w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-1/2 h-full">
              <img className="object-cover" src={""} alt="" />
            </div>

            <div className="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* Food Details Inside Donar */}
              <div>
                <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <div className="flex">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Quantity
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {"requestedFood?.foodQuantity"}
                    </li>
                  </div>
                  <div className="flex">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Expire Date
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {"requestedFood?.expireDate"}
                    </li>
                  </div>
                  <div className="flex">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Expire Date
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {"requestedFood?.expireDate"}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          {/* Request Details */}
          <div className="min-w-[250px] p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={"foodData.donarImage"}
                alt={"foodData.donarName"}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {"foodData.donarName"}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total Donation: {donationCount} Times
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1>No One Requested For This Food</h1>
        </div>
      )}
    </div>
  );
};

export default ManageRequest;
