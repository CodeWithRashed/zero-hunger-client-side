import SectionTitle from "../SectionTitle/SectionTitle";

const AccessoriesSection = () => {
  const accessoriesItems = [
    {
      product_name: "Brake Kit",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/25d5cea2b4275997eff2b120aa671f55/e/v/evolution_brake_kit_with_drilled.jpg",
      price: "$49.99",
      rating: 4,
    },
    {
      product_name: "Steering Wheels",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/25d5cea2b4275997eff2b120aa671f55/c/o/cover_for_15_inches_steering_wheels_7.jpg",
      price: "$29.99",
      rating: 5,
    },
    {
      product_name: "Premium Wheels",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/h/a/hankook_dynapro_off-road.jpg",
      price: "$69.99",
      rating: 4,
    },
    {
      product_name: "Engine Oil",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/b/r/briggs_stratton_30w_engine.jpg",
      price: "$129.99",
      rating: 5,
    },
    {
      product_name: "Radio Adapter",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/b/l/bluetooth_v4.2_radio_adapter_1.jpg",
      price: "$19.99",
      rating: 4,
    },
    {
      product_name: "Led Headlight",
      image_url:
        "http://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/c3afea197651cb497f6c3dae78fbf7c1/c/a/car_precedent_led_headlight_2.jpg",
      price: "$39.99",
      rating: 5,
    },
  ];

  return (
    <div className="my-[5%]">
      <SectionTitle
        subtitle="Update Your Parts"
        title="Accessories"
      ></SectionTitle>

      <div className="grid lg:grid-cols-3 gap-5 ">
        {accessoriesItems.map((product, index) => (
          <div key={index}>
            <div className="shadow-xl">
              <div className=" relative rounded-xl overflow-hidden group">
                <div className="h-[450px] w-full">
                  <img
                    className="h-[450px] w-full object-cover group-hover:scale-105 transition-all ease-in-out"
                    src={product?.image_url}
                    alt=""
                  />
                </div>
                <div className="absolute dark:bg-[#ff2d37] bottom-0 bg-[#282828] w-full p-2 text-center backdrop-blur">
                  <h1 className="text-xl font-bold text-white">
                    {product?.product_name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesSection;
