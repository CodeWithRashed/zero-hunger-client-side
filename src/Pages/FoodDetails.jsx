
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Card } from "flowbite-react";

import { useContext, useEffect } from "react";

import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { activeUser } = useContext(GlobalDataContext);
  const userEmail = activeUser?.email;
  const foodData = useLoaderData();
  const [userFoodData, setUserFoodData] = useState([]);
  const [donationCount, setDonationCount] = useState([]);

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/foods/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDonationCount(data.length);
        setUserFoodData(data.slice(-3));
      });
  }, [userEmail]);

  const handleFoodRequest = async () => {


    if(foodData?.donarEmail == activeUser?.email){
      toast.error("You Can Not Request Your Own Food", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      return
    }

    const requestFoodData = {
      foodId: foodData._id,
      foodName: foodData.foodName,
      foodImage: foodData.foodImage,
      donarImage: foodData.donarImage,
      requesterName: activeUser.displayName,
      requesterImage:activeUser.photoURL,
      donarName: foodData.donarName,
      requesterEmail: activeUser.email,
      donarEmail: foodData.donarEmail,
      requestDate: new Date().toISOString().split('T')[0],
      requestTime: new Date().toISOString().split("T")[1].split(".")[0],
      requestStatus: "Pending",
    };

    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/food/request/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestFoodData),
    }).then(() => {
      toast.success("Request Added", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div>
      <div className="w-full flex gap-5">
        {/* Food Details */}
        <div className="">
          <div>
            <img className="object-cover" src={foodData?.foodImage} alt="" />
          </div>

          <div className="">
            <h5 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        {/* Donar Details */}
        <div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={foodData.donarImage}
              alt={foodData.donarName}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {foodData.donarName}
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
          {/* Food Details Inside Donar */}
          <div>
            <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <div className="flex">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  Quantity
                </li>
                <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                  {foodData.foodQuantity}
                </li>
              </div>
              <div className="flex">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  Expire Date
                </li>
                <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                  {foodData.expireDate}
                </li>
              </div>
              {/* <!-- Modal toggle --> */}
              <button
                onClick={() => setOpenModal(true)}
                className="w-full px-4 py-2 rounded-b-lg text-center"
              >
                Request Food
              </button>

              {/* <!-- Main modal --> */}
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="food_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Food Name
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={foodData?.foodName}
                        name="food_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="food_id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Food ID
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={foodData?._id}
                        name="food_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="donar_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Donar Name
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={foodData?.donarName}
                        name="donar_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="donar_email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Donar Email
                      </label>
                      <input
                        type="email"
                        disabled
                        defaultValue={foodData?.donarEmail}
                        name="donar_email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="request_user_email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Requested By
                      </label>
                      <input
                        type="text"
                        defaultValue={activeUser?.email}
                        name="request_user_email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Food Name.."
                        required
                        disabled
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="request_date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Request Date
                      </label>
                      <input
                        disabled
                        type="text"
                        defaultValue={formattedDate}
                        name="request_date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Food Image Url.."
                        required
                      />
                    </div>

                    <div className="mb-6 col-span-2">
                      <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pickup Location
                      </label>
                      <input
                        defaultValue={foodData?.pickupLocation}
                        type="text"
                        name="location"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Pickup Location"
                        required
                      />
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => {
                      setOpenModal(false);
                      handleFoodRequest();
                    }}
                  >
                    Request This Food
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </ul>
          </div>
        </div>
      </div>
      {/* Displaying User Specific Foods */}
      <div className="mt-10">
        <div className="text-xl my-8 text-center">
          <h1>Food Donated By {foodData.donarName}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {userFoodData?.map((food) => (
            <div key={food._id}>
              <Card
                className="max-w-sm"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={food.foodImage}
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {food.foodName}
                  </h5>
                </a>

                <div className="flex w-full items-center justify-center">
                  <a
                    href="#"
                    className="w-full rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    View More
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
