import { FC } from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";

interface Props {}

const Skills: FC<Props> = () => {
    const known_tech: string[][] = [
        [
            "Javascript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        ],
        [
            "Typescript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        ],
        [
            "React",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        ],
        [
            "NextJS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
        ],
        [
            "CSS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        ],
        [
            "HTML",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        ],
        [
            "SASS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        ],
        [
            "Tailwind",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        ],
        [
            "Webpack",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        ],
        [
            "NodeJS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        ],
    ];

    return (
        <section
            className="md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-1
            min-h-screen section
            "
            id="skills"
        >
            <h2 className="header">Skills:</h2>

            <Spotlight className="grid grid-cols-auto-fit-100 md:grid-cols-auto-fit-200 gap-2">
                {known_tech.map(([name, url]) => (
                    <SpotlightCard
                        key={name + url}
                        className="border-[2px solid transparent] border-2 border-solid border-gray-300 bg-shine bg-white-shine
                        shadow-gray-200 shadow-[0_0_30px_-15px,inset_0_0_20px_-15px] rounded-lg p-4
                        hover:animate-none 
                        "
                    >
                        <img
                            src={url}
                            alt={`${name} logo`}
                            className="w-16 h-16 mx-auto
                            "
                        />

                        <div className="text-center text-lg ">{name}</div>
                    </SpotlightCard>
                ))}
            </Spotlight>
        </section>
    );
};

export default Skills;
