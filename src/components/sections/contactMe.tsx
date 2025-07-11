import Button from "@components/button"
import { Send } from "lucide-react"
import Image from "next/image"

const ContactMeSection = () => {
    return (
        <>
            <section id="contact-me" className="flex flex-col items-center justify-center h-auto mt-32 bg-black gap-y-6 w-dvh">
                <p className="text-5xl font-medium text-transparent uppercase bg-clip-text bg-gradient-to-t from-gray-300 to-gray-400">Contact Me</p>

                <div className="p-[1px] rounded-lg bg-gradient-to-t from-accent to-accent-10 overflow-hidden">
                    <div className="relative flex flex-col items-center justify-end PC:w-[450px] h-[600px] bg-black rounded-lg p-7 overflow-hidden">
                        <div className="absolute -translate-x-14 -translate-y-14">
                            <Image src="/images/contact-page.png" alt="contact-page-image" width={585} height={796} />
                        </div>
                        <Button
                            variant="accent"
                            styles="group overflow-hidden relative"
                            icon={<Send width={20} className="transition-transform duration-300 ease-out group-hover:translate-x-[45px] group-hover:-translate-y-[45px]" />}
                            onClick={() => window.location.href = '/projects'}
                        >
                            <Send width={20} className="absolute transition-transform duration-300 ease-out -translate-x-24 translate-y-11 group-hover:-translate-x-12 group-hover:translate-y-0" />
                            Contact Me
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactMeSection