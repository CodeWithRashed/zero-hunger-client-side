import { useEffect, useState } from "react";
import { fetchProductData } from "../../Hooks/fetchData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
const ProductSection = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchProductData()
      .then((data) => {
        setProductData(data.slice(-6));
      })
    
  }, []);


  return (
    <div className="my-[8%]">
      <SectionTitle
        subtitle="TOP NEW ON THIS WEEK"
        title="NEW ARRIVALS"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {productData.map((product) => (
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
