import PropTypes from 'prop-types'
const Heading = ({heading, secondHeading}) => {
    return (
        <div className='pb-8 text-white'>
            <h2 className='text-4xl px-1 inline border-b-4 border-gray-400 font-bold'>{heading}</h2>
            {
                secondHeading && <p className='py-6 text-lg'>
                    {secondHeading}
                </p>
            }
        </div>
    );
};

Heading.propTypes = {
    heading: PropTypes.string,
    secondHeading: PropTypes.string,
}

export default Heading;