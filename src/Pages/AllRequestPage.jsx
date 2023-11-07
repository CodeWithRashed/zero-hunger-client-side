import { useContext, useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { BiSolidDonateHeart, BiSolidUserCircle } from "react-icons/bi";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AllRequestPage = () => {
  const [allData, setAllData] = useState(null);
  const [isMyDonation, setIsMyDonation] = useState(true);
  const { activeUser } = useContext(GlobalDataContext);
  const [myRequest, setMyRequest] = useState([]);
  const [communityRequest, setCommunityRequest] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const userEmail = activeUser.email;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/request`)
      .then((res) => res.json())
      .then((data) => {
        let myRequest = data?.filter((singleData) =>
          singleData?.requesterEmail.includes(userEmail)
        );
        let communityRequest = data?.filter((singleData) =>
          singleData?.donarEmail.includes(userEmail)
        );

        setMyRequest(myRequest);
        setCommunityRequest(communityRequest);
        setAllData(data);
      });
  }, [userEmail, openModal]);

  const handleAccept = async (foodId, requestId) => {
    const updateStatus = "Delivered";


    const updatedData = {
      updateStatus,
    };
    try {
      await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/user/update/food/${foodId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const requestStatusResponse = await fetch(
        `${
          import.meta.env.VITE_BACKEND_API
        }/api/v1/request/update/${requestId}`,
        {
          method: "PUT",
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
    } catch {
      ("");
    }
  };

  const handleRequestDelete = async (id) => {
    await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/request/delete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        setAllData((allData) => allData.filter((item) => item._id !== id));

        toast.success("Request Removed!!", {
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
    <div className="my-12">
      {allData?.length > 0 ? (
        <div>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <button
                  onClick={() => {
                    setIsMyDonation(true);
                  }}
                  className={`inline-flex items-center justify-center p-4 ${
                    isMyDonation
                      ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : ""
                  }  group`}
                >
                  <BiSolidUserCircle className="text-2xl mr-2"></BiSolidUserCircle>
                  My Request
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={() => {
                    setIsMyDonation(false);
                  }}
                  className={`inline-flex items-center justify-center p-4 ${
                    !isMyDonation
                      ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : ""
                  }  group`}
                  aria-current="page"
                >
                  <BiSolidDonateHeart className="text-2xl mr-2"></BiSolidDonateHeart>
                  Manage Request
                </button>
              </li>
            </ul>
          </div>
          <div>
            {isMyDonation ? (
              <div className="my-4">
                {myRequest?.length > 0 ? (
                  <div>
                    <div className="text-xl py-2 text-center border-b border-gray-200 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <h1>My Donation Request </h1>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Food Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Food Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Food Donar Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {myRequest.map((singleDonationData) => (
                            <tr
                              key={singleDonationData?._id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                  className="w-40 h-12 rounded-xl object-cover"
                                  src={singleDonationData?.foodImage}
                                  alt="Jese image"
                                />
                              </td>

                              <td className="px-6 py-4">
                                <div className="text-base font-semibold flex items-center text-black">
                                  {singleDonationData?.foodName}
                                </div>
                              </td>

                              <td className="flex justify-start px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={singleDonationData?.requesterImage}
                                  alt="Jese image"
                                />
                                <div className="pl-3">
                                  <div className="text-base font-semibold">
                                    {singleDonationData?.requesterName}
                                  </div>
                                  <div className="font-normal text-gray-500">
                                    {singleDonationData?.requesterEmail}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                                  {singleDonationData?.requestStatus}
                                </div>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  {singleDonationData?.requestDate}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  {singleDonationData?.requestTime}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <button
                                  onClick={() => {
                                    setOpenModal(true);
                                  }}
                                  type="button"
                                  data-modal-target="editUserModal"
                                  data-modal-show="editUserModal"
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  Delete
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
                                        Are you sure you want to delete this
                                        request?
                                      </h3>
                                      <div className="flex justify-center gap-4">
                                        <Button
                                          color="failure"
                                          onClick={() => {
                                            handleRequestDelete(
                                              singleDonationData?._id
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
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-[60vh] flex justify-center items-center">
                    <h1>No Request Available</h1>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {communityRequest?.length > 0 ? (
                  <div className="my-4">
                    <div className="text-xl py-2 text-center border-b border-gray-200 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <h1>Community Request </h1>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Food Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Food Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Food Requester Details
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Request Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {communityRequest.map((singleDonationData) => (
                            <tr
                              key={singleDonationData?._id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                  className="w-40 h-12 rounded-xl object-cover"
                                  src={singleDonationData?.foodImage}
                                  alt="Jese image"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-base font-semibold flex items-center text-black">
                                  {singleDonationData?.foodName}
                                </div>
                              </td>
                              <td className="flex justify-start px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={singleDonationData?.requesterImage}
                                  alt={singleDonationData?.requesterName}
                                />
                                <div className="pl-3">
                                  <div className="text-base font-semibold">
                                    {singleDonationData?.requesterName}
                                  </div>
                                  <div className="font-normal text-gray-500">
                                    {singleDonationData?.requesterEmail}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                  {singleDonationData?.requestStatus}
                                </div>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  {singleDonationData?.requestDate}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  {singleDonationData?.requestTime}
                                </div>
                              </td>
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
                                        Are you sure you want to accept this
                                        request?
                                      </h3>
                                      <div className="flex justify-center gap-4">
                                        <Button
                                          color="failure"
                                          onClick={() => {
                                            handleAccept(
                                              singleDonationData?.foodId,
                                              singleDonationData?._id
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
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-[60vh] flex justify-center items-center">
                    <h1>No Request Available</h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-2xl flex justify-center items-center h-[80vh]">
          You Don&apos;t have any request
        </div>
      )}
    </div>
  );
};

export default AllRequestPage;
