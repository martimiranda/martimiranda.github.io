import { useEffect, useState } from "react";

import reactIcon from "../assets/svg/technologies/react.svg";
import typescriptIcon from "../assets/svg/technologies/typescript.svg";
import pythonIcon from "../assets/svg/technologies/python.svg";
import djangoIcon from "../assets/svg/technologies/django.svg";
import fastapiIcon from "../assets/svg/technologies/fastapi.svg";
import dockerIcon from "../assets/svg/technologies/docker.svg";
import postgresqlIcon from "../assets/svg/technologies/postgresql.svg";
import gitIcon from "../assets/svg/technologies/git.svg";
import linuxIcon from "../assets/svg/technologies/linux.svg";

function Home() {
    const technologies = [
        { name: "React", icon: reactIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Django", icon: djangoIcon },
        { name: "FastAPI", icon: fastapiIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "Git", icon: gitIcon },
        { name: "Linux", icon: linuxIcon },
    ];

    const fullName = "Martí Miranda Martorell";
    const [displayedName, setDisplayedName] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullName.length) {
                setDisplayedName(fullName.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="flex min-h-screen items-center overflow-hidden"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pt-20">

                <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
                    {displayedName}

                    <span className="ml-1 inline-block animate-pulse text-blue-600">
                        |
                    </span>
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-blue-600 md:text-3xl opacity-0 animate-slide-in transition-all duration-200">
                    Backend Developer
                </h2>

                <div className="mt-12 flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                            className="
                                group
                                flex items-center gap-2
                                rounded-full
                                border border-gray-200
                                bg-gray-50
                                px-4 py-2

                                opacity-0
                                animate-slide-in

                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-blue-300
                                hover:bg-blue-50
                                hover:shadow-md
                            "
                        >
                            <img
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                className="
                                    h-5 w-5
                                    object-contain
                                    transition-transform duration-200
                                    group-hover:scale-110
                                "
                            />

                            <span
                                className="
                                    text-sm font-medium
                                    text-gray-700
                                    transition-colors
                                    group-hover:text-blue-700
                                "
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Home;