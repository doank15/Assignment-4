import { Cancel, Hamburger, Menu} from './Icons';
import PropTypes from 'prop-types';

const ToggleMenu = ({handleClick, navOpen}) => {
    return (
        <div className='group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300' onClick={handleClick}>
            {
                navOpen && <div className='group'>
                    <span className='group-hover:hidden'>
                        <Cancel color="#6B7280"></Cancel>
                    </span>
                    <span className='hidden group-hover:block'>
                        <Cancel color="#EF4444"></Cancel>
                    </span>
                </div>
            }
            {
                !navOpen && <div className='group'>
                <span className='group-hover:hidden'>
                    <Menu></Menu>
                </span>
                <span className='hidden transition-all delay-75 group-hover:block'>
                    <Hamburger></Hamburger>
                </span>
            </div>
            }
        </div>
    );
};
ToggleMenu.propTypes = {
    navOpen: PropTypes.bool,
    handleClick: PropTypes.func
  };

export default ToggleMenu;