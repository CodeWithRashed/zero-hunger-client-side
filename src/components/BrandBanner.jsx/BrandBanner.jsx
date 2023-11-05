import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";


const BrandBanner = ({brand}) => {

  const brandImage = {
    toyota: {
      images: [
        "https://www.reuters.com/resizer/wtmGvWkNhaa7BbvxSKfVno8WCHo=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OTTTLOOKIJPJLPDPCOZP7TANQ4.jpg",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/w_1280,h_853,q_auto,c_fit,f_auto,fl_lossy/auto-client/356d389f3aa727eb006f4213a25a55d8/hilux_visual_2_tcm_3060_2017358.jpg",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/w_1280,h_853,q_auto,c_fit,f_auto,fl_lossy/auto-client/bfe4b567088e16e8ec11546db67c1733/toyota_hilux_2020_gallery_06_full_tcm_3060_2017455.jpg",
      ],
    },
    ford: {
      images: [
        "https://cdn.outsideonline.com/wp-content/uploads/2020/07/13/2021-ford-bronco_h.jpg",
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/mi2qdyn56frxoagoc867",
        "https://cdn.motor1.com/images/mgl/vvj2G/s3/2019-ford-ranger-raptor.webp",
      ],
    },
    bmw: {
      images: [
        "https://cdn.motor1.com/images/mgl/NGOMej/s3/bmw-i5-edrive40-2023.webp",
        "https://www.autopediame.com/storage/images/BMW/XM/xm%20exterior%20.jpg",
        "https://cdn.bmwblog.com/wp-content/uploads/2020/10/g82-bmw-m4-widebody-03-1536x864.jpg",
      ],
    },
    mercedes: {
      images: [
        "https://carwow-uk-wp-3.imgix.net/Medium-39588-Mercedes-BenzConceptEQG-scaled-e1675695000855.jpg",
        "https://www.mbofselma.com/wp-content/themes/DealerInspireDealerTheme/images/service-bg.jpg",
        "https://images.wapcar.my/file1/7e16a4942f5f40dc9f0cfedc1241e654_1608x906.jpeg",
      ],
    },
    tesla: {
      images: [
        "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/1ce5ecec-cb1e-4be7-918f-b1d89e2967f9/Tesla%20Model%20X%20%283%29.jpg",
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/abzia5ka0lgi4wnhirgv",
        "https://images.prismic.io/carwow/fe2aa5f2-7160-415d-8548-99c5e0bea5b1_2023+Tesla+Model+X+performance+section.jpg",
      ],
    }
  };
  
  return (
    <div className="h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
              backgroundImage: `url('${brandImage[`${brand}`]["images"][0]}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
              <div className="w-full">
              <h1 className="bg-[#000000]/[.50] uppercase text-white  h-full !w-[100%] flex justify-center items-center text-5xl lg:text-9xl font-bold" >{brand}</h1>
            </div>
          </div>
          {/* Slider 1 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 2 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('${brandImage[`${brand}`]["images"][1]}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
          
          </div>
          {/* Slider 2 End */}
        </SwiperSlide>

        <SwiperSlide>
          {/* Slider 3 Start */}
          <div
            className="slider-2 h-[80vh] flex"
            style={{
              backgroundImage: `url('${brandImage[`${brand}`]["images"][2]}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Your Event, Our Expertise. */}
            
          </div>
          {/* Slider 3 End */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
BrandBanner.propTypes = {
  brand: PropTypes.string,
};
export default BrandBanner;
