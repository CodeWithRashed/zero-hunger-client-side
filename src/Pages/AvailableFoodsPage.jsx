import { useEffect, useState } from "react";
import { fetchProductData } from "../Hooks/fetchData";
import { Link } from "react-router-dom";

const AvailableFoodsPage = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchProductData()
      .then((data) => setProductData(data))
      
  }, []);
  return (
    <div>
      {/* banner */}
      <div>
        <div
          className="slider-1 h-[80vh] flex relative"
          style={{
            backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1574351079295.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-content flex justify-center items-center flex-col z-10 space-y-5 bg-[#282828]/[.50] w-full h-full top-0 absolute">
            <h3 className="text-2xl lg:text-5xl font-pacifico text-[#FFFFFF]">
              It&apos;s not just a CAR!
            </h3>
            <h1 className="drop-shadow-xl text-4xl lg:text-9xl font-rubik text-[#ff2d37] font-bold">
              It&apos;s a DREAM!!
            </h1>
            <div className="cta"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 gap-5 my-[5%]">
          {productData?.map((product) => (
            <div key={product._id}>
              <Link to={`/products/${product._id}`}>
                <div className=" relative rounded-xl overflow-hidden group">
                  <div className="h-full w-full">
                    <img
                      className="h-[250px] w-full object-cover group-hover:scale-105 transition-all ease-in-out"
                      src={product?.productImage}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 bg-[#282828]/[.50] w-full p-2 text-center backdrop-blur">
                    <h1 className="text-xl font-bold text-white">
                      {product?.productName}
                    </h1>
                  </div>
                  <div className="absolute bottom-0 bg-[#282828]/[.50] w-full p-2 text-center backdrop-blur">
                    <Link
                      to={`/api/update/${product._id}`}
                      className="px-3 !w-[45%] py-2 bg-[#ff2d37] rounded-xl text-white text-center"
                    >
                      <button>Update</button>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodsPage;
