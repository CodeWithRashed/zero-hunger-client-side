// import required modules
import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="h-[80vh]">
      <Carousel slideInterval={2000}>
        <img
          src="https://img.freepik.com/free-photo/close-up-hands-holding-food-jar_23-2149182010.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-people-holding-apples-bag_23-2149182018.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-photo/medium-shot-volunteers-with-food-donations_23-2149182005.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
