import Link from "next/link"
import Button from "./button"
import { NavLink } from "./navLink"
import { MapPin } from "lucide-react"
import Image from "next/image"



export const HeroSection = () => {
    return (
        <section className="flex flex-col pt-[300px] justify-center gap-y-6 items-center h-14 bg-black">
            <div className="flex flex-row items-center gap-x-1">
                <Image src="/icons/location-icon.svg" alt="location-icon" width={24} height={24}/>
                <p className="text-sm text-white-500">Astana, Kazakhstan</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1 className="pr-64 text-6xl font-semibold text-white uppercase"><span className="text-accent">Data</span> Scientist</h1>
                <h1 className="pl-64 text-6xl font-semibold text-white uppercase">Software <span className="text-accent">Developer</span></h1>
            </div>
            <p className="font-semibold text-white uppercase">Asylbek Komyt</p>
            <div className="flex flex-row gap-x-6">
                <Button variant={"accentOutline"} children={"My works"} icon={<Image src="/icons/box-icon.svg" alt="box-icon" width={24} height={24} />}></Button>
                <Button variant={"accent"} children={"Contact me"} icon={<Image src="/icons/contact-icon.svg" alt="contact-icon" width={24} height={24} />}></Button>
            </div>
        </section>
    )
}