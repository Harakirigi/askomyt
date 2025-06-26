'use client'
import { useState } from "react";
import Link from "next/link";

interface NavLinkProps {
    href?: string;
    styles?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href = "#", styles = "", children = "Link", icon, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Link
                className={`relative inline-block font-semibold text-white uppercase hover:text-accent transition-all duration-300 ${styles}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
                href={href}
            >
                {children}
                <span
                    className={`
                        absolute left-0 -bottom-1 w-full h-0.5 bg-accent
                        transition-all duration-500 ease-in-out
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'center',
                    }}
                />
            </Link>
        </>
    );
};

export default NavLink;