import Link from "next/link";

interface NavLinkProps {
    href?: string;
    styles?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href = "#", styles = "", children = "Link", icon }) => {
    return (
        <>
            <Link
                className={`font-semibold text-white uppercase hover:text-white-400 transition-all duration-300 ${styles}`}
                href={href}
            >
                {children}
            </Link>
        </>
    );
};

export default NavLink;