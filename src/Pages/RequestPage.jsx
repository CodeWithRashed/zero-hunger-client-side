import { useContext, useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { GlobalDataContext } from "../ContextApi/DataContext";

const RequestPage = () => {
  const [allData, setAllData] = useState(null);
  const cartItemsRaw = useLoaderData();
  const {activeUser} = useContext(GlobalDataContext)
  const userEmail = activeUser.email

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartItems = cartItemsRaw.filter(singleItem => singleItem.userEmail.includes(userEmail))
        const data = await fetchFoodData();
        const filteredData = data.filter((singleData) =>
          cartItems?.some((item) => item.id === singleData._id)
        );
      
        setAllData(filteredData);
      } finally {
        ""
      }
    };
    fetchData();
  }, [cartItemsRaw, userEmail]);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setAllData((oldAllData) =>
          oldAllData.filter((item) => item._id !== id)
        );

        toast.success("Removed from Cart!!", {
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
      {allData?.length > 0 ? (
        <div className="cart-container grid lg:grid-cols-4 gap-8">
          <div className="cart-content lg:col-span-3">
            <div className="grid  border-b mb-3">
              <h1 className="font-semibold col-span-2 text-2xl">
                Shopping Cart
              </h1>
            </div>
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="font-semibold col-span-2 text-gray-600 text-xs uppercase">
                    Product Image
                  </th>
                  <th className="font-semibold col-span-4 text-gray-600 text-xs uppercase">
                    Product Name
                  </th>
                  <th className="col-span-2 font-semibold text-gray-600 text-xs uppercase ">
                    Price
                  </th>
                  <th className="col-span-2 font-semibold text-gray-600 text-xs uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allData?.map((cartItem) => (
                  <tr className="mb-5" key={cartItem._id}>
                    <td className="my-2">
                      <img
                        className="h-10 w-10 rounded-xl"
                        src={cartItem?.productImage}
                        alt=""
                      />
                    </td>
                    <td className="text-xl ">{cartItem?.productName}</td>
                    <td className="text-xl">{cartItem?.productPrice}$</td>
                    <td>
                      <button
                        onClick={() => handleDelete(cartItem._id)}
                        className="text-xl  p-2 hover:text-[#ff2d37]"
                      >
                        <AiFillDelete></AiFillDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="order-summary">
            <div className=" mb-3">
              <h1 className="font-semibold text-2xl border-b">Order Summary</h1>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-sm uppercase">
                <span>Total Items:</span> 3
              </span>
              <span className="font-semibold text-sm">
                <span>SUB TOTAL: </span>590$
              </span>
            </div>

            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-[#ff2d37] hover:bg-[#ff2d37]/[.80] px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-[#ff2d37] hover:bg-[#ff2d37]/[.80] py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
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
