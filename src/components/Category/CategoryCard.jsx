import PropTypes from 'prop-types';

const CategoryCard = ({image, title}) => {
  return ( 
    <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative group overflow-hidden ">
      <div>
        <img className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] group-hover:scale-110 object-cover object-center transition-all ease-in-out" src={image} alt="" />
      </div>
      <div className="flex justify-center items-center absolute top-0 z-10 lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-[#282828]/[.50]">
        <h1 className="text-white text-5xl font-bold justify-center items-center flex h-full">{title}</h1>
      </div>
    </div>
  )
}
CategoryCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}
export default CategoryCard
