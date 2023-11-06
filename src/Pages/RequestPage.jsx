import { useContext, useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { BiSolidDonateHeart, BiSolidUserCircle } from "react-icons/bi";

const RequestPage = () => {
  const [allData, setAllData] = useState(null);
  const [isMyDonation, setIsMyDonation] = useState(true);
  const { activeUser } = useContext(GlobalDataContext);
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

        console.log(myRequest);
        console.log(communityRequest);
        setAllData(data);
      });

    const fetchData = async () => {
      try {
        ("");
      } catch {
        ("");
      }
    };
    fetchData();
  }, [userEmail]);

  // const handleDelete = async (id) => {
  //   await fetch(`${import.meta.env.VITE_BACKEND_API}/api/delete/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setAllData((oldAllData) =>
  //         oldAllData.filter((item) => item._id !== id)
  //       );

  //       toast.success("Removed from Cart!!", {
  //         position: "top-center",
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     });
  // };

  return (
    <div>
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
              <div className="my-12">
                {allData?.length > 0 ? (
                  <div>
                    <h1>My Donation Request </h1>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Food Image
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
                          {allData.map((singleDonationData) => (
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
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                  {singleDonationData?.requestDate}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                                  {singleDonationData?.requestTime}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a
                                  href="#"
                                  type="button"
                                  data-modal-target="editUserModal"
                                  data-modal-show="editUserModal"
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* <!-- Edit user modal --> */}
                      <div
                        id="editUserModal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                      >
                        <div className="relative w-full max-w-2xl max-h-full">
                          {/* <!-- Modal content --> */}
                          <form
                            action="#"
                            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                          >
                            {/* <!-- Modal header --> */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit user
                              </h3>
                              <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="editUserModal"
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 space-y-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Bonnie"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="last-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Green"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@company.com"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="phone-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="number"
                                    name="phone-number"
                                    id="phone-number"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="e.g. +(12)3456 789"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="department"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Department
                                  </label>
                                  <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Development"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Company
                                  </label>
                                  <input
                                    type="number"
                                    name="company"
                                    id="company"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123456"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="current-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Current Password
                                  </label>
                                  <input
                                    type="password"
                                    name="current-password"
                                    id="current-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="new-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    New Password
                                  </label>
                                  <input
                                    type="password"
                                    name="new-password"
                                    id="new-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                              <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Save all
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div>
                {allData?.length > 0 ? (
                  <div className="my-12">
                    <h1>Community Request </h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Food Image
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
                          {allData.map((singleDonationData) => (
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
                              <td className="flex justify-start px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={singleDonationData?.donarImage}
                                  alt="Jese image"
                                />
                                <div className="pl-3">
                                  <div className="text-base font-semibold">
                                    {singleDonationData?.donarName}
                                  </div>
                                  <div className="font-normal text-gray-500">
                                    {singleDonationData?.donarEmail}
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
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                  {singleDonationData?.requestDate}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                                  {singleDonationData?.requestTime}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a
                                  href="#"
                                  type="button"
                                  data-modal-target="editUserModal"
                                  data-modal-show="editUserModal"
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  Accept
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* <!-- Edit user modal --> */}
                      <div
                        id="editUserModal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                      >
                        <div className="relative w-full max-w-2xl max-h-full">
                          {/* <!-- Modal content --> */}
                          <form
                            action="#"
                            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                          >
                            {/* <!-- Modal header --> */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit user
                              </h3>
                              <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="editUserModal"
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 space-y-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Bonnie"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="last-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Green"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@company.com"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="phone-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="number"
                                    name="phone-number"
                                    id="phone-number"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="e.g. +(12)3456 789"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="department"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Department
                                  </label>
                                  <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Development"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Company
                                  </label>
                                  <input
                                    type="number"
                                    name="company"
                                    id="company"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123456"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="current-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Current Password
                                  </label>
                                  <input
                                    type="password"
                                    name="current-password"
                                    id="current-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="new-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    New Password
                                  </label>
                                  <input
                                    type="password"
                                    name="new-password"
                                    id="new-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                              <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Save all
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-2xl flex justify-center items-center h-[80vh]">
          No Items Added to Cart
        </div>
      )}
    </div>
  );
};

export default RequestPage;
