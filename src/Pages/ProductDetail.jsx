import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

import { useContext, useEffect, useState } from "react";
import { fetchFoodData } from "../Hooks/fetchData";
import { toast } from "react-toastify";
import { GlobalDataContext } from "../ContextApi/DataContext";

const ProductDetail = () => {
  const {activeUser} = useContext(GlobalDataContext)
  const userEmail = activeUser.email
  const product = useLoaderData();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchFoodData()
      .then((data) => {
        setProductData(
          data.filter((singleData) =>
            singleData.productType.includes(product.productType)
          )
        );
      })
      
  }, [product]);

  const handleAddCart = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/addCartItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, userEmail}),
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
    <div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img src={product.productImage} alt="" />
        </div>
        <div className="content space-y-3">
          <p>Product Details</p>
          <div className="space-y-3 flex flex-col ">
            <h1 className="text-4xl">{product.productName}</h1>
            <div className="review   flex flex-col lg:flex-row gap-5 text-xl">
              <p> 1 Review</p>
              <Rating
               emptySymbol={<AiOutlineStar className="text-[#ff2d37]"></AiOutlineStar>}
               fullSymbol={<AiFillStar className="text-[#ff2d37]"></AiFillStar>}
              readonly={true}
               
                initialRating={4}
              />
              <p className="hover:text-[#ff2d37]">Add Your Review</p>
            </div>
            <h1 className="text-3xl my-3 text-[#ff2d37]">
              <span className="text-[#282828]">Price: </span>
              <span className="text-4xl"> {product.productPrice}</span>$
            </h1>
          </div>
          <div>
            <button
              onClick={() => {
                handleAddCart(product._id);
              }}
              className="mb-5 w-full bg-[#ff2d37] text-white font-bold py-1 rounded-xl"
            >
              Add to Cart
            </button>
            <Link to="/cart"
              
              className="inline-block text-center w-full bg-[#ff2d37] text-white font-bold py-1 rounded-xl"
            >
              Go to Cart
            </Link>
          </div>
          
        </div>
      </div>
      <div className="py-[8%]">
        <div className="flex justify-between gap-6 bg-slate-200 p-3 overflow-hidden">
          <Link className="text-[#ff2d37] font-bold">Description</Link>
          <Link className="hover:text-[#ff2d37] font-bold">Reviews</Link>
          <Link className="hover:text-[#ff2d37] font-bold">Specification</Link>
          <Link className="hover:text-[#ff2d37] font-bold">Comments</Link>
          <Link className="hover:text-[#ff2d37] font-bold">Image Gallery</Link>
        </div>
        <div className="mt-5">
          <p>{product.productDescription}</p>
        </div>
      </div>
      <div>
        <div>
          <SectionTitle
            title="RELATED PRODUCTS"
            subtitle="Product on Same Category"
          ></SectionTitle>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-5 mb-20">
            {productData.map((product) => (
              <div key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <div className=" relative rounded-xl overflow-hidden group">
                    <div className="h-[250px]">
                      <img
                        className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out"
                        src={product?.productImage}
                        alt=""
                      />
                    </div>
                    <div className="absolute bottom-0 bg-[#282828]/[.50] w-full p-2 text-center backdrop-blur">
                      <h1 className="text-xl font-bold text-white">
                        {product?.productName}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
