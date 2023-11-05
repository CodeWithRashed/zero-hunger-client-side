import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";


const Banner = () => {
  return (
    <div className="h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Slider 1 Start */}
          <div
            className="slider-1 h-[80vh] flex relative"
            style={{
              backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/marketASIA/bmw_com_bd/image_large/bmw-home-teaser-the7-1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1616393731198.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-center items-center text-content relative z-10 space-y-5 bg-[#000000]/[.40] h-full w-full top-0">
             
              <h1 className="drop-shadow-xl text-5xl lg:text-7xl font-rubik text-[#fff] font-bold text-center">
              Experience <br /><span className="text-[#ff2d37]">The Thrill</span>
              </h1>
     
            </div>
          </div>
          {/* Slider 1 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 2 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Electric_2160.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-center items-center text-content relative z-10 space-y-5 bg-[#000000]/[.40] h-full w-full top-0">
             
             <h1 className="drop-shadow-xl text-5xl lg:text-7xl font-rubik text-[#fff] font-bold text-center">
             Cars that <br /><span className="text-[#ff2d37]"> Define You</span>
             </h1>
    
           </div>
          </div>
          {/* Slider 2 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 3 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('https://www.bmw.com.bd/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1574351079295.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Your Event, Our Expertise. */}
            <div className="flex justify-center items-center text-content relative z-10 space-y-5 bg-[#000000]/[.40] h-full w-full top-0">
             
             <h1 className="drop-shadow-xl text-5xl lg:text-7xl font-rubik text-[#fff] font-bold text-center">
             Your Dream <br /> <span className="text-[#ff2d37]">Car Awaits</span>
             </h1>
    
           </div>
          </div>
          {/* Slider 3 End */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
