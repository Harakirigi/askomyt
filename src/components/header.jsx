import Link from "next/link"
import Button from "./button"
import { NavLink } from "./navLink"
import Image from "next/image"


export const Header = () => {
    return (
        <header className="flex flex-row z-50 pt-[20px] fixed top-0 left-0 justify-center items-center w-dvw h-14 bg-black-dark shadow-[0_20px_20px_20px] shadow-black-dark">
            <div>
                
            </div>
            <div className="flex flex-row gap-x-7">

                <NavLink href="" children="About me"></NavLink>
                <NavLink href="" children="My projects"></NavLink>
                <NavLink href="" children="My contacts"></NavLink>

            </div>
            <div className="flex flex-row ml-auto mr-9 gap-x-6">
                <Button variant={"accentOutline"} children={"My cv"} icon={<Image src="/icons/download-icon.svg" alt="download-icon" width={24} height={24} />}></Button>
                <Button variant={"accent"} children={"Reach out"} icon={<Image src="/icons/lightning-icon.svg" alt="lightning-icon" width={24} height={24} />}></Button>
            </div>
        </header>
    )
}