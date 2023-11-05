import Items from "./Items";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const ItemsContainer = () => {
  return (
    <div className="my-[8%]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
       
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/category/c1.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/c/a/car_precedent_led_headlight_2.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/c/a/car_easy_installation_forland__2.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/b/f/bfgoodrich_all-terrain_ko_2.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/m/i/michelin_ltx_ms2_alloz.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/d/i/discount_starter_and_alternator_1.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/e/v/evolution_brake_kit_with_drilled.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/a/o/aosake_leather_steering_wheels_7.jpg"></Items>
        </SwiperSlide>
        <SwiperSlide className="h-[250px] w-[200px]">
          <Items title="Parts" image="http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/d/b/db_electrical_alternator_2.jpg"></Items>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ItemsContainer;
