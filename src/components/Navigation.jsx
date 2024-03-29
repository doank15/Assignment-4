import { Link } from 'react-scroll'
import PropTypes from 'prop-types';
const Navigation = ({ ulClass, liClass, handleClick }) => {
    const navLinks = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Projects",
        },
        {
            id: 4,
            link: "Skills",
        },
        {
            id: 5,
            link: "Contact"
        }
    ]
    return (
        <ul className={ulClass}>
            {navLinks.map(({ id, link, href }) => {
                return (
                    <li key={id} className={`mx-4 py-2 capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-300 ${liClass}`}>
                        {id === 5 ? <a href={href} target='_blank' rel='noferrer'>{link}</a> :
                            <Link onClick={handleClick} to={link} smooth duration={500}>{link}</Link>}
                    </li>
                )
            })}
        </ul>
    );
};
Navigation.propTypes = {
    ulClass: PropTypes.string,
    liClass: PropTypes.string,
    handleClick: PropTypes.func
};
export default Navigation;