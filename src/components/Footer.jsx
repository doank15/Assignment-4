import { CopyRight, GitHub, GMail, LinkedIn, Map, Resume } from './Icons';
import resume from '../assets/My-CV.pdf';

const Footer = () => {
    const year = new Date().getFullYear().toString()
    const contactInfo = [
        {
            id: 1,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/dhawal793/",
            icon: <LinkedIn />,
        },
        {
            id: 2,
            name: "GitHub",
            link: "https://github.com/dhawal-793",
            icon: <GitHub />,
        },
        {
            id: 3,
            name: "Mail",
            link: "mailto:vijaydhawal9001@gmail.com",
            icon: <GMail />,
        },
        {
            id: 4,
            name: "Resume",
            link: resume,
            icon: <Resume />,
            download: true
        }
    ];
    return (
        <div className='bg-gradient-to-t from-gray-500 via-black to-black  w-full  text-gray-300'>
            <div className="section pb-5 w-4/5">
                <div className="flex flex-wrap justify-between ">
                    <div className="w-full xs:w-3/5 lg:w-2/5 pr-2">
                        <h3 className='text-white text-[1.75rem] font-bold pb-2'>Daniel Mai</h3>
                        <p className='text-lg text-cyan-400 pb-5'>FullStack Developer</p>
                        <p>Thank you for visiting my Personal Portfolio.</p>
                        <p>Lets connect over socials.</p>
                        <p>Open to any Feedback</p>
                    </div>
                    <div className="w-2/5">
                        <h3 className='text-white text-2xl font-bold pb-4'>Contact info</h3>
                        <div className="flex flex-col sm:flex-row lg:flex-col  gap-5 xs:gap-10 sm:gap-5 md:gap-10 justify-between">
                            <div className='text-[0.9rem] font-advanced'>
                                <p className='flex items-center gap-3 mb-1'>
                                    <GMail /> daniel.mai@techvify.com.vn</p>
                                <p className='flex items-center gap-3 '> <Map /><span className="pt-1">Hai Hau, Nam Dinh, Viet Nam</span></p>
                            </div>
                            <ul className="flex items-center  gap-5 md:gap-8 lg:gap-4 justify-start ">
                                {contactInfo.map(({ id, link, name, icon, download }) => {
                                    return (
                                        <li key={id} className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}>
                                            <a href={link} download={download} target="_blank" rel='noferrer'>{icon}</a>
                                            <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                                                {name}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section py-2 text-black font-advanced">
                <div className="">
                    <p className=' text-sm text-gray-300 flex justify-center items-center  '>
                        <span className="px-1 pb-[0.2rem]">  <CopyRight /></span> {`2022- ${year}`} | All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
};

export default Footer;