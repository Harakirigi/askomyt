'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href?: string;
    styles?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    ariaLabel?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
    href = '/',
    styles = '',
    children = 'Link',
    icon,
    onClick,
    className = '',
    ariaLabel,
}) => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const isActive = pathname === `/en${href}`;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Link
            href={href}
            className={`relative inline-flex items-center gap-2 font-semibold uppercase transition-all duration-300 ${className} ${styles} ${isHovered || isActive ? 'text-accent' : 'text-white'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            aria-label={ariaLabel || (typeof children === 'string' ? children : 'Link')}
            aria-current={isActive ? 'page' : undefined}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            {children}
            <span
                className={`
          absolute left-0 -bottom-1 w-full h-0.5 bg-accent
          transition-all duration-500 ease-in-out
          ${isHovered || isActive ? 'opacity-100' : 'opacity-0'}
        `}
                style={{
                    transform: isHovered || isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                }}
            />
        </Link>
    );
};

export default NavLink;