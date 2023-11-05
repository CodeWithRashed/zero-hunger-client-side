import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';



import { useContext, useEffect } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";

const FoodDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { activeUser } = useContext(GlobalDataContext);
  const userEmail = activeUser.email;
  const product = useLoaderData();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchFoodData().then((data) => {
      setProductData(
        data.filter((singleData) =>
          singleData.productType.includes(product.productType)
        )
      );
    });
  }, [product]);

  const handleAddCart = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/addCartItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, userEmail }),
    }).then(() => {
      toast.success("Added to Cart", {
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
    <div className="w-full flex gap-5">
      {/* Food Details */}
      <div className="">
        <div>
          <img className="object-cover" src={product?.foodImage} alt="" />
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
            src={product.donarImage}
            alt={product.donarName}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {product.donarName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            total donation
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
                {product.foodQuantity}
              </li>
            </div>
            <div className="flex">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                Expire Date
              </li>
              <li className="w-full px-4 py-2 border border-gray-200  dark:border-gray-600">
                {product.expireDate}
              </li>
            </div>
{/* <!-- Modal toggle --> */}
            <button  onClick={() => setOpenModal(true)} className="w-full px-4 py-2 rounded-b-lg text-center">
              Request Food
            </button>
            



{/* <!-- Main modal --> */}
<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
