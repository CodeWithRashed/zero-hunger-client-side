import PropTypes from 'prop-types'

const SectionTitle = ({subtitle, title}) => {
  return (
    <div className='mb-10 text-center'>
      <h3 className='text-gray-500 whitespace-pre-line dark:text-gray-400'>{subtitle}</h3>
      <h1 className='text-5xl text-gray-900 dark:text-white'>{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
    title: PropTypes.string
}

export default SectionTitle
