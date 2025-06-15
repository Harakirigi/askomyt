import Link from "next/link"
import Button from "./button"


export const NavLink = (
    {
        href = "#",
        styles = "",
        children = "Link",
        icon,
    }
) => {
    return (
        <>
        <Link className={`font-semibold text-white uppercase hover:text-white-400 transition-all duration-300 ${styles}`} href={href}>{children}</Link>
        </>
    )
}