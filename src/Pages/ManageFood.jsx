import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductData } from "../Hooks/fetchData";
import BrandBanner from "../Components/BrandBanner.jsx/BrandBanner";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ManageFood = () => {
  const brand = useParams();
  const [productData, setProductData] = useState([]);
 

  useEffect(() => {
    fetchProductData()
      .then((data) => {
        let filterData = data.filter((oneData) =>
          oneData.brandName.includes(brand.brand)
        );
      
        setProductData(filterData);
      })
     
  }, [brand]);

  return (
    <div>
      {productData.length > 1 ? (
        <div>
          <BrandBanner brand={brand.brand}></BrandBanner>
          <div className="grid lg:grid-cols-3 gap-5 my-[8%]">
            {productData?.map((product) => (
              <div key={product._id}>
                <div className="shadow-lg border border-[#ff2d37] rounded-xl">
                  <div className="p-3">
                    <h1 className="text-2xl">{product?.productName}</h1>
                    <h1 className="text-xl uppercase">
                      <span>Brand: </span>
                      {product?.brandName}
                    </h1>
                  </div>
                  <div className="img h-[200px]">
                    <img
                      className="h-[200px] w-full object-cover"
                      src={`${product?.productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="content p-3">
                    <h1 className="text-2xl uppercase">
                      <span>Type: </span> {product?.productType}
                    </h1>
                    <h1 className="text-2xl uppercase">
                      <span>Price: </span>
                      {product?.productPrice}$
                    </h1>
                    <div className="text-2xl uppercase flex items-center gap-1">
                      <span>Ratting: </span>
                      <span><Rating className="flex items-center"
                        emptySymbol={
                          <AiOutlineStar className="text-[#ff2d37] flex items-center text-2xl"></AiOutlineStar>
                        }
                        fullSymbol={
                          <AiFillStar className="text-[#ff2d37] text-2xl"></AiFillStar>
                        }
                        readonly={true}
                        initialRating={4}
                      /></span>
                      
                    </div>
                    <div className="cta text-2xl flex justify-between items-center gap-[4%]  my-5">
                      <Link
                        to={`/products/${product._id}`}
                        className="px-3 !w-[45%] py-2 bg-[#ff2d37] rounded-xl text-white text-center"
                      >
                        <button>Details</button>
                      </Link>
                      <Link
                        to={`/api/update/${product._id}`}
                        className="px-3 !w-[45%] py-2 bg-[#ff2d37] rounded-xl text-white text-center"
                      >
                        <button>Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          NO DATA AVAILABLE
        </div>
      )}
    </div>
  );
};

export default ManageFood;
