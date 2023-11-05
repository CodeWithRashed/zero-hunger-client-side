import PropTypes from 'prop-types'
const Items = ({image, title}) => {
  return (
    <div>
      <div className="rounded-full border-2 border-red-500 overflow-hidden h-[200px] w-[200px]">
        <img className="h-[200px] w-[200px] object-cover object-center"
          src={image}
          alt=""
        />
      </div>
      <div><h2 className="text-lg font-bold text-center mt-4 uppercase dark:text-white">{title}</h2></div>
    </div>
  );
};

Items.propTypes = {
  image: PropTypes.string,
    title: PropTypes.string
}

export default Items;
