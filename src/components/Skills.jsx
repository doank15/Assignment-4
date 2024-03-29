import GridLayout from './GridLayout'
import Skill from './Skill'
import Heading from './Heading'
import { Bootstrap, C, CPlusPlus, CSS, ExpressJS, FireBase, Git, GitHub, HTML, Java, JS, MaterialUI, MongoDB, MySQL, NextJs, PHP, PostGreSql, Python, SASS, TailwindCSS, TS } from './Icons'

const Skills = () => {

const skills = [
    {
        id: 1,
        icon: <HTML />,
        name: "HTML",
        style: {
            shadow: "shadow-[#ca4828]",
            cover: "from-black to-[#ca4828]  rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 2,
        icon: <CSS />,
        name: "CSS",
        style: {
            shadow: "shadow-[#1d64c7]",
            cover: "from-black to-[#1d64c7] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 3,
        icon: <JS />,
        name: "JS",
        style: {
            shadow: "shadow-[#ffda53]",
            cover: "from-black to-[#ffda53] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 4,
        icon: <TS />,
        name: "TS",
        style: {
            shadow: "shadow-[#3481d3]",
            cover: "from-black to-[#3481d3] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 5,
        icon: <MongoDB />,
        name: "MongoDB",
        style: {
            shadow: "shadow-[#4FAA41]",
            cover: "from-black to-[#4FAA41] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 6,
        icon: <ExpressJS />,
        name: "Express Js",
        style: {
            shadow: "shadow-[#444444]",
            cover: "from-black to-[#444444] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 7,
        icon: <NextJs />,
        name: "NextJs",
        style: {
            shadow: "shadow-[#646464]",
            cover: "from-black to-[#646464] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 8,
        icon: <TailwindCSS />,
        name: "Tailwind",
        style: {
            shadow: "shadow-[#3D8FC6]",
            cover: "from-black to-[#3D8FC6] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        icon: <Bootstrap />,
        name: "Bootstrap",
        style: {
            shadow: "shadow-[#6610F2]",
            cover: "from-black to-[#6610F2] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 10,
        icon: <SASS />,
        name: "SASS",
        style: {
            shadow: "shadow-[#CC6699]",
            cover: "from-black to-[#CC6699] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 11,
        icon: <MaterialUI />,
        name: "MaterialUI",
        style: {
            shadow: "shadow-[#1266A9]",
            cover: "from-black to-[#1266A9] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 12,
        icon: <MySQL />,
        name: "MySQL",
        style: {
            shadow: "shadow-[#00618A]",
            cover: "from-black to-[#00618A] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 13,
        icon: <PostGreSql />,
        name: "PostgreSql",
        style: {
            shadow: "shadow-[#336791]",
            cover: "from-black to-[#336791] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 14,
        icon: <FireBase />,
        name: "Firebase",
        style: {
            shadow: "shadow-[#d49a35]",
            cover: "from-black to-[#d49a35] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 15,
        icon: <Git />,
        name: "Git",
        style: {
            shadow: "shadow-[#F34F29]",
            cover: "from-black to-[#F34F29] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 16,
        icon: <GitHub />,
        name: "GitHub",
        style: {
            shadow: "shadow-[#5c5a5a]",
            cover: "from-black to-[#5c5a5a] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 17,
        icon: <PHP />,
        name: "PHP",
        style: {
            shadow: "shadow-[#9597c8]",
            cover: "from-black to-[#9597c8] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 18,
        icon: <CPlusPlus />,
        name: "C++",
        style: {
            shadow: "shadow-[#004482]",
            cover: "from-black to-[#004482] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 19,
        icon: <Python />,
        name: "Python",
        style: {
            shadow: "shadow-[#ddbe4e]",
            cover: "from-black to-[#ddbe4e] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 20,
        icon: <Java />,
        name: "Java",
        style: {
            shadow: "shadow-[#E76F00]",
            cover: "from-black to-[#E76F00] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 21,
        icon: <C />,
        name: "C",
        style: {
            shadow: "shadow-[#3949AB]",
            cover: "from-black to-[#3949AB] rounded-b-md",
            opacity: "opacity-80"

        }
    },]
    return (
        <div name="Skills" className='pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800  to-black'>
            <div className="section w-1/2">
                <Heading heading="Skills" secondHeading="These are the Technologies I've worked with" />
                <div className="py-2 xs:p-4 rounded-lg bg-gray-900">
                    <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                        {skills.map((skill, index) => {
                            return (
                                <Skill key={index} skill={skill} />
                            )
                        })}
                    </GridLayout>
                </div>
            </div>
        </div>
    )
}

export default Skills;