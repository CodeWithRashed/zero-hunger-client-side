import { useState } from "react";
import { BiSolidDonateHeart, BiSolidUserCircle } from "react-icons/bi";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useContext, useEffect } from "react";

import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { useLoaderData } from "react-router-dom";
import { Delivered, Pending } from "../Components/Status/Status";

const ManageSingleRequest = () => {
  const { activeUser } = useContext(GlobalDataContext);
  const [openModal, setOpenModal] = useState(false);
  const [requestedFood, setRequestedFood] = useState(null);
  const userEmail = activeUser?.email;
  const requestData = useLoaderData();

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  useEffect(() => {
    if (requestData?.foodId) {
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
    }
  }, [requestData]);

  const updateFoodStatus = async () => {
    const updatedData = {
      deliveryStatus: "Delivered",
    };
    try {
      const requestStatusResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/user/update/food/${requestData?.foodId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (requestStatusResponse.ok) {
        await requestStatusResponse.json();
  
        toast.success("Accepted!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateRequestStatus = async () => {
    const updateStatus = "Delivered";
    const updatedData = {
      updateStatus,
    };
    try {
      await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/request/update/${
          requestData?._id
        }`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedData || { updateStatus: "Delivered" }),
        }
      );
    } catch {
      ("");
    }
  };

  //Handle Accept
  const handleAccept = async () => {
    try {
      updateFoodStatus()
      updateRequestStatus()
    } catch {
      ("");
    }
  };

  return (
    <div className="my-10">
      {requestData ? (
        <div className="flex gap-5 justify-between ">
          {/* Food Details */}
          <div className="flex gap-5 w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-1/2 h-full">
              <img
                className="object-cover"
                src={requestedFood?.foodImage}
                alt=""
              />
            </div>

            <div className=" w-1/2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {requestedFood?.foodName}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {requestedFood?.additionalNote}
              </p>
              {/* Food Details*/}
              <div className="w-full">
                <ul className="text-sm w-full font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <div className="flex w-full">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Quantity
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {requestedFood?.foodQuantity}
                    </li>
                  </div>
                  <div className="flex">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Expire Date
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {requestedFood?.expireDate}
                    </li>
                  </div>
                  <div className="flex">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Request Date
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {requestData?.requestDate}
                    </li>
                  </div>
                  <div className="flex w-full">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      Request Status
                    </li>
                    <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                      {requestData?.requestStatus == "Pending" ? (
                        <Pending></Pending>
                      ) : (
                        <Delivered></Delivered>
                      )}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          {/* Request Details */}
          <div className="min-w-[250px] p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-5  border-b border-gray-200 text-xl text-center  font-medium text-gray-900 dark:text-white">
              Requester
            </h5>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={requestData?.requesterImage}
                alt={requestData?.requesterName}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {requestData?.requesterName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {requestData?.requesterEmail}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <td className="px-6 py-4">
                  {/* <!-- Modal toggle --> */}
                  <button
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    type="button"
                    data-modal-target="editUserModal"
                    data-modal-show="editUserModal"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </button>

                  <Modal
                    show={openModal}
                    size="md"
                    onClose={() => setOpenModal(false)}
                    popup
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to accept this request?
                        </h3>
                        <div className="flex justify-center gap-4">
                          <Button
                            color="failure"
                            onClick={() => {
                              handleAccept(
                                requestData?.foodId,
                                requestData?._id
                              );
                              setOpenModal(false);
                            }}
                          >
                            {"Yes, I'm sure"}
                          </Button>
                          <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                          >
                            No, cancel
                          </Button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </td>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[50vh] justify-center items-center w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1>No One Requested For This Food</h1>
        </div>
      )}
    </div>
  );
};

export default ManageSingleRequest;
