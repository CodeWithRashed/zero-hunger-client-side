import PropTypes from 'prop-types'

const SectionTitle = ({subtitle, title}) => {
  return (
    <div className='mb-10 text-center'>
      <h3 className='lg:text-2xl text-xl text-[#ff2d37]'>{subtitle}</h3>
      <h1 className='text-[#282828] text-3xl lg:text-5xl dark:text-white  uppercase font-bold'>{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
    title: PropTypes.string
}

export default SectionTitle
