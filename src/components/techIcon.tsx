'use client';
import Image from "next/image";
import { useState } from "react";

interface TechIconProps {
    name: string;
    icon: string;
    accentIcon: string;
    setCurrentStack: (stack: string) => void;
    defaultText: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon, accentIcon, setCurrentStack, defaultText }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className="p-4 -m-2 transition-all duration-200 border border-transparent shadow-lg shadow-transparent rounded-xl hover:border-accent hover:-translate-y-2 hover:translate-x-1 hover:shadow-accent-10"
            onMouseOver={() => {
                setCurrentStack(name);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setCurrentStack(defaultText);
                setIsHovered(false);
            }}
        >
            <Image
                src={isHovered ? accentIcon : icon}
                alt={`${name}-icon`}
                width={42}
                height={42}
                className="transition-all duration-200"
            />
        </div>
    );
};

export default TechIcon;