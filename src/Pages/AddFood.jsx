import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { useContext } from "react";
import { Helmet } from "react-helmet";

const AddFood = () => {
  const { activeUser } = useContext(GlobalDataContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const donarName = form.donar_name.value;
    const donarImage = form.donar_image.value;
    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const foodQuantity = form.quantity.value;
    const expireDate = form.expire_date.value;
    const donarEmail = form.email.value;
    const pickupLocation = form.location.value;
    const additionalNote = form.notes.value;
    const deliveryStatus = form.status.value;

    const foodData = {
      donarName,
      donarImage,
      foodName,
      foodImage,
      foodQuantity,
      expireDate,
      donarEmail,
      pickupLocation,
      additionalNote,
      deliveryStatus,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/user/add/food`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(foodData),
        }
      );
      if (response.ok) {
        await response.json();
        form.reset();
        toast.success("Food Added!", {
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
  return (
    <div className="py-[5%] my-20 text-2xl px-6 pt-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
      <Helmet>
        <title>Zero Hunger | Add Food</title>
      </Helmet>
      <div className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <div className="w-full">
          <h1
            className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            Add Food
          </h1>
        </div>
      </div>
      <div className="mx-auto rounded-b-xl py-5 px-8 ">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                defaultValue={activeUser?.displayName}
                name="donar_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="donar_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Donar Image
              </label>
              <input
                type="url"
                disabled
                defaultValue={activeUser?.photoURL}
                name="donar_image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="food_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Food Name
              </label>
              <input
                type="text"
                name="food_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food Name.."
                required
              />
            </div>
            <div>
              <label
                htmlFor="food_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Food Image
              </label>
              <input
                type="tel"
                name="food_image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food Image Url.."
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                disabled
                defaultValue={activeUser?.email}
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Pickup Location"
                required
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue="1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="expire_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="expire_date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Availability
              </label>
              <select
                name="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="Available">
                  Available
                </option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Additional Note
            </label>
            <textarea
              type="text"
              name="notes"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="!w-full flex justify-center items-centers">
            <button
              type="submit"
              className="text-white !w-1/4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
