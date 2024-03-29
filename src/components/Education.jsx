/* eslint-disable react/prop-types */
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from './Heading';
import { Link as ScrollLink } from 'react-scroll';

const Education = () => {

    const certificates = [
        {
            id: 1,
            image: "/assets/diploma-asincronismo-js 1.webp",
        },
        {
            id: 2,
            image: "/assets/diploma-ecmascript-6 1.webp",
        },
        {
            id: 3,
            image: "/assets/diploma-backend 1.webp",
        },
        {
            id: 4,
            image: "/assets/diploma-frontend-academlo 1.webp",
        }
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        draggable: true,
        rows: 1,
        responsive: [{
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 280,
            settings: "unslick" // destroys slick

        }]
    };

    return (
        <div name='Education' className='relative w-full h-unset md:h-screen bg-gradient-to-b to-gray-800 from-black text-white'>
            <div className='section w-1/2'>
                <Heading heading="Education" />
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='mb-2'>
                        <p className='py-6'>Check out some of my certificates</p>
                    </div>

                    <Slider {...settings} className="grid  w-[90%] lg:w-full mx-auto">
                        {certificates.map(({ id, image }) => {
                            return (
                                <div key={id} className="p-4 cursor-pointer">
                                    <img src={image} alt="Certificate" className="mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                    <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
                </ScrollLink>
            </div>
        </div>

    );
};

export default Education;
