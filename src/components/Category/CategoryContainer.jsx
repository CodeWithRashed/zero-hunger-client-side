import SectionTItle from "../SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const CategoryContainer = () => {
  const brandNames = ["toyota", "ford", "bmw", "mercedes", "tesla", "honda"];
  return (
    <div className="my-[8%] text-center flex justify-between flex-col">
      <SectionTItle subtitle="Among the Best" title="Category"></SectionTItle>
      <div className="grid lg:gap-x-16 gap-y-5 lg:gap-y-8 lg:grid-cols-3 justify-center lg:justify-between">
        <div className="dark:border-2 dark:border-[#ff2d37] w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden">
        <Link   to={`/products/brand/${brandNames[3]}`}>
          <CategoryCard
            image="http://magento2.magentech.com/themes/sm_autostore/pub/media/wysiwyg/categories/cate-1.jpg"
            title="Mercedes-Benz"
          ></CategoryCard>
        </Link>

        </div>
       
        <div className="dark:border-2 dark:border-[#ff2d37] w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden">
        <Link to={`/products/brand/${brandNames[0]}`}>
          <CategoryCard
            image="https://dealerdotcom.webdamdb.com/embeddables/display.php?size=550&webid=AB986Ehgc06UWNCJ"
            title="TOYOTA"
          ></CategoryCard>
        </Link>
          </div>
        
        <div className="dark:border-2 dark:border-[#ff2d37] w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden">
        <Link to={`/products/brand/${brandNames[5]}`}>
          <CategoryCard
            image="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage-Redesign/Hero/2024-Pilot/Homepage_Hero_Carousel_L_3019x1190.jpg?sc_lang=en"
            title="Honda"
          ></CategoryCard>
        </Link>
          </div>
       
        <div className="dark:border-2 dark:border-[#ff2d37] w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden">
        <Link to={`/products/brand/${brandNames[1]}`}>
          <CategoryCard
            image="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/bronco/2024/collections/dm/23_FRD_BRO_49888.tif?croppathe=1_21x9&wid=1440"
            title="Ford"
          ></CategoryCard>
        </Link>
          </div>
       
        <div className=" w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden dark:border-2 dark:border-[#ff2d37]">
        <Link to={`/products/brand/${brandNames[2]}`}>
          <CategoryCard
            image="https://www.bmw.com.bd/content/dam/bmw/marketASIA/common/publicPools/teaser-pool/home/m-performance-parts-m.jpg/jcr:content/renditions/cq5dam.resized.img.485.low.time1464789163417.jpg"
            title="BMW"
          ></CategoryCard>
        </Link>
          </div>
        
        <div className="dark:border-2 dark:border-[#ff2d37] w-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden"> <Link to={`/products/brand/${brandNames[4]}`}>
          <CategoryCard
            image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Performance-Carousel-Slide-1-Desktop-Global"
            title="TESLA"
          ></CategoryCard>
        </Link>
          
          </div>
       
      </div>
    </div>
  );
};

export default CategoryContainer;
