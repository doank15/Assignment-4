import { TypeAnimation } from 'react-type-animation'
import ResumeLink from '../assets/My-CV.pdf'
import { Link } from 'react-scroll'
import { ArrowDown, LinkedIn, GitHub, GMail, Resume } from './Icons';
import Avatar from "../assets/Avatars/207fa031c010d9ac942e674ce04812b5.svg"
const Home = () => {
    const work = ['Frontend Developer', 2000, "Backend Developer", 2000]
    const contactSocial = [
        {
            id: 1,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/mai-the-doan-027519217/",
            icon: <LinkedIn/>,
        },
        {
            id: 2,
            name: "GitHub",
            link: "https://github.com/doank15",
            icon: <GitHub/>,
        },
        {
            id: 3,
            name: "Gmail",
            link: "to:daniel.mai@techvify.com.vn",
            icon: <GMail/>,
        },
        {
            id: 4,
            name: "Resume",
            link: ResumeLink,
            download: true,
            icon: <Resume/>,
        }
    ]
    return (
        <div name="Home" className='flex pt-8 h-full min-h-screen w-full items-center bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='section flex-row justify-center gap-16 md:gap-1 md:justify-between items-center md:flex-row-reverse'>
                <div className='flex justify-center md:w-2/5 max-w-[320px] '>
                    <img src={Avatar} alt="avatar" width="auto" height="auto" loading='eager' title='Avatar' className='rounded-full mx-auto w-full' />
                </div>
                <div className="pl-2 xs:pl-8 flex flex-col gap-3 justify-center text-gray-200 w-max md:w-3/5">
                    <h1 className="text-5xl xs:text-6xl lg:text-7xl font-bold">
                        <span className="block">Hi There, </span>
                        <span>I&apos;m </span>
                        <span className="text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text">Daniel</span>
                    </h1>
                    <p className="text-gray-400 text-xl xs:text-2xl font-semibold py-4 min-w-[16rem] xs:min-w-[25rem] max-w-[2r6rem]">
                        <span className="block xs:inline">I am into</span>
                        <span className="text-cyan-400 xs:pl-2">
                            <TypeAnimation
                                sequence={work}
                                speed={1}
                                wrapper='span'
                                cursor={true}
                                repeat={Infinity}
                            ></TypeAnimation>
                        </span>
                    </p>
                    <ul className='flex items-center z-40 gap-3 md:gap-8 lg:gap-4 justify-start'>
                        {
                            contactSocial.map(({ id, link, name, icon, download }) => {
                                return (
                                    <li key={id} className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}>
                                        <a href={link} download={download} target='_blank' rel='noferrer'>{icon}</a>
                                        <div className='flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300'>
                                            {name}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='py-5'>
                        <Link to='About' smooth duration={500} className='z-30 group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3 rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-40 relative'>
                            <span className='pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out'>About Me</span>
                            <span className='absolute z-30 right-5 sm:-translate-y-7 sm:group-hover:translate-y-0 sm:scale-0 transition-all group-hover:scale-125 ease-in delay-200 animate-pulse duration-500'>
                                <ArrowDown />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
